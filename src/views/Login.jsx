import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="h3 fw-bold text-center mt-5">Sign In</div>
        <div className="p text-primary text-center mt-5">
          <span className="p-4 border-r-5px border">
            <img
              src="images/flat-color-icons_google.png"
              alt=""
              className="img-fluid mb-1 p-1"
            />
            Sign In With Google
          </span>
        </div>
      </div>
      <div className="container">
        <form action="">
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

          {/*<!-- Password -->*/}
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
          <div className="d-grid gap-2 col-11 col-md-8 pt-5 col-lg-5 mx-auto mt-5">
            <button
              className="btn btn-primary border-0 rounded-pill p-3 fw-bold bg-black text-white"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="p text-center pt-4 mb-5">
          <small>
            Don’t have an Account ? <Link to="/register">Sign Up</Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;
