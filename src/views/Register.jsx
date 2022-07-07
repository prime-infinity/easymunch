import { useState } from "react";
import { register } from "../helpers/web";
import { setAuth, saveAuthToLocal } from "../redux/silces/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SignIns from "../ui/SignIns";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Register() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
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

  const registerUser = (e) => {
    e.preventDefault();
    setErrors(null);

    register(formData)
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
      <div className="container-fluid  pt-5 ">
        <SignIns argss={"Up"} />
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
      <div className="container mt-5 mb-5" style={{ minHeight: "100vh" }}>
        <form onSubmit={registerUser}>
          {/*<!-- name -->*/}
          <div className="row d-flex justify-content-center my-4">
            <div className="col-11 col-md-8 col-lg-5">
              <label htmlFor="exampleInputName1" className="form-label">
                <span className="h6">Name</span>
              </label>
              <input
                type="text"
                className="form-control p-3 sign-up-form input-n-medium"
                id="exampleInputName1"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
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
                className="form-control p-3 sign-up-form input-n-medium"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                className="form-control p-3 sign-up-form input-n-medium"
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
                className="form-control p-3 sign-up-form input-n-medium"
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
          <div className="d-grid gap-2 pt-5 col-11 col-md-8 col-lg-5 mx-auto mt-2">
            <button
              className="btn btn-primary br-theme p-3 fw-bold bg-black text-white"
              type="submit"
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
