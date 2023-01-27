import React from "react";
import { useTranslation } from "react-i18next";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, className) =>
  function HOC() {
    const [t, i18n] = useTranslation();
    return (
      <div id={`${t(idName)}`} className={`app__container ${className}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />
        </div>

        <NavigationDots active={t(idName)} />
      </div>
    );
  };

export default AppWrap;
