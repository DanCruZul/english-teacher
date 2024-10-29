import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Earth, Users } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useRef } from "react";

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

  const features = [
    {
      icon: Earth,
      title: "about.international.title",
      description: "about.international.desc",
    },
    {
      icon: Users,
      title: "about.dynamic.title",
      description: "about.dynamic.desc",
    },
    {
      icon: Award,
      title: "about.results.title",
      description: "about.results.desc",
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

  return (
    <section id="sobre-mi" className="py-12 lg:py-24" ref={containerRef}>
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
              className="text-3xl font-bold md:text-5xl"
              variants={itemVariants}
            >
              {t("about.title")}{" "}
              <motion.span
                className="text-primary-600"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t("about.me")}
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-base leading-relaxed text-gray-600"
              variants={itemVariants}
            >
              {t("about.description.1")}
            </motion.p>
            <motion.p
              className="text-base leading-relaxed text-gray-600"
              variants={itemVariants}
            >
              {t("about.description.2")}
            </motion.p>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                style={{ scale, opacity }}
                transition={{
                  type: "spring",
                  duration: 0.5,
                }}
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg"
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
                    className="rounded-xl bg-primary-50 p-3"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      },
                    }}
                  >
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </motion.div>
                  <div>
                    <motion.h3
                      className="mb-1 text-lg font-bold md:text-xl"
                      whileHover={{
                        color: "#3a3fff",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {t(feature.title)}
                    </motion.h3>
                    <motion.p
                      className="text-base text-gray-600"
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
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
