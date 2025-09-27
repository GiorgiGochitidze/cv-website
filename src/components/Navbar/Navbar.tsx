"use client";

import "./CSS/Navbar.css";
import { Link } from "react-scroll";
import { RiMenu3Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("landing-section");

  const navLinks = [
    { label: "Home", scrollPath: "landing-section" },
    { label: "About Me", scrollPath: "aboutMe-section" },
    { label: "Skills", scrollPath: "skills-section" },
    { label: "Portfolio", scrollPath: "portfolio-section" },
    { label: "Contact Me", scrollPath: "contact-section" },
  ];

  useEffect(() => {
    // Always reset on page refresh
    localStorage.setItem("activeSection", "landing-section");
  }, []);

  const handleSetActive = (section: string) => {
    setActiveSection(section);
    localStorage.setItem("activeSection", section);
  };

  return (
    <>
      <header>
        <nav>
          <p style={{ color: "var(--mainColor)" }}>Giorgi Gochitidze</p>

          <div className="nav-links">
            {navLinks.map((navItem) => (
              <Link
                key={navItem.label}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-150}
                to={navItem.scrollPath}
                className={activeSection === navItem.scrollPath ? "active" : ""}
                onSetActive={() => handleSetActive(navItem.scrollPath)}
              >
                <p>{navItem.label}</p>
              </Link>
            ))}
          </div>

          <RiMenu3Line
            className="menu-icon"
            fill={"var(--mainColor)"}
            size={20}
            onClick={() => setShowMenu(!showMenu)}
          />
        </nav>
      </header>

      {showMenu && <DropdownMenu setShowMenu={setShowMenu} navLinks={navLinks} />}
    </>
  );
};

export default Navbar;
