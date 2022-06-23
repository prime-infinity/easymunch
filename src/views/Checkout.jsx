import "./Checkout.css";

function Checkout() {
	return (
		<div class="container-fluid w-lg-100">
			<div class="row d-block d-lg-flex upper-div">
				<div
					class="col-12 col-lg-6 example ps-3 pr-0 pr-lg-3 flex-nowrap"
					style="overflow-y: scroll; height: 100vh"
				>
					<div class="d-flex w-30 w-lg-100 justify-content-between justify-content-lg-start align-items-center">
						<div class="d-flex d-lg-none align-items-center">
							<img
								src="./Assets/check-out-icon.png"
								alt=""
								class="me-3"
								style="height: 35%"
							/>
							<img
								src="./Assets/check-out-font.png"
								alt=""
								style="height: 35%"
							/>
						</div>
						<a
							href="vendorPage.html"
							class="mt-4 mb-3 w-30 w-lg-100 text-white py-2 btn"
							style="
								background-color: black;
								font-size: 12px;
							"
						>
							Continue Shoping
						</a>
					</div>
					<h3
						class="text-uppercase mb-0 translate-right w-50"
						style="font-weight: 800"
					>
						Woods By Road Runners
					</h3>
					<p
						class="translate-right location"
						style="color: #979797; font-size: 14px"
					>
						<img
							src="./Assets/Vector location.png"
							width="11px"
							alt=""
						/>
						<span class="pe-1">
							107 Boundary Road, GRA Benin City
						</span>
					</p>
					{/* <!-- pick up and delivery  --> */}
					<div
						class="mt-4 mb-3 p-0 col-8 rounded-pill fw-bold d-grid delivery"
						style="background-color: #f7f7f7"
					>
						<div class="row p-1 ps-3">
							<div
								class="col-6 py-1 text-center rounded-pill"
								style="background-color: white"
							>
								<a href="" style="color: black">
									Delivery
								</a>
							</div>
							<div class="col-6 text-center py-1">
								<a href="" style="color: black">
									Pick-Up
								</a>
							</div>
						</div>
					</div>

					{/* <!-- comment section --> */}
					<div class="row me-0 me-lg-5 pt-3">
						<div class="col-12 col-lg-9">
							<div class="mb-3">
								<label
									for="exampleFormControlTextarea1"
									class="form-label mb-1"
								>
									<span>
										<img
											src="/Assets/comment-vector.png"
											class="mb-1"
											width="19px"
											alt=""
										/>
									</span>
									<span class="fw-bold flex-nowrap align-items-center">
										<img
											src="./Assets/comment-vector.png"
											alt=""
										/>
										<span> Comment </span>
									</span>
								</label>
								<textarea
									class="form-control border-0 text-area"
									id="exampleFormControlTextarea1"
									rows="5"
									style="background-color: #f7f7f7"
									placeholder="leave instructions for delivery..."
								></textarea>
							</div>
						</div>
					</div>

					{/* <!-- your order --> */}
					<div class="row ps-2 pt-2">
						<div
							class="p text-capitalize fw-bold ps-0"
							style="font-size: 20px"
						>
							your order
						</div>
						<div class="col-6 pt-4">
							<div class="row">
								<div class="col-4 ps-0 pe-0">
									<img
										src="./Assets/cart-hover-function.png"
										alt=""
										class="img-fluid"
									/>
								</div>
								<div class="col-8 text-uppercase">
									<div
										class="h6 fw-bold mb-1"
										style="font-size: 14px"
									>
										Carlitos Way Special
									</div>
									<p class="p small-cart-text mb-0 fw-bold">
										oPTIONS
									</p>
									<p class="medium-cart-text mb-0 fw-bold mb-3">
										chICKEN X cOKE X cUPCAKES
									</p>
									<p class="small-cart-text mb-0 fw-bold">
										extras
									</p>
									<p class="medium-cart-text fw-bold">
										sALAD X lARGE CHIPS X PLANTAIN
										(DICED)
									</p>
								</div>
							</div>
						</div>
						<div class="col-3">
							<div
								class="p text-end pe-5 ps-2 fw-bold pe-0 mt-5"
								style="font-size: 12px"
							>
								5X
							</div>
						</div>
					</div>
					{/* <!-- another order item --> */}
					<div class="row ps-2 pt-1">
						<div class="col-6 pt-3">
							<div class="row">
								<div class="col-4 ps-0 pe-0">
									<img
										src="./Assets/cart-hover-function.png"
										alt=""
										class="img-fluid"
									/>
								</div>
								<div class="col-8 text-uppercase">
									<div
										class="h6 fw-bold mb-1"
										style="font-size: 14px"
									>
										Carlitos Way Special
									</div>
									<p class="p small-cart-text mb-0 fw-bold">
										oPTIONS
									</p>
									<p class="medium-cart-text mb-0 fw-bold mb-3">
										chICKEN X cOKE X cUPCAKES
									</p>
									<p class="small-cart-text mb-0 fw-bold">
										extras
									</p>
									<p class="medium-cart-text fw-bold">
										sALAD X lARGE CHIPS X PLANTAIN
										(DICED)
									</p>
								</div>
							</div>
						</div>
						<div class="col-3">
							<div
								class="p text-end pe-5 ps-2 fw-bold pe-0 mt-5"
								style="font-size: 12px"
							>
								5X
							</div>
						</div>
					</div>
				</div>

				{/* <!-- static column --> */}
				<div
					class="col-12 col-lg-6 ps-5 pt-5 pe-5 example-2"
					style="background-color: #e9e9e9; height: 100vh"
				>
					<h5 class="h5 fw-bold mt-4">Order Breakdown</h5>
					<div class="row pb-5 me-5 pe-5">
						<div class="col-12 pt-3 d-flex justify-content-between">
							<span>Subtotal</span>
							<span
								style="
									font-size: 15px;
									font-weight: 600;
								"
							>
								₦ 9,000.00
							</span>
						</div>

						<div class="col-12 pt-3 d-flex justify-content-between">
							<span>Taxes & Fees</span>
							<span
								style="
									font-size: 15px;
									font-weight: 600;
								"
							>
								₦ 9,000.00
							</span>
						</div>

						<div class="col-12 pb-5 pt-3 d-flex justify-content-between">
							<span>Delivery Charge</span>
							<span
								style="
									font-size: 15px;
									font-weight: 600;
								"
							>
								₦ 9,000.00
							</span>
						</div>

						{/* <!-- horizontal rule--> */}
						<hr />

						<div class="col-12 fw-bold d-flex justify-content-between">
							<span style="font-size: 19px">Total</span>
							<span style="font-size: 19px">
								₦ 9,000.00
							</span>
						</div>
					</div>

					<h5 class="h5 fw-bold">
						<span>
							<img
								src="./Assets/verified-tick.svg"
								class="mb-1"
								alt=""
							/>
						</span>
						Place Order
					</h5>
					<form action="">
						<div class="mb-4 col-9">
							<input
								type="email"
								placeholder=" Use Vouvher/Coupons Here "
								class="form-control border-0"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>

						<a
							href="#"
							class="mt-2 d-grid fw-bold py-2 col-12 btn place-order-input"
						>
							<span style="font-size: 16px">
								<img
									src="./Assets/cash-pay.svg"
									class="mb-1"
									alt=""
								/>
								Cash On Delivery
							</span>
						</a>

						<a
							href="#"
							class="mt-2 d-grid fw-bold py-2 col-12 btn place-order-input"
						>
							<span style="font-size: 16px">
								<img
									src="./Assets/card-pay.svg"
									class="mb-1"
									alt=""
								/>
								Pay with Card
							</span>
						</a>

						<div class="p mt-1" style="font-size: 11px">
							By Placing an order you agree with EasyMunch
							Ltd user
							<a href="termsAndCondition.html">
								Terms & Conditions
							</a>
							as well as our <a href="">Refund policy</a>.
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
export default Checkout;
