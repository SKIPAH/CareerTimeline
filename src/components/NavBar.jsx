import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Esports</Nav.Link>
            <Nav.Link href="#Dev">Dev</Nav.Link>
            <Nav.Link href="#pricing">Fitness</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Socials</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Links
            </Nav.Link>
          </Nav>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;