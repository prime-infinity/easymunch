import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useSelector, useDispatch } from "react-redux";
import MobileMenu from "../ui/MobileMenu";
import { useEffect, useState } from "react";
import Overlay from "../ui/Overlay";
import { setAuth } from "../redux/silces/authSlice";
import { removeFromLocal } from "../helpers/storage";
import CartModal from "../ui/CartModal";
import { toggleMenu } from "../redux/silces/menuSlice";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Header() {
	const authState = useSelector((state) => state.auth.auth);
	const dispatch = useDispatch();
	const mMenu = useSelector((state) => state.menu.menu);
	const [secMenu, setSecMenu] = useState(false);
	const [cartModal, setCartModal] = useState(false);
	let navigate = useNavigate();
	const location = useLocation();

	const showMobileMenu = () => {
		dispatch(toggleMenu());
	};
	const showSecMenu = () => {
		//show secondary  menu
		secMenu ? setSecMenu(false) : setSecMenu(true);
	};

	const toLogin = () => {
		navigate("/login");
	};

	const toRest = () => {
		navigate("/resturants");
	};

	const goHome = () => {
		navigate("/");
	};

	const notShowSignIn = () => {
		if (authState !== null) {
			return false;
		}
		if (
			location.pathname === "/login" ||
			location.pathname === "/register"
		) {
			return false;
		}
		return true;
	};

	const logout = () => {
		dispatch(setAuth(null));
		removeFromLocal();
	};

	const showCartModal = () => {
		setCartModal(!cartModal);
	};

	useEffect(() => {
		window.onscroll = function () {
			myFunction();
		};
		var header = document.getElementById("myHeader");
		var logoText = document.getElementById("logo-text");
		var logoCart = document.getElementById("logo-text2");
		var menuB = document.getElementById("menu-burger");

		var sticky = header.offsetTop;

		function myFunction() {
			if (window.pageYOffset > sticky) {
				header.classList.add("bg-white-native");
				logoText.classList.add("text-dark");
				logoText.classList.remove("text-white");
				logoCart.classList.add("text-dark");
				logoCart.classList.remove("text-white");
				menuB.classList.add("text-dark");
				menuB.classList.remove("text-white");
			} else {
				header.classList.remove("bg-white-native");
				logoText.classList.add("text-white");
				logoCart.classList.add("text-white");
				menuB.classList.add("text-white");
			}
		}
	}, []);

	return (
		<>
			<>
				<MobileMenu
					toRest={toRest}
					openCart={showCartModal}
					logout={logout}
				/>
				<Overlay width={`35%`} closeOverlay={showMobileMenu} />
			</>

			{cartModal && (
				<>
					<CartModal closeModal={showCartModal} />
				</>
			)}
			<Navbar
				collapseOnSelect
				expand="lg"
				id="myHeader"
				className="pt-3 pt-md-1"
			>
				<Container fluid className="mx-md-5 mx-3">
					<Navbar.Brand className="cur-pointer" onClick={goHome}>
						<span id="logo-text" className="text-white">
							EasyMunch
						</span>
					</Navbar.Brand>
					<span
						id="menu-burger"
						className="d-block d-md-none text-white"
						style={{ zIndex: "3" }}
						onClick={showMobileMenu}
					>
						{mMenu ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								style={{ width: "26px" }}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								style={{ width: "25px" }}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</span>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#features"></Nav.Link>
						</Nav>
						<Nav>
							{location.pathname !== "/resturants" && (
								<Nav.Link
									className="mx-3"
									onClick={toRest}
								>
									<span className="btn btn-n-small  px-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="svg-icon me-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
											/>
										</svg>
										<span className="fw-bold">
											Resturants
										</span>
									</span>
								</Nav.Link>
							)}

							{location.pathname === "/resturants" && (
								<Nav.Link className="mx-3">
									<input
										type="text"
										placeholder="Resturants,Foods,Drinks"
										className="form-control input-n-search br-theme bg-theme border-none"
									/>
								</Nav.Link>
							)}

							<div
								onClick={showCartModal}
								className="my-auto mx-3"
								style={{
									padding: "0.5rem 1rem",
									cursor: "pointer",
								}}
							>
								<div
									id="logo-text2"
									className="text-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="svg-icon"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
									</svg>{" "}
									<span className="fw-bold">
										My cart
									</span>
									{/*<div className="navbar-icon-badge">3</div>*/}
								</div>
							</div>

							{authState && (
								<Nav.Link
									className="mx-3"
									style={{ position: "relative" }}
								>
									<span
										className="btn btn-n-small px-4"
										onClick={showSecMenu}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="svg-icon me-2"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
												clipRule="evenodd"
											/>
										</svg>
										{authState.name}
									</span>

									{/** secondary menu */}
									{secMenu && (
										<span className="sec-menu">
											<div className="py-4">
												<div className="col-10 offset-1">
													<div className="pb-4">
														<span className="btn rounded-pill">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																className="svg-icon me-2"
																viewBox="0 0 20 20"
																fill="currentColor"
															>
																<path
																	fillRule="evenodd"
																	d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
																	clipRule="evenodd"
																/>
															</svg>
															<span className="fw-bold">
																My
																Profile
															</span>
														</span>
													</div>
													<div
														className=""
														onClick={
															logout
														}
													>
														<span className="btn rounded-pill">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																className="svg-icon me-2"
																viewBox="0 0 20 20"
																fill="currentColor"
															>
																<path
																	fillRule="evenodd"
																	d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
																	clipRule="evenodd"
																/>
															</svg>
															<span className="fw-bold">
																Logout
															</span>
														</span>
													</div>
												</div>
											</div>
										</span>
									)}
								</Nav.Link>
							)}
							{notShowSignIn() && (
								<Nav.Link onClick={toLogin}>
									<span className="btn btn-n-small px-4 fw-bold">
										Sign In
									</span>
								</Nav.Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
