import React from "react";
import "./BecomeVendor.css";

function BecomeVendor() {
  return (
    <>
      <div className="container pt-3">
        {/* Header and Image */}
        <section className="d-sm-flex mb-5 p-5">
          <div className="delay">
            <div className="fw-bold mb-5 deliver">
              Deliver
              <span className="free">to your customers</span>
              with ease!
            </div>
            {/* commissions */}

            <div>
              <div className="card zero task play h-100">
                <div className="card-body">
                  <h5 className="card-title">0% commission for 12 months !</h5>
                  <p className="card-text">
                    We offer the flexibility, visibility and customer insight
                    you need to connect with more customers. Partner with us
                    today.
                  </p>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control task p-3"
                      placeholder="Restaurant"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control p-3 task"
                      placeholder="Location"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </div>

                  <div className="row mb-5">
                    <div className="input-group mb-3 col">
                      <input
                        type="text"
                        className="form-control p-3 task"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        placeholder="Email"
                      />
                    </div>

                    <div className="input-group mb-3 col">
                      <input
                        type="text"
                        className="form-control p-3 task"
                        placeholder="Contact"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div
                      style={{ backgroundColor: "#040404" }}
                      className="text-center text-light p-2 rounded"
                    >
                      Get Started
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-none d-md-block first ps-5">
            <img
              src="image/standing.png"
              alt=""
              className="img-fluid"
              style={{ zIndex: "-1" }}
            />
          </div>
        </section>

        {/* Reasons */}
        <section className="pt-5">
          <div>
            <h3 className="text-center black fw-bold">Why partner with us ?</h3>
            <div className="d-md-flex flex-column flex-md-row align-items-center justify-content-md-between text-center">
              <div className="mb-5">
                <img
                  src="image/holding the arrow.png"
                  className="img-fluid"
                  alt=""
                />
                <h5 className="fw-bold">Boost your visibility</h5>
                <p className="paragraph px-3">
                  Start out with in-out marketing to reach even more customers
                  and increase sales.
                </p>
              </div>
              <div className="mb-5">
                <img
                  src="image/Shops re-opening soon-amico 1.png"
                  className="img-fluid"
                  alt=""
                />
                <h5 className="fw-bold">For business big and small</h5>
                <p className="paragraph">
                  Stand out with in-app marketing to reach even more customers
                  and increase sales.
                </p>
              </div>
              <div className="mb-5">
                <img
                  src="image/Eating donuts-amico 1.png"
                  className="img-fluid"
                  alt=""
                />
                <h5 className="fw-bold">Connect with customers</h5>
                <p className="paragraph px-3">
                  Turn customers into regulars with actionable data insights,
                  respond to reviews or offer a loyalty program.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Awareness */}
        <section className="mb-5">
          <div className="d-sm-flex justify-content-sm-between">
            <img
              src="image/courage.png"
              alt=""
              className="img-fluid d-none d-sm-block w-50 p-0"
            />
            <img
              src="image/singleman.png"
              alt=""
              className="d-block d-sm-none img-fluid w-100"
            />
            <div className="mt-5">
              <div className="content fs-3 pt-3 p-5 ms-5">
                <span className="appo">"</span>EasyMunch extends our brand
                awareness to neighborhoods that wouldn't normally be exposed to
                us.<span className="appo">"</span>
              </div>
              <div className="px-5 ms-5">
                <p className="mb-0 jason text-end text-sm-start">jason Doe</p>
                <p className="manager text-end text-sm-start">
                  Manager, Chicken Republic
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* List of Restaurants */}
        <section className="d-md-flex justify-content-md-between align-items-center px-4 py-5">
          <div className="mb-5 text-center">{/* in here goes picture*/}</div>
          <div className="text-center">
            <div className="list mx-auto">
              Join over 30 restaurants already on Easymunch
            </div>
            <div
              style={{ backgroundColor: "#040404" }}
              className="text-center text-light p-2 rounded mt-4"
            >
              Get Started
            </div>
          </div>
        </section>
        {/* How it works */}
        <section className="p-2 text-center">
          <div className="mb-5">
            <h2 className="black fw-bold">How EasyMunch Works ?</h2>
          </div>
          <div className="d-md-flex justify-content-between">
            <div className="mb-5">
              <div className="mb-3">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.1451" cy="20" r="20" fill="#F7F7F7" />
                  <path
                    d="M23.2548 10.8V29.4182H19.3185V14.5364H19.2094L14.9457 17.2091V13.7182L19.5548 10.8H23.2548Z"
                    fill="#979797"
                  />
                </svg>
              </div>
              <div className="mb-4">
                <img
                  src="image/customer order.png"
                  alt=""
                  className="p-2 img-fluid"
                />
              </div>
              <h4 className="black fw-bold">Customer Order</h4>
              <div className="paragraph mx-auto">
                A customer finds your restaurant and places an order through the
                EasyMunch Website.
              </div>
            </div>
            <div className="mb-5">
              <div className="mb-3">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.1451" cy="20" r="20" fill="#F7F7F7" />
                  <path
                    d="M13.5271 29.2726V26.4363L20.1544 20.2999C20.718 19.7544 21.1908 19.2635 21.5726 18.8272C21.9605 18.3908 22.2544 17.9635 22.4544 17.5454C22.6544 17.1211 22.7544 16.6635 22.7544 16.1726C22.7544 15.6272 22.6302 15.1575 22.3817 14.7635C22.1332 14.3635 21.7938 14.0575 21.3635 13.8454C20.9332 13.6272 20.4453 13.5181 19.8999 13.5181C19.3302 13.5181 18.8332 13.6332 18.4089 13.8635C17.9847 14.0938 17.6574 14.4241 17.4271 14.8544C17.1968 15.2848 17.0817 15.7969 17.0817 16.3908H13.3453C13.3453 15.1726 13.6211 14.1151 14.1726 13.2181C14.7241 12.3211 15.4968 11.6272 16.4908 11.1363C17.4847 10.6454 18.6302 10.3999 19.9271 10.3999C21.2605 10.3999 22.4211 10.6363 23.4089 11.109C24.4029 11.5757 25.1756 12.2241 25.7271 13.0544C26.2786 13.8848 26.5544 14.8363 26.5544 15.909C26.5544 16.612 26.415 17.306 26.1362 17.9908C25.8635 18.6757 25.3756 19.4363 24.6726 20.2726C23.9695 21.1029 22.9786 22.0999 21.6999 23.2635L18.9817 25.9272V26.0544H26.7999V29.2726H13.5271Z"
                    fill="#979797"
                  />
                </svg>
              </div>
              <div className="mb-4">
                <img
                  src="image/you prepare.png"
                  alt=""
                  className="p-2 img-fluid"
                />
              </div>
              <h4 className="black fw-bold">You Prepare</h4>
              <div className="paragraph mx-auto">
                Your restaurant accepts and prepares the order.
              </div>
            </div>
            <div className="mb-5">
              <div className="mb-3">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.1451" cy="20" r="20" fill="#F7F7F7" />
                  <path
                    d="M20.0087 29.5272C18.6512 29.5272 17.4421 29.2938 16.3815 28.8272C15.3269 28.3544 14.4936 27.706 13.8815 26.8817C13.2754 26.0514 12.9633 25.0938 12.9451 24.009H16.9087C16.933 24.4635 17.0815 24.8635 17.3542 25.209C17.633 25.5484 18.0027 25.812 18.4633 25.9999C18.9239 26.1878 19.4421 26.2817 20.0178 26.2817C20.6178 26.2817 21.1481 26.1757 21.6087 25.9635C22.0693 25.7514 22.4299 25.4575 22.6906 25.0817C22.9512 24.706 23.0815 24.2726 23.0815 23.7817C23.0815 23.2848 22.9421 22.8454 22.6633 22.4635C22.3906 22.0757 21.9966 21.7726 21.4815 21.5544C20.9724 21.3363 20.3663 21.2272 19.6633 21.2272H17.9269V18.3363H19.6633C20.2572 18.3363 20.7815 18.2332 21.236 18.0272C21.6966 17.8211 22.0542 17.5363 22.3087 17.1726C22.5633 16.8029 22.6906 16.3726 22.6906 15.8817C22.6906 15.4151 22.5784 15.006 22.3542 14.6544C22.136 14.2969 21.8269 14.0181 21.4269 13.8181C21.033 13.6181 20.5724 13.5181 20.0451 13.5181C19.5118 13.5181 19.0239 13.6151 18.5815 13.809C18.139 13.9969 17.7845 14.2666 17.5178 14.6181C17.2512 14.9696 17.1087 15.3817 17.0906 15.8544H13.3178C13.336 14.7817 13.6421 13.8363 14.236 13.0181C14.8299 12.1999 15.6299 11.5605 16.636 11.0999C17.6481 10.6332 18.7906 10.3999 20.0633 10.3999C21.3481 10.3999 22.4724 10.6332 23.436 11.0999C24.3996 11.5666 25.1481 12.1969 25.6815 12.9908C26.2209 13.7787 26.4875 14.6635 26.4815 15.6454C26.4875 16.6878 26.1633 17.5575 25.5087 18.2544C24.8603 18.9514 24.0148 19.3938 22.9724 19.5817V19.7272C24.3421 19.9029 25.3845 20.3787 26.0996 21.1544C26.8209 21.9241 27.1784 22.8878 27.1724 24.0454C27.1784 25.106 26.8724 26.0484 26.2542 26.8726C25.6421 27.6969 24.7966 28.3454 23.7178 28.8181C22.639 29.2908 21.4027 29.5272 20.0087 29.5272Z"
                    fill="#979797"
                  />
                </svg>
              </div>
              <div className="mb-4">
                <img
                  src="image/delivery partner.png"
                  alt=""
                  className="p-2 img-fluid"
                />
              </div>
              <h4 className="black fw-bold">Delivery partners arrive.</h4>
              <div className="paragraph mx-auto">
                Delivery people using the EasyMunch platform pick up the order
                from your restaurant, then deliver it to the customer.
              </div>
            </div>
          </div>
        </section>
        {/* FAQs */}
        <section>
          <div>
            <div>
              <h1 className="black fw-bold">Questions?. We've got answers.</h1>
            </div>
            {/* Question1 */}
            <div className="mt-3 mb-4">
              <h5 className="black fw-bold">
                How long does it take to become a partner ?.
              </h5>
              <span className="paragraph">
                Depending on how many locations you have, it’s possible to
                become an Uber Eats restaurant partner and start accepting
                orders in just a few days! You can begin the process by signing
                up here. We’re excited to hear from you!
              </span>
            </div>
            <div className="mb-4">
              <h5 className="black fw-bold">How does pricing work ?.</h5>
              <span className="paragraph">
                Easymunch offers professional photo shoot for the restaurants
                meals free of charge. A service fee is calculated as a
                percentage of each restaurant order made through Easymunch. Want
                more details? Email us and we’ll get back to you.
              </span>
            </div>
            <div className="mb-4">
              <h5 className="black fw-bold">Who handles delivery ?.</h5>
              <span className="paragraph">
                The Easymunch platform can connect you with independent drivers
                who deliver to your customers. Because of the network of
                delivery people using the Easymunch platform, restaurants don’t
                have to keep their own delivery staff. But if you do have your
                own staff, we’re flexible—you can use them too. Reach out to us.
              </span>
            </div>
            <div className="mb-5">
              <h5 className="black fw-bold">What is the delivery radius.</h5>
              <span className="paragraph">
                This varies from city to city. We can assess delivery coverage
                and your location to help define the right area for your
                restaurant.
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default BecomeVendor;
