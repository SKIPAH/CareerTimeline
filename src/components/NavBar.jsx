import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Translations, {
  getTranslation,
  getCurrentLanguage,
  setLanguage,
} from "./Translations";
import { Button } from "react-bootstrap";
import linkedin from "../files/images/linkedin.png";
import github from "../files/images/github.png";
import twitter from "../files/images/twitter.png";
import instagram from "../files/images/instagram.png";
import youtube from "../files/images/youtube.png";
import twitch from "../files/images/twitch.png";
import { useEffect, useState } from "react";
import skipahlogo from "../files/images/SKIPAHlogo.png";

export default function NavBar() {
  const [currentLanguage, setCurrentLanguage] = useState(getCurrentLanguage());
  const [expanded, setExpanded] = useState(false);

  const handleNavClose = () => {
    setExpanded(false);
  }
  
  const toggleProfileElements = () => {
    const profilePic = document.querySelector("#profilepic");
    const titleText = document.querySelector(".title-text");

    if (expanded) {
      profilePic?.classList.add("hide");
      profilePic?.classList.remove("hidden");
      titleText?.classList.add("hide");
    } else {
      profilePic?.classList.remove("hide");
      titleText?.classList.remove("hide");
    }
  };

  useEffect(() => {
    toggleProfileElements();
  }, [expanded]);

  const handleLanguageToggle = () => {
    const newLanguage = currentLanguage === "en" ? "fi" : "en";
    setLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <>
      <Navbar
        className="navbar-full"
        expand="lg"
        expanded={expanded}
        onToggle={(isExpanded) => setExpanded(isExpanded)}
      >
        <Container className="navbar-container">
          <Navbar.Brand>
            <Nav.Link as={NavLink} to={"/"}>
              <img className="navbar-home-logo" src={skipahlogo} />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to={"/"} onClick={handleNavClose}>
                {getTranslation("navbar-home", currentLanguage)}
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/dev"} onClick={handleNavClose}>
                {getTranslation("navbar-dev", currentLanguage)}
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/esports"} onClick={handleNavClose}>
                {getTranslation("navbar-esports", currentLanguage)}
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/fitness"} onClick={handleNavClose}>
                {getTranslation("navbar-fitness", currentLanguage)}
              </Nav.Link>
            </Nav>
            <Button id="languageToggleBtnNavbar" onClick={handleLanguageToggle}>
              {currentLanguage === "en" ? "SUOMEKSI" : "ENGLISH"}
            </Button>

            <ul className="navbar-right">
              <a
                href="https://www.linkedin.com/in/jussi-mehtala/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  className="navbar-logos"
                  alt="linkedin logo"
                />
              </a>
              <a href="https://github.com/SKIPAH" target="_blank">
                <img src={github} className="navbar-logos" alt="github logo" />
              </a>
              <a href="https://x.com/SKIPAHH" target="_blank">
                <img
                  src={twitter}
                  className="navbar-logos"
                  alt="twitter logo"
                />
              </a>
              <a href="https://www.instagram.com/skipaah/" target="_blank">
                <img
                  src={instagram}
                  className="navbar-logos"
                  alt="instagram logo"
                />
              </a>
              <a href="https://www.youtube.com/@SKIPAH" target="_blank">
                <img
                  src={youtube}
                  className="navbar-logos"
                  alt="youtube logo"
                />
              </a>
              <a href="https://www.twitch.tv/skipah" target="_blank">
                <img src={twitch} className="navbar-logos" alt="twitch logo" />
              </a>
            </ul>
          </Navbar.Collapse>
        </Container>
        <Button
          id="languageToggleBtn"
          onClick={handleLanguageToggle}
          // className="d-none d-lg-block"
        >
          {currentLanguage === "en" ? "SUOMEKSI" : "ENGLISH"}
        </Button>
      </Navbar>
    </>
  );
}
