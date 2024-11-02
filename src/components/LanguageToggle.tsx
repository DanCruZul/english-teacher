import { Globe2 } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { motion } from "framer-motion";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileTap={{ scale: 0.95 }}
      className="nav-link mx-auto flex items-center space-x-2 rounded-full px-3 py-2 text-base font-semibold text-text-800 hover:bg-secondary-500/10 hover:text-orange-400"
      aria-label="Toggle language"
    >
      <Globe2 size={20} />
      <span>{language === "es" ? "EN" : "ES"}</span>
    </motion.button>
  );
};

export default LanguageToggle;
