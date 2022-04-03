/* eslint-disable jsx-a11y/anchor-is-valid */
function Partners() {
  return (
    <section>
      <div className="container-fluid py-5">
        <div className="row px-lg-5 px-1">
          <div className="col-lg-4 mt-2 col-12 col-md-5 pt-md-5 pt-lg-3">
            <div className="h1 col-9 col-lg-12 fw-bolder">
              Our Partner Restaurants
            </div>
            <div className="p">
              We have partnered with some of the best restaurants in your city
              to offer a wide variety of meals to suit your every mood!
            </div>
            {/*<!-- restaurant button web -->*/}
            <div className="d-grid d-none d-md-flex mt-3 pb-3 pb-md-0 mt-lg-5 gap-2 col-9">
              <a className="btn btn-primary border-0  bg-black" type="button">
                visit our restaurants
              </a>
            </div>
          </div>

          {/*<!-- large screen carousel images -->*/}
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide col-lg-8 d-none d-lg-flex ps-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  src="images/partnered restaurants.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="images/Property1=chicken republic.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="images/Property1=dominos.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>

          {/*<!-- mobile screen carousel images -->*/}
          <div
            id="carouselExampleSlidesOnly  "
            className="carousel slide d-lg-none col-lg-9 pt-3 col-md-7 col-12"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  src="images/partnered_restaurants_mobile.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="images/Property_dominos1=mobile (3).png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="images/Property_dominos1=mobile (2).png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          {/*<!-- restaurant button -->*/}
          <div className=" col-12 d-md-none justify-content-center d-flex mt-3 pb-3 col-9">
            <a className="btn text-white border-0  bg-black" type="button">
              visit our restaurants
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
