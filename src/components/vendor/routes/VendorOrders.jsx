import "./order-assets/style.css";
import { ChevronDown } from "./order-assets/icons";

function VendorOrders() {
	return (
		<div className="col-10 d-none d-lg-block testing">
			<div
				class=" flex-nowrap example"
				style={{ overflowX: "scroll" }}
			>
				<div class=" pt-5 px-md-5 ps-3 ">
					{/*  */}
					{/* FIRST TABLE */}
					<table class="table" style={{}}>
						<thead class="">
							<tr class="">
								<th
									scope="col"
									class="border-0 py-3 col-2"
								>
									Date from
								</th>
								<th
									scope="col"
									class="border-0 py-3 col-2"
								>
									Date to
								</th>
								<th
									scope="col"
									class="border-0 py-3 col-2"
								>
									Last Status
								</th>
								<th
									scope="col"
									class="border-0 py-3 col-2"
								>
									Payment Status
								</th>
								<th scope="col" class="border-0 py-3">
									Client
								</th>
								<th scope="col" class="border-0 py-3">
									Driver
								</th>
							</tr>
						</thead>
						<tbody className="">
							{[1].map((item, index) => (
								<tr key={index} className="">
									<td
										class="fs-14 "
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
										class="fs-14 "
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
										class="fs-14 "
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
										class="fs-14 "
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
										class="fs-14 "
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
										class="fs-14 "
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
					<th class="ps-3 py-3" scope="row">
						<span
							class="text-white apply"
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
						class="table table-hover"
						style={{ width: "100%" }}
					>
						<thead class="profile-table-head">
							<tr class="">
								<th
									scope="col"
									class="border-0 py-3 ps-5 col-2"
								>
									ID
								</th>
								<th
									scope="col"
									class="border-0 py-3 col-2"
								>
									Created
								</th>
								<th
									scope="col"
									class="border-0 py-3 col-2"
								>
									Time Slot
								</th>
								<th
									scope="col"
									class="border-0 py-3 col-2"
								>
									Action
								</th>
								<th scope="col" class="border-0 py-3">
									Method
								</th>
								<th
									scope="col"
									class="border-0 py-3 col-2"
								>
									Last Status
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
									<th class="ps-3 py-3" scope="row">
										<span
											class="id bg-dark text-white"
											style={{
												fontSize: "8px",
											}}
										>
											#ADX46V
										</span>
									</th>
									<td class="py-4 fs-13">
										Thurs, June 24, 2021 10:06 AM
									</td>
									<td class="py-4 fs-13">
										10:40 AM - 11:20 AM
									</td>
									<td
										class="py-4 fs-13 fw-bold flex"
										id="action"
									>
										<span
											class="action text-white"
											style={{
												fontSize: "8px",
												backgroundColor:
													"#4CAF50",
											}}
										>
											ACCEPT
										</span>
										<span
											class="action text-white"
											style={{
												fontSize: "8px",
												backgroundColor:
													"#FF0A0A",
											}}
										>
											REJECT
										</span>
									</td>

									<td
										class="py-3 "
										style={{
											verticalAlign: "center",
										}}
									>
										<span class="delivery-style method-delivery">
											Delivery
										</span>
									</td>
									<td class="py-3 mt-3">
										<span class="accepted-style status-accepted">
											Accepted by Admin
										</span>
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
									<th class="ps-3 py-3" scope="row">
										<span
											class="id bg-dark text-white"
											style={{
												fontSize: "8px",
											}}
										>
											#ADX46V
										</span>
									</th>
									<td class="py-4 fs-13">
										Thurs, June 24, 2021 10:06 AM
									</td>
									<td class="py-4 fs-13">
										10:40 AM - 11:20 AM
									</td>
									<td
										class="py-4 fs-13 fw-bold flex"
										id="action"
									>
										<span
											class="action-prepared text-white"
											style={{
												fontSize: "8px",
												backgroundColor:
													"#1976D2",
											}}
										>
											PREPARED
										</span>
									</td>

									<td
										class="py-3 "
										style={{
											verticalAlign: "center",
										}}
									>
										<span class="delivery-style method-delivery">
											Pick-up
										</span>
									</td>
									<td class="py-3 mt-3">
										<span class=" status-rejected">
											Rejected
										</span>
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
									<th class="ps-3 py-3" scope="row">
										<span
											class="id bg-dark text-white"
											style={{
												fontSize: "8px",
											}}
										>
											#ADX46V
										</span>
									</th>
									<td class="py-4 fs-13">
										Thurs, June 24, 2021 10:06 AM
									</td>
									<td class="py-4 fs-13">
										10:40 AM - 11:20 AM
									</td>
									<td
										class="py-4 fs-13  flex"
										id="action"
									>
										NO ACTIONS RIGHT NOW!
									</td>

									<td
										class="py-3 "
										style={{
											verticalAlign: "center",
										}}
									>
										<span class="delivery-style method-delivery">
											Pick-up
										</span>
									</td>
									<td class="py-3 mt-3">
										<span class=" status-prepared">
											Prepared
										</span>
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
									<th class="ps-3 py-3" scope="row">
										<span
											class="id bg-dark text-white"
											style={{
												fontSize: "8px",
											}}
										>
											#ADX46V
										</span>
									</th>
									<td class="py-4 fs-13">
										Thurs, June 24, 2021 10:06 AM
									</td>
									<td class="py-4 fs-13">
										10:40 AM - 11:20 AM
									</td>
									<td
										class="py-4 fs-13 fw-bold flex"
										id="action"
									>
										<span
											class="action text-white"
											style={{
												fontSize: "8px",
												backgroundColor:
													"#4CAF50",
											}}
										>
											ACCEPT
										</span>
										<span
											class="action text-white"
											style={{
												fontSize: "8px",
												backgroundColor:
													"#FF0A0A",
											}}
										>
											REJECT
										</span>
									</td>

									<td
										class="py-3 "
										style={{
											verticalAlign: "center",
										}}
									>
										<span class="delivery-style method-delivery">
											Delivery
										</span>
									</td>
									<td class="py-3 mt-3">
										<span class="status-assigned">
											Assigned to Driver
										</span>
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
									<th class="ps-3 py-3" scope="row">
										<span
											class="id bg-dark text-white"
											style={{
												fontSize: "8px",
											}}
										>
											#ADX46V
										</span>
									</th>
									<td class="py-4 fs-13">
										Thurs, June 24, 2021 10:06 AM
									</td>
									<td class="py-4 fs-13">
										10:40 AM - 11:20 AM
									</td>
									<td
										class="py-4 fs-13  flex"
										id="action"
									>
										NO ACTIONS RIGHT NOW!
									</td>

									<td
										class="py-3 "
										style={{
											verticalAlign: "center",
										}}
									>
										<span class="delivery-style method-delivery">
											Delivery
										</span>
									</td>
									<td class="py-3 mt-3">
										<span class=" status-prepared">
											Accepted by Vendor
										</span>
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
