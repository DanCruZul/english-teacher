import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const phoneNumber = "34684132605";
  const email = "laiamartinezosorio0@gmail.com";

  const handleContactClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="cta" className="py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-6 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4 lg:space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold leading-tight text-text-900 md:text-5xl"
            >
              {t("cta.title")} <span className="">{t("cta.highlight")}</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
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
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-base leading-relaxed text-text-800">
              {t("cta.description")}
            </p>
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
      </div>
    </section>
  );
};

export default Contact;
