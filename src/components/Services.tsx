// src/components/Services.tsx
import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { scrollToSection } from "../utils/navigation";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`h-full rounded-3xl p-8 shadow-lg transition-all duration-300 ${
        isPrimary
          ? "bg-primary-600 text-white"
          : "border border-gray-100 bg-white hover:border-gray-200"
      }`}
    >
      <div className="grid h-full">
        <h3
          className={`mb-3 ${index === 0 ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"} font-bold`}
        >
          {t(title)}
        </h3>
        {description && (
          <p
            className={`text-base ${isPrimary ? "text-white/80" : "text-gray-600"} md:text-lg`}
          >
            {t(description)}
          </p>
        )}
        {isPrimary && (
          <motion.button
            onClick={() => scrollToSection("cta")}
            className="btn-secondary mt-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("classes.start")}
          </motion.button>
        )}
        {svgSrc && (
          <div className="mt-auto">
            <div className="flex size-full justify-end">
              <img
                src={svgSrc}
                alt=""
                className={`mt-6 w-32 self-end ${isPrimary ? "text-white" : "text-primary-600"}`}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useLanguage();

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
    <section id="clases" className="bg-white py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center md:mb-16"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            <span className="text-gray-900">{t("classes.my")}</span>{" "}
            <span className="text-primary-600">{t("classes.services")}</span>
          </h2>
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
