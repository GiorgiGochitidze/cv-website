"use client";

import { Typewriter } from "react-simple-typewriter";
import "./CSS/landing.css";
import Image from "next/image";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div id="landing-section" className="landing-container">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="landing-card"
      >
        <div className="landing-card-text-part">
          <motion.h1
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Hello, I&#39;m Giorgi
          </motion.h1>
          <h2>
            <Typewriter
              words={[
                "Full-Stack Developer",
                "MERN Stack Developer",
                "React Developer",
                "Front-End Developer",
                "Back-End Developer",
              ]}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Passionate about turning ideas into fast, <br /> functional and
            user-friendly applications.
          </motion.p>
          <div className="landing-buttons-container">
            <motion.button
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Download CV
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="hire-me-button"
            >
              Contact Me
            </motion.button>
          </div>
        </div>
        <div className="landing-image-container">
          <Image
            src="/images/MyImage.jpeg"
            alt="My Personal Image"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100%"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
