"use client";

import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IconType } from "react-icons";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SiAdobephotoshop,
  SiExpress,
  SiFramer,
  SiFusionauth,
  SiMongodb,
  SiNestjs,
  SiRedux,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

type Skill = {
  skillName: string;
  Icon?: IconType;
};

type SkillCategory = {
  name: string;
  Icon?: IconType;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Front-End",
    Icon: FaReact,
    skills: [
      { skillName: "HTML", Icon: AiFillHtml5 },
      { skillName: "CSS", Icon: FaCss3 },
      { skillName: "JavaScript", Icon: FaJs },
      { skillName: "React", Icon: FaReact },
      { skillName: "Redux & Redux Toolkit", Icon: SiRedux },
      { skillName: "TypeScript", Icon: BiLogoTypescript },
      { skillName: "NextJs", Icon: RiNextjsLine },
    ],
  },
  {
    name: "Back-End",
    Icon: FaNodeJs,
    skills: [
      { skillName: "NestJS", Icon: SiNestjs },
      { skillName: "NodeJs", Icon: FaNodeJs },
      { skillName: "ExpressJs", Icon: SiExpress },
      { skillName: "MongoDB", Icon: SiMongodb },
      { skillName: "RESTful API" },
      { skillName: "JWT / Oauth", Icon: SiFusionauth },
    ],
  },
  {
    name: "Tools & Workflow",
    Icon: FaGithub,
    skills: [
      { skillName: "Git", Icon: FaGitAlt },
      { skillName: "GitHub", Icon: FaGithub },
      { skillName: "Framer-motion", Icon: SiFramer },
      { skillName: "Photoshop", Icon: SiAdobephotoshop },
      { skillName: "Figma", Icon: FaFigma },
      { skillName: "Agile" },
    ],
  },
];

const SkillsIcon = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    AOS.refresh();
  }, []);

  return (
    <div
      className={`skills-circle-container ${activeCategory && "active"}`}
      style={{
        height: activeCategory ? 180 * 2 + 150 : "auto",
      }}
    >
      {!activeCategory &&
        skillCategories.map((category) => (
          <div
            key={category.name}
            className="skills-circle"
            onClick={() => setActiveCategory(category.name)}
            data-aos="fade-up"
          >
            {category.Icon && (
              <category.Icon size={50} fill="#00cc6a" className="skill-icon" />
            )}
            <p>{category.name}</p>
          </div>
        ))}
      {activeCategory && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={() => setActiveCategory(null)}
          className="center-circle"
        >
          <p>{activeCategory}</p>
          {skillCategories
            .find((c) => c.name === activeCategory)
            ?.skills.map((skill, i, arr) => {
              const radius = 180; // distance from center
              const angle = (2 * Math.PI * i) / arr.length - Math.PI / 2;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              // Determine AOS animation
              let aosType = "fade-up";
              if (i === 0) aosType = "fade-right";
              else if (i === arr.length - 1) aosType = "fade-left";

              return (
                <motion.div
                  key={skill.skillName}
                  className="child-circle"
                  style={{ x, y }}
                  data-aos={aosType}
                  data-aos-delay={i * 100} // optional stagger
                >
                  {skill.Icon && (
                    <skill.Icon size={30} fill="#00cc6a" className="skill-icon" />
                  )}
                  <p>{skill.skillName}</p>
                </motion.div>
              );
            })}
        </motion.div>
      )}
    </div>
  );
};

export default SkillsIcon;
