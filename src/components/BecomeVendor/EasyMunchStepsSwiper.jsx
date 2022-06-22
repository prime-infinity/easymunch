import React from "react";
// SWIPER
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
// import { Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// IMPORT INDEX.CSS
import "./EasyMunchStepsSwiper.css";

// SWIPER IMAGES
import FirstSwiper from "./swiperImages/first_swiper.png";
import SecondSwiper from "./swiperImages/second_swiper.png";
import ThirdSwiper from "./swiperImages/third_swiper.png";

function EasyMunchStepsSwiper() {
	// SWIPER JS
	const swiperNavPrevRef = useRef(null);
	const swiperNavNextRef = useRef(null);
	let swiperIndex = 0;

	// toggle nav buttons display
	const nextNav = () => {
		// check to see if prev nav button is displayed
		const isPrevNavShown = swiperNavPrevRef.current.classList.contains(
			"show-prev-nav-on-init"
		);
		console.log(isPrevNavShown);

		if (isPrevNavShown === false && swiperIndex === 0) {
			// console.log("sliding next button")
			swiperNavNextRef.current.classList.add(
				"translate-next-nav-on-init"
			);
			swiperNavPrevRef.current.classList.add("show-prev-nav-on-init");
		}

		swiperIndex += 1;
		console.log(swiperIndex);

		// hide next button on last item
		if (swiperIndex === 2) {
			swiperNavNextRef.current.classList.add("hide-next-nav-on-last");
			swiperNavPrevRef.current.classList.add(
				"translate-prev-nav-on-last"
			);
		}
		if (swiperNavPrevRef.current.classList.contains("test")) {
			swiperNavPrevRef.current.classList.remove("test");
		}
	};

	const prevNav = () => {
		swiperIndex -= 1;
		console.log(swiperIndex);
		//
		const isPrevNavShown = swiperNavPrevRef.current.classList.contains(
			"show-prev-nav-on-init"
		);
		console.log(isPrevNavShown);

		if (isPrevNavShown === true && swiperIndex === 0) {
			// console.log("sliding next button")
			swiperNavNextRef.current.classList.remove(
				"translate-next-nav-on-init"
			);
			swiperNavPrevRef.current.classList.remove(
				"show-prev-nav-on-init"
			);
			swiperIndex = 0;
		}
		// show next button on return
		if (swiperIndex === 1) {
			swiperNavNextRef.current.classList.remove(
				"hide-next-nav-on-last"
			);
			swiperNavPrevRef.current.classList.remove(
				"translate-prev-nav-on-last"
			);
			swiperNavPrevRef.current.classList.add("test");
		}
	};
	return (
		<div>
			{/* ============================
  HOW EASY MUNCH WORKS BY SIR-RUMEH
================================ */}
			{/* ==========================
        SWIPER JS BEGINS 
============================*/}
			<Swiper
				// install Swiper modules
				modules={[
					Navigation,
					EffectFade,
					Pagination,
					Scrollbar,
					A11y,
				]}
				spaceBetween={50}
				// navigation
				navigation={{
					prevEl: swiperNavPrevRef.current,
					nextEl: swiperNavNextRef.current,
				}}
				effect={"fade"}
				speed={800}
				slidesPerView={1}
				loop
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
				className="main-swiper"
				// INITIALIZE CUSTOM SWIPER NAV BUTTONS
				onInit={(swiper) => {
					swiper.params.navigation.prevEl =
						swiperNavPrevRef.current;
					swiper.params.navigation.nextEl =
						swiperNavNextRef.current;
					swiper.navigation.init();
					swiper.navigation.update();
				}}
			>
				{/* SWIPER CONTENT 1 CUSTOMERS ORDERS */}
				<SwiperSlide className="swiper-slide">
					<div className="swiper-content-container">
						<div
							className="border-0 swiper-content-image-container"
							id="customersOrder"
						>
							<img src={FirstSwiper} alt="" />
						</div>
						<div className="ps-5 swiper-content-details-container">
							<h1 className="fw-bolder mb-4">
								Customers Order
							</h1>
							<h4>
								A customer finds your restaurant and
								places an order through the EasyMunch
								Website.
							</h4>
						</div>
					</div>
				</SwiperSlide>
				{/* SWIPER CONTENT 2 YOU PREPARE */}
				<SwiperSlide>
					<div className="swiper-content-container">
						<div
							className="border-0 swiper-content-image-container"
							id="customersOrder"
						>
							<img src={SecondSwiper} alt="" />
						</div>
						<div className="ps-5 swiper-content-details-container">
							<h1 className="fw-bolder mb-4">
								You Prepare
							</h1>
							<h4>
								Your restaurant accepts and prepares the
								order.
							</h4>
						</div>
					</div>
				</SwiperSlide>
				{/* SWIPER CONTENT 3 DELIVERY PARTNERS ARRIVE */}
				<SwiperSlide>
					<div className="swiper-content-container">
						<div
							className="border-0 swiper-content-image-container"
							id="customersOrder"
						>
							<img src={ThirdSwiper} alt="" />
						</div>
						<div className="ps-5 swiper-content-details-container">
							<h1 className="fw-bolder mb-4">
								Delivery partners arrive
							</h1>
							<h4>
								Delivery people using the EasyMunch
								platform pick up the order from your
								restaurant, then deliver it to the
								customer.
							</h4>
						</div>
					</div>
				</SwiperSlide>
				{/* CUSTOM NAV BUTTONS */}
				<div className="custom-swiper-nav-container">
					<div
						className="custom-swiper-nav-prev"
						ref={swiperNavPrevRef}
						onClick={() => prevNav()}
					></div>
					<div
						className="custom-swiper-nav-next"
						ref={swiperNavNextRef}
						onClick={() => nextNav()}
					></div>
				</div>
			</Swiper>

			{/* ==========================
        SWIPER JS ENDS 
============================*/}
		</div>
	);
}

export default EasyMunchStepsSwiper;
