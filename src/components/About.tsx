import { motion } from "framer-motion";
import { Award, Earth, Users } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

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

  return (
    <section id="sobre-mi" className="py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold md:text-5xl">
              {t("about.title")}{" "}
              <span className="text-primary-600">{t("about.me")}</span>
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              {t("about.description.1")}
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              {t("about.description.2")}
            </p>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="rounded-xl bg-primary-50 p-3">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold md:text-xl">
                      {t(feature.title)}
                    </h3>
                    <p className="text-base text-gray-600">
                      {t(feature.description)}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
