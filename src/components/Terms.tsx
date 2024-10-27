import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export const Terms = () => {
  const { t } = useLanguage();

  const getItems = (key: string): string[] => {
    const items = t(key);
    return Array.isArray(items) ? items : [];
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="mb-6 flex justify-center">
            <FileText className="h-12 w-12 text-primary-600" />
          </div>
          <h1 className="mb-4 text-4xl font-bold">{t("terms.title")}</h1>
          <p className="text-gray-600">
            {t("terms.lastUpdated")} {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-lg max-w-none"
        >
          {/* Acceptance Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              {t("terms.sections.acceptance.title")}
            </h2>
            <p className="mb-4 text-gray-600">
              {t("terms.sections.acceptance.desc")}
            </p>
          </section>

          {/* Service Description Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              {t("terms.sections.service.title")}
            </h2>
            <p className="mb-4 text-gray-600">
              {t("terms.sections.service.desc")}
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              {getItems("terms.sections.service.items").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Terms of Use Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              {t("terms.sections.conditions.title")}
            </h2>
            <p className="mb-4 text-gray-600">
              {t("terms.sections.conditions.desc")}
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              {getItems("terms.sections.conditions.items").map(
                (item, index) => (
                  <li key={index}>{item}</li>
                ),
              )}
            </ul>
          </section>

          {/* Payments Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              {t("terms.sections.payments.title")}
            </h2>
            <p className="mb-4 text-gray-600">
              {t("terms.sections.payments.desc")}
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              {getItems("terms.sections.payments.items").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Intellectual Property Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              {t("terms.sections.intellectual.title")}
            </h2>
            <p className="mb-4 text-gray-600">
              {t("terms.sections.intellectual.desc")}
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              {getItems("terms.sections.intellectual.items").map(
                (item, index) => (
                  <li key={index}>{item}</li>
                ),
              )}
            </ul>
            <p className="mt-4 text-gray-600">
              {t("terms.sections.intellectual.additional")}
            </p>
          </section>

          {/* Liability Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              {t("terms.sections.liability.title")}
            </h2>
            <p className="mb-4 text-gray-600">
              {t("terms.sections.liability.desc")}
            </p>
            <ul className="list-disc space-y-2 pl-6 text-gray-600">
              {getItems("terms.sections.liability.items").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Modifications Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              {t("terms.sections.modifications.title")}
            </h2>
            <p className="mb-4 text-gray-600">
              {t("terms.sections.modifications.desc")}
            </p>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">
              {t("terms.sections.contact.title")}
            </h2>
            <p className="mb-4 text-gray-600">
              {t("terms.sections.contact.desc")}
            </p>
            <div className="space-y-2 text-gray-600">
              <p>Email: {t("terms.sections.contact.email")}</p>
              <p>{t("terms.sections.contact.phone")}</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
