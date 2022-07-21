import "./foodViewcss.css";

function FoodViewModal({ closeModal }) {
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
        <div className="modal-dialog modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content delete">
            <i
              onClick={closeModal}
              className="bi bi-x position-absolute cur-pointer end-0 p-0 m-0"
              style={{
                fontSize: "38px",
                top: "-1%",
                zIndex: "45",
                backgroundColor: "#eee",
              }}
            ></i>

            <div className="d-sm-flex justify-content-between d-inline-block">
              <img
                src="/images/unsplash_MqT0asuoIcU111.png"
                alt=""
                className="img-fluid bg-dark image"
              />
              <div className="bg-white">
                <div className="p-3 position-relative pt-4">
                  <h5 className="fw-bold d-sm-block">Carlitos Way Special</h5>
                  <p className="options fs-16 d-sm-block">
                    Mashed Potatoes with t-bone steak, Lamb Ribeye/Beef
                    Ribeye/Lamb Chops/Lamp Ribs
                  </p>
                  <button className="btn br-theme btn-dark select">
                    Select Your Options
                  </button>
                  <div
                    className="no-scroll-bar"
                    style={{
                      maxHeight: "320px",
                      minHeight: "320px",
                      overflowY: "scroll",
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <p className="fw-bold mt-2">Protein</p>
                      <i className="bi bi-asterisk fs-small pb-2 ps-2"></i>
                    </div>
                    <div className="protein">
                      <div className="d-flex justify-content-between align-items-center border-bottom py-2">
                        <div>Chicken</div>
                        <div>&#8358; 1,500</div>
                        <div>
                          <i className="bi bi-circle"></i>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center border-bottom py-2">
                        <div>Chicken</div>
                        <div>&#8358; 1,500</div>
                        <div>
                          <i className="bi bi-circle"></i>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center border-bottom py-2">
                        <div>Chicken</div>
                        <div>&#8358; 1,500</div>
                        <div>
                          <i className="bi bi-circle"></i>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center border-bottom py-2">
                        <div>Chicken</div>
                        <div>&#8358; 1,500</div>
                        <div>
                          <i className="bi bi-circle"></i>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="fw-bold mt-2">Protein</p>
                      <i className="bi bi-asterisk fs-small pb-2 ps-2"></i>
                    </div>
                    <div className="protein">
                      <div className="d-flex justify-content-between align-items-center border-bottom py-2">
                        <div>Chicken</div>
                        <div>&#8358; 1,500</div>
                        <div>
                          <i className="bi bi-circle"></i>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center border-bottom py-2">
                        <div>Chicken</div>
                        <div>&#8358; 1,500</div>
                        <div>
                          <i className="bi bi-circle"></i>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center border-bottom py-2">
                        <div>Chicken</div>
                        <div>&#8358; 1,500</div>
                        <div>
                          <i className="bi bi-circle"></i>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center border-bottom py-2">
                        <div>Chicken</div>
                        <div>&#8358; 1,500</div>
                        <div>
                          <i className="bi bi-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom border-dark"></div>
                <div className="p-3">
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold">Total</p>
                    <p className="fw-bold">&#8358; 9,000</p>
                  </div>
                  <div className="input-group pt-1 carb-btn-fix">
                    <input
                      className="form-control form-control-lg detail-quantity"
                      name="items"
                      value={1}
                      type="number"
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
                            <span className="fw-bold">Add to cart</span>
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
      <div onClick={closeModal} className="modal-backdrop show"></div>
    </>
  );
}

export default FoodViewModal;
