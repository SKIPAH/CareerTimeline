import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand>
            <img src="src/images/dbzskipah.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/esports">Esports</Nav.Link>
              <Nav.Link href="/dev">Dev</Nav.Link>
              <Nav.Link href="/fitness">Fitness</Nav.Link>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;
