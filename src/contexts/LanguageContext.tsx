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
  // Obtener el idioma del navegador
  const browserLang = navigator.language.toLowerCase().split("-")[0];

  // Verificar si el idioma del navegador está soportado
  if (browserLang === "es" || browserLang === "en") {
    return browserLang as Language;
  }

  // Si el idioma no está soportado, devolver inglés por defecto
  return "en";
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Primero intentamos obtener el idioma guardado
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage === "en" || savedLanguage === "es") {
      return savedLanguage as Language;
    }

    // Si no hay idioma guardado, usamos el del navegador
    return getBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string | string[] => {
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
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
