<div
  className="col-12 col-lg-10 flex-nowrap example"
  style={{ overflowY: "scroll", height: "100vh" }}
>
  <div className="row flex-nowrap example" style={{ overflowX: "scroll" }}>
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
              <td className="fs-14 ">Thurs, June 24, 2021 10:06 AM</td>
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
              <td className="fs-14 ">Thurs, June 24, 2021 10:06 AM</td>
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
              <td className="fs-14 ">Thurs, June 24, 2021 10:06 AM</td>
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
</div>;
