import React from "react";
import EasyMunchStepsSwiper from "../components/BecomeVendor/EasyMunchStepsSwiper";
import { useNavigate } from "react-router-dom";
/* eslint-disable jsx-a11y/anchor-is-valid */
function BecomeVendor() {
  let navigate = useNavigate();
  const toVendorDash = () => {
    navigate("/vendor-dashboard");
  };

  return (
    <>
      <section className="landingBg d-none d-lg-block pt-5">
        <div className="container pt-5">
          <div className="row me-5 pb-5">
            <div className="col-12 col-lg-6 ps-lg-5 pt-lg-5 mt-lg-5 pe-lg-5 mx-3 mx-lg-0">
              <div className="h1 text-white fw-bold mt-5">
                Delivery to your customers <br />
                <span
                  style={{
                    backgroundColor: "black",
                  }}
                >
                  with ease!
                </span>
              </div>
              <div className="p text-white col-12 col-lg-7 mb-5">
                Easymunch Ltd platform gives you the flexibility, visibility and
                customer insights you need to connect with more customers.
                Partner with us today.
              </div>
              <div className="h5 text-white mt-5">
                <span
                  className="p-lg-1"
                  style={{
                    backgroundColor: "black",
                  }}
                >
                  Join Restaurants Favorite delivery Partner
                </span>
              </div>
              {/*<!-- partner resturants images -->*/}
              <div className="row pt-5">
                <div className="col">
                  <img
                    src="images/ed25389d-39fa-415d-acf7-e46d017d1b93_large-removebg-preview 1.png"
                    alt=""
                    className="img-fluid mt-4"
                  />
                </div>
                <div className="col">
                  <img
                    src="images/download-removebg-preview 1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col">
                  <img
                    src="images/147f3d55-e9f8-45cd-89fa-cd9d40f98e9e_large-removebg-preview 1.png"
                    alt=""
                    className="img-fluid mt-4"
                  />
                </div>
                <div className="col">
                  <img
                    src="images/download__1_-removebg-preview 1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/*<!-- form -->*/}
            <div
              className="col-6 d-none d-lg-block px-5 py-5 rounded"
              style={{ backgroundColor: "white" }}
            >
              <form action="">
                <div className="h5 fw-bold">REGISTER YOUR RESTAURANT</div>
                {/*<!-- resturant name input -->*/}
                <div className="h6 mt-5">Restaurant Name</div>
                <input
                  type="email"
                  className="form-control sign-up-form border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                {/*<!--restaurant address input -->*/}
                <div className="h6 mt-4">Restaurant Address</div>
                <input
                  type="email"
                  className="form-control sign-up-form border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />

                {/*<!-- personal details input -->*/}
                <div className="p mt-5">Personal Details</div>
                <div className="h6 mt-4">Owner Name</div>
                <input
                  type="email"
                  className="form-control sign-up-form border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div className="h6 mt-4">Owner Email</div>
                <input
                  type="email"
                  className="form-control sign-up-form border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div className="h6 mt-4">Phone Number</div>
                <input
                  type="email"
                  className="form-control sign-up-form border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                {/*<!-- password -->*/}
                <div className="h6 mt-4">Password</div>
                <input
                  type="password"
                  className="form-control sign-up-form border-0"
                  id="exampleInputPassword1"
                />

                {/*<!-- submit button -->*/}
                <div className="d-grid gap-2 col-11 mx-auto mt-5">
                  <button
                    className="btn btn-primary border-0 rounded-pill p-3 fw-bold"
                    type="button"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                    }}
                    onClick={toVendorDash}
                  >
                    Sign up
                  </button>
                </div>
                <div className="p mt-3">
                  By signing up an account you accept
                  <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="landingBgMobile pt-5 d-lg-none">
        <nav className="d-flex justify-content-between">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <a href="index.html">
                  <img
                    src="images/easymunch logo png 1.png"
                    alt=""
                    width="100px"
                    className="img-fluid ms-lg-5 ms-4"
                  />
                </a>
              </div>
              <div className="col-6 text-white pt-4 pe-5 justify-content-end d-none d-md-flex">
                <a href="index.html" style={{ color: "white" }}>
                  <small>Back to Home Page</small>
                </a>
              </div>

              <div className="col-6 d-flex justify-content-end">
                <a className="btn d-md-none bg-light mt-4 rounded-pill me-1">
                  <small className="fw-bold">Register as Vendor</small>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row me-5 pb-5 mt-5">
            <div className="col-12 col-lg-6 ps-lg-5 pt-lg-5 mt-lg-5 pe-lg-5 mx-3 mx-lg-0">
              <h1
                className="h1 col-12 col-md-7 text-white fw-bold mt-5"
                style={{ fontSize: "30px" }}
              >
                Delivery to your customers <br />
                <span
                  style={{
                    backgroundColor: "black",
                  }}
                >
                  with ease!
                </span>
              </h1>
              <div className="p text-white col-12 col-md-6 mt-4 mt-md-5 mb-5">
                Easymunch Ltd platform gives you the flexibility, visibility and
                customer insights you need to connect with more customers.
                Partner with us today.
              </div>
              <div className="h5 text-white mt-5 pt-md-5">
                <span
                  className="p-lg-1"
                  style={{
                    backgroundColor: "black",
                  }}
                >
                  Join Restaurants Favorite delivery Partner
                </span>
              </div>
              {/*<!-- partner resturants images -->*/}
              <div className="row pt-5">
                <div className="col">
                  <img
                    src="images/ed25389d-39fa-415d-acf7-e46d017d1b93_large-removebg-preview 1.png"
                    alt=""
                    className="img-fluid mt-4"
                  />
                </div>
                <div className="col">
                  <img
                    src="images/download-removebg-preview 1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col">
                  <img
                    src="images/147f3d55-e9f8-45cd-89fa-cd9d40f98e9e_large-removebg-preview 1.png"
                    alt=""
                    className="img-fluid mt-4"
                  />
                </div>
                <div className="col">
                  <img
                    src="images/download__1_-removebg-preview 1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/*<!-- form -->*/}
            <div
              className="col-6 d-none d-lg-block px-5 py-5 rounded"
              style={{ backgroundColor: "white" }}
            >
              <form action="">
                <div className="h5 fw-bold">REGISTER YOUR RESTAURANT</div>
                {/*<!-- resturant name input -->*/}
                <div className="h6 mt-5">Restaurant Name</div>
                <input
                  type="email"
                  className="form-control sign-up-form border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                {/*<!--restaurant address input -->*/}
                <div className="h6 mt-4">Restaurant Address</div>
                <input
                  type="email"
                  className="form-control sign-up-form border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />

                {/*<!-- personal details input -->*/}
                <div className="p mt-5">Personal Details</div>
                <div className="h6 mt-4">Owner Name</div>
                <input
                  type="email"
                  className="form-control sign-up-form border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div className="h6 mt-4">Owner Email</div>
                <input
                  type="email"
                  className="form-control sign-up-form border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div className="h6 mt-4">Phone Number</div>
                <input
                  type="email"
                  className="form-control sign-up-form border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                {/*<!-- password -->*/}
                <div className="h6 mt-4">Password</div>
                <input
                  type="password"
                  className="form-control sign-up-form border-0"
                  id="exampleInputPassword1"
                />

                {/*<!-- submit button -->*/}
                <div className="d-grid gap-2 col-11 mx-auto mt-5">
                  <button
                    className="btn btn-primary border-0 rounded-pill p-3 fw-bold"
                    type="button"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                    }}
                    onClick={toVendorDash}
                  >
                    Sign up
                  </button>
                </div>
                <div className="p mt-3">
                  By signing up an account you accept
                  <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="fs-24-real fw-bold pt-5 ps-3 ps-md-5 pb-3">
            Why Partner with Us ?
          </div>
          <div className="row ">
            <div className="col-12 col-lg-4">
              <div className="card border-0 mb-5" id="bgVisibility"></div>
              <div className="ps-3 ps-md-5">
                <span className="fw-bold h4 ">Boost your visibility</span>
                <span className="fs-14">
                  {" "}
                  <br />
                  Stand out with in-app marketing to reach even more customers
                  and increase sales.
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-4 pt-4 pt-md-0">
              <div className="card border-0 mb-5" id="bgBusiness"></div>
              <div className="ps-3 ps-md-5">
                <span className="fw-bold h4">For businesses big and small</span>
                <span className="fs-14">
                  {" "}
                  <br />
                  Stand out with in-app marketing to reach even more customers
                  and increase sales.
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-4 pt-4 pt-md-0">
              <div className="card border-0 mb-5" id="bgCosturmers"></div>
              <div className="ps-3 ps-md-5">
                <span className="fw-bold h4">Connect with customers</span>
                <span className="fs-14">
                  {" "}
                  <br />
                  Turn customers into regulars with actionable data insights,
                  respond to reviews or offer a loyalty program.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container-fluid mt-5"
          style={{ backgroundColor: "#040404" }}
        >
          <div className="row pt-5 pt-lg-0 pb-lg-0 pb-5">
            <div className="col-8 col-lg-4">
              <div className="h3 mt-1 p-lg-5 text-white">
                "EasyMunch extends our brand awareness to neighborhoods that
                wouldn't normally be exposed to us."
              </div>
              <div className="h5 pt-2 pt-lg-5 ps-lg-5 text-white">
                <small>Jason Doe</small>
              </div>
              <div className="h6 ps-lg-5 text-muted">
                <small>Manager, Chicken Republic</small>
              </div>
            </div>
            <div className="col-4 col-lg-8">
              <img
                src="images/unsplash_e5Q5vWO55uU.png"
                alt=""
                className="p-lg-5 img-fluid d-none d-lg-block"
              />
              <img
                src="images/unsplash_e5Q5vWO55uUcropped.png"
                alt=""
                className="img-fluid d-lg-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid px-md-5 px-3 mt-5">
          <div className="row">
            <div className="col-12 col-md-10">
              <div className="h2 fw-bold">
                How EasyMunch works <br />
                in 3 simple steps
              </div>
            </div>
            {/*<!-- carousel indicating steps Start -->*/}
            <EasyMunchStepsSwiper />
            {/*<!-- carousel indicating steps end -->*/}
          </div>
        </div>
        {/*  */}
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 px-md-5 mt-5">
              <div className="h1 fw-bold">Questions? We've got answers.</div>
            </div>
            <div className="questions px-3 px-lg-5 pt-4">
              <div className="h5 ps-md-5">
                How long does it take to become a partner?
              </div>
              <div className="p px-md-5 questionSegment">
                Depending on how many locations you have, it’s possible to
                become an Uber Eats restaurant partner and start accepting
                orders in just a few days! You can begin the process by signing
                up here. We’re excited to hear from you!
              </div>
              <div className="h5 ps-md-5 pt-2 mt-4">How does pricing work?</div>
              <div className="p px-md-5 questionSegment">
                Easymunch offers professional photo shoot for the restaurants
                meals free of charge. A service fee is calculated as a
                percentage of each restaurant order made through Easymunch. Want
                more details? Email us and we’ll get back to you.
              </div>
              <div className="h5 ps-md-5 mt-4">Who handles each delivery?</div>
              <div className="p px-md-5 questionSegment">
                The Easymunch platform can connect you with independent drivers
                who deliver to your customers. Because of the network of
                delivery people using the Easymunch platform, restaurants don’t
                have to keep their own delivery staff. But if you do have your
                own staff, we’re flexible—you can use them too. Reach out to us.
              </div>
              <div className="h5 ps-md-5 mt-4">
                What is the delivery radius?
              </div>
              <div className="p px-md-5 questionSegment">
                This varies from city to city. We can assess delivery coverage
                and your location to help define the right area for your
                restaurant.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default BecomeVendor;
