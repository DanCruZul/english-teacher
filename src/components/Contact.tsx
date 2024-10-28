import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const phoneNumber = "34684132605"; // Número sin espacios ni símbolos
  const email = "laiamartinezosorio0@gmail.com";

  const handleContactClick = () => {
    // Crear el enlace de WhatsApp con el número
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="cta" className="bg-white py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold leading-tight md:text-5xl"
            >
              {t("cta.title")}{" "}
              <span className="text-primary-600">{t("cta.highlight")}</span>
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
                className="flex items-center space-x-3 text-sm transition-colors hover:text-primary-600 lg:text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={20} className="size-4 lg:size-6" />
                <span className="lg:text-xl">{email}</span>
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
            <p className="text-base leading-relaxed text-gray-600">
              {t("cta.description")}
            </p>
            <motion.button
              onClick={handleContactClick}
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
