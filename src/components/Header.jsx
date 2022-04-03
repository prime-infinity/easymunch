/* eslint-disable jsx-a11y/anchor-is-valid */
function Header() {
  return (
    <nav style={{ zIndex: "2", position: "relative" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 mt-1">
            <a>
              <img
                src="images/easymunchlogopng1.png"
                alt="headerlogo"
                width="150px"
                className="img-fluid ps-3 ps-lg-5 mt-1"
              />
            </a>
          </div>
          <div className="col-md-7 col-5"></div>
          <div className="col-md-1 col-3 pe-0 mt-3 mt-lg-0 ms-3 ms-md-5">
            <a className="btn  w-100 rounded-pill mb-5 mb-md-2 mt-md-4 my-auto  bg-white">
              <small>Sign In</small>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
