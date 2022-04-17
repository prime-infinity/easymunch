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

  const showMobileMenu = () => {
    console.log("this");
  };

  const notLoggedAndNotIndex = () => {
    if (location.pathname === "/") {
      return false;
    }
    if (authState !== null) {
      return false;
    }
    return true;
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
    <Navbar collapseOnSelect expand="lg border">
      <Container fluid className="mx-md-5">
        <Navbar.Brand className="cur-pointer" onClick={goHome}>
          Easy Munch
        </Navbar.Brand>
        <span className="d-block d-md-none" onClick={showMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "30px" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
          </Nav>
          <Nav>
            {location.pathname !== "/resturants" && (
              <Nav.Link className="mx-3" onClick={toRest}>
                <span className="btn rounded-pill bg-gr px-4">Resturants</span>
              </Nav.Link>
            )}
            {notLoggedAndNotIndex() && (
              <Nav.Link onClick={toLogin}>
                <span className="btn rounded-pill bg-gr px-4">Sign In</span>
              </Nav.Link>
            )}
            {location.pathname === "/resturants" && (
              <Nav.Link className="mx-3">
                <input
                  type="text"
                  placeholder="search"
                  className="form-control rounded-pill bg-gr border-none"
                />
              </Nav.Link>
            )}

            <Nav.Link className="my-auto mx-3">
              <div style={{ position: "relative" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>{" "}
                My cart
                {/*<div className="navbar-icon-badge">3</div>*/}
              </div>
            </Nav.Link>

            {authState && (
              <Nav.Link className="mx-3">
                <span className="btn rounded-pill bg-gr px-4">
                  {authState.name}
                </span>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
