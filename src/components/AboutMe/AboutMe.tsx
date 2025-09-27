import "./CSS/AboutMe.css";

const AboutMe = () => {
  return (
    <div id="aboutMe-section" className="aboutMe-container">
      <h3 data-aos="fade-up">About Me</h3>

      <div className="aboutMe-card">
        <div className="aboutMe-text-part">
          <p data-aos="fade-right">About Me</p>
          <p data-aos="fade-right" data-aos-delay="100">
            Hello, I&#39;m Giorgi Gochitidze, a Full-Stack Developer Passionate
            about turning ideas into fast, functional and user-friendly web
            applications. With experience in NextJs, React, NodeJs, and
            TypeScript, I build modern web apps from concept to deployment.
            I&#39;ve delivered multiple projects focusing on clean code,
            responsive design, and smooth user experiences. I thrive on solving
            complex problems and constantly learning new technologies from
            programming and AI agent automation to business logic and soft
            skills. I&#39;m always excited to collaborate on projects that make
            a real impact.
          </p>
        </div>
        <div className="aboutMe-text-part">
          <p data-aos="fade-left">Why Choose Me?</p>
          <p data-aos="fade-left" data-aos-delay="100">
            I build modern scalable web apps using Next.js, React, and Node.js.
            I turn complex problems into simple, user-friendly solutions. Beyond
            writting code , i think differently, outside of the box, and focus
            on understanding business needs to deliver maximally optimized
            solutions. With experience in AI automation, fast learning, and
            levaraging AI to improve both my skills and performance, i deliver
            smarter, impactful results. I communicate clearly, meet deadlines,
            and thrive in collaborative projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
