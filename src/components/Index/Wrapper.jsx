/* eslint-disable jsx-a11y/anchor-is-valid */
function Wrapper() {
  return (
    <div
      id="bgLanding"
      className=""
      style={{
        zIndex: "1",
        width: "100%",
      }}
    >
      <div className="container-fluid px-md-4 pt-md-5">
        <div className="row pt-md-5">
          <div className="pt-5 mt-5 px-4">
            <h1 className="col-8 col-md-12 h1 text-white ps-lg-4 mt-5">
              <span className="font-boldest-biggest">Ordering made easy!</span>
            </h1>
            <p className="pb-md-4 pb-lg-0 mt-md-2 mt-lg-0 text-white ps-lg-4 pt-4">
              <span className="the-food" style={{ backgroundColor: "black" }}>
                The food you love delivered with care.
              </span>
            </p>
          </div>

          <div className="ps-4 gap-2 col-11 col-md-9 col-lg-6 ps-lg-5 py-lg-5 py-2">
            <input
              type="email"
              className="form-control input-n-biggest  mb-2 mb-md-5 mb-lg-0"
              placeholder="Find your meal..."
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          {/**/}
          <div className="col-6 col-md-3 d-lg-flex ps-4 py-md-5">
            <button
              className="btn btn-n-medium"
              type="button"
              style={{ backgroundColor: "#f21b3f" }}
            >
              <small className="text-white">Find Your Meal</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
