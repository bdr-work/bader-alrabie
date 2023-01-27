import React, { createContext, useState } from "react";

import "./App.scss";

import {
  Header,
  About,
  Skills,
  Services,
  Contact,
  Footer,
  Work,
} from "./container";
import { Navbar } from "./components";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export const ThemeContext = createContext(null);

const App = () => {
  const [t, i18n] = useTranslation();

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app app-${i18n.language}`} id={theme}>
        {theme === "light" ? (
          <MdOutlineDarkMode onClick={toggleTheme} className="dark-icon mode" />
        ) : (
          <MdOutlineLightMode
            onClick={toggleTheme}
            className="light-icon mode"
          />
        )}
        {i18n.language === "en" && (
          <div
            onClick={() => {
              i18n.changeLanguage("ar");
            }}
            className="language"
          >
            <span id="language-icon">Ar</span>
          </div>
        )}
        {i18n.language === "ar" && (
          <div
            onClick={() => {
              i18n.changeLanguage("en");
            }}
            className="language"
          >
            <span id="language-icon">En</span>
          </div>
        )}
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
