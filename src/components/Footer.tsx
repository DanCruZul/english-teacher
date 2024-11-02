import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToSection } from "../utils/navigation";
import { useLanguage } from "../hooks/useLanguage";

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
    <footer className="bg-text-900 text-text-50">
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
              <GraduationCap className="h-6 w-6 text-secondary-400" size={24} />
              <span className="text-text-50">Laia Martinez</span>
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
              <h3 className="text-lg font-medium text-text-50">
                {t("footer.links")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/#clases"
                    onClick={(e) => handleNavigation(e, "clases")}
                    className="text-text-300 transition-colors hover:text-secondary-400"
                  >
                    {t("nav.classes")}
                  </a>
                </li>
                <li>
                  <a
                    href="/#sobre-mi"
                    onClick={(e) => handleNavigation(e, "sobre-mi")}
                    className="text-text-300 transition-colors hover:text-secondary-400"
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
              <h3 className="text-lg font-medium text-text-50">
                {t("footer.legal")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/PrivacyPolicy"
                    className="text-text-300 transition-colors hover:text-secondary-400"
                  >
                    {t("footer.privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Terms"
                    className="text-text-300 transition-colors hover:text-secondary-400"
                  >
                    {t("footer.terms")}
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-text-800 py-6">
          <p className="text-center text-sm text-text-400">
            © {new Date().getFullYear()} Laia Martinez. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
