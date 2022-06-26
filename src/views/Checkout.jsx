import "./Checkout.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Checkout() {
  return (
    <div className="container-fluid pt-5">
      <div className="row ">
        <div className="col-12 col-lg-6 example ps-3 pe-3">
          <div className="d-flex justify-content-end justify-content-lg-start align-items-center">
            {/*<div className="d-flex border d-lg-none align-items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "30px" }}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div>
                <h2 className="my-auto">Checkout</h2>
              </div>
  </div>*/}
            <a className="mt-4 mb-3 fs-12 br-theme px-4 text-white py-2 btn link-to-vendor">
              Continue Shoping
            </a>
          </div>
          <h3 className="mb-0 fw-18 fw-bold">Woods By Road Runners</h3>
          <div className="row ">
            <div className="col-12">
              <div className="pt-3 ">
                <img src="images/Vector location.png" alt="" />
                <span className="ps-1">107 Boundary Road, GRA Benin City</span>
              </div>
              <div className="pt-2">
                <img src="images/Vector telephone.png" alt="" />
                <span className="ps-1"></span>0907 000 0000
              </div>
            </div>
          </div>
          {/* <!-- pick up and delivery  --> */}
          <div className="mt-4 mb-3 p-0 col-8 rounded-pill fw-bold d-grid delivery">
            <div className="row p-1 ps-3">
              <div className="col-6 py-2 text-center rounded-pill delivery-container">
                <a href="/" className="delivery">
                  Delivery
                </a>
              </div>
              <div className="col-6 text-center py-2 ">
                <a href="/" className="pick-up">
                  Pick-Up
                </a>
              </div>
            </div>
          </div>

          {/* <!-- comment section --> */}
          <div className="row me-0 me-lg-5 pt-3">
            <div className="col-12 col-lg-9">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label mb-1"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="fw-bold flex-nowrap align-items-center">
                    <span> Comment </span>
                  </span>
                </label>
                <textarea
                  className="form-control br-theme border-0 text-area"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="leave instructions for delivery..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* <!-- your order --> */}
          <div className="row pt-2">
            <div className="p ps-2 mb-3 text-capitalize fw-bold ps-0 your-order">
              your orders
            </div>
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="row ps-4 mb-3">
                <div className="col-12">
                  <div className="row">
                    <div className="col-3 ps-0 pe-0">
                      <img
                        style={{ height: "176px", objectFit: "cover" }}
                        src="/images/tome.png"
                        alt=""
                        className="img-fluid br-theme"
                      />
                    </div>
                    <div className="col-9">
                      <div className="fs-18 fw-bold mb-1">
                        Carlitos Way Special
                      </div>
                      <p className="p small-cart-text mb-0 fw-bold">Options</p>

                      <ul className="sp-details ps-0 mb-1">
                        <li>Chicken</li>
                        <li>Coke</li>
                        <li>Cupcakes</li>
                        <li>Prime chicken</li>
                        <li>Turi's special</li>
                      </ul>

                      <p className="small-cart-text mb-0 fw-bold">Extras</p>
                      <ul className="sp-details ps-0 mb-1">
                        <li>Salad</li>
                        <li>Chips</li>
                        <li>Mio Moi</li>
                      </ul>
                      <span className="fw-bold">#9,000.00</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="row">
                    <div className="col-4">
                      <div className="row">
                        <div className="col-4 btn btn-just-color cur-pointer">
                          <span className="fs-20">-</span>
                        </div>
                        <div className="col-4 my-auto px-n-2">
                          <span className="fs-16">15</span>
                        </div>
                        <div className="col-4 btn btn-just-color cur-pointer">
                          <span className="fs-20">+</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4 btn btn-just-color cur-pointer">
                      <span className="text-danger ">delete</span>
                    </div>
                  </div>
                </div>
                <hr className="mt-4" />
              </div>
            ))}
          </div>
        </div>

        {/* <!-- static column --> */}
        <div className="col-12 col-lg-6 ps-5 pt-5 pe-5 example-2 breakdown">
          <h5 className="h5 fw-bold mt-4">Order Breakdown</h5>
          <div className="row pb-5 me-5 pe-5">
            <div className="col-12 pt-3 d-flex justify-content-between">
              <span>Subtotal</span>
              <span className="subtotal">₦ 9,000.00</span>
            </div>

            <div className="col-12 pt-3 d-flex justify-content-between">
              <span>Taxes & Fees</span>
              <span className="fees">₦ 9,000.00</span>
            </div>

            <div className="col-12 pb-5 pt-3 d-flex justify-content-between">
              <span>Delivery Charge</span>
              <span className="delivery">₦ 9,000.00</span>
            </div>

            {/* <!-- horizontal rule--> */}
            <hr />

            <div className="col-12 fw-bold d-flex justify-content-between">
              <span className="total">Total</span>
              <span className="total-unit">₦ 9,000.00</span>
            </div>
          </div>

          <h5 className="h5 fw-bold">
            <span>
              <img src="./Assets/verified-tick.svg" className="mb-1" alt="" />
            </span>
            Place Order
          </h5>
          <form action="">
            <div className="mb-4 col-9">
              <input
                type="email"
                placeholder=" Use Vouvher/Coupons Here "
                className="form-control border-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <a
              href="/"
              className="mt-2 d-grid fw-bold py-2 col-12 btn place-order-input"
            >
              <span className="cash">
                <img src="./Assets/cash-pay.svg" className="mb-1" alt="" />
                Cash On Delivery
              </span>
            </a>

            <a
              href="/"
              className="mt-2 d-grid fw-bold py-2 col-12 btn place-order-input"
            >
              <span className="pay">
                <img src="./Assets/card-pay.svg" className="mb-1" alt="" />
                Pay with Card
              </span>
            </a>

            <div className="p mt-1 policy">
              By Placing an order you agree with EasyMunch Ltd user
              <a href="termsAndCondition.html">Terms & Conditions</a>
              as well as our <a href="/">Refund policy</a>.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Checkout;
