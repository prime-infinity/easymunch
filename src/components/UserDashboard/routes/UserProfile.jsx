function UserProfile() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="card border-0 shadow-n px-md-4 px-2 py-5 br-theme bg-white">
            <div className="px-2 mb-4">
              <span className="h4 fw-bold">Edit profile</span>
            </div>
            {/*<!-- name -->*/}
            <div className="mb-4 px-2">
              <label htmlFor="useerName" className="form-label fs-16">
                Name
              </label>
              <input
                type="text"
                className="form-control input-n-medium sign-up-form"
                aria-describedby="emailHelp"
              />
            </div>

            {/*<!-- email address -->*/}
            <div className="mb-4 mt-2 px-2">
              <label htmlFor="exampleInputEmail1" className="form-label fs-16">
                Email
              </label>
              <input
                type="email"
                className="form-control input-n-medium sign-up-form"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            {/*<!-- phone nmber -->*/}
            <div className="mb-4 mt-2 px-2">
              <label htmlFor="exampleInputEmail1" className="form-label fs-16">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control input-n-medium sign-up-form"
                aria-describedby="emailHelp"
              />
            </div>
            {/*<!-- password -->*/}
            <div className="mb-4 mt-2 px-2">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label fs-16"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control input-n-medium sign-up-form"
                id="exampleInputPassword1"
              />
            </div>
            {/*<!-- save button -->*/}
            <div className="row pt-4 mt-2 px-2">
              <div className="col-12">
                <button
                  className="w-100  py-3 br-theme bg-dark text-white  border-0"
                  type="button"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-5 mt-md-0">
          <div className="card border-0 shadow-n px-md-4 px-2 py-5 br-theme bg-white">
            <div className="px-2 mb-4">
              <span className="h4 fw-bold">Delivery address</span>
            </div>

            <div className="px-3">
              <div className="row">
                <div className="col-12 ps-0 mb-2">
                  <span className="h6 text-muted-n fw-bold">Recently Used</span>
                </div>
              </div>
              <div className="row mb-4 bg-theme py-3 br-theme">
                <div className="col-10 text-muted-n">
                  <span>
                    Country home,Benin Sapele Road, Benin City,Edo State
                  </span>
                </div>
                <div className="col-2 text-center my-auto">
                  <img
                    src="/images/userprofile/cancel.png"
                    className="img-fluid"
                    style={{ width: "20px" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="row mb-4 bg-theme py-3 br-theme">
                <div className="col-10 text-muted-n">
                  <span>
                    Country home,Benin Sapele Road, Benin City,Edo State
                  </span>
                </div>
                <div className="col-2 text-center my-auto">
                  <img
                    src="/images/userprofile/cancel.png"
                    className="img-fluid"
                    style={{ width: "20px" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="row mb-4 bg-theme py-3 br-theme">
                <div className="col-10 text-muted-n">
                  <span>
                    Country home,Benin Sapele Road, Benin City,Edo State
                  </span>
                </div>
                <div className="col-2 text-center my-auto">
                  <img
                    src="/images/userprofile/cancel.png"
                    className="img-fluid"
                    style={{ width: "20px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
