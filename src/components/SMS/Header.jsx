import React from "react";
import LanguageSelector from "../ChatBot/LanguageSelector";

const Header = ({ selectedLanguage, onLanguageChange }) => (
  <div className="flex items-center p-3 border-b border-gray-200 bg-white sm:rounded-t-xl sticky top-0 z-10">
    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
      <img
        src="/image/logo.png"
        alt="Health Care Bot"
        className="w-24 sm:w-32 md:w-40"
      />
    </div>
    <div className="flex-grow">
      <h1 className="text-md font-bold text-gray-800">SMS Chat</h1>
      <p className="text-xs text-green-500">Online</p>
    </div>
    <LanguageSelector
      selectedLanguage={selectedLanguage}
      onLanguageChange={onLanguageChange}
    />
  </div>
);

export default Header;
