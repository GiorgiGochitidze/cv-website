import { Link } from "react-scroll";
import "./CSS/DropdownMenu.css";
import { SetStateAction, useEffect, useState } from "react";

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
      <div className="menu-card">
        {navLinks.map((navItem) => (
          <Link
            key={navItem.label}
            spy={true}
            activeClass="active"
            smooth={true}
            duration={500}
            offset={-150}
            to={navItem.scrollPath}
            className={`menu-items ${activeSection === navItem.scrollPath ? "active" : ""}`}
            onSetActive={() => handleSetActive(navItem.scrollPath)}
            onClick={() => setShowMenu(false)}
          >
            <p>{navItem.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
