
/* eslint-disable jsx-a11y/anchor-is-valid */
function BecomeVendor() {
    return(
        <>
        <section className="landingBg d-none d-lg-block pt-5">
            <div className="container">
        <div className="row me-5 pb-5">
          <div
            className="col-12 col-lg-6 ps-lg-5 pt-lg-5 mt-lg-5 pe-lg-5 mx-3 mx-lg-0"
          >
            <div className="h1 text-white fw-bold mt-5">
              DELIVER TO YOUR COSTURMERS <br />
              <span style={{backgroundColor: "black"}}>WITH EASE!</span>
            </div>
            <div className="p text-white col-12 col-lg-7 mb-5">
              Easymunch Ltd platform gives you the flexibility, visibility and
              customer insights you need to connect with more customers. Partner
              with us today.
            </div>
            <div className="h5 text-white mt-5">
              <span className="p-lg-1" style={{backgroundColor: "black"}}
                >Join Restaurants Favorite delivery Partner</span
              >
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
            style={{backgroundColor: "white"}}
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
                  style={{backgroundColor: "black", color: "white"}}
                >
                  SIGN UP
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
      <section className="landingBgMobile d-lg-none">
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
            <div
              className="col-6 text-white pt-4 pe-5 justify-content-end d-none d-md-flex"
            >
              <a href="index.html" style={{color: "white"}}>
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
          <div
            className="col-12 col-lg-6 ps-lg-5 pt-lg-5 mt-lg-5 pe-lg-5 mx-3 mx-lg-0"
          >
            <h1
              className="h1 col-12 col-md-7 text-white fw-bold mt-5"
              style={{fontSize: "30px"}}
            >
              DELIVER TO YOUR COSTURMERS <br />
              <span style={{backgroundColor: "black"}}>WITH EASE!</span>
            </h1>
            <div className="p text-white col-12 col-md-6 mt-4 mt-md-5 mb-5">
              Easymunch Ltd platform gives you the flexibility, visibility and
              customer insights you need to connect with more customers. Partner
              with us today.
            </div>
            <div className="h5 text-white mt-5 pt-md-5">
              <span className="p-lg-1" style={{backgroundColor: "black"}}
                >Join Restaurants Favorite delivery Partner</span
              >
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
            style={{backgroundColor: "white"}}
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
                  style={{backgroundColor: "black", color: "white"}}
                >
                  SIGN UP
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
      <div className="h1 fw-bold pt-5 ps-3 ps-md-5 pb-3">Why Partner with Us ?</div>
      <div className="container px-lg-5 example" style={{overflowX: "auto"}}>
        <div className="row flex-nowrap">
          <div className="col-12 col-lg-4">
            <div className="card border-0 pt-5 py-5" id="bgVisibility">
              <div className="card-body mt-5">
                <div className="card-title mt-5">
                  <div className="h4 text-white fw-bold">Boost your visibility</div>
                </div>
                <div className="card-text">
                  <div className="p text-white">
                    Stand out with in-app marketing to reach even more customers
                    and increase sales.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card border-0 pt-5 py-5" id="bgBusiness">
              <div className="card-body mt-5">
                <div className="card-title mt-5">
                  <div className="h4 text-white fw-bold px-2">
                    For businesses big and small
                  </div>
                </div>
                <div className="card-text">
                  <div className="p text-white px-2">
                    Stand out with in-app marketing to reach even more customers
                    and increase sales.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card border-0 pt-5 py-5" id="bgCosturmers">
              <div className="card-body mt-5">
                <div className="card-title mt-4">
                  <div className="h4 text-white px-2 fw-bold">
                    Connect with customers
                  </div>
                </div>
                <div className="card-text">
                  <div className="p text-white px-2">
                    Turn customers into regulars with actionable data insights,
                    respond to reviews or offer a loyalty program.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
export default BecomeVendor;
