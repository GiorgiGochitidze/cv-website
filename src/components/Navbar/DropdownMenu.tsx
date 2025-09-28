"use client";

import { Link } from "react-scroll";
import "./CSS/DropdownMenu.css";
import { SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";

type NavLinksType = {
  label: string;
  scrollPath: string;
};

type MenuTypes = {
  navLinks: NavLinksType[];
  setShowMenu: React.Dispatch<SetStateAction<boolean>>;
};

const DropdownMenu = ({ navLinks, setShowMenu }: MenuTypes) => {
  const [activeSection, setActiveSection] = useState<string>("landing-section");

  useEffect(() => {
    // On mount, read active section from localStorage
    const stored = localStorage.getItem("activeSection");
    if (stored) setActiveSection(stored);
  }, []);

  const handleSetActive = (section: string) => {
    setActiveSection(section);
    localStorage.setItem("activeSection", section);
  };

  return (
    <div className="dropdownMenu-container">
      <motion.div
        initial={{ opacity: 0, width: 0, height: "100%" }}
        animate={{ opacity: 1, width: "100%" }}
        className="menu-card"
      >
        {navLinks.map((navItem, index) => (
          <Link
            key={navItem.label}
            spy={true}
            activeClass="active"
            smooth={true}
            duration={500}
            offset={-150}
            to={navItem.scrollPath}
            className={`menu-items ${
              activeSection === navItem.scrollPath ? "active" : ""
            }`}
            onSetActive={() => handleSetActive(navItem.scrollPath)}
            onClick={() => setShowMenu(false)}
          >
            <motion.p
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              {navItem.label}
            </motion.p>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default DropdownMenu;
