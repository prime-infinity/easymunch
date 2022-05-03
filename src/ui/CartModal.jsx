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
                <div className="col-12 col-md-6" id="food-as-bg"></div>

                <div className="col-12 col-md-6 bg-white">
                  <span className="h5">Carlitos way special</span>
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
