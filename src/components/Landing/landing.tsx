"use client";

import { Typewriter } from "react-simple-typewriter";
import "./CSS/landing.css";
import Image from "next/image";

const Landing = () => {
  return (
    <div id="landing-section" className="landing-container">
      <div className="landing-card">
        <div className="landing-card-text-part">
          <h1>Hello, I&#39;m Giorgi</h1>
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
          <p>
            Passionate about turning ideas into fast, <br /> functional and
            user-friendly applications.
          </p>
          <div className="landing-buttons-container">
            <button>Download CV</button>
            <button className="hire-me-button">Contact Me</button>
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
      </div>
    </div>
  );
};

export default Landing;
