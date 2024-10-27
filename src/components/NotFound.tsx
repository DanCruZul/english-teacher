import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900">
            {t("404.title")}
          </h2>
          <p className="text-gray-600">{t("404.description")}</p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 rounded-full bg-primary-600 px-6 py-3 text-white transition-all hover:bg-primary-700"
          >
            <Home size={20} />
            <span>{t("404.home")}</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
