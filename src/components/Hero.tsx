import { motion } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { scrollToSection } from "../utils/navigation";
import laiaDesktop from "../assets/laiaDesktop.png";
import laiaMobile from "../assets/laia.png";

const Hero = () => {
  const ref = useRef(null);
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative grid min-h-screen overflow-hidden">
      <div className="container relative z-10 mx-auto max-w-7xl px-6 pt-24 max-lg:max-w-[48rem] lg:px-8 lg:py-40">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="order-2 space-y-5 md:space-y-8 lg:order-1">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-4xl tracking-tight text-text-900 md:text-6xl">
                {t("hero.greeting")}{" "}
                <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text font-semibold text-transparent">
                  Laia
                </span>
              </h1>
              <h2 className="text-4xl font-semibold tracking-tight text-text-900 md:text-6xl">
                {t("hero.role")}
                <div className="mt-2 space-x-3">
                  <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text font-semibold text-transparent">
                    {t("hero.english")}
                  </span>
                  <span className="font-normal">{t("hero.and")}</span>
                  <span className="bg-gradient-to-r from-secondary-500 to-orange-400 bg-clip-text font-semibold text-transparent">
                    {t("hero.spanish")}
                  </span>
                </div>
              </h2>
            </motion.div>
            <motion.p
              className="max-w-lg text-lg text-text-800 lg:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t("hero.description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection("cta")}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-secondary-400 to-orange-400 px-5 py-3 text-base font-semibold text-text-900 hover:opacity-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("hero.cta")}
              </motion.button>
            </motion.div>
          </div>
          <motion.div className="relative order-1 lg:order-2">
            <picture>
              <source srcSet={laiaDesktop} media="(min-width: 1024px)" />
              <img
                src={laiaMobile}
                alt="Laia"
                width={600}
                height={600}
                className="size-full rounded-xl object-cover"
              />
            </picture>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute flex w-full justify-center self-end md:pb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 animate-bounce text-text-900"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default Hero;
