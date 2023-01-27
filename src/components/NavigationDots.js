import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const NavigationDots = ({ active }) => {
  const [t, i18n] = useTranslation();
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "services", "contact"].map(
        (item, index) => (
          <motion.a
            whileInView={{ opacity: [0, 1], delay: 0.3, scale: [1.5, 1] }}
            transition={{
              delay: 0.5,

              default: { ease: "easeInOut" },
              type: "spring",
            }}
            href={`#${t(item)}`}
            key={item + index}
            className="app__navigation-dot"
            style={
              active === t(item)
                ? {
                    width: "7px",
                    backgroundColor: "#7a89a7",
                    height: "25px",
                    borderRadius: " 10px",
                  }
                : {}
            }
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
