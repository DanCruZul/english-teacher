import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { scrollToSection } from "../utils/navigation";

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-text-900 sm:text-4xl">
              {t("pricing.title")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-600">
              {t("pricing.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 flex flex-col items-center gap-8"
          >
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-text-900/10">
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-2xl font-bold text-text-900">
                  {t("pricing.perClass")}
                </h3>
                <p className="text-5xl font-bold text-text-900">€14</p>
                <p className="text-sm text-text-600">{t("pricing.perHour")}</p>
              </div>

              <ul className="mt-8 space-y-4">
                {["individual", "flexible", "materials", "support"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-secondary-500" />
                      <span className="text-sm text-text-600">
                        {t(`pricing.features.${item}`)}
                      </span>
                    </li>
                  ),
                )}
              </ul>

              <motion.button
                onClick={() => scrollToSection("cta")}
                className="mt-8 w-full rounded-full bg-gradient-to-br from-secondary-400 to-orange-500 px-6 py-3 text-center text-sm font-semibold text-text-900 shadow-sm hover:opacity-90"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("pricing.startNow")}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
