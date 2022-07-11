import { Outlet } from "react-router-dom";
import "./Checkout.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Checkout() {
  return (
    <div className="container-fluid pt-5 px-md-5">
      <div className="row pt-5">
        <div className="col-12 px-4">
          <div className="row">
            <div className="col-12 col-md-7">
              <div
                className="row no-scroll-bar flex-nowrap"
                style={{ overflowX: "scroll" }}
              >
                <div className="col-n pe-4">
                  <button
                    className="btn px-3 w-mc text-muted-n"
                    style={{
                      borderBottom: "2px solid black",
                      borderRadius: "0px",
                    }}
                  >
                    Order details
                  </button>
                </div>
                <div className="col-n px-4">
                  <button
                    className="btn px-3 w-mc text-muted-n"
                    style={{
                      borderBottom: "2px solid black",
                      borderRadius: "0px",
                    }}
                  >
                    Delivery/Pickup details
                  </button>
                </div>
                <div className="col-n px-4">
                  <button
                    className="btn px-3 w-mc text-muted-n"
                    style={{
                      borderBottom: "2px solid black",
                      borderRadius: "0px",
                    }}
                  >
                    Payment and Summary{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Checkout;
