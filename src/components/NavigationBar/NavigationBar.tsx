import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavigationBar() {
  return (
    <Navbar>
      <Navbar.Brand className="ms-2" href="home">
        Speaking club
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="sessions">Sessions</Nav.Link>
        <Nav.Link href="login">Login</Nav.Link>
        <Nav.Link href="register">Register</Nav.Link>
      </Nav>
    </Navbar>
  );
}
