
function CartModal({closeModal}) {
  
  return (
    <>
        <div
      className="modal"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{display:"block"}}
    >
      <div className="modal-dialog modal-md">
        <div className="modal-content px-3 py-2">
          <div className="header">
            <div className="row mb-3">
              <div className="col-11">
                <h5 className="text-center ps-5 col-10" id="exampleModalLabe">
                  My Cart
                </h5>
              </div>
              <div className="col-1">
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
              style={{overflowY: "scroll", height: "80vh"}}
            >


            {
            [1,2,3,4,5,6,7].map((item,index) => (
              <div key={index} className="row">
                <div className="col-8">
                <div className="row">
                  <div className="col-4 ps-0 pe-0">
                    <img
                      src="/images/tome.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-8 text-uppercase">
                    <div className="h6 fw-bold mb-1" style={{fontSize: "12px"}}>
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
              <div className="col-4 pe-0">
                <div
                  className="p text-end fw-bold pe-4 mt-3"
                  style={{fontSize: "10px"}}
                >
                  5X
                </div>
                <div className="h6 fw-bold text-end mt-5">₦ 9,000.00</div>
              </div>
            </div>
            ))
            }
                  
            </div>
            <div className="d-flex justify-content-center">
            <div className="d-grid col-10 ps-0 py-3">
              <button
                className="btn rounded-pill text-white"
                style={{backgroundColor: "black"}}
              >
                <span className="row">
                  <div className="col text-uppercase" style={{fontSize: "15px"}}>
                    CHECKOUT
                  </div>
                  <div className="col fw-bold" style={{fontSize: "15px"}}>
                    ₦ 9,000.00
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default CartModal;
