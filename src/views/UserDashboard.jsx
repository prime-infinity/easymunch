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
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default UserDashboard;
