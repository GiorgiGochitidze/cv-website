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
          projectHeader={"Wallstreet"}
          imageUrl={"/images/Projects/wstreet.png"}
          projectDescription={`A sleek, high performance URL shortening web application, built entirely with Next.js ecosystem. Leveraging NextJS Route Handlers for a serverless backend architecture and MongoDB
            for ultra-fast link generation and persistance, the platform features UI with real-time click and expiration status tracking`}
          position={"Front-End"}
          date={"May 12 2026 - Paused"}
          githubLink={""}
          websiteLink={"https://wstreet.netlify.app/en"}
        />
        <PortfolioCard
          flexDirectionSide={"row"}
          projectHeader={"Linkly"}
          imageUrl={"/images/Projects/urlShortener.png"}
          projectDescription={`A sleek, high performance URL shortening web application, built entirely with Next.js ecosystem. Leveraging NextJS Route Handlers for a serverless backend architecture and MongoDB
            for ultra-fast link generation and persistance, the platform features UI with real-time click and expiration status tracking`}
          position={"Front-End"}
          date={"Jun 12 2026"}
          githubLink={"https://github.com/GiorgiGochitidze/url-shortener"}
          websiteLink={"https://url-shortener-three-teal.vercel.app/"}
        />

        <PortfolioCard
          flexDirectionSide={"row-reverse"}
          projectHeader={"Kan-Guroo"}
          imageUrl={"/images/Projects/kan-guroo.png"}
          projectDescription={`Kan-Guroo was created with one idea to make education and career development accessible and innovative for everyone. We help young people, businesses, and professionals find their path and connect with the mentors who will guide them along the way.`}
          position={"Back-End Developer"}
          date={"Sep 2025 - Mar 2026"}
          githubLink={""}
          websiteLink={"https://kan-guroo.com/"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
