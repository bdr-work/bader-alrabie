import React from "react";
import "./Services.scss";
import { motion } from "framer-motion";
import { BsPatchCheck, BsPatchCheckFill } from "react-icons/bs";
import { AppWrap, WrappMotion } from "../../Wrapper";

import SocialMediaAbout from "../../components/SocialMediaAbout";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
const Services = () => {
  const [t, i18n] = useTranslation();

  return (
    <>
      <h2 className="head-text">
        {t("Serv")}
        <span>{t("ices")}</span>
      </h2>

      <div
        className={`app__service-container app__service-container-${i18n.language}`}
      >
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ delay: 0.3 }}
          className="app__services-box"
        >
          {[
            t("Create"),
            t("E-comm"),
            t("Animation"),
            t("Coding"),
            t("Responsive"),
            t("Deploy"),
            t("Maintaining"),
            t("Support"),
            t("NodeJs"),
            t("future"),
          ].map((service) => (
            <div className="app__service-title app__flex">
              <BsPatchCheck />
              <p>{service}</p>
            </div>
          ))}
          <SocialMediaAbout />
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  WrappMotion(Services, "app__services"),
  "services",
  "app__primarybg"
);
