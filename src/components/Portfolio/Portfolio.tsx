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
          projectHeader={"Travel Pulse"}
          imageUrl={"/images/Projects/travelPulse.png"}
          projectDescription={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas
          perferendis tempore voluptatem ea nobis nam distinctio, illum quod
          dolore mollitia atque, voluptate esse quibusdam fugiat, adipisci
          corporis repudiandae voluptas?`}
          githubLink={"https://github.com/GiorgiGochitidze/TravelPulse2"}
          websiteLink={"https://travelpulse.netlify.app/"}
        />
        <PortfolioCard
          flexDirectionSide={"row"}
          projectHeader={"Web Canvas"}
          imageUrl={"/images/Projects/webCanvas.png"}
          projectDescription={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas
          perferendis tempore voluptatem ea nobis nam distinctio, illum quod
          dolore mollitia atque, voluptate esse quibusdam fugiat, adipisci
          corporis repudiandae voluptas?`}
          githubLink={""}
          websiteLink={"https://webcanvasstudio.com/"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
