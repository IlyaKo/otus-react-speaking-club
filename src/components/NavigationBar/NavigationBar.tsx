import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { logout } from "../../data/auth";

export default function NavigationBar() {
  const dispatch = useDispatch();
  const { authenticated, user } = useSelector((state: RootState) => state.auth);

  return (
    <Navbar bg="light" className="justify-content-between">
      <Nav className="mr-auto align-items-center">
        <Navbar.Brand className="ms-2">
          <Nav.Link as={NavLink} to={"home"}>
            Speaking club
          </Nav.Link>
        </Navbar.Brand>
        <Nav variant="pills">
          <Nav.Link as={NavLink} to={"home"}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to={"sessions"}>
            Sessions
          </Nav.Link>
        </Nav>
      </Nav>
      <Nav variant="pills" className="me-2">
        {authenticated ? (
          <>
            <Nav.Item className="d-flex align-items-center">
              <span className="navbar-text">Hello, {user?.name}!</span>
            </Nav.Item>
            <Nav.Link as={NavLink} onClick={() => dispatch(logout())} to={"/"}>
              Logout
            </Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link as={NavLink} to={"login"}>
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to={"register"}>
              Register
            </Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
}
