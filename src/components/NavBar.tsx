import { Container, Nav, Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./Home">Home</Nav.Link>
            <Nav.Link href="./DondeEstamos">Donde estamos</Nav.Link>
            <Nav.Link href="#">Productos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};