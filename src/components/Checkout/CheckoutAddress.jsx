function CheckoutAddress() {
  return (
    <div className="row" style={{ paddingTop: "0.375rem" }}>
      <div className="col-12">
        <div className="row mb-4 text-center">
          <div className="col-12 br-theme py-2 bg-dark text-white">
            <span className="">Please Note</span>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <p className="fs-16">
              <span className="fw-bold">Privacy Notice:</span>
              You agree that your name, phone number and delivery address will
              be shared with the merchant and its couriers so they can deliver
              your order. Visit the merchant’s website to view any applicable
              privacy information. <br /> <br />
              If you’re not around when the delivery person arrives, they’ll
              leave your order at the door. By placing your order, you agree to
              take full responsibility for it once it’s delivered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutAddress;
