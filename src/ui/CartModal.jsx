import { useState } from "react";

function CartModal({ closeModal }) {
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
            {/*<div className="modal-header">
              {/*<button
                type="button"
                className="btn-close bg-white p-2 mt-1 rounded-circle"
                onClick={closeModal}
              ></button>
            </div>*/}

            <div className="modal-body py-0 px-0">
              {/** modal body */}
              <div className="row">
                <div
                  className="col-12 col-md-6 col-lg-4 ps-0 pe-0"
                  id="food-as-bg"
                >
                  <img src="/images/unsplash_MqT0asuoIcU111.png" alt="" />
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
                      <div
                        style={
                          {
                            /*position: "fixed",
                          width: "80%",*/
                          }
                        }
                      >
                        <span className="h2 fw-bold">Carlitos way special</span>{" "}
                        <br />
                        <span className="p text-secondary">
                          Mashed potatoes with t-bone steak, lamb ribeye/beef
                          ribeye/lamb chops/lamb ribs
                        </span>{" "}
                        <div className="sticky-button">
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
                      <br /> <br />
                      <span className="bg-black text-white px-4 py-2 rounded">
                        select your options
                      </span>{" "}
                      <br /> <br />
                      <span className="fw-bold h5">protein</span> <br />
                      <div className="pb-5 mb-5">
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
                        <br /> <br />
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
                        </table>
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
