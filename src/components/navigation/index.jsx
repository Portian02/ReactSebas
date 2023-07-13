import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles.css";
const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-FWD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul>
              <li>
                <Link to="/">
                  {" "}
                  <p className="text">Home</p>
                </Link>{" "}
              </li>

              <li>
                <Link to="/Sesion">
                  {" "}
                  <p className="text">Log in</p>
                </Link>{" "}
              </li>
              <li>
                <Link to="/Perfil">
                  {" "}
                  <p className="text">Perfil</p>
                </Link>{" "}
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
