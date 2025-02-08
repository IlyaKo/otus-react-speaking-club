import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router";

export default function NavigationBar() {
  return (
    <Navbar>
      <Navbar.Brand className="ms-2">
        <Nav.Link as={NavLink} to={"home"}>
          Speaking club
        </Nav.Link>
      </Navbar.Brand>
      <Nav variant="pills" className="mr-auto">
        <Nav.Link as={NavLink} to={"home"}>
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to={"sessions"}>
          Sessions
        </Nav.Link>
        <Nav.Link as={NavLink} to={"login"}>
          Login
        </Nav.Link>
        <Nav.Link as={NavLink} to={"register"}>
          Register
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
