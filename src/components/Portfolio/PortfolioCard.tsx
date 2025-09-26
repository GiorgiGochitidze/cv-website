import Image from "next/image";

type ProjectType = {
  imageUrl: string;
  projectHeader: string;
  projectDescription: string;
  flexDirectionSide: "row" | "row-reverse" | "column" | "column-reverse";
};

const PortfolioCard = ({
  imageUrl,
  projectHeader,
  projectDescription,
  flexDirectionSide,
}: ProjectType) => {
  const isFlexDirectionRow = flexDirectionSide === "row";
  return (
    <div style={{ flexDirection: flexDirectionSide }} className="project-card">
      <div className="project-image-container">
        <Image
          src={imageUrl}
          alt={projectHeader}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          priority
          width={1000}
          height={1000}
        />
      </div>
      <div
        style={{
          alignItems: isFlexDirectionRow ? "flex-end" : "flex-start",
          textAlign: isFlexDirectionRow ? "right" : "left",
        }}
        className="projects-card-description"
      >
        <p>{projectHeader}</p>
        <p>{projectDescription}</p>
        <div
          className="projects-button-container"
          style={{
            justifyContent: isFlexDirectionRow ? "flex-end" : "flex-start",
          }}
        >
          <button>View Demo</button>
          <button className="view-github-btn">View Github</button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
