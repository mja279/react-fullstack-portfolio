import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {  useLocation } from "react-router-dom";

import "./styles/navStyle.css"

function NavBar() {
    const location = useLocation();

return (

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Jime's Portfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="me-auto">
        <Nav.Link to="/" className={location.pathname === "/frontend" ? "nav-link active" : "nav-link"}>
            <span className="h6"> FORNT END </span>
        </Nav.Link>
        <Nav.Link
            to="/portfolio" className={location.pathname === "/projectmanagement" ? "nav-link active" : "nav-link"}>
            <span className="h6"> PROJECT MANAGEMENT</span>
        </Nav.Link>
        <Nav.Link
            to="/portfolio"
            className={location.pathname === "/uidesign" ? "nav-link active" : "nav-link"}>
            <span className="h6"> UI DESIGN</span>
        </Nav.Link>
        <Nav.Link
            to="/portfolio"
            className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
            <span className="h6"> RESUME</span>
        </Nav.Link>
        <Nav.Link
            to="/portfolio"
            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
            <span className="h6"> CONTACT</span>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

/* <Navbar bg="dark" variant="dark">
    <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to="/" className={location.pathname === "/frontend" ? "nav-link active" : "nav-link"}>
                    <span className="h5"> FORNT END </span>
                </Link>
                <Nav.Link
                    to="/portfolio"
                    className={location.pathname === "/projectmanagement" ? "nav-link active" : "nav-link"}>
                    <span className="h5"> PROJECT MANAGEMENT</span>
                </Nav.Link>
                <Link
                    to="/portfolio"
                    className={location.pathname === "/uidesign" ? "nav-link active" : "nav-link"}>
                    <span className="h5"> UI DESIGN</span>
                </Link>
                <Link
                    to="/portfolio"
                    className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
                    <span className="h5"> RESUME</span>
                </Link>
                <Link
                    to="/portfolio"
                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                    <span className="h5"> CONTACT</span>
                </Link>
            </Nav>
            </Navbar.Collapse>
    </Container>
</Navbar> */
)}

export default NavBar;