import "./CSS/Portfolio.css";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <div id="portfolio-section" className="portfolio-container">
      <h5 data-aos="fade-up">Portfolio</h5>
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        style={{ textAlign: "center", paddingInline: "10px" }}
      >
        Here you can see my projects on which i worked on
      </p>

      <div className="portfolio-list">
        <PortfolioCard
          flexDirectionSide={"row-reverse"}
          projectHeader={"Kan-Guroo"}
          imageUrl={"/images/Projects/kan-guroo.png"}
          projectDescription={`Kan-Guroo was created with one idea to make education and career development accessible and innovative for everyone. We help young people, businesses, and professionals find their path and connect with the mentors who will guide them along the way.`}
          position={"Back-End Developer"}
          date={"Sep 2025 - Present"}
          githubLink={""}
          websiteLink={"https://kan-guroo.com/"}
        />
        <PortfolioCard
          flexDirectionSide={"row"}
          projectHeader={"Web Canvas"}
          imageUrl={"/images/Projects/webCanvas.png"}
          projectDescription={`WebCanvas is a streamlined CRM platform
          designed to help businesses manage clients, tasks, and internal
          workflows with ease. It focuses on simplicity and clarity,
          offering essential tools for organizing customers without unnecessary complexity.
          The system emphasizes efficiency, accessibility, and a clean
          user experience.`}
          position={"Full-Stack Developer"}
          date={"Aug 2024 - Jan 2026"}
          githubLink={""}
          websiteLink={"https://webcanvasstudio.com/"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
