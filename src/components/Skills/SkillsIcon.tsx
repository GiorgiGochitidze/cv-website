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
import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiAdobephotoshop,
  SiExpress,
  SiFramer,
  SiFusionauth,
  SiMongodb,
  SiRedux,
} from "react-icons/si";

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
    ],
  },
  {
    name: "Back-End",
    Icon: FaNodeJs,
    skills: [
      { skillName: "NodeJs", Icon: FaNodeJs },
      { skillName: "ExpressJs", Icon: SiExpress },
      { skillName: "MongoDB", Icon: SiMongodb },
      { skillName: "RESTful API", },
      { skillName: "JWT / Oauth", Icon: SiFusionauth },
    ],
  },
  {
    name: "Tools & Design",
    Icon: FaGithub,
    skills: [
      { skillName: "Git", Icon: FaGitAlt },
      { skillName: "GitHub", Icon: FaGithub },
      { skillName: "Framer-motion", Icon: SiFramer },
      { skillName: "Photoshop", Icon: SiAdobephotoshop },
      { skillName: "Figma", Icon: FaFigma },
    ],
  },
];

const SkillsIcon = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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
              const angle = (2 * Math.PI * i) / arr.length - Math.PI / 2; // subtract π/2 to start at top
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <motion.div
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{ x, y, opacity: 1 }}
                  key={skill.skillName}
                  className="child-circle"
                >
                  {skill.Icon && (
                    <skill.Icon
                      size={30}
                      fill="#00cc6a"
                      className="skill-icon"
                    />
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
