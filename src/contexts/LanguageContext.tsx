import React, { createContext, useState } from "react";
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

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

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
