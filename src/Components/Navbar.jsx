import { NavLink } from 'react-router-dom'; // Use NavLink for active link styling
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Correct the import for Bootstrap CSS

function ColorSchemesExample() {
  return (
    <Navbar bg="danger"> {/* Transparent background for the navbar */}
      <Container>
        <Navbar.Brand href="#home"><b>Godwin</b></Navbar.Brand>
        <Nav className="me-auto">
          {/* Use NavLink instead of Link for active link styling */}
          <Nav.Link as={NavLink} to="/" end className="active-link">
            <b>HOME</b>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="active-link">
            <b>ABOUT</b>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/hobbies" className="active-link">
            <b>HOBBIES</b>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className="active-link">
            <b>CONTACT</b>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/education" className="active-link">
            <b>EDUCATION</b>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
