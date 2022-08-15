import { useLocation, useNavigate } from "react-router-dom";

function DashboardNavigation() {
  let navigate = useNavigate();

  const location = useLocation();
  const toProfile = () => {
    navigate("/user-dashboard/profile");
  };
  const toHistory = () => {
    navigate("/user-dashboard/history");
  };
  return (
    <>
      <div style={{ backgroundColor: "#ffffff", height: "100vh" }}>
        <div className="row pt-5 mt-5 px-2">
          <div
            className={`col-11 ps-0 br-tr-lb mt-5 ${
              location.pathname === "/user-dashboard/profile" &&
              "bg-theme br-left-only-dark"
            }`}
          >
            <span
              onClick={toProfile}
              className={`btn d-flex-align-center`}
              style={{ height: "51px" }}
            >
              <span className="d-flex-align-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg-dash-icon py-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ps-2  fs-16">Profile</span>
              </span>
            </span>
          </div>
          <div
            className={`col-11 ps-0 br-tr-lb mt-3 ${
              location.pathname === "/user-dashboard/history" &&
              "bg-theme br-left-only-dark"
            }`}
          >
            <span
              onClick={toHistory}
              className={`btn d-flex-align-center`}
              style={{ height: "51px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-dash-icon py-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <span className="ps-2  fs-16">Order history</span>
            </span>
          </div>

          <div className="col-11">
            <hr className="mt-4" />
          </div>

          {/*<div card border-0 shadow-n px-md-4 px-2 py-5 br-theme
            className={`col-11 ps-0 br-tr-lb mt-3 ${
              location.pathname === "/user-dashboard/order-history" &&
              "bg-theme br-left-only-dark"
            }`}
          >
            <span
              className={`btn d-flex-align-center`}
              style={{ height: "51px" }}
            >
              <img
                src="/images/userprofile/vector.png"
                className="img-fluid"
                style={{ width: "20px" }}
                alt=""
              />
              <span className="ps-2  fs-16">Back </span>
            </span>
          </div>*/}
          <div
            className={`col-11 ps-0 br-tr-lb  ${
              location.pathname === "/user-dashboard/order-history" &&
              "bg-theme br-left-only-dark"
            }`}
          >
            <span
              className={`btn d-flex-align-center`}
              style={{ height: "51px" }}
            >
              <img
                src="/images/userprofile/back.png"
                className="img-fluid"
                style={{ width: "20px" }}
                alt=""
              />
              <span className="ps-2 text-danger fs-16">Logout </span>
            </span>
          </div>
          <div
            className="col-11 fs-14"
            style={{ position: "absolute", bottom: "5%" }}
          >
            <span className="text-97">About us</span> <br />
            <span className="text-97">Terms & Conditions</span> <br />
            <span className="text-97">Return Policy</span> <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardNavigation;
