import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "../utils/navigation";
import { useLanguage } from "../hooks/useLanguage";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 py-4 shadow-sm backdrop-blur-md"
          : "bg-white py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="hover-lift flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <GraduationCap className="text-primary-600" size={24} />
            <span className="text-lg font-bold">Laia Martinez</span>
          </motion.a>

          {/* Desktop menu */}
          <div className="hidden items-center space-x-12 md:flex">
            <motion.div
              className="flex items-center space-x-12"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => handleNavClick("clases")}
                className="nav-link font-medium hover:text-primary-600"
              >
                {t("nav.classes")}
              </button>
              <button
                onClick={() => handleNavClick("sobre-mi")}
                className="nav-link font-medium hover:text-primary-600"
              >
                {t("nav.about")}
              </button>
              <LanguageToggle />
              <motion.button
                onClick={() => scrollToSection("cta")}
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("nav.contact")}
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full p-2 transition-colors hover:bg-gray-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col space-y-4 py-6">
                <LanguageToggle />
                <button
                  onClick={() => handleNavClick("clases")}
                  className="font-medium transition-colors hover:text-primary-600"
                >
                  {t("nav.classes")}
                </button>
                <button
                  onClick={() => handleNavClick("sobre-mi")}
                  className="font-medium transition-colors hover:text-primary-600"
                >
                  {t("nav.about")}
                </button>
                <button
                  onClick={() => handleNavClick("cta")}
                  className="btn-primary"
                >
                  {t("nav.contact")}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
