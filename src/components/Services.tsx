import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { scrollToSection } from "../utils/navigation";
import { useRef } from "react";

interface ClassCardProps {
  title: string;
  description?: string;
  svgSrc?: string;
  isPrimary?: boolean;
  index?: number;
}

const ClassCard = ({
  title,
  description,
  svgSrc,
  isPrimary = false,
  index = 0,
}: ClassCardProps) => {
  const { t } = useLanguage();
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity, y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`group relative h-full overflow-hidden rounded-3xl p-8 shadow-lg transition-all duration-500 ${
        isPrimary
          ? "bg-primary-600 text-white"
          : "border border-gray-100 bg-white hover:border-primary-200"
      }`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 grid h-full">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`mb-3 ${
            index === 0 ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"
          } font-bold`}
        >
          {t(title)}
        </motion.h3>

        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className={`text-base ${
              isPrimary ? "text-white/80" : "text-gray-600"
            } md:text-lg`}
          >
            {t(description)}
          </motion.p>
        )}

        {isPrimary && (
          <motion.button
            onClick={() => scrollToSection("cta")}
            className="btn-secondary relative mt-4 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="absolute inset-0 bg-primary-50"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">{t("classes.start")}</span>
          </motion.button>
        )}

        {svgSrc && (
          <motion.div
            className="mt-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex size-full justify-end"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={svgSrc}
                alt=""
                className={`mt-6 w-32 self-end transition-transform duration-300 ${
                  isPrimary ? "text-white" : "text-primary-600"
                } group-hover:scale-110`}
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  const classes: ClassCardProps[] = [
    {
      title: "classes.main",
      isPrimary: true,
    },
    {
      title: "classes.live.title",
      description: "classes.live.desc",
      svgSrc: "/assets/online.svg",
    },
    {
      title: "classes.levels.title",
      description: "classes.levels.desc",
      svgSrc: "/assets/levels.svg",
    },
    {
      title: "classes.conversation.title",
      description: "classes.conversation.desc",
      svgSrc: "/assets/oral.svg",
    },
    {
      title: "classes.schedule.title",
      description: "classes.schedule.desc",
      svgSrc: "/assets/booking.svg",
    },
    {
      title: "classes.exam.title",
      description: "classes.exam.desc",
      svgSrc: "/assets/exam.svg",
    },
  ];

  return (
    <section
      id="clases"
      className="relative overflow-hidden bg-white py-12 lg:py-24"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-primary-50/30 via-white to-transparent"
        style={{ opacity }}
      />

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-transparent"
        style={{ scale }}
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
              {t("classes.my")}
            </motion.span>{" "}
            <motion.span
              className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {t("classes.services")}
            </motion.span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((classItem, index) => (
            <ClassCard key={`class-${index}`} {...classItem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
