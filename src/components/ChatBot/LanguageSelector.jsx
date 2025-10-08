import React from "react";
import { Language } from "../../types/chat";

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  const languages = [
    { code: Language.ENGLISH, name: "English" },
    { code: Language.HINDI, name: "हिन्दी" },
    { code: Language.MARATHI, name: "मराठी" },
  ];

  return (
    <div className="relative">
      <select
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="appearance-none bg-background border border-border text-foreground font-semibold py-2 px-4 pr-8 rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-foreground">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSelector;
