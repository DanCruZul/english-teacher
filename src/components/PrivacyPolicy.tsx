import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="mb-6 flex justify-center">
            <Shield className="h-12 w-12 text-primary-600" />
          </div>
          <h1 className="mb-4 text-4xl font-bold">{t("privacy.title")}</h1>
          <p className="text-gray-600">
            {t("privacy.lastUpdated")} {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-lg max-w-none"
        >
          {/* Information Collection Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              {t("privacy.sections.info.title")}
            </h2>
            <p className="mb-4 text-gray-600">
              {t("privacy.sections.info.desc")}
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              {(t("privacy.sections.info.items") as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                ),
              )}
            </ul>
          </section>

          {/* Use of Information Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              {t("privacy.sections.use.title")}
            </h2>
            <p className="mb-4 text-gray-600">
              {t("privacy.sections.use.desc")}
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              {(t("privacy.sections.use.items") as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                ),
              )}
            </ul>
          </section>

          {/* Data Protection Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              {t("privacy.sections.protection.title")}
            </h2>
            <p className="mb-4 text-gray-600">
              {t("privacy.sections.protection.desc")}
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              {(t("privacy.sections.protection.items") as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                ),
              )}
            </ul>
          </section>

          {/* Your Rights Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              {t("privacy.sections.rights.title")}
            </h2>
            <p className="mb-4 text-gray-600">
              {t("privacy.sections.rights.desc")}
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              {(t("privacy.sections.rights.items") as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                ),
              )}
            </ul>
          </section>

          {/* Cookies Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              {t("privacy.sections.cookies.title")}
            </h2>
            <p className="mb-4 text-gray-600">
              {t("privacy.sections.cookies.desc")}
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              {(t("privacy.sections.cookies.items") as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                ),
              )}
            </ul>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              {t("privacy.sections.contact.title")}
            </h2>
            <p className="mb-4 text-gray-600">
              {t("privacy.sections.contact.desc")}
            </p>
            <div className="space-y-2 text-gray-600">
              <p>Email: {t("privacy.sections.contact.email")}</p>
              <p>{t("privacy.sections.contact.phone")}</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
