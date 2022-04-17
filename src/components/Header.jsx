import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Header() {
  const authState = useSelector((state) => state.auth.auth);
  let navigate = useNavigate();
  const location = useLocation();

  const notLoggedAndNotIndex = () => {
    return location.pathname === "/" || authState === null ? false : true;
    //return true;
  };

  const toLogin = () => {
    navigate("/login");
  };

  const toRest = () => {
    navigate("/resturants");
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container fluid className="mx-md-5">
        <Navbar.Brand className="cur-pointer" onClick={goHome}>
          Easy Munch
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          <Nav>
            {/*<Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link href="#deets">More deets</Nav.Link>
  <Nav.Link href="#deets">More deets</Nav.Link>*/}
            {location.pathname !== "/resturants" && (
              <Nav.Link onClick={toRest}>
                <span className="btn rounded-pill bg-gr px-4">Resturants</span>
              </Nav.Link>
            )}
            {notLoggedAndNotIndex() && (
              <Nav.Link onClick={toLogin}>
                <span className="btn rounded-pill bg-gr px-4">Sign In</span>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
