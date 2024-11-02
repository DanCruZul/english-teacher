import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

type KeenSliderInstance = {
  destroy(): void;
  prev(): void;
  next(): void;
  track: {
    details: {
      rel: number;
    };
  };
};

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const getCardStyle = () => {
    if (testimonial.isPrimary) {
      return "border border-accent-300 bg-accent-50/50 text-accent-900";
    } else if (testimonial.isSecondary) {
      return "border border-secondary-300 bg-secondary-50/50 text-secondary-900";
    } else {
      return "border border-primary-300 bg-primary-50/50 text-primary-900";
    }
  };

  const getStarColor = () => {
    if (testimonial.isPrimary) {
      return "text-accent-500";
    } else if (testimonial.isSecondary) {
      return "text-secondary-500";
    } else {
      return "text-primary-600";
    }
  };

  return (
    <motion.div
      style={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`group h-full rounded-3xl p-8 shadow-md shadow-background-950/5 transition-all duration-500 ${getCardStyle()}`}
    >
      <div className="flex h-full flex-col space-y-6">
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <motion.div
            className="h-12 w-12 overflow-hidden rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>
          <div>
            <motion.h3
              className="font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.1 }}
            >
              {testimonial.name}
            </motion.h3>
            <motion.p
              className="text-muted-light dark:text-muted-dark"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {testimonial.role}
            </motion.p>
          </div>
        </motion.div>

        <motion.p
          className="flex-grow text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          "{testimonial.content}"
        </motion.p>

        <motion.div
          className="flex space-x-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ rotate: -180, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 + i * 0.1 }}
            >
              <Star size={16} className={getStarColor()} fill="currentColor" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const { t, language } = useLanguage();
  const containerRef = useRef(null);
  const [sliderRef, setSliderRef] = useState<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [sliderInstance, setSliderInstance] =
    useState<KeenSliderInstance | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  const testimonials: { [key: string]: Testimonial[] } = {
    en: [
      {
        id: 1,
        name: "Carlos Fernández",
        role: "English Student",
        content:
          "Laia taught English to my daughter for several months, and we were very happy with her work and dedication. I highly recommend her.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      },
      {
        id: 2,
        name: "Diana",
        role: "Spanish Student",
        content:
          "Excellent, not only as a teacher of various subjects but also as a companion for our children. She is empathetic, punctual, flexible with schedule changes, and caring.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        isPrimary: true,
      },
      {
        id: 3,
        name: "Patri",
        role: "Spanish Student",
        content:
          "Laia is a committed teacher who teaches with enthusiasm. My daughter has learned a lot after several classes with her.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
        isSecondary: true,
      },
      {
        id: 4,
        name: "John Smith",
        role: "Business English Student",
        content:
          "The personalized approach and flexible schedule helped me improve my business English significantly. Highly professional and effective teaching methods.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      },
      {
        id: 5,
        name: "Maria González",
        role: "Spanish Student",
        content:
          "Learning Spanish with Laia has been a wonderful experience. Her patience and teaching style make complex grammar concepts easy to understand.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
        isPrimary: true,
      },
    ],
    es: [
      {
        id: 1,
        name: "Carlos Fernández",
        role: "Estudiante de Inglés",
        content:
          "Laia estuvo dando clases de inglés a mi hija durante varios meses y quedamos muy contentos con su trabajo e implicación. La recomiendo.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      },
      {
        id: 2,
        name: "Diana",
        role: "Estudiante de Español",
        content:
          "Excelente, no sólo como profe de diversas materias, si no como compañía para nuestros niños, es una chica empática, puntual, flexible a cambios en horarios, cariñosa.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        isPrimary: true,
      },
      {
        id: 3,
        name: "Patri",
        role: "Estudiante de Español",
        content:
          "Laia es una profesora comprometida que enseña con entusiasmo. Mi hija ha aprendido mucho tras varias clases con ella.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
        isSecondary: true,
      },
      {
        id: 4,
        name: "John Smith",
        role: "Estudiante de Inglés de Negocios",
        content:
          "El enfoque personalizado y el horario flexible me ayudaron a mejorar significativamente mi inglés de negocios. Métodos de enseñanza muy profesionales y efectivos.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      },
      {
        id: 5,
        name: "María González",
        role: "Estudiante de Español",
        content:
          "Aprender español con Laia ha sido una experiencia maravillosa. Su paciencia y estilo de enseñanza hacen que los conceptos gramaticales complejos sean fáciles de entender.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
        isPrimary: true,
      },
    ],
  };

  useEffect(() => {
    if (sliderRef) {
      const slider = new KeenSlider(sliderRef, {
        loop: true,
        mode: "free-snap",
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 2,
              spacing: 32,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 2.5,
              spacing: 32,
            },
          },
        },
        created() {
          setLoaded(true);
        },
      }) as KeenSliderInstance;

      setSliderInstance(slider);

      return () => {
        if (slider) slider.destroy();
      };
    }
  }, [sliderRef]);

  const testimonialsList = testimonials[language];

  return (
    <section className="relative overflow-hidden py-12 lg:py-24">
      <div ref={containerRef} className="relative mx-auto max-w-7xl lg:px-8">
        <motion.div style={{ y }} className="mb-6 text-center md:mb-16">
          <motion.h2
            className="text-3xl font-bold text-text-900 md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t("testimonials.what")}{" "}
            <span className="text-text-900">{t("testimonials.students")} </span>
            {t("testimonials.saying")}
          </motion.h2>
        </motion.div>

        <div className="relative">
          <div ref={setSliderRef} className="keen-slider">
            {testimonialsList.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="keen-slider__slide"
              >
                <TestimonialCard testimonial={testimonial} index={index} />
              </div>
            ))}
          </div>

          {loaded && sliderInstance && (
            <div className="absolute -bottom-2 right-2 flex space-x-2 lg:right-0">
              <motion.button
                onClick={() => sliderInstance.prev()}
                className="rounded-full bg-text-900 p-2 text-white hover:bg-text-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                onClick={() => sliderInstance.next()}
                className="rounded-full bg-text-900 p-2 text-white hover:bg-text-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
