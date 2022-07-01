import { Outlet } from "react-router-dom";

function Vendor() {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div
						class="col-2 d-none d-lg-block"
						style={{
							backgroundColor: "#f7f7f7",
							height: "100vh",
						}}
					>
						<div class="row pt-5 mt-5 px-3">
							<div class="col-12 mt-5 pt-5 opacity-03">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="svg-icon"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
								</svg>
								<span class="ps-3 fs-20">
									My Resturant
								</span>
							</div>
							<div class="col-lg-12 mt-3 opacity-03">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="svg-icon"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
								</svg>
								<span class="ps-3 fs-20">
									Live Orders
								</span>
							</div>
							<div class="col-lg-12 mt-3 opacity-03">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="svg-icon"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
								</svg>
								<span class="ps-3 fs-20">
									All Orders
								</span>
							</div>
							<div class="col-lg-12 mt-3 opacity-03">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="svg-icon"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
								</svg>
								<span class="ps-3 fs-20">Menu</span>
							</div>
							<div class="col-lg-12 mt-3 opacity-03">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="svg-icon"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
								</svg>
								<span class="ps-3 fs-20">Coupon</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Outlet />
		</>
	);
}
export default Vendor;
