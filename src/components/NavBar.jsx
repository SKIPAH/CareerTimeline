import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
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
              href="https://www.linkedin.com/in/jussi-mehtala/"
              target="_blank"
            >
              Linkedin
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://www.twitch.tv/skipah"
              target="_blank"
            >
              Twitch
            </NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/SKIPAH" target="_blank">
              GitHub
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;
