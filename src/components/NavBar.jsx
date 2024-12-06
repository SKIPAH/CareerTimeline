import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
import dbzskipah from "../files/images/dbzskipahtransparent.png";
import { useState } from "react";
import skipahlogo from "../files/images/SKIPAHlogo.png";

function NavBar() {
  const [currentLanguage, setCurrentLanguage] = useState(getCurrentLanguage());

  const handleLanguageToggle = () => {
    const newLanguage = currentLanguage === "en" ? "fi" : "en";
    setLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <>
      <Navbar className="navbar-full" collapseOnSelect expand="lg">
        <Container className="navbar-container">
          <Navbar.Brand>
            <Nav.Link as={NavLink} to={"/"}>
              <img className="navbar-home-logo" src={skipahlogo} />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to={"/"}>
                {getTranslation("navbar-home", currentLanguage)}
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/experience"}>
                {getTranslation("navbar-work", currentLanguage)}
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/dev"}>
                {getTranslation("navbar-dev", currentLanguage)}
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/esports"}>
                {getTranslation("navbar-esports", currentLanguage)}
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/fitness"}>
                {getTranslation("navbar-fitness", currentLanguage)}
              </Nav.Link>
            </Nav>
            <NavDropdown title="SOCIALS" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://x.com/SKIPAHH" target="_blank">
                Twitter
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.youtube.com/@SKIPAH"
                target="_blank"
              >
                Youtube
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.twitch.tv/skipah"
                target="_blank"
              >
                Twitch
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.instagram.com/skipaah/"
                target="_blank"
              >
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://github.com/SKIPAH"
                target="_blank"
              >
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.linkedin.com/in/jussi-mehtala/"
                target="_blank"
              >
                Linkedin
              </NavDropdown.Item>
            </NavDropdown>
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
          className="d-none d-lg-block"
        >
          {currentLanguage === "en" ? "SUOMEKSI" : "ENGLISH"}
        </Button>
      </Navbar>
    </>
  );
}

export default NavBar;
