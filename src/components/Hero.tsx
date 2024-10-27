import { motion } from "framer-motion";
import { GraduationCap, Globe2 } from "lucide-react";
import laiaDesktop from "../assets/laiaDesktop.png";
import laiaMobile from "../assets/laia.png";
import { scrollToSection } from "../utils/navigation";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="min-h-screen bg-white pt-24 md:pt-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-12 md:flex md:min-h-screen md:items-center md:py-0">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-4">
            {/* Content */}
            <motion.div
              className="order-2 space-y-8 md:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="space-y-2">
                <motion.h1
                  className="font-regular text-3xl leading-tight md:text-4xl lg:text-5xl"
                  variants={itemVariants}
                >
                  {t("hero.greeting")}{" "}
                  <span className="font-extrabold text-primary-600">Laia</span>
                </motion.h1>
                <motion.h2
                  className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl"
                  variants={itemVariants}
                >
                  {t("hero.role")}
                  <div className="mt-2 space-x-3">
                    <span className="outline-text">{t("hero.english")}</span>
                    <span className="outline-text">{t("hero.and")}</span>
                    <span className="outline-text">{t("hero.spanish")}</span>
                  </div>
                </motion.h2>
              </div>

              <motion.p
                className="max-w-lg text-base leading-relaxed text-gray-600"
                variants={itemVariants}
              >
                {t("hero.description")}
              </motion.p>

              <motion.div variants={itemVariants}>
                <motion.button
                  onClick={() => scrollToSection("cta")}
                  className="btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("hero.cta")}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              className="relative order-1 md:order-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <picture>
                <source srcSet={laiaDesktop} media="(min-width: 768px)" />
                <img src={laiaMobile} alt="Teacher" className="rounded-2xl" />
              </picture>

              {/* Floating badges */}
              <motion.div
                className="absolute -bottom-4 -left-4 flex items-center space-x-1 rounded-2xl bg-white px-2 py-1 shadow-lg md:space-x-3 lg:bottom-12 lg:py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <GraduationCap className="text-primary-600" size={24} />
                <div>
                  <p className="text-sm font-bold md:text-lg">+4</p>
                  <p className="text-xs text-gray-600 md:text-sm">
                    {t("hero.experience")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 -top-4 flex items-center space-x-1 rounded-2xl border-t border-gray-100 bg-white px-2 py-1 shadow-lg md:space-x-3 lg:px-4 lg:py-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <Globe2 className="text-primary-600" size={24} />
                <div>
                  <p className="text-sm font-bold md:text-lg">+20</p>
                  <p className="text-xs text-gray-600 md:text-sm">
                    {t("hero.students")}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
