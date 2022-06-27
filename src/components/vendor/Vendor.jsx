import { Outlet } from "react-router-dom";

function Vendor() {
  return (
    <div>
      <span>
        {" "}
        <h2>this</h2>{" "}
      </span>
      <Outlet />
    </div>
  );
}
export default Vendor;
