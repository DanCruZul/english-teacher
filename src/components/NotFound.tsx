import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-9xl font-bold text-secondary-500">404</h1>
          <h2 className="text-2xl font-semibold text-text-900">
            {t("404.title")}
          </h2>
          <p className="text-text-600">{t("404.description")}</p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 rounded-full bg-secondary-400 px-6 py-3 font-semibold text-text-900 transition-all hover:bg-secondary-500"
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
