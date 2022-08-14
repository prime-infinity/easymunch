import { Outlet } from "react-router-dom";
import DashboardNavigation from "../components/UserDashboard/DashboardNavigation";

function UserDashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/** nav component */}
          <div
            className="col-2-n d-none d-lg-block"
            style={{ position: "fixed" }}
          >
            <DashboardNavigation />
          </div>
          <div
            style={{ minHeight: "200vh", paddingTop: "9rem" }}
            className="col-12 px-md-5 bg-theme  col-md-10 offset-md-2"
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
export default UserDashboard;
