import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Register() {
  return (
    <div>
      <div className="container-fluid">
        <div className="h3 fw-bold text-center mt-5">Sign Up</div>
        <div className="p text-primary text-center mt-5">
          <span className="p-4 border-r-5px border">
            <img
              src="images/flat-color-icons_google.png"
              alt=""
              className="img-fluid mb-1 p-1"
            />
            Sign Up With Google
          </span>
        </div>
        {/*<!-- horizontal line with OR -->*/}
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-11 col-md-8 col-lg-5">
            <div className="row ms-3 pt-4">
              <div className="col-5 ps-md-3 ps-0">
                <hr />
              </div>
              <div className="col-1">
                <p className="p mt-1 text-muted">
                  <small>OR</small>
                </p>
              </div>
              <div className="col-5 pe-md-3 pe-0">
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- inout group -->*/}
      <div className="container mt-5 mb-5">
        <form action="">
          {/*<!-- name -->*/}
          <div className="row d-flex justify-content-center my-4">
            <div className="col-11 col-md-8 col-lg-5">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <span className="h6">Name</span>
              </label>
              <input
                type="email"
                className="form-control p-3 sign-up-form border-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          {/*<!-- email -->*/}
          <div className="row d-flex justify-content-center my-4">
            <div className="col-11 col-md-8 col-lg-5">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <span className="h6"> Email</span>
              </label>
              <input
                type="email"
                className="form-control p-3 sign-up-form border-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          {/*<!-- phone number -->*/}
          <div className="row d-flex justify-content-center my-4">
            <div className="col-11 col-md-8 col-lg-5">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <span className="h6">Phone Number</span>
              </label>
              <input
                type="tel"
                className="form-control p-3 sign-up-form border-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          {/*<!-- password -->*/}
          <div className="row d-flex justify-content-center my-4">
            <div className="col-11 col-md-8 col-lg-5">
              <label htmlFor="inputPassword5" className="form-label">
                <span className="h6">Password</span>
              </label>
              <input
                type="password"
                id="inputPassword5"
                className="form-control p-3 sign-up-form border-0"
                aria-describedby="passwordHelpBlock"
                placeholder=""
              />
            </div>
          </div>
          {/*<!-- submit button -->*/}
          <div className="d-grid gap-2 pt-5 col-11 col-md-8 col-lg-5 mx-auto mt-5">
            <button
              className="btn btn-primary border-0 rounded-pill p-3 fw-bold bg-black text-white"
              type="button"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="p text-center pt-4 mb-5">
          <small>
            Already have an Account ? <Link to="/login">Sign In</Link>
          </small>
        </div>
        <div className="p mt-4 pb-5 text-center text-small px-4">
          <small>
            By signing up an account you accept
            <a href="termsAndCondition.html"> Terms of Use </a> and
            <a href=""> Privacy Policy </a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Register;
