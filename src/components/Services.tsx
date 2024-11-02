import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { scrollToSection } from "../utils/navigation";
import { useRef, useState } from "react";

interface ClassCardProps {
  title: string;
  description?: string;
  svgSrc?: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  index?: number;
}

const ClassCard = ({
  title,
  description,
  svgSrc,
  isPrimary = false,
  isSecondary = false,
  index = 0,
}: ClassCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  const getCardStyle = () => {
    if (isPrimary) {
      return "bg-gradient-to-br from-secondary-400 to-orange-300 text-white";
    } else if (isSecondary) {
      return "border border-primary-300 bg-primary-50/50 text-primary-900";
    } else {
      return "border border-accent-300 bg-accent-50/50 text-accent-900";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity, y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`group relative h-full overflow-hidden rounded-3xl p-8 shadow-md shadow-background-950/5 transition-all duration-500 ${getCardStyle()}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative z-10 grid h-full">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`mb-3 ${
            index === 0 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
          } font-bold ${isPrimary ? "text-text-900" : ""}`}
        >
          {t(title)}
        </motion.h3>

        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className={`text-base md:text-lg ${
              isPrimary ? "text-white/90" : ""
            }`}
          >
            {t(description)}
          </motion.p>
        )}

        {index === 0 && (
          <motion.button
            onClick={() => scrollToSection("cta")}
            className="group relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-full bg-text-900 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-opacity-90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-white/10"
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
              animate={{
                scale: isHovered ? 1.05 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.4,
              }}
            >
              <img
                src={svgSrc}
                alt=""
                className="mt-6 w-32 self-end transition-all duration-300"
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
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const classes: ClassCardProps[] = [
    {
      title: "classes.main",
      isPrimary: true,
    },
    {
      title: "classes.live.title",
      description: "classes.live.desc",
      svgSrc: "/assets/online.svg",
      isSecondary: true,
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
      isSecondary: true,
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
      isSecondary: true,
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden py-16 lg:py-24">
      <motion.div className="absolute inset-0" style={{ opacity }} />

      <div
        ref={containerRef}
        className="relative mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div style={{ y }} className="mb-12 text-center md:mb-20">
          <motion.h2
            className="text-3xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span className="text-text-900">
              {t("classes.my")}
            </motion.span>{" "}
            <motion.span className="text-text-900">
              {t("classes.services")}
            </motion.span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((classItem, index) => (
            <ClassCard key={`class-${index}`} {...classItem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
