import React, { useState } from "react";

import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, WrappMotion } from "../../Wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { useEffect } from "react";

import { images } from "../../constants";
import { t } from "i18next";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [Works, setWorks] = useState([]);
  const [WorkFilter, setWorkFilter] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setWorkFilter(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setWorkFilter(Works);
      } else {
        setWorkFilter(Works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="head-text"
      >
        {t("creativ")}
        {t("Port")}
        <span>{t("folio")}</span>
      </motion.h2>

      <div className="app__work-filter">
        {["All", "Frontend App", "MERN Stack App", "React JS"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {WorkFilter.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blanck" rel="norefer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="show app__flex"
                  >
                    <AiFillEye />
                    <p className="p-text">{t("visit")}</p>
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  WrappMotion(Work, "app__works"),
  "work",
  "app__primarybg"
);
