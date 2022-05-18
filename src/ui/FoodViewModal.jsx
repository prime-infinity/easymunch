import { useState } from "react";

function FoodViewModal({ closeModal }) {
  const [qty, setQty] = useState(1);

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

            <div className="modal-body py-0 px-0">
              <button
                type="button"
                className="btn mt-3 cart-close rounded-pill"
                onClick={closeModal}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "25px" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                  </svg>
                </span>
                <span className="fw-bold pe-1">back</span>
              </button>
              {/** modal body */}
              <div className="row">
                <div
                  className="col-12 col-md-6 col-lg-4 ps-0 pe-0"
                  id="food-as-bg"
                >
                  <img
                    className="cart-modal-image"
                    src="/images/unsplash_MqT0asuoIcU111.png"
                    alt=""
                  />
                </div>

                <div
                  className="col-12 col-md-6 col-lg-8 bg-white"
                  id="food-as-small"
                >
                  <div className="row justify-content-center">
                    <div
                      className="col-11 pt-2 pt-md-5"
                      style={{ position: "relative" }}
                    >
                      <div>
                        <span className="h2 fw-bold">Carlitos way special</span>{" "}
                        <br />
                        <span className="p text-secondary">
                          Mashed potatoes with t-bone steak, lamb ribeye/beef
                          ribeye/lamb chops/lamb ribs
                        </span>{" "}
                      </div>
                      <br />
                      <span className="bg-black text-white px-4 py-2 rounded">
                        select your options
                      </span>{" "}
                      <div></div> <br />
                      <div className="cart-modal-options ">
                        <span className="fw-bold h5">protein</span> <br />
                        <table className="table mt-3">
                          <tbody>
                            <tr className="my-3">
                              <td>Beef</td>
                              <td className="text-secondary text-md-center">
                                + # 15000.00
                              </td>
                              <td className="text-end">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                />
                              </td>
                            </tr>
                            <tr className="my-3">
                              <td>Beef</td>
                              <td className="text-secondary text-md-center">
                                + # 15000.00
                              </td>
                              <td className="text-end">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                />
                              </td>
                            </tr>
                            <tr className="my-3">
                              <td>Beef</td>
                              <td className="text-secondary text-md-center">
                                + # 15000.00
                              </td>
                              <td className="text-end">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>{" "}
                        <br />
                        <span className="fw-bold h5">extras</span> <br />
                        <table className="table mt-3">
                          <tbody>
                            <tr className="my-3">
                              <td>Beef</td>
                              <td className="text-secondary text-md-center">
                                + # 15000.00
                              </td>
                              <td className="text-end">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                />
                              </td>
                            </tr>
                            <tr className="my-3">
                              <td>Beef</td>
                              <td className="text-secondary text-md-center">
                                + # 15000.00
                              </td>
                              <td className="text-end">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                />
                              </td>
                            </tr>
                            <tr className="my-3">
                              <td>Beef</td>
                              <td className="text-secondary text-md-center">
                                + # 15000.00
                              </td>
                              <td className="text-end">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>{" "}
                        <br />
                        <span className="fw-bold h5">drinks</span> <br />
                        <table className="table mt-3">
                          <tbody>
                            <tr className="my-3">
                              <td>Beef</td>
                              <td className="text-secondary text-md-center">
                                + # 15000.00
                              </td>
                              <td className="text-end">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                />
                              </td>
                            </tr>
                            <tr className="my-3">
                              <td>Beef</td>
                              <td className="text-secondary text-md-center">
                                + # 15000.00
                              </td>
                              <td className="text-end">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                />
                              </td>
                            </tr>
                            <tr className="my-3">
                              <td>Beef</td>
                              <td className="text-secondary text-md-center">
                                + # 15000.00
                              </td>
                              <td className="text-end">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="">
                        <div className="row mt-4">
                          <div className="col-6">
                            <span className="fw-bold fs-18">Total</span>
                            <span className="fs-14 text-secondary">
                              (VAT included)
                            </span>
                          </div>
                          <div className="col-6 text-end">
                            <span className="fw-bold fs-18"># 9,000.00</span>
                          </div>
                        </div>
                        <div className="input-group pb-4 pt-3 carb-btn-fix">
                          <input
                            className="form-control form-control-lg detail-quantity"
                            name="items"
                            type="number"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                            style={{ maxWidth: "5rem", textAlign: "center" }}
                          />
                          <div className="flex-grow-1">
                            <div className="d-grid h-100">
                              <div>
                                <button
                                  className="btn btn-success w-100 h-100"
                                  type="button"
                                  style={{
                                    borderTopLeftRadius: "0px",
                                    borderBottomLeftRadius: "0px",
                                    backgroundColor: "black",
                                    borderColor: "black",
                                  }}
                                >
                                  {" "}
                                  <span className="fw-bold">ADD TO CART</span>
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
          </div>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </>
  );
}

export default FoodViewModal;
