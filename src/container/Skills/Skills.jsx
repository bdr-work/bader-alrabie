import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, WrappMotion } from "../../Wrapper";
import "./Skills.scss";
import { images } from "../../constants";
import { t } from "i18next";
const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type=="skills"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
  });

  return (
    <>
      <h2 className="head-text">
        {t("ski")}
        <span>{t("lls")}</span>
        {t("I Have")}
      </h2>

      <div className="app__skills-container">
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ delay: 0.3 }}
          className="app__skills-box"
        >
          <h4 className="box-tag">Frontend</h4>
          {skills
            .filter((skill) => skill.type === "Frontend")
            .map((frontSkill, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="app__skills-item app__flex"
              >
                <motion.div
                  className="app__flex"
                  style={{ backgroundColor: frontSkill.bgColor }}
                >
                  <img src={urlFor(frontSkill.icon)} alt={frontSkill.name} />
                  <p className="p--text">{frontSkill.name}</p>
                </motion.div>
              </motion.div>
            ))}
          <div className="other-tools">
            <h3>{t("Other")}</h3>
          </div>
          <div className="other-tools-items">
            <div className="other-tools-item app__flex">
              <img src={images.git} alt="git" />
              <p className="p--text">Git</p>
            </div>
            <div className="other-tools-item app__flex">
              <img src={images.github} alt="git" />
              <p className="p--text">Github</p>
            </div>
            <div className="other-tools-item app__flex">
              <img src={images.motion} alt="git" />
              <p className="p--text">Motion</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ delay: 0.3 }}
          className="app__skills-box"
        >
          <h4 className="box-tag">Backend</h4>
          {skills
            .filter((skill) => skill.type === "Backend")
            .map((backSkill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="app__skills-item app__flex"
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: backSkill.bgColor }}
                >
                  <img src={urlFor(backSkill.icon)} alt={backSkill.name} />
                  <p className="p--text">{backSkill.name}</p>
                </div>
              </motion.div>
            ))}
          <div className="other-tools">
            <h3>{t("Other")}</h3>
          </div>
          <div className="other-tools-items">
            <div className="other-tools-item app__flex">
              <img src={images.sanity} alt="git" />
              <p className="p--text">Sanity</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  WrappMotion(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
