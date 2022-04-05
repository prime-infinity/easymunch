/* eslint-disable jsx-a11y/anchor-is-valid */
function Wrapper() {
  return (
    <div
      id="bgLanding"
      className=""
      style={{
        position: "absolute",
        top: "0%",
        zIndex: "1",
        width: "100%",
      }}
    >
      <div className="container-fluid pt-md-5">
        <div className="row">
          <div className="pt-5 mt-5 px-4">
            <h1
              className="col-10 col-md-12 h1 text-white ps-lg-4 mt-5"
              style={{ fontEeight: "900", fontSize: "45px" }}
            >
              <span className="fw-bolder">ORDERING MADE EASY!</span>
            </h1>
            <p
              className="text-capitalize pb-md-4 pb-lg-0 mt-md-2 mt-lg-0 text-white ps-lg-4 pt-4"
              style={{ fontSize: "16px" }}
            >
              <span className="p-1" style={{ backgroundColor: "black" }}>
                The meals you love delivered with care !
              </span>
            </p>
          </div>

          <div className="ps-4 gap-2 col-11 col-md-9 col-lg-6 ps-lg-5 py-lg-5 py-2">
            <input
              type="email"
              className="form-control border-0 mb-2 mb-md-5 mb-lg-0 rounded-3 py-3"
              placeholder="Find your meal..."
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          {/**/}
          <div className="col-6 col-md-3 d-lg-flex ps-4 py-md-5">
            <button
              className="btn px-md-5 py-3 py-md-0 w-100"
              type="button"
              style={{ backgroundColor: "#f21b3f" }}
            >
              <small className="text-white fw-bold">Find Your Meal</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
