import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap } from "lucide-react";
import { scrollToSection } from "../utils/navigation";
import { useLanguage } from "../hooks/useLanguage";
import LanguageToggle from "./LanguageToggle";
import { useLocation, useNavigate } from "react-router-dom";

interface NavItem {
  name: string;
  href: string;
}

interface ContactButton extends NavItem {
  isButton: boolean;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  const navItems: NavItem[] = [
    { name: String(t("nav.classes")), href: "services" },
    { name: String(t("nav.about")), href: "about" },
  ];

  const contactButton: ContactButton = {
    name: String(t("nav.contact")),
    href: "cta",
    isButton: true,
  };

  const getNavbarBackground = () => {
    if (scrolled) {
      return "bg-[#e8f9cc] lg:bg-background-100/20 lg:shadow-md lg:backdrop-blur-md";
    }
    if (isOpen) {
      return "bg-[#e8f9cc] lg:bg-background-100/50 lg:shadow-md lg:backdrop-blur-md";
    }
    return "bg-transparent";
  };

  const getTextColor = () => {
    return scrolled ? "text-text-900" : "text-text-50";
  };

  return (
    <motion.nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${getNavbarBackground()} ${
        scrolled ? "py-4" : "py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/"
              onClick={handleLogoClick}
              className="flex cursor-pointer items-center space-x-2"
            >
              <GraduationCap
                className={`h-8 w-8 ${scrolled ? "text-secondary-500" : "text-secondary-500"}`}
              />
              <span className="text-xl font-semibold text-text-900">
                Laia Martinez
              </span>
            </a>
          </motion.div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {location.pathname === "/" &&
              navItems.map((item) => (
                <motion.a
                  key={`nav-${item.href}`}
                  href={`#${item.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`rounded-full px-3 py-2 text-sm font-semibold text-text-800 transition-colors hover:bg-secondary-400/10 hover:text-orange-400 ${getTextColor()}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            <LanguageToggle />
            {location.pathname === "/" && (
              <motion.a
                href={`#${contactButton.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(contactButton.href);
                }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-secondary-400 to-orange-400 p-0.5 text-base font-semibold text-text-900 hover:opacity-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative rounded-full px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
                  {contactButton.name}
                </span>
              </motion.a>
            )}
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center rounded-md p-2 ${getTextColor()} text-text-900 hover:bg-secondary-400/10 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 right-0 top-full text-center md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`space-y-1 bg-[#e8f9cc] px-2 py-4 sm:px-3`}>
              <LanguageToggle />
              {location.pathname === "/" &&
                [...navItems, contactButton].map((item) => (
                  <motion.button
                    key={`mobile-${item.href}`}
                    onClick={() => handleNavClick(item.href)}
                    className={
                      "isButton" in item && item.isButton
                        ? "block w-full rounded-full bg-gradient-to-r from-secondary-400 to-orange-400 px-3 py-2 text-base font-semibold text-text-900"
                        : `mx-auto block w-full rounded-full px-3 py-2 text-sm font-medium text-text-900 hover:bg-primary-500/10 hover:text-primary-500`
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
