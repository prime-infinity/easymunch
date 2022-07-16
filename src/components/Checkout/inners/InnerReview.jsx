function InnerReview() {
  return (
    <div className="row pt-5 pb-5">
      <div className="col-12">
        <span className="fw-bold">Payment</span> <br />
        <div className="row">
          <div className="col-md-8 col-12 mb-5">
            <div className="row">
              <div className="col-6 ps-0">
                <button className="btn w-100 py-3 bg-theme br-theme">
                  <span className="me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                        clipRule="evenodd"
                      />
                      <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                    </svg>
                  </span>
                  <span className="fs-14">Cash on delivery</span>
                </button>
              </div>
              <div className="col-6 pe-0">
                <button className="btn w-100 py-3 bg-theme br-theme">
                  <span className="me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                        clipRule="evenodd"
                      />
                      <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                    </svg>
                  </span>
                  <span className="fs-14">Pay with Card</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InnerReview;
