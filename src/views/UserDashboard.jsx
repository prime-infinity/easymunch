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
              <div class="col-12 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
                </svg>
                <span class="ps-2">back to restaurant</span>
              </div>
              <div class="col-lg-12 mt-3 pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
                </svg>
                <span class="ps-2">log out</span>
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
                <div class="pt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon me-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span>Dashboard</span>
                </div>
                <h5 class="text-muted pt-5">Edit</h5>

                {/* <!--user forms --> */}
                <form action="">
                  {/*<!-- name -->*/}
                  <div class="mb-3 mt-4 pt-2">
                    <label for="useerName" class="form-label fs-13 fw-bold">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control sign-up-form"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  {/*<!-- email address -->*/}
                  <div class="mb-3">
                    <label
                      for="exampleInputEmail1"
                      class="form-label fs-13 fw-bold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control sign-up-form"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  {/*<!-- phone nmber -->*/}
                  <div class="mb-3">
                    <label
                      for="exampleInputEmail1"
                      class="form-label fs-13 fw-bold"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      class="form-control sign-up-form"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  {/*<!-- password -->*/}
                  <div class="mb-3">
                    <label
                      for="exampleInputPassword1"
                      class="form-label fs-13 fw-bold"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control sign-up-form"
                      id="exampleInputPassword1"
                    />
                  </div>
                  {/*<!-- save button -->*/}
                  <div class="row pt-4">
                    <div className="col-12">
                      <button
                        class="w-100 br-theme bg-dark text-white py-3 border-0"
                        type="button"
                      >
                        Save
                      </button>
                    </div>
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
                        class="form-label fs-14"
                        style={{ color: "#979797" }}
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
                  <p class="fs-12 pb-2">
                    tradefair, Ekewan Road, Benin City, Nigeria
                  </p>
                  <p class="fs-12 pb-2">
                    edo street, ekosodin, Benin City, Nigeria
                  </p>
                  <p class="fs-12 pb-2">
                    Country home, Benin Sapele Road, Benin City, Nigeria
                  </p>
                </div>
              </div>
            </div>

            <div
              class="row flex-nowrap example"
              style={{ overflowX: "scroll" }}
            >
              <div class="col-12 pt-5 px-md-5 ps-3">
                <table class="table table-hover" style={{ width: "986px" }}>
                  <thead class="profile-table-head">
                    <tr class="">
                      <th scope="col" class="border-0 py-3 ps-5">
                        ID
                      </th>
                      <th scope="col" class="border-0 py-3">
                        Created
                      </th>
                      <th scope="col" class="border-0 py-3">
                        Time Slot
                      </th>
                      <th scope="col" class="border-0 py-3">
                        Method
                      </th>
                      <th scope="col" class="border-0 py-3">
                        Last Status
                      </th>
                      <th scope="col" class="border-0 py-3">
                        Price
                      </th>
                      <th scope="col" class="border-0 py-3">
                        Delivery
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 3, 4, 5].map((item, index) => (
                      <tr key={index}>
                        <th class="ps-3 py-3" scope="row">
                          <span
                            class="rounded-pill py-2 px-3 bg-dark text-white"
                            style={{ fontSize: "8px" }}
                          >
                            #ADX46V
                          </span>
                        </th>
                        <td class="py-4 fs-13">
                          Thurs, June 24, 2021 10:06 AM
                        </td>
                        <td class="py-4 fs-13">10:40 AM - 11:20 AM</td>
                        <td class="py-3">
                          <span class="delivery-style rounded-pill py-2 px-3">
                            Delivery
                          </span>
                        </td>
                        <td class="py-3 mt-3">
                          <span class="accepted-style rounded-pill py-2 px-3">
                            Accepted by Admin
                          </span>
                        </td>
                        <td class="py-4 fs-13 fw-bold">₦ 3,500.00</td>
                        <td class="py-4 fs-13 fw-bold">₦ 500.00</td>
                      </tr>
                    ))}
                    {[1, 2].map((item, index) => (
                      <tr key={index}>
                        <th class="ps-3 py-3" scope="row">
                          <span
                            class="rounded-pill py-2 px-3 bg-dark text-white"
                            style={{ fontSize: "8px" }}
                          >
                            #ADX46V
                          </span>
                        </th>
                        <td class="py-4 fs-13">
                          Thurs, June 24, 2021 10:06 AM
                        </td>
                        <td class="py-4 fs-13">10:40 AM - 11:20 AM</td>
                        <td class="py-3">
                          <span class="delivery-style rounded-pill py-2 px-3">
                            Delivery
                          </span>
                        </td>
                        <td class="py-3 mt-3">
                          <span class="vendor-accepted-style rounded-pill py-2 px-3">
                            Accepted by Vendor
                          </span>
                        </td>
                        <td class="py-4 fs-13 fw-bold">₦ 3,500.00</td>
                        <td class="py-4 fs-13 fw-bold">₦ 500.00</td>
                      </tr>
                    ))}
                    {[1, 2].map((item, index) => (
                      <tr key={index}>
                        <th class="ps-3 py-3" scope="row">
                          <span
                            class="rounded-pill py-2 px-3 bg-dark text-white"
                            style={{ fontSize: "8px" }}
                          >
                            #ADX46V
                          </span>
                        </th>
                        <td class="py-4 fs-13">
                          Thurs, June 24, 2021 10:06 AM
                        </td>
                        <td class="py-4 fs-13">10:40 AM - 11:20 AM</td>
                        <td class="py-3">
                          <span class="delivery-style rounded-pill py-2 px-3">
                            Delivery
                          </span>
                        </td>
                        <td class="py-3 mt-3">
                          <span class="driver-assigned-style rounded-pill py-2 px-3">
                            Assigned to Driver
                          </span>
                        </td>
                        <td class="py-4 fs-13 fw-bold">₦ 3,500.00</td>
                        <td class="py-4 fs-13 fw-bold">₦ 500.00</td>
                      </tr>
                    ))}

                    {[1, 2].map((item, index) => (
                      <tr key={index}>
                        <th class="ps-3 py-3" scope="row">
                          <span
                            class="rounded-pill py-2 px-3 bg-dark text-white"
                            style={{ fontSize: "8px" }}
                          >
                            #ADX46V
                          </span>
                        </th>
                        <td class="py-4 fs-13">
                          Thurs, June 24, 2021 10:06 AM
                        </td>
                        <td class="py-4 fs-13">10:40 AM - 11:20 AM</td>
                        <td class="py-3">
                          <span class="delivery-style rounded-pill py-2 px-3">
                            Pick up
                          </span>
                        </td>
                        <td class="py-3 mt-3">
                          <span class="rejected-style rounded-pill py-2 px-3">
                            Rejected
                          </span>
                        </td>
                        <td class="py-4 fs-13 fw-bold">₦ 3,500.00</td>
                        <td class="py-4 fs-13 fw-bold">₦ 500.00</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserDashboard;
