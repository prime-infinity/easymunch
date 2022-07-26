import CheckoutNav from "../../../ui/CheckoutNav";

function InnerAddress() {
  return (
    <div className="row pt-5 pb-5">
      <div className="col-12">
        <div className="row">
          <div className="col-md-8 col-12">
            <span className="fw-bold">Delivery Time</span> <br />
            <select className="form-control bg-theme br-theme border-0 fs-14 py-3">
              <option value="someting">5:30PM - 6:30PM</option>
              <option value="something">something</option>
            </select>
            <br /> <br />
            <span className="fw-bold">Delivery Address</span> <br />
            <select className="form-control bg-theme br-theme border-0 fs-14 py-3">
              <option value="someting">Recent Locations</option>
              <option value="something">something</option>
            </select>{" "}
            <br /> <br />
            {/*<button className="btn bg-dark text-white br-theme py-2">
              Add new
            </button>*/}
            <span className="fw-bold">Comment</span> <br />
            <textarea
              placeholder="leave some instructions for delivery"
              className="form-control bg-theme br-theme border-0 fs-14 py-3"
              rows={5}
            />
          </div>
        </div>
      </div>
      <CheckoutNav />
    </div>
  );
}
export default InnerAddress;
