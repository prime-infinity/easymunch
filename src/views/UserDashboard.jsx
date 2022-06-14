function UserDashboard() {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          {/** nav column */}

          <div
            class="col-2 d-none d-lg-block"
            style={{ backgroundColor: "#f7f7f7", height: "100vh" }}
          >
            <div class="row pt-5 mt-5 px-3">
              <div class="col-12 mt-4">
                <p
                  class="p text-capitalize fw-bold"
                  style={{ fontSize: "15px" }}
                >
                  <img
                    src="Assets/my-profile-vector.svg"
                    class="mb-1"
                    width="14px"
                    alt=""
                  />
                  <span class="ps-2">My Profile</span>
                </p>
              </div>
              <div class="col-12 mt-1">
                <p class="" style={{ fontSize: "14px" }}>
                  <img
                    src="Assets/recent-order-vecto.png"
                    class="mb-1"
                    width="12px"
                    alt=""
                  />
                  <span class="ps-2 fw-bold text-capitalize">
                    back to restaurant
                  </span>
                </p>
              </div>
              <div class="col-lg-12 mt-1 pb-4">
                <p class="" style={{ fontsize: "15px" }}>
                  <img
                    src="Assets/recent-order-vecto.png"
                    class="mb-1"
                    width="14px"
                    alt=""
                  />
                  <span class="ps-2 fw-bold text-capitalize">log out</span>
                </p>
              </div>
              <hr />
            </div>
          </div>
          <div
            class="col-12 col-lg-10 flex-nowrap example"
            style={{ overflowY: "scroll", height: "100vh" }}
          >
            <div class="row">
              <div class="col-12 col-lg-6 px-md-5 ps-lg-5 px-lg-0">
                <div class="h5 pt-4" style={{ fontWeight: "900" }}>
                  <img
                    src="Assets/my-profile-vector.svg"
                    class="mb-1 me-1"
                    alt=""
                  />
                  Profile
                </div>
                <h5 class="text-muted pt-5">Edit</h5>

                {/* <!--user forms --> */}
                <form action="">
                  {/*<!-- name -->*/}
                  <div class="mb-3 mt-4 pt-2">
                    <label for="useerName" class="form-label user-form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control user-form"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  {/*<!-- email address -->*/}
                  <div class="mb-3">
                    <label
                      for="exampleInputEmail1"
                      class="form-label user-form-label"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control user-form"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  {/*<!-- phone nmber -->*/}
                  <div class="mb-3">
                    <label
                      for="exampleInputEmail1"
                      class="form-label user-form-label"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      class="form-control user-form"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  {/*<!-- password -->*/}
                  <div class="mb-3">
                    <label
                      for="exampleInputPassword1"
                      class="form-label user-form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control user-form"
                      id="exampleInputPassword1"
                    />
                  </div>
                  {/*<!-- save button -->*/}
                  <div class="d-grid pt-4">
                    <button
                      class="save-button py-3 border-0 fw-bold"
                      type="button"
                    >
                      SAVE
                    </button>
                  </div>
                </form>
              </div>

              <div class="col-12 col-lg-6 mt-5">
                <div class="address-div mt-lg-5 mt-2 pt-4 ps-lg-4 ps-4 mx-3 mx-lg-4 pb-5">
                  <h5 class="fw-bold">Saved Addresses</h5>
                  <form action="">
                    <div class="mb-3 pe-5">
                      <label
                        for="exampleInputEmail1"
                        class="form-label"
                        style={{ color: "#979797", fontSize: "14px" }}
                      >
                        Home address
                      </label>
                      <input
                        type="email"
                        class="form-control border-0"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </form>
                  <p class="address-text pb-2">
                    tradefair, Ekewan Road, Benin City, Nigeria
                  </p>
                  <p class="address-text pb-2">
                    edo street, ekosodin, Benin City, Nigeria
                  </p>
                  <p class="address-text pb-2">
                    Country home, Benin Sapele Road, Benin City, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserDashboard;
