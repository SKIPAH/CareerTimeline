import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getTranslation } from "./Translations";
import { useLanguage } from "../hooks/useLanguage";
import skipahlogo from "../files/images/SKIPAHlogo.webp";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function Footer() {
  const currentLanguage = useLanguage();
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <div>
          <Nav.Link as={NavLink} to={"/"}>
            <img className="navbar-home-logo-footer" src={skipahlogo} />
          </Nav.Link>
        </div>
        <Row>
          <Col md={4}>
            <p className="footer-text">
              {getTranslation("aboutMe-text", currentLanguage)}
            </p>
          </Col>
          <Col md={4}>
            <ul className="list-unstyled footer-text">
              <li>
                <a
                  href="https://www.linkedin.com/in/jussi-mehtala/"
                  className="footer-text text-white"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SKIPAH"
                  className="footer-text text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/SKIPAHH"
                  className="footer-text text-white"
                >
                  Twitter/X
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/skipaah/"
                  className="footer-text text-white"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@SKIPAH"
                  className="footer-text text-white"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@skipaah"
                  className="footer-text text-white"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitch.tv/skipah"
                  className="footer-text text-white"
                >
                  Twitch
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <address className="footer-text">
              Email:{" "}
              <a
                href="mailto:jussi.mehtala96@gmail.com"
                className="footer-text text-white"
              >
                jussi.mehtala96@gmail.com
              </a>
              <br />
            </address>
          </Col>
          <Row className="mt-3">
            <Col md={12} className="text-center">
              <p>&copy; Jussi "SKIPAH" Mehtälä 2025</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  );
}
