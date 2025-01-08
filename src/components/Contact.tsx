import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const phoneNumber = "34684132605";
  const email = "laiamartinezosorio0@gmail.com";

  const handleContactClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const features = ["individual", "flexible", "materials", "support"];

  return (
    <section id="cta" className="py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* CTA Column */}
          <div className="space-y-6 max-md:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold leading-tight text-text-900 md:text-5xl"
            >
              {t("cta.title")} <span className="">{t("cta.highlight")}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base leading-relaxed text-text-800"
            >
              {t("cta.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <a
                href={`mailto:${email}`}
                className="flex items-center space-x-3 text-sm text-text-800 transition-colors hover:text-secondary-600 lg:text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={20} className="size-4 lg:size-6" />
                <span className="text-base lg:text-xl">{email}</span>
              </a>

              <motion.button
                onClick={handleContactClick}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-secondary-400 to-orange-500 px-5 py-3 text-base font-semibold text-text-900 hover:opacity-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("cta.button")}
              </motion.button>
            </motion.div>
          </div>

          {/* Pricing Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid w-full justify-center px-4 sm:px-6 lg:px-8"
          >
            <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-lg ring-1 ring-text-900/10 sm:p-8">
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <p className="text-4xl font-bold text-text-900 sm:text-5xl">
                  €14
                </p>
                <p className="text-xs text-text-600 sm:text-sm">
                  {t("pricing.perHour")}
                </p>
              </div>

              <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                {features.map((item) => (
                  <li key={item} className="flex items-center gap-2 sm:gap-3">
                    <Check className="h-4 w-4 text-secondary-500 sm:h-5 sm:w-5" />
                    <span className="text-xs text-text-600 sm:text-sm">
                      {t(`pricing.features.${item}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
