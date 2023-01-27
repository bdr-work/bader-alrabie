import { motion } from "framer-motion";
import React from "react";
import { FaCopyright } from "react-icons/fa";
import "./Footer.scss";
const Footer = () => {
  return (
    <motion.div className="contaianer" whileInView={{ opacity: [0, 1] }}>
      <motion.p
        whileInView={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="footer-text"
      >
        Thanks For Your Time{" "}
      </motion.p>
      <motion.p
        whileInView={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="copy"
      >
        Made by Logo BADER 2023 <FaCopyright />
      </motion.p>
    </motion.div>
  );
};

export default Footer;
