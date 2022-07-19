function InnerDetails() {
  return (
    <div className="row pt-5 pb-5">
      <div className="col-12">
        <div className="row">
          <div className="col-md-8 col-12 mb-5">
            <span className="h5 fw-bold">Woods By Road Runners</span>
            <div className="pt-2 text-grey fs-14 d-flex-native">
              <img
                className="img-fluid"
                src="/images/Vector location.png"
                alt=""
              />
              <span className="ps-2">107 Boundary Road, GRA Benin City</span>
            </div>
            <div className="pt-5">
              <span className="fw-bold fs-14">Delivery method</span>
            </div>

            <div className="row pt-5">
              <div className="col-12 mb-5">
                <div className="border-bottom-only pb-2">
                  <div className="row">
                    <div className="col-10">
                      <span className="h5 fw-bold">Delivery</span> <br />
                      <span className="text-grey fs-12">
                        Deliver to your address in 45mins or less
                      </span>
                    </div>
                    <div className="col-2 my-auto text-end">
                      <input
                        className="n-checkbox"
                        type="checkbox"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="border-bottom-only pb-2">
                  <div className="row">
                    <div className="col-10">
                      <span className="h5 fw-bold">Pick-up</span> <br />
                      <span className="text-grey fs-12">
                        You will pick up this item from the resturant at the
                        selected time
                      </span>
                    </div>
                    <div className="col-2 my-auto text-end">
                      <input
                        className="n-checkbox"
                        type="checkbox"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InnerDetails;
