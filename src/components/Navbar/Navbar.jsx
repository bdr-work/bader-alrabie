import React from "react";
import { useTranslation } from "react-i18next";

import "./Navbar.scss";

import { TfiMenuAlt } from "react-icons/tfi";

import { motion } from "framer-motion";

import { images } from "../../constants";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);
  const [t, i18n] = useTranslation();

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo"></div>
      <ul className={`app__navbar-links app__navbar-links-${i18n.language}`}>
        {[
          t("home"),
          t("about"),
          t("work"),
          t("skills"),
          t("services"),
          t("contact"),
        ].map((item) => (
          <li className="app__flex p-text" key={`Link-${item}`}>
            <div />

            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <div className="open">
          <TfiMenuAlt onClick={() => setToggle(true)} />
        </div>

        {toggle && (
          <motion.div
            className="menu-box"
            whileInView={{ x: [100, 0] }}
            transition={{ duration: 0.85, ease: "easeIn" }}
          >
            <MdKeyboardArrowUp
              className="close"
              onClick={() => setToggle(false)}
            />
            <ul>
              {[
                t("home"),
                t("about"),
                t("work"),
                t("skills"),
                t("services"),
                t("contact"),
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
