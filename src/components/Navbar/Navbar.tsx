import "./CSS/Navbar.css"


const Navbar = () => {
  return (
    <header>
      <nav>
        <p style={{color: "var(--mainColor)"}}>Giorgi Gochitidze</p>

        <div className="nav-links">
          <p>Home</p>
          <p>About Me</p>
          <p>Skills</p>
          <p>Portfolio</p>
          <p>Contact Me</p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
