import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { logout } from "../../data/auth";

export default function NavigationBar() {
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

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
        {!authenticated ? (
          <>
            <Nav.Link as={NavLink} to={"login"}>
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to={"register"}>
              Register
            </Nav.Link>
          </>
        ) : (
          <Nav.Link as={NavLink} onClick={() => dispatch(logout())} to={"/"}>
            Logout
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
}
