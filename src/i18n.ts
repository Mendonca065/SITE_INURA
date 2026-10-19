import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importa os dicionários JSON diretamente para evitar delays de carregamento
import ptTranslation from "../public/locales/pt/translation.json";
import enTranslation from "../public/locales/en/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: ptTranslation },
      en: { translation: enTranslation },
    },
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false, // O React já previne XSS por padrão
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;