import { FaRegArrowAltCircleDown } from "react-icons/fa";
import Button from "react-bootstrap/Button";

import "./Header.css";
import "../../../cssReset/reset.css";
import "../../../cssReset/style-1.css";

function Header() {
  const scrolldownHandler = () => {
    console.log("done");
    window.scrollTo({
      top: 1000,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <header id="header">
      <h1 className="header-title">
        THIS IS <br />
        MASSIVELY
      </h1>
      <p className="header-text">
        A free, fully responsive site template designed by
        <a
          href="https://www.linkedin.com/in/fateme-amouie-aa1029324/?trk=public-profile-join-page"
          className="header-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fateme <br />
        </a>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        officiis.
      </p>
      <a href="#" onClick={scrolldownHandler} className="scroll-button">
        <FaRegArrowAltCircleDown
          className="header-icon"
          aria-label="Scroll down"
        />
      </a>
    </header>
  );
}

export default Header;
