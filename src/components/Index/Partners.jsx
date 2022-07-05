import { useNavigate } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Partners() {
  let navigate = useNavigate();

  const toRest = () => {
    navigate("/resturants");
  };
  return (
    <section>
      <div className="container py-3 my-3">
        <div className="row ">
          <div className="col-lg-3 mt-2 col-12 col-md-5 pt-md-5 pt-lg-3">
            <div className="font-boldest-second-biggest col-9 col-lg-12">
              Our Partner Restaurants
            </div>
            <div className="fs-14 pt-3">
              We have partnered with some of the best restaurants in your city
              to offer a wide variety of meals to suit your every mood!
            </div>
            {/*<!-- restaurant button web -->*/}
            <div className="d-none d-md-block mt-3 pb-3 mt-lg-5">
              <button
                onClick={toRest}
                className="btn w-100 d-none  d-md-block py-3 px-4 text-white bg-black"
                type="button"
              >
                view resturants
              </button>
            </div>
          </div>

          {/*<!-- large screen carousel images -->*/}
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide col-lg-9 d-none d-lg-flex ps-5"
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
            <a
              onClick={toRest}
              className="btn br-theme text-white w-100 py-3  bg-black"
              type="button"
            >
              visit restaurants
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
