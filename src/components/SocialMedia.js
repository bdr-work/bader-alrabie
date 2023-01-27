import React from "react";
import { motion } from "framer-motion";
import { BsTwitter, BsWhatsapp, BsInstagram } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <motion.div
        whileInView={{ opacity: [0, 1], delay: 0.3, scale: [1.3, 1] }}
        transition={{
          delay: 0.5,

          default: { ease: "easeInOut" },
          type: "spring",
        }}
      >
        <BsTwitter />
      </motion.div>
      <motion.div
        whileInView={{
          opacity: [0, 1],
          delay: 0.3,
          scale: [1.3, 1],
        }}
        transition={{
          delay: 0.5,

          default: { ease: "easeInOut" },
          type: "spring",
        }}
      >
        <BsWhatsapp />
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], delay: 0.3, scale: [1.3, 1] }}
        transition={{
          delay: 0.5,

          default: { ease: "easeInOut" },
          type: "spring",
        }}
      >
        <BsInstagram />
      </motion.div>
    </div>
  );
};

export default SocialMedia;
