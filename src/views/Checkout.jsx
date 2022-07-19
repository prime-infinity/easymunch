import { Outlet, useLocation, useNavigate } from "react-router-dom";
import InnerAddress from "../components/Checkout/inners/InnerAddress";
import InnerDetails from "../components/Checkout/inners/InnerDetails";
import InnerReview from "../components/Checkout/inners/InnerReview";
import "./Checkout.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Checkout() {
  const location = useLocation();
  let navigate = useNavigate();
  const inDetails = () => {
    return location.pathname === "/checkout/details" ? true : false;
  };
  const inAddress = () => {
    return location.pathname === "/checkout/address" ? true : false;
  };
  const inReview = () => {
    return location.pathname === "/checkout/review" ? true : false;
  };

  const toDetails = () => {
    navigate("/checkout/details");
  };
  const toAddress = () => {
    navigate("/checkout/address");
  };
  const toSummary = () => {
    navigate("/checkout/review");
  };

  return (
    <div className="container-fluid pt-5 px-md-5">
      <div className="row pt-5">
        <div className="col-12 px-4">
          <div className="row">
            <div className="col-12 col-md-8">
              <div
                className="row no-scroll-bar flex-nowrap"
                style={{ overflowX: "scroll" }}
              >
                <div className="col-n pe-4">
                  <button
                    onClick={toDetails}
                    className={`btn input-rm-focus px-3 w-mc fw-bold ${
                      inDetails() ? "text-dark" : "text-muted-n"
                    }`}
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
                    onClick={toAddress}
                    className={`btn input-rm-focus px-3 w-mc fw-bold ${
                      inAddress() ? "text-dark" : "text-muted-n"
                    }`}
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
                    onClick={toSummary}
                    className={`btn input-rm-focus px-3 w-mc fw-bold ${
                      inReview() ? "text-dark" : "text-muted-n"
                    }`}
                    style={{
                      borderBottom: "2px solid black",
                      borderRadius: "0px",
                    }}
                  >
                    Payment and Summary{" "}
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {inDetails() ? (
                    <InnerDetails />
                  ) : inAddress() ? (
                    <InnerAddress />
                  ) : inReview() ? (
                    <InnerReview />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Checkout;
