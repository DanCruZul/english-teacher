import React, { createContext, useState, useEffect } from "react";
import { TranslationValue } from "./translations";
import { translations } from "./translations";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string | string[];
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

interface LanguageProviderProps {
  children: React.ReactNode;
}

const getBrowserLanguage = (): Language => {
  try {
    const browserLang = navigator.language.toLowerCase();
    const preferredLang = browserLang.startsWith("es") ? "es" : "en";
    return preferredLang;
  } catch (error) {
    console.warn("Error detecting browser language:", error);
    return "en";
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage === "en" || savedLanguage === "es") {
      return savedLanguage;
    }
    return getBrowserLanguage();
  });

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string | string[] => {
    try {
      const keys = key.split(".");
      let value: TranslationValue = translations[language];

      for (const k of keys) {
        if (
          value &&
          typeof value === "object" &&
          !Array.isArray(value) &&
          k in value
        ) {
          value = value[k];
        } else {
          console.warn(`Translation not found for key: ${key}`);
          return key;
        }
      }

      return value as string | string[];
    } catch (error) {
      console.error("Translation error:", error);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
