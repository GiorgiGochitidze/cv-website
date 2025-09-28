"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

type ProjectType = {
  imageUrl: string;
  projectHeader: string;
  projectDescription: string;
  flexDirectionSide: "row" | "row-reverse" | "column" | "column-reverse";
  githubLink: string;
  websiteLink: string;
};

const PortfolioCard = ({
  imageUrl,
  projectHeader,
  projectDescription,
  flexDirectionSide,
  githubLink,
  websiteLink,
}: ProjectType) => {
  const isFlexDirectionRow = flexDirectionSide === "row";
  const isMax981 = useMediaQuery({ maxWidth: 981 });

  // hydration-safe flag
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const alignItems =
    mounted && isFlexDirectionRow && isMax981 ? "flex-end" : "flex-start";

  const aosTextAnimation =
    flexDirectionSide === "row-reverse" ? "fade-right" : "fade-left";
  const aosImageAnimation =
    flexDirectionSide === "row-reverse" ? "fade-left" : "fade-right";

  return (
    <div
      style={{
        flexDirection: flexDirectionSide,
        alignItems,
      }}
      className="project-card"
    >
      <div
        data-aos={aosImageAnimation}
        data-aos-delay="100"
        className="project-image-container"
      >
        <Image
          src={imageUrl}
          alt={projectHeader}
          style={{ width: "100%", height: "100%" }}
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
        <p data-aos={aosTextAnimation}>{projectHeader}</p>
        <p data-aos={aosTextAnimation} data-aos-delay="100">
          {projectDescription}
        </p>
        <div
          className="projects-button-container"
          style={{
            justifyContent: isFlexDirectionRow ? "flex-end" : "flex-start",
          }}
        >
          <div data-aos={aosTextAnimation} data-aos-delay="200">
            <a href={websiteLink} target="_blank">
              <button>View Website</button>
            </a>
          </div>
          <div data-aos={aosTextAnimation} data-aos-delay="300">
            {githubLink ? (
              <a href={githubLink} target="_blank">
                <button className="view-github-btn">View Github</button>
              </a>
            ) : (
              <button className="view-github-btn" disabled>
                View Github
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
