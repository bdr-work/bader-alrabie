import React from "react";
import { motion } from "framer-motion";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const SocialMediaAbout = () => {
  return (
    <div className="app__about-socialmedia">
      <motion.a
        whileInView={{ opacity: [0, 1], delay: 0.3, scale: [1.3, 1] }}
        transition={{
          delay: 0.5,
          default: { ease: "easeInOut" },
          type: "spring",
        }}
        href="https://twitter.com/BdrWork"
        target="_blank"
      >
        <BsTwitter />
      </motion.a>
      <motion.a
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
        href="https://wa.me/0580911957?text=السلام عليكم ورحمة الله وبركاته"
        target="_blank"
      >
        <BsWhatsapp />
      </motion.a>
      <motion.a
        whileInView={{ opacity: [0, 1], delay: 0.3, scale: [1.3, 1] }}
        transition={{
          delay: 0.5,
          default: { ease: "easeInOut" },
          type: "spring",
        }}
        href="mailto:bdr.work@hotmail.com"
      >
        <MdEmail />
      </motion.a>
    </div>
  );
};

export default SocialMediaAbout;
