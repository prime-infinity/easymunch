import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import MobileMenu from "../ui/MobileMenu";
import { useState } from "react";
import Overlay from "../ui/Overlay";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Header() {
  const authState = useSelector((state) => state.auth.auth);
  const [mMenu, setMmenu] = useState(false);
  const [secMenu, setSecMenu] = useState(false);
  let navigate = useNavigate();
  const location = useLocation();

  const showMobileMenu = () => {
    //show mobile menu
    mMenu ? setMmenu(false) : setMmenu(true);
  };
  const showSecMenu = () => {
    //show secondary  menu
    secMenu ? setSecMenu(false) : setSecMenu(true);
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

  const logout = () => {
    console.log("is loging out");
  };

  return (
    <>
      {mMenu && (
        <>
          <MobileMenu toRest={toRest} logout={logout} /> <Overlay />
        </>
      )}
      <Navbar collapseOnSelect expand="lg border">
        <Container fluid className="mx-md-5">
          <Navbar.Brand className="cur-pointer" onClick={goHome}>
            Easy Munch
          </Navbar.Brand>
          <span
            className="d-block d-md-none"
            style={{ zIndex: "3" }}
            onClick={showMobileMenu}
          >
            {mMenu ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </span>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
            </Nav>
            <Nav>
              {location.pathname !== "/resturants" && (
                <Nav.Link className="mx-3" onClick={toRest}>
                  <span className="btn rounded-pill bg-gr px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-icon me-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                    Resturants
                  </span>
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
                <Nav.Link className="mx-3" style={{ position: "relative" }}>
                  <span
                    className="btn rounded-pill bg-gr px-4"
                    onClick={showSecMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-icon me-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {authState.name}
                  </span>

                  {/** secondary menu */}
                  {secMenu && (
                    <span className="sec-menu">
                      <div className="py-4">
                        <div className="col-10 offset-1">
                          <div className="pb-4">
                            <span className="btn rounded-pill">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg-icon me-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>My Profile</span>
                            </span>
                          </div>
                          <div className="" onClick={logout}>
                            <span className="btn rounded-pill">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="svg-icon me-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>Logout</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </span>
                  )}
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
