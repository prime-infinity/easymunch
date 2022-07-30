import { useNavigate } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Become() {
  let navigate = useNavigate();
  const toBeVendor = () => {
    console.log("yes");
    navigate("/vendor");
  };

  return (
    <section>
      <div className="container pt-3 pb-5">
        {/*<!-- large screen -->*/}
        <div className="row d-md-flex d-none">
          <div className="col-4 text-center">
            <div className="card border-0">
              <div className="card-body cur-pointer" onClick={toBeVendor}>
                <img
                  src="illustrate/cheff.png"
                  alt=""
                  width=""
                  className="img-fluid rounded"
                />
                <br /> <br />
                <h5 className="fs-24 fw-bold pt-2">Become a Vendor</h5>
                <p className="card-text fs-14 text-muted">
                  Register your restaurant with us and have your meals delivered
                  with ease.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 text-center">
            <div className="card border-0 cur-pointer">
              <div className="card-body">
                <img
                  src="illustrate/deliv.png"
                  alt=""
                  className="img-fluid rounded"
                />{" "}
                <br /> <br />
                <h5 className="fs-24 fw-bold pt-2">Become a rider</h5>
                <p className="card-text fs-14 text-muted">
                  Join our fleet of delivery vehicles and earn good pay while
                  delivering for restaurants.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 text-center">
            <div className="card border-0 cur-pointer">
              <div className="card-body">
                <img
                  src="illustrate/eat.png"
                  alt=""
                  className="img-fluid rounded"
                />
                <br /> <br />
                <h5 className="fs-24 fw-bold pt-2">Coming Soon!</h5>
                <p className="card-text fs-14 text-muted">
                  See latest features coming soon to our platform...
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- mobile screen -->*/}
        <div className="row text-center d-md-none pt-5">
          <div className="col-12 cur-pointer" onClick={toBeVendor}>
            <img src="illustrate/cheff.png" alt="" className="img-fluid" />
          </div>{" "}
          <div className="col-12 mt-4">
            <a>
              <div className="fs-24 fw-bold">Become a Vendor</div>
            </a>
            <div className="p fs-14">
              Register your restaurant with us and have your meals delivered
              with ease.
            </div>
          </div>
        </div>
        <div className="row text-center d-md-none pt-5">
          <div className="col-12">
            <img src="illustrate/deliv.png" alt="" className="img-fluid" />
          </div>
          <div className="col-12 mt-4">
            <div className="fs-24 fw-bold">Become a rider</div>
            <div className="p fs-14">
              Join our fleet of delivery vehicles and earn good pay while
              delivering for restaurants.
            </div>
          </div>
        </div>
        <div className="row text-center d-md-none pt-5">
          <div className="col-12">
            <img src="illustrate/eat.png" alt="" className="img-fluid" />
            <div className="fs-24 fw-bold">Coming Soon!</div>
            <div className="p fs-14">
              See latest features coming soon to our platform...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Become;
