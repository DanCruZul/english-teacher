import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isVideo?: boolean;
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
        id: 0,
        name: "",
        role: "",
        content: "",
        rating: 0,
        image: "",
        isVideo: true,
      },
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
          "Excellent teacher, not only for various subjects but also as a companion for our children. She is empathetic, punctual, flexible with schedules, and caring. Highly recommended.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
        isPrimary: true,
      },
      {
        id: 3,
        name: "Patricia",
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
        name: "Paulina Saldaña",
        role: "Spanish Student",
        content:
          "Very good teacher, with a lot of patience, my daughter passed Language thanks to Laia",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      },
      {
        id: 5,
        name: "Aroa",
        role: "English Student",
        content:
          "She explained things very well to me, I understood them and when correcting homework together everything became clearer to me",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        isPrimary: true,
      },
      {
        id: 6,
        name: "Daniel",
        role: "Spanish Student",
        content:
          "She is a great professional who explains everything very well. She helped me with math and language, and thanks to her, I passed both subjects. She's excellent and answers all your questions.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
        isSecondary: true,
      },
    ],
    es: [
      {
        id: 0,
        name: "",
        role: "",
        content: "",
        rating: 0,
        image: "",
        isVideo: true,
      },
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
          "Excelente profesora, no solo en diversas materias, sino también como compañía para nuestros niños. Es empática, puntual, flexible con los horarios y cariñosa. Muy recomendable.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
        isPrimary: true,
      },
      {
        id: 3,
        name: "Patricia",
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
        name: "Paulina Saldaña",
        role: "Estudiante de Español",
        content:
          "Muy buena profesora, con mucha paciencia, mi hija aprobó Lengua gracias a Laia",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      },
      {
        id: 5,
        name: "Aroa",
        role: "Estudiante de Inglés",
        content:
          "Me explicaba muy bien las cosas, las entendía y al corregir los deberes juntas todo me quedaba más claro",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        isPrimary: true,
      },
      {
        id: 6,
        name: "Daniel",
        role: "Estudiante de Español",
        content:
          "Es una gran profesional que explica todo muy bien. Me ayudó con matemáticas y lengua, y gracias a ella aprobé ambas asignaturas. Es excelente y resuelve todas tus dudas.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
        isSecondary: true,
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
