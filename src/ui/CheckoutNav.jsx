function CheckoutNav() {
  return (
    <div className="col-12 col-md-5 mt-5">
      <div className="row">
        <div className="col-6">
          <button className="btn bg-theme w-100 py-3 br-theme">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="fs-18">prev</span>
          </button>
        </div>
        <div className="col-6">
          <button className="btn bg-theme w-100 py-3 br-theme">
            <span className="fs-18">next</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CheckoutNav;
