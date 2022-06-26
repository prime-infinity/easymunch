import "./Checkout.css";

function Checkout() {
  return (
    <div className="container-fluid w-lg-100">
      <div className="row d-block d-lg-flex upper-div">
        <div className="col-12 col-lg-6 example ps-3 pr-0 pr-lg-3 flex-nowrap">
          <div className="d-flex w-30 w-lg-100 justify-content-between justify-content-lg-start align-items-center">
            <div className="d-flex d-lg-none align-items-center">
              <img
                src="./Assets/check-out-icon.png"
                alt=""
                className="me-3 check-out-icon"
              />
              <img
                src="./Assets/check-out-font.png"
                alt=""
                className="check-out-icon"
              />
            </div>
            <a
              href="vendorPage.html"
              className="mt-4 mb-3 w-30 w-lg-100 text-white py-2 btn link-to-vendor"
            >
              Continue Shoping
            </a>
          </div>
          <h3 className="text-uppercase mb-0 translate-right w-50 woods-by-road">
            Woods By Road Runners
          </h3>
          <p className="translate-right location">
            <img src="./Assets/Vector location.png" width="11px" alt="" />
            <span className="pe-1">107 Boundary Road, GRA Benin City</span>
          </p>
          {/* <!-- pick up and delivery  --> */}
          <div className="mt-4 mb-3 p-0 col-8 rounded-pill fw-bold d-grid delivery">
            <div className="row p-1 ps-3">
              <div className="col-6 py-1 text-center rounded-pill delivery-container">
                <a href="/" className="delivery">
                  Delivery
                </a>
              </div>
              <div className="col-6 text-center py-1 ">
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
                    <img
                      src="/Assets/comment-vector.png"
                      className="mb-1"
                      width="19px"
                      alt=""
                    />
                  </span>
                  <span className="fw-bold flex-nowrap align-items-center">
                    <img src="./Assets/comment-vector.png" alt="" />
                    <span> Comment </span>
                  </span>
                </label>
                <textarea
                  className="form-control border-0 text-area"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="leave instructions for delivery..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* <!-- your order --> */}
          <div className="row ps-2 pt-2">
            <div className="p text-capitalize fw-bold ps-0 your-order">
              your order
            </div>
            <div className="col-6 pt-4">
              <div className="row">
                <div className="col-4 ps-0 pe-0">
                  <img
                    src="./Assets/cart-hover-function.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-8 text-uppercase">
                  <div className="h6 fw-bold mb-1 special">
                    Carlitos Way Special
                  </div>
                  <p className="p small-cart-text mb-0 fw-bold">oPTIONS</p>
                  <p className="medium-cart-text mb-0 fw-bold mb-3">
                    chICKEN X cOKE X cUPCAKES
                  </p>
                  <p className="small-cart-text mb-0 fw-bold">extras</p>
                  <p className="medium-cart-text fw-bold">
                    sALAD X lARGE CHIPS X PLANTAIN (DICED)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="p text-end pe-5 ps-2 fw-bold pe-0 mt-5 numbers">
                5X
              </div>
            </div>
          </div>
          {/* <!-- another order item --> */}
          <div className="row ps-2 pt-1">
            <div className="col-6 pt-3">
              <div className="row">
                <div className="col-4 ps-0 pe-0">
                  <img
                    src="./Assets/cart-hover-function.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-8 text-uppercase">
                  <div className="h6 fw-bold mb-1 special">
                    Carlitos Way Special
                  </div>
                  <p className="p small-cart-text mb-0 fw-bold">oPTIONS</p>
                  <p className="medium-cart-text mb-0 fw-bold mb-3">
                    chICKEN X cOKE X cUPCAKES
                  </p>
                  <p className="small-cart-text mb-0 fw-bold">extras</p>
                  <p className="medium-cart-text fw-bold">
                    sALAD X lARGE CHIPS X PLANTAIN (DICED)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="p text-end pe-5 ps-2 fw-bold pe-0 mt-5 numbers">
                5X
              </div>
            </div>
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
