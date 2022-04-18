import { useState } from "react";
import { login } from "../helpers/web";
import { setAuth, saveAuthToLocal } from "../redux/silces/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleErrors = (e) => {
    e.response?.data ? setErrors(e.response.data) : setErrors(e.message);
  };

  const handleSuccess = (e) => {
    dispatch(setAuth(e));
    dispatch(saveAuthToLocal());

    navigate("/");
  };

  const loginUser = (e) => {
    e.preventDefault();
    setErrors(null);

    login(formData)
      .then((res) => {
        handleSuccess(res);
      })
      .catch((err) => {
        handleErrors(err);
      });
  };

  const errorDiv = <small className="text-danger">{error}</small>;

  return (
    <div>
      <div className="container-fluid mb-5 pt-5 pb-5">
        <div className="h3 fw-bold text-center mt-5 pt-5">Sign In</div>
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
        <form onSubmit={loginUser}>
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
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                placeholder="Password"
                required=""
                data-msg="Please enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="row text-center">
              <div className="col-12">{error ? errorDiv : null}</div>
            </div>
          </div>
          {/*<!-- submit button -->*/}
          <div className="d-grid gap-2 col-11 col-md-8 pt-5 col-lg-5 mx-auto mt-2">
            <button
              className="btn btn-primary border-0 rounded-pill p-3 fw-bold bg-black text-white"
              type="submit"
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
