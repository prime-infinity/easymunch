import CheckoutNav from "../../../ui/CheckoutNav";

function InnerDetails() {
  return (
    <div className="row pt-5 pb-5">
      <div className="col-12">
        <div className="row">
          <div className="col-md-8 col-12 mb-5">
            <span className="h5 fw-bold">Woods By Road Runners</span>
            <div className="pt-2 text-grey fs-14 d-flex-native">
              <img
                className="img-fluid"
                src="/images/Vector location.png"
                alt=""
              />
              <span className="ps-2">107 Boundary Road, GRA Benin City</span>
            </div>

            <div className="row pt-5">
              <div className="col-12 mb-5">
                <div className="border-bottom-only pb-2">
                  <div className="row">
                    <div className="col-10">
                      <span className="h5 fw-bold">Delivery</span> <br />
                      <span className="text-grey fs-12">
                        Deliver to your address in 45mins or less
                      </span>
                    </div>
                    <div className="col-2 my-auto text-end">
                      <input
                        className="n-checkbox"
                        type="checkbox"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="border-bottom-only pb-2">
                  <div className="row">
                    <div className="col-10">
                      <span className="h5 fw-bold">Pick-up</span> <br />
                      <span className="text-grey fs-12">
                        You will pick up this item from the resturant at the
                        selected time
                      </span>
                    </div>
                    <div className="col-2 my-auto text-end">
                      <input
                        className="n-checkbox"
                        type="checkbox"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <button className="btn w-100 text-danger bg-theme br-theme py-3 mt-4">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="svg-icon me-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                          <path
                            fillRule="evenodd"
                            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="fw-bold">Gift a friend</span>
                      </span>
                    </button>
                  </div>
                </div>

                <span className="text-grey fs-12">
                  Food is love, show others you care and spread the love...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CheckoutNav />
    </div>
  );
}
export default InnerDetails;
