/* eslint-disable jsx-a11y/anchor-is-valid */
function Become() {
  return (
    <section>
      <div className="container py-5">
        {/*<!-- large screen -->*/}
        <div className="row d-md-flex d-none px-4">
          <div className="col-4">
            <div className="card border-0">
              <div className="card-body">
                <img
                  src="images/Become_a_vendor-compressed-min.jpg"
                  alt=""
                  width=""
                  className="img-fluid rounded"
                />
                <a>
                  <h5 className="card-title fw-bold pt-2">Become a Vendor</h5>
                </a>
                <p className="card-text">
                  Register your restaurant with us and have your meals delivered
                  with ease.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card border-0">
              <div className="card-body">
                <img
                  src="images/become_a_rider-compressed-min.jpg"
                  alt=""
                  width="100%"
                  className="img-fluid rounded"
                />
                <h5 className="card-title fw-bold pt-2">Become a rider</h5>
                <p className="card-text">
                  Join our fleet of delivery vehicles and earn good pay while
                  delivering for restaurants.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card border-0">
              <div className="card-body">
                <img
                  src="images/Watch_this_space-compressed-min.jpg"
                  alt=""
                  className="img-fluid rounded"
                />
                <h5 className="card-title fw-bold pt-2">Coming Soon!</h5>
                <p className="card-text">
                  See latest features coming soon to our platform...
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- mobile screen -->*/}
        <div className="row d-md-none pt-5 px-2">
          <div className="col-6">
            <a>
              <div className="h1 fw-bold">Become a Vendor</div>
            </a>
            <div className="p">
              Register your restaurant with us and have your meals delivered
              with ease.
            </div>
          </div>
          <div className="col-6">
            <img
              src="images/unsplash_cQbOSRpElxw.png"
              alt=""
              width="100%"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row d-md-none pt-5">
          <div className="col-6">
            <img
              src="images/unsplash_afDu-GuxjjMhh.png"
              alt=""
              width="100%"
              className="img-fluid"
            />
          </div>
          <div className="col-6">
            <div className="h1 fw-bold">Become a rider</div>
            <div className="p">
              Join our fleet of delivery vehicles and earn good pay while
              delivering for restaurants.
            </div>
          </div>
        </div>
        <div className="row d-md-none pt-5">
          <div className="col-12">
            <img
              src="images/comingsoonimg.png"
              width="100%"
              alt=""
              className="img-fluid"
            />
            <div className="h1 fw-bold">Coming Soon!</div>
            <div className="p">
              See latest features coming soon to our platform...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Become;
