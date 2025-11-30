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
          flexDirectionSide={"row"}
          projectHeader={"Web Canvas"}
          imageUrl={"/images/Projects/webCanvas.png"}
          projectDescription={`WebCanvas is a streamlined CRM platform
          designed to help businesses manage clients, tasks, and internal
          workflows with ease. It focuses on simplicity and clarity,
          offering essential tools for organizing customers without unnecessary complexity.
          The system emphasizes efficiency, accessibility, and a clean
          user experience.`}
          githubLink={""}
          websiteLink={"https://webcanvasstudio.com/"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
