import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToSection } from "../utils/navigation";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2">
          {/* Logo and Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2"
            >
              <GraduationCap className="h-6 w-6 text-primary-600" size={24} />
              <span className="text-lg font-medium">Laia Martinez</span>
            </motion.div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-medium">{t("footer.links")}</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/#clases"
                    onClick={(e) => handleNavigation(e, "clases")}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {t("nav.classes")}
                  </a>
                </li>
                <li>
                  <a
                    href="/#sobre-mi"
                    onClick={(e) => handleNavigation(e, "sobre-mi")}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {t("nav.about")}
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-medium">{t("footer.legal")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/PrivacyPolicy"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {t("footer.privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Terms"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {t("footer.terms")}
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Laia Martinez. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
