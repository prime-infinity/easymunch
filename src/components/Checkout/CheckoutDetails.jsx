function CheckoutDetails() {
  return (
    <div className="row" style={{ paddingTop: "0.375rem" }}>
      <div className="col-12">
        <div className="row mb-4 text-center">
          <div className="col-12 br-theme py-2 bg-dark text-white">
            <span className="">Your Order</span>
          </div>
        </div>
        <div
          className="no-scroll-bar"
          style={{ height: "100vh", overflowY: "scroll" }}
        >
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="row mb-3">
              <div className="col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="fs-18 fw-bold mb-1">
                      Carlitos Way Special
                    </div>
                    <p className="p small-cart-text mb-0 fw-bold">Options</p>

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

              <hr className="mt-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CheckoutDetails;
