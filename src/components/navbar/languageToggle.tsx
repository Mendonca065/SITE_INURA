import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language?.substring(0, 2) || "pt";

  const toggleLanguage = () => {
    const nextLang = currentLang === "pt" ? "en" : "pt";
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono font-medium text-white/80 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
      title="Alternar idioma / Switch language"
    >
      <Globe size={14} className="text-orange-500" />
      <span className="uppercase">{currentLang === "pt" ? "PT" : "EN"}</span>
    </button>
  );
};

export default LanguageToggle;