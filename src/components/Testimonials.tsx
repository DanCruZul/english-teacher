import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useRef } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  isPrimary?: boolean;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`group h-full rounded-3xl p-8 shadow-lg transition-all duration-500 ${
        testimonial.isPrimary
          ? "bg-primary-600 text-white"
          : "border-2 border-gray-100 bg-white"
      }`}
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
              className={
                testimonial.isPrimary ? "text-white/80" : "text-gray-600"
              }
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
          className={`flex-grow text-base ${
            testimonial.isPrimary ? "text-white/90" : "text-gray-600"
          }`}
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
              <Star
                size={16}
                className={
                  testimonial.isPrimary ? "text-white" : "text-primary-600"
                }
                fill="currentColor"
              />
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

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
          "Excellent, not only as a teacher of various subjects but also as a companion for our children. She is empathetic, punctual, flexible with schedule changes, and caring. Highly recommended.",
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
          "Excelente, no sólo como profe de diversas materias, si no como compañía para nuestros niños, es una chica empatica, puntual, flexible a cambios en horarios, cariñosa. Super recomendada.",
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
      },
    ],
  };

  return (
    <section className="relative overflow-hidden py-12 lg:py-24">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-primary-50/30 to-white"
        style={{ opacity }}
      />
      <div
        ref={containerRef}
        className="relative mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div style={{ y }} className="mb-6 text-center md:mb-16">
          <motion.h2
            className="text-3xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-gray-900"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {t("testimonials.my")}
            </motion.span>{" "}
            <motion.span
              className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {t("testimonials.testimonials")}
            </motion.span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials[language].map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
