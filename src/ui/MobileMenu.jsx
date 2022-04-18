import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
function MobileMenu({ toRest, logout }) {
  const location = useLocation();
  const authState = useSelector((state) => state.auth.auth);
  return (
    <>
      <div className="mobile-menu">
        <div className="pt-5 mt-5">
          <div className="col-8 offset-2">
            <ul className="navbar-nav ml-auto">
              {authState && (
                <li className="pb-3">
                  <span className="btn rounded-pill bg-black w-100 text-white">
                    {authState.name}
                  </span>
                </li>
              )}
              {!authState && (
                <li className="pb-3">
                  <Link to="/login">
                    <span className="btn rounded-pill bg-black w-100 text-white">
                      Login
                    </span>
                  </Link>
                </li>
              )}
              {location.pathname !== "/resturants" && (
                <li className="py-3" onClick={toRest}>
                  <span className="btn rounded-pill">
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
                    <span>Resturants</span>
                  </span>
                </li>
              )}
              <li className="py-3">
                <span className="btn rounded-pill">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon me-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>{" "}
                  <span>My cart</span>
                </span>
              </li>
              {authState && (
                <li className="py-3">
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
                </li>
              )}
              {authState && (
                <li className="py-3" onClick={logout}>
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
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
