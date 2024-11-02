import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Earth, Users, LucideIcon } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useRef, useState } from "react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const About = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const features: Feature[] = [
    {
      icon: Earth,
      title: "about.international.title",
      description: "about.international.desc",
      color: "primary",
    },
    {
      icon: Users,
      title: "about.dynamic.title",
      description: "about.dynamic.desc",
      color: "secondary",
    },
    {
      icon: Award,
      title: "about.results.title",
      description: "about.results.desc",
      color: "background",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getBackgroundColor = () => {
      switch (feature.color) {
        case "primary":
          return "bg-primary-50/50";
        case "secondary":
          return "bg-secondary-50/50";
        case "background":
          return "bg-accent-50/50";
        default:
          return "bg-primary-50";
      }
    };

    const getBorderColor = () => {
      switch (feature.color) {
        case "primary":
          return "border-primary-300";
        case "secondary":
          return "border-secondary-300";
        case "background":
          return "border-accent-300";
        default:
          return "border-primary-300";
      }
    };

    const getIconColor = () => {
      switch (feature.color) {
        case "primary":
          return "text-primary-500";
        case "secondary":
          return "text-secondary-500";
        case "background":
          return "text-accent-600";
        default:
          return "text-primary-500";
      }
    };

    const getTextColor = () => {
      switch (feature.color) {
        case "primary":
          return "text-primary-900";
        case "secondary":
          return "text-secondary-900";
        case "background":
          return "text-background-900";
        default:
          return "text-primary-900";
      }
    };

    return (
      <motion.div
        style={{ scale, opacity }}
        className={`rounded-3xl border ${getBorderColor()} ${getBackgroundColor()} p-6 shadow-lg`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            stiffness: 200,
            delay: index * 0.2,
            ease: "easeOut",
          }}
          className="flex items-start space-x-4"
        >
          <motion.div
            className={`rounded-xl ${getBackgroundColor()} p-3`}
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 10 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <feature.icon className={`h-6 w-6 ${getIconColor()}`} />
          </motion.div>
          <div>
            <h3
              className={`mb-1 text-lg font-bold ${getTextColor()} md:text-xl`}
            >
              {t(feature.title)}
            </h3>
            <motion.p
              className={`text-base ${getTextColor()}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2 + 0.2,
                ease: "easeOut",
              }}
            >
              {t(feature.description)}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="about" className="py-16 lg:py-24" ref={containerRef}>
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        style={{ y, opacity }}
      >
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h2
              className="text-3xl font-bold text-text-900 md:text-5xl"
              variants={itemVariants}
            >
              {t("about.title")}{" "}
              <motion.span
                className="text-text-900"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t("about.me")}
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-base leading-relaxed text-text-700"
              variants={itemVariants}
            >
              {t("about.description.1")}
            </motion.p>
            <motion.p
              className="text-base leading-relaxed text-text-700"
              variants={itemVariants}
            >
              {t("about.description.2")}
            </motion.p>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
