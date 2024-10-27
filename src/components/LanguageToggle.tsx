import { Globe2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
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
      className="nav-link mx-auto flex items-center space-x-2 font-medium hover:text-primary-600"
      aria-label="Toggle language"
    >
      <Globe2 size={20} className="text-primary-600" />
      <span>{language === "es" ? "EN" : "ES"}</span>
    </motion.button>
  );
};

export default LanguageToggle;
