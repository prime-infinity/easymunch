function CartModal({ closeModal }) {
  return (
    <>
      <div
        className="custom-modal quickview"
        id="quickView"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            {/**  modal cancel button */}
            <div className="modal-head text-end">
              <button
                type="button"
                className="btn-close bg-white p-2 mt-1 rounded-circle"
                onClick={closeModal}
              ></button>
              <div className="modal-body quickview-body">
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      src="images/road_runnerRes.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-12">
                        <h3 className="h5 ms-2 ms-md-3 text-uppercase fw-bold">
                          Carlitos Way Special
                        </h3>
                        <p
                          className="p ms-2 ms-md-3 col-9"
                          style={{ fontSize: "14px" }}
                        >
                          Mashed potatoes with T-bone steak, Lamb ribeye/ beef
                          ribeye/ lamb chops/ lamb ribs
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="row ">
                        <div className="col-5 pe-0 col-md-4 pt-3">
                          <button className="bg-black btn mb-3 fw-bold rounded-circle">
                            +
                          </button>

                          <span
                            className="rounded-circle  mt-5 px-1 px-md-3 mt-5"
                            style={{ fontSize: "30px" }}
                          >
                            1
                          </span>
                          <button className="btn mb-3 bg-black rounded-circle">
                            &minus;
                          </button>
                        </div>
                        <div className="d-grid col ps-0 py-3">
                          <button className="btn bg-black rounded-pill text-white">
                            <span className="row">
                              <div
                                className="col text-uppercase"
                                style={{ fontSize: "12px" }}
                              >
                                Add to cart
                              </div>
                              <div
                                className="col fw-bold"
                                style={{ fontSize: "12px" }}
                              >
                                ₦ 9,000.00
                              </div>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </>
  );
}

export default CartModal;
