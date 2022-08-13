<div
            className="col-12 col-lg-10 flex-nowrap example"
            style={{ overflowY: "scroll", height: "100vh" }}
          >
            <div className="row">
              <div className="col-12 col-lg-6 px-md-5 ps-lg-5 px-lg-0">
                <div className="pt-4">
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
                <h5 className="text-muted pt-5">Edit</h5>

                {/* <!--user forms --> */}
                <form action="">
                  {/*<!-- name -->*/}
                  <div className="mb-3 mt-4 pt-2">
                    <label htmlFor="useerName" className="form-label  fw-bold">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control sign-up-form"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  {/*<!-- email address -->*/}
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label  fw-bold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control sign-up-form"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  {/*<!-- phone nmber -->*/}
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label  fw-bold"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control sign-up-form"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  {/*<!-- password -->*/}
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label  fw-bold"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control sign-up-form"
                      id="exampleInputPassword1"
                    />
                  </div>
                  {/*<!-- save button -->*/}
                  <div className="row pt-4">
                    <div className="col-12">
                      <button
                        className="w-100 br-theme bg-dark text-white  border-0"
                        type="button"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-12 col-lg-6 mt-5">
                <div className="address-div mt-lg-5 mt-2 pt-4 ps-lg-4 ps-4 mx-3 mx-lg-4 pb-5">
                  <h5 className="fw-bold">Saved Addresses</h5>
                  <form action="">
                    <div className="mb-3 pe-5">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label fs-14"
                        style={{ color: "#979797" }}
                      >
                        Home address
                      </label>
                      <input
                        type="email"
                        className="form-control border-0"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </form>
                  <p className="fs-12 pb-2">
                    tradefair, Ekewan Road, Benin City, Nigeria
                  </p>
                  <p className="fs-12 pb-2">
                    edo street, ekosodin, Benin City, Nigeria
                  </p>
                  <p className="fs-12 pb-2">
                    Country home, Benin Sapele Road, Benin City, Nigeria
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row flex-nowrap example"
              style={{ overflowX: "scroll" }}
            >
              <div className="pt-5 px-md-5 ps-3">
                <table className="table table-hover table-n">
                  <thead className="profile-table-head">
                    <tr>
                      <th scope="col" className="border-0  ps-5">
                        ID
                      </th>
                      <th scope="col" className="border-0 ">
                        Created
                      </th>
                      <th scope="col" className="border-0 ">
                        Time Slot
                      </th>
                      <th scope="col" className="border-0 ">
                        Method
                      </th>
                      <th scope="col" className="border-0 ">
                        Last Status
                      </th>
                      <th scope="col" className="border-0 ">
                        Price
                      </th>
                      <th scope="col" className="border-0 ">
                        Delivery
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 3, 4, 5].map((item, index) => (
                      <tr key={index}>
                        <td className="ps-3 ">
                          <span className="br-theme fs-12 py-3 px-4 bg-dark text-white">
                            #ADX46V
                          </span>
                        </td>
                        <td className="fs-14">Thurs, June 24, 2021 10:06 AM</td>
                        <td className="fs-14">10:40 AM - 11:20 AM</td>
                        <td className="">
                          <span className="delivery-style fs-12 br-theme py-3 px-4">
                            Delivery
                          </span>
                        </td>
                        <td className=" mt-3">
                          <span className="accepted-style fs-12 br-theme py-3 px-4">
                            Accepted by Admin
                          </span>
                        </td>
                        <td className="fs-14  fw-bold">₦ 3,500.00</td>
                        <td className="fs-14  fw-bold">₦ 500.00</td>
                      </tr>
                    ))}
                    {[1, 2].map((item, index) => (
                      <tr key={index}>
                        <td className="ps-3 ">
                          <span className="br-theme fs-12 py-3 px-4 bg-dark text-white">
                            #ADX46V
                          </span>
                        </td>
                        <td className="fs-14 ">
                          Thurs, June 24, 2021 10:06 AM
                        </td>
                        <td className="fs-14 ">10:40 AM - 11:20 AM</td>
                        <td className="">
                          <span className="delivery-style fs-12 br-theme py-3 px-4">
                            Delivery
                          </span>
                        </td>
                        <td className=" mt-3">
                          <span className="vendor-accepted-style fs-12 br-theme py-3 px-4">
                            Accepted by Vendor
                          </span>
                        </td>
                        <td className="fs-14  fw-bold">₦ 3,500.00</td>
                        <td className="fs-14  fw-bold">₦ 500.00</td>
                      </tr>
                    ))}
                    {[1, 2].map((item, index) => (
                      <tr key={index}>
                        <td className="ps-3 ">
                          <span className="br-theme fs-12 py-3 px-4 bg-dark text-white">
                            #ADX46V
                          </span>
                        </td>
                        <td className="fs-14 ">
                          Thurs, June 24, 2021 10:06 AM
                        </td>
                        <td className="fs-14 ">10:40 AM - 11:20 AM</td>
                        <td className="">
                          <span className="delivery-style fs-12 br-theme py-3 px-4">
                            Delivery
                          </span>
                        </td>
                        <td className=" mt-3">
                          <span className="driver-assigned-style fs-12 br-theme py-3 px-4">
                            Assigned to Driver
                          </span>
                        </td>
                        <td className="fs-14  fw-bold">₦ 3,500.00</td>
                        <td className="fs-14  fw-bold">₦ 500.00</td>
                      </tr>
                    ))}

                    {[1, 2].map((item, index) => (
                      <tr key={index}>
                        <td className="ps-3 ">
                          <span className="br-theme fs-12 py-3 px-4 bg-dark text-white">
                            #ADX46V
                          </span>
                        </td>
                        <td className="fs-14 ">
                          Thurs, June 24, 2021 10:06 AM
                        </td>
                        <td className="fs-14 ">10:40 AM - 11:20 AM</td>
                        <td className="">
                          <span className="delivery-style fs-12 br-theme py-3 px-4">
                            Pick up
                          </span>
                        </td>
                        <td className=" mt-3">
                          <span className="rejected-style fs-12 br-theme py-3 px-4">
                            Rejected
                          </span>
                        </td>
                        <td className="fs-14  fw-bold">₦ 3,500.00</td>
                        <td className="fs-14  fw-bold">₦ 500.00</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>