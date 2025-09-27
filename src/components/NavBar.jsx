import React from "react";
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
import linkedin from "../files/images/socialmedia/linkedin.webp";
import github from "../files/images/socialmedia/github.webp";
import twitter from "../files/images/socialmedia/twitter.webp";
import instagram from "../files/images/socialmedia/instagram.webp";
import youtube from "../files/images/socialmedia/youtube.webp";
import twitch from "../files/images/socialmedia/twitch.webp";
import { useEffect, useState } from "react";
import skipahlogo from "../files/images/work/SKIPAHlogo.webp";
import tiktok from "../files/images/socialmedia/tiktok1.webp";

export default function NavBar() {
  const [currentLanguage, setCurrentLanguage] = useState(getCurrentLanguage());
  const [expanded, setExpanded] = useState(false);

  const handleNavClose = () => {
    setExpanded(false);
  };

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
              <img
                className="navbar-home-logo"
                src={skipahlogo}
                onClick={handleNavClose}
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to={"/"} onClick={handleNavClose}>
                {getTranslation("navbar-home", currentLanguage)}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to={"/programming"}
                onClick={handleNavClose}
              >
                {getTranslation("navbar-dev", currentLanguage)}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to={"/gamedevelopment"}
                onClick={handleNavClose}
              >
                {getTranslation("navbar-games", currentLanguage)}
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

            <div className="navbar-right">
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
              <a href="https://www.tiktok.com/@skipaah" target="_blank">
                <img src={tiktok} className="navbar-logos" alt="tiktok logo" />
              </a>
              <a href="https://www.twitch.tv/skipah" target="_blank">
                <img src={twitch} className="navbar-logos" alt="twitch logo" />
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
        <Button id="languageToggleBtn" onClick={handleLanguageToggle}>
          {currentLanguage === "en" ? "SUOMEKSI" : "ENGLISH"}
        </Button>
      </Navbar>
    </>
  );
}
