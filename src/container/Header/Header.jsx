import React from "react";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { images } from "../../constants";

import { AppWrap } from "../../Wrapper";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const [t, i18n] = useTranslation();

  return (
    <div className={`app__header app__header-${i18n.language} app__flex`}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className={`app__header-badge app__header-badge-${i18n.language}`}>
          <div className={`welcome welcome-${i18n.language}`}>
            <span>👋</span>
            <div style={{ marginLeft: 10 }}>
              <p className="p-text">{t("welcome")}</p>
            </div>
          </div>
          <div className={`badge-cmp badge-cmp-${i18n.language} app__flex`}>
            <h1 className={`head-text head-text-${i18n.language}`}>
              <Typewriter
                options={{
                  strings: [t("Iam")],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: false,
                  deleteSpeed: 100,
                  pauseFor: 60000,
                  delay: 170,
                }}
              />
            </h1>
          </div>

          <div className={`tag-cmp tag-cmp-${i18n.language} app__flex`}>
            <p className="p-text">Freelancer</p>
            <p className="p-text ">
              <Typewriter
                options={{
                  strings: [t("Web"), t("MERN"), t("PHP")],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: false,
                  deleteSpeed: 100,
                  pauseFor: 3000,
                  delay: 170,
                }}
              />
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <motion.img src={images.about04_rm} alt="Profile-img" />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={`app__header-circles app__header-circles-${i18n.language}`}
      >
        {[images.node, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="img-work" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
