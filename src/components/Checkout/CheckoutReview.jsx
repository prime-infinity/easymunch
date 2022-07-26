function CheckoutReview() {
  return (
    <div className="row" style={{ paddingTop: "0.375rem" }}>
      <div className="col-12">
        <div className="row mb-4 text-center">
          <div className="col-12">
            <span className="fs-24-r fw-bold">Breakdown</span>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <table className="table">
              <tbody>
                <tr className="bs-hidden" style={{ backgroundColor: "white" }}>
                  <th className="py-3">
                    <span> Subtotal </span>
                  </th>
                  <td className="py-3 text-end fw-bold">#9,000.00</td>
                </tr>
                <tr className="bs-hidden" style={{ backgroundColor: "white" }}>
                  <th className="py-3">
                    <span> Taxes and Fees</span>
                  </th>
                  <td className="py-3 text-end fw-bold">#9,000.00</td>
                </tr>
                <tr style={{ backgroundColor: "white" }}>
                  <th className="py-3">
                    <span> Delivery Charge</span>
                  </th>
                  <td className="py-3 text-end fw-bold">#9,000.00</td>
                </tr>

                <tr style={{ backgroundColor: "white" }}>
                  <th className="pt-4 border-0">
                    {" "}
                    <span> Total</span>
                  </th>
                  <td className="pt-4 text-end fw-bold border-0">#9,000.00</td>
                </tr>
              </tbody>
            </table>
            <div className="row px-3 pt-3">
              <div className="bg-theme border-0 col-12 mb-3 mb-md-0 col-12 py-2 px-0 br-theme me-auto border">
                <input
                  className="bg-theme py-2 fs-14 border-0 w-100 ps-3 input-rm-focus"
                  type="text"
                  placeholder="Use Voucher/Coupons Here"
                />
              </div>
              <div className="col-12 mt-3">
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
              <button className="btn bg-very-green text-white fw-bold mt-5 w-100 br-theme py-3">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutReview;
