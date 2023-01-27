import React from "react";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { SlBadge } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";
import { BsUiChecks, BsCodeSlash } from "react-icons/bs";
import SocialMediaAbout from "../../components/SocialMediaAbout";
import "./About.scss";

import { AppWrap, WrappMotion } from "../../Wrapper";
import { images } from "../../constants";

//   {
//     title: "Web Devlopment",
//     description: "I am Developer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Web Devlopment",
//     description: "I am Developer",
//     imgUrl: images.about03,
//   },
//   {
//     title: "Web Devlopment",
//     description: "I am Developer",
//     imgUrl: images.about04,
//   },
// ];

const About = () => {
  const [t, i18n] = useTranslation();
  const abouts = [
    {
      icon: <SlBadge />,
      title: t("Experience"),
      description: t("Years"),
    },
    {
      icon: <FiUsers />,
      title: t("Clients"),
      description: "16+",
    },
    {
      icon: <BsUiChecks />,
      title: t("Projects"),
      description: t("Completed"),
    },
  ];
  return (
    <>
      <h2 className="head-text">
        {t("Who")} <span>{t("Am")}</span>
      </h2>

      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ delay: 0.3 }}
        className="app__profiles"
      >
        <div className="app__about-imgBox">
          <img src={images.about04_rm} alt="aboutFace" />
        </div>
        <div className="app__about-content">
          <motion.div className="app__about-cards">
            {abouts.map((about, index) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="app__about-card"
                key={index}
              >
                {about.icon}
                <h2 className="bold-text" style={{ marginTop: 20 }}>
                  {about.title}
                </h2>
                <h2 className="p-text p-desc" style={{ marginTop: 10 }}>
                  {about.description}
                </h2>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className={`app__about-text app__about-text-${i18n.language}`}
          >
            <p>
              {t("am")} <span>{t("name")} </span>
              {t("content")}
              <span> {t("web")}</span>
              {t("content2")}
              <span> {t("modren")}</span>
              {t("helpYou")}
              <span>{t("responsive")}</span> {t("and")}{" "}
              <span>{t("secure")}</span> {t("webapplication")}
              <BsCodeSlash className="coding-icon" />.
            </p>
          </motion.div>
        </div>

        <SocialMediaAbout />
      </motion.div>
    </>
  );
};

export default AppWrap(
  WrappMotion(About, "app__about"),
  "about",
  "app__whitebg"
);
