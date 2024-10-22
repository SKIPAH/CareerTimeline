import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container className="navbar-container">
          <Navbar.Brand>
            <Nav.Link as={NavLink} to={"/"}>
              <img src="src/files/images/dbzskipah.png" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/experience"}>
                Work/Education
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/esports"}>
                Esports
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/dev"}>
                Dev
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/fitness"}>
                Fitness
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/dbz"}>
                TEST PAGE
              </Nav.Link>
            </Nav>

            <NavDropdown title="Socials" id="basic-nav-dropdown">
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
            <NavDropdown title="Language" id="language-nav-dropdown">
              <NavDropdown.Item>Suomeksi</NavDropdown.Item>
              <NavDropdown.Item>English</NavDropdown.Item>
            </NavDropdown>
            <ul className="navbar-right">
              <a
                href="https://www.linkedin.com/in/jussi-mehtala/"
                target="_blank"
              >
                {" "}
                <img
                  src="src/files/images/linkedin.png"
                  className="navbar-logos"
                  alt="linkedin logo"
                />
              </a>
              <a href="https://github.com/SKIPAH" target="_blank">
                {" "}
                <img
                  src="src/files/images/github.png"
                  className="navbar-logos"
                  alt="github logo"
                />
              </a>
              <a href="https://x.com/SKIPAHH" target="_blank">
                {" "}
                <img
                  src="src/files/images/twitter.png"
                  className="navbar-logos"
                  alt="twitter logo"
                />
              </a>
              <a href="https://www.instagram.com/skipaah/" target="_blank">
                {" "}
                <img
                  src="src/files/images/instagram.png"
                  className="navbar-logos"
                  alt="instagram logo"
                />
              </a>
              <a href="https://www.youtube.com/@SKIPAH" target="_blank">
                {" "}
                <img
                  src="src/files/images/youtube.png"
                  className="navbar-logos"
                  alt="youtube logo"
                />
              </a>
              <a href="https://www.twitch.tv/skipah" target="_blank">
                {" "}
                <img
                  src="src/files/images/twitch.png"
                  className="navbar-logos"
                  alt="twitch logo"
                />
              </a>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;
