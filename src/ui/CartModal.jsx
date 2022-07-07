import { useNavigate } from "react-router-dom";

function CartModal({ closeModal }) {
  let navigate = useNavigate();
  const goToCheckout = () => {
    closeModal();
    navigate("/checkout");
  };

  return (
    <>
      <div
        className="modal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content px-3 py-2">
            <div className="header">
              <div className="row mb-3 pt-2">
                <div className="col-10 text-center">
                  {/*<h5 className="text-center ps-5 col-10" id="exampleModalLabe">
                  My Cart
                  </h5>*/}
                </div>
                <div className="col-2 text-end">
                  <button
                    onClick={closeModal}
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
            <div
              className="modal-body example flex-nowrap"
              style={{ overflowY: "scroll", height: "80vh" }}
            >
              {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                <div key={index} className="row mb-3">
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
                        <p className="p small-cart-text mb-0 fw-bold">
                          Options
                        </p>

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
            <div className="d-flex justify-content-center">
              <div className="d-grid col-12 ps-0 py-3">
                <button
                  onClick={goToCheckout}
                  className="btn py-2 br-theme text-white bg-black"
                >
                  <span className="row">
                    <div
                      className="col text-start"
                      style={{ fontSize: "20px" }}
                    >
                      checkout
                    </div>
                    <div className="col text-end my-auto fs-14">₦ 9,000.00</div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay" onClick={closeModal}></div>
    </>
  );
}

export default CartModal;
