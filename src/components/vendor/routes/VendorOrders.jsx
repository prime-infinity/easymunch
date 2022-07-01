import "./order-assets/style.css";
import { ChevronDown } from "./order-assets/icons";

function VendorOrders() {
	return (
		<div className="col-12 col-lg-10 d-lg-block testing">
			<div
				className=" flex-nowrap example testing-child"
				style={{ overflowX: "scroll" }}
			>
				<div className=" pt-5 px-md-5 ps-3 ">
					{/*  */}
					{/* FIRST TABLE */}
					<table className="table d-none d-lg-inline" style={{}}>
						<thead className="">
							<tr className="">
								<th
									scope="col"
									className="border-0 py-3 col-2"
								>
									Date from
								</th>
								<th
									scope="col"
									className="border-0 py-3 col-2"
								>
									Date to
								</th>
								<th
									scope="col"
									className="border-0 py-3 col-2"
								>
									Last Status
								</th>
								<th
									scope="col"
									className="border-0 py-3 col-2"
								>
									Payment Status
								</th>
								<th
									scope="col"
									className="border-0 py-3"
								>
									Client
								</th>
								<th
									scope="col"
									className="border-0 py-3"
								>
									Driver
								</th>
							</tr>
						</thead>
						<tbody className="">
							{[1].map((item, index) => (
								<tr key={index} className="">
									<td
										className="fs-14 "
										// style={{ maxWidth: "2rem" }}
									>
										<div className="text-data date-from">
											<span>Tue, 8 Jan</span>
											<span>
												<ChevronDown />
											</span>
										</div>
									</td>
									<td
										className="fs-14 "
										// style={{ maxWidth: "2rem" }}
									>
										<div className="text-data second">
											<span>Tue, 8 Jan</span>
											<span>
												<ChevronDown />
											</span>
										</div>
									</td>
									<td
										className="fs-14 "
										// style={{ maxWidth: "2rem" }}
									>
										<div className="text-data third">
											<span>
												Accepted by Admin
											</span>
											<span>
												<ChevronDown />
											</span>
										</div>
									</td>
									<td
										className="fs-14 "
										// style={{ maxWidth: "2rem" }}
									>
										<div className="text-data first">
											<span>Paid</span>
											<span>
												<ChevronDown />
											</span>
										</div>
									</td>
									<td
										className="fs-14 "
										// style={{ maxWidth: "2rem" }}
									>
										<div className="text-data first">
											<span>Jason Obalo</span>
											<span>
												<ChevronDown />
											</span>
										</div>
									</td>
									<td
										className="fs-14 "
										// style={{ maxWidth: "2rem" }}
									>
										<div className="text-data first">
											<span>
												Featured Logistics
											</span>
											<span>
												<ChevronDown />
											</span>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					{/*  */}
					<th
						className="ps-3 py-3 d-none d-lg-block"
						scope="row"
					>
						<span
							className="text-white apply"
							style={{
								fontSize: "12px",
								fontWeight: "100",
								borderRadius: "8px",
							}}
						>
							Apply
						</span>
					</th>
					{/*  */}

					<table
						className="table table-hover"
						style={{
							width: "100%",
						}}
					>
						<thead
							className="profile-table-head"
							// HERE
						>
							<tr className="">
								<th
									scope="col"
									className="border-0 py-3 ps-5 col-2"
								>
									ID
								</th>
								<th
									scope="col"
									className="border-0 py-3 col-2"
								>
									Created
								</th>
								<th
									// scope="col"
									className="border-0 py-3 col-2 text-nowrap table-row "
								>
									<div className="">Time Slot</div>
								</th>

								<th
									// scope="col"
									className="border-0 py-3 col-2 text-nowrap table-row "
								>
									<div className="">Action</div>
								</th>
								<th
									// scope="col"
									className="border-0 py-3 col-2 text-nowrap table-row "
								>
									<div className="">Method</div>
								</th>
								<th
									// scope="col"
									className="border-0 py-3 col-2 text-nowrap table-row "
								>
									<div className="">Last Status</div>
								</th>
							</tr>
						</thead>
						<tbody>
							{[1].map((item, index) => (
								<tr
									key={index}
									style={{
										verticalAlign: "middle",
									}}
								>
									<th
										className="ps-3 py-3"
										scope="row"
									>
										<span
											className="id bg-dark text-white"
											style={{
												fontSize: "8px",
											}}
										>
											#ADX46V
										</span>
									</th>
									<td className="py-4 fs-13">
										Thurs, June 24, 2021 10:06 AM
									</td>
									<td className="py-4 fs-13">
										<div className="">
											10:40 AM - 11:20 AM
										</div>
									</td>
									<td
										className="py-4 fs-13 fw-bold flex"
										id="action"
									>
										{" "}
										<div className="">
											<span
												className="action text-white"
												style={{
													fontSize:
														"8px",
													backgroundColor:
														"#4CAF50",
												}}
											>
												ACCEPT
											</span>
											<span
												className="action text-white"
												style={{
													fontSize:
														"8px",
													backgroundColor:
														"#FF0A0A",
												}}
											>
												REJECT
											</span>
										</div>
									</td>

									<td
										className="py-3 "
										style={{
											verticalAlign: "center",
										}}
									>
										{" "}
										<div className="">
											<span className="delivery-style method-delivery">
												Delivery
											</span>
										</div>
									</td>
									<td className="py-3 mt-3">
										<div className="">
											<span className="accepted-style status-accepted">
												Accepted by Admin
											</span>
										</div>
									</td>
								</tr>
							))}
							{[1].map((item, index) => (
								<tr
									key={index}
									style={{
										verticalAlign: "middle",
									}}
								>
									<th
										className="ps-3 py-3"
										scope="row"
									>
										<span
											className="id bg-dark text-white"
											style={{
												fontSize: "8px",
											}}
										>
											#ADX46V
										</span>
									</th>
									<td className="py-4 fs-13">
										Thurs, June 24, 2021 10:06 AM
									</td>
									<td className="py-4 fs-13">
										<div className="">
											10:40 AM - 11:20 AM
										</div>
									</td>
									<td
										className="py-4 fs-13 fw-bold flex"
										id="action"
									>
										<div className="">
											<span
												className="action-prepared text-white"
												style={{
													fontSize:
														"8px",
													backgroundColor:
														"#1976D2",
												}}
											>
												PREPARED
											</span>
										</div>
									</td>

									<td
										className="py-3 "
										style={{
											verticalAlign: "center",
										}}
									>
										<div className="">
											<span className="delivery-style method-delivery">
												Pick-up
											</span>
										</div>
									</td>
									<td className="py-3 mt-3">
										<div className="">
											<span className=" status-rejected">
												Rejected
											</span>
										</div>
									</td>
								</tr>
							))}
							{[1].map((item, index) => (
								<tr
									key={index}
									style={{
										verticalAlign: "middle",
									}}
								>
									<th
										className="ps-3 py-3"
										scope="row"
									>
										<span
											className="id bg-dark text-white"
											style={{
												fontSize: "8px",
											}}
										>
											#ADX46V
										</span>
									</th>
									<td className="py-4 fs-13">
										Thurs, June 24, 2021 10:06 AM
									</td>
									<td className="py-4 fs-13">
										<div className="">
											10:40 AM - 11:20 AM
										</div>
									</td>
									<td
										className="py-4 fs-13  flex"
										id="action"
									>
										<div className="">
											NO ACTIONS RIGHT NOW!
										</div>
									</td>

									<td
										className="py-3 "
										style={{
											verticalAlign: "center",
										}}
									>
										<div className="">
											<span className="delivery-style method-delivery">
												Pick-up
											</span>
										</div>
									</td>
									<td className="py-3 mt-3">
										<div className="">
											<span className=" status-prepared">
												Prepared
											</span>
										</div>
									</td>
								</tr>
							))}
							{[1].map((item, index) => (
								<tr
									key={index}
									style={{
										verticalAlign: "middle",
									}}
								>
									<th
										className="ps-3 py-3"
										scope="row"
									>
										<span
											class="id bg-dark text-white"
											style={{
												fontSize: "8px",
											}}
										>
											#ADX46V
										</span>
									</th>
									<td className="py-4 fs-13">
										Thurs, June 24, 2021 10:06 AM
									</td>
									<td className="py-4 fs-13">
										<div className="">
											10:40 AM - 11:20 AM
										</div>
									</td>
									<td
										className="py-4 fs-13 fw-bold flex"
										id="action"
									>
										<div className="">
											<span
												className="action text-white"
												style={{
													fontSize:
														"8px",
													backgroundColor:
														"#4CAF50",
												}}
											>
												ACCEPT
											</span>
											<span
												className="action text-white"
												style={{
													fontSize:
														"8px",
													backgroundColor:
														"#FF0A0A",
												}}
											>
												REJECT
											</span>
										</div>
									</td>

									<td
										className="py-3 "
										style={{
											verticalAlign: "center",
										}}
									>
										<div className="">
											<span className="delivery-style method-delivery">
												Delivery
											</span>
										</div>
									</td>
									<td className="py-3 mt-3">
										<div className="">
											<span className="status-assigned">
												Assigned to Driver
											</span>
										</div>
									</td>
								</tr>
							))}
							{[1].map((item, index) => (
								<tr
									key={index}
									style={{
										verticalAlign: "middle",
									}}
								>
									<th
										className="ps-3 py-3"
										scope="row"
									>
										<span
											className="id bg-dark text-white"
											style={{
												fontSize: "8px",
											}}
										>
											#ADX46V
										</span>
									</th>
									<td className="py-4 fs-13">
										Thurs, June 24, 2021 10:06 AM
									</td>
									<td className="py-4 fs-13">
										<div className="">
											10:40 AM - 11:20 AM
										</div>
									</td>
									<td
										className="py-4 fs-13  flex"
										id="action"
									>
										<div className="">
											NO ACTIONS RIGHT NOW!
										</div>
									</td>

									<td
										className="py-3 "
										style={{
											verticalAlign: "center",
										}}
									>
										<div className="">
											<span className="delivery-style method-delivery">
												Delivery
											</span>
										</div>
									</td>
									<td className="py-3 mt-3">
										<div className="">
											<span className=" status-prepared">
												Accepted by Vendor
											</span>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default VendorOrders;
