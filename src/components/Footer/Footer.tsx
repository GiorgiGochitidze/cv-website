import "./CSS/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>Giorgi Gochitidze</p>

      <div className="footer-links">
        <a href="mailto:giorgigochitidze555@gmail.com">Email Me</a>
        <a href="https://github.com/GiorgiGochitidze" target="_blank">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/giorgi-gochitidze-4839b9308"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://www.facebook.com/giorgi.gochitidze.39/"
          target="_blank"
        >
          Facebook
        </a>
      </div>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Giorgi Gochitidze. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
