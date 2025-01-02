import React from "react";
import { useState, useEffect, Suspense } from "react";
import FirstHomes from "./FirstHomes";
import Spinner from "../../src/components/Spinner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
const Home = () => {
	const [homes, setHomes] = useState([]);
	const limit = 10; // Set your desired limit
	const apiUrl = `https://fixer-api.onrender.com/api/homes?_limit=10`;
	useEffect(() => {
		const fetchHomes = async () => {
			try {
				const res = await fetch(apiUrl);
				const data = await res.json();
				setHomes(data);
			} catch (error) {
				console.error("Error fetching locations:", error);
			}
		};

		fetchHomes();
	}, []);

	const sliderSettings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 3000,
		autoplaySpeed: 3000,
		cssEase: "linear",
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: { slidesToShow: 2 },
			},
			{
				breakpoint: 768,
				settings: { slidesToShow: 1 },
			},
		],
	};
	return (
		<div className="mt-20 md:mx-16 ">
			<div className="flex flex-row items-center">
				<h1
					className="text-gray-800 font-bold ml-4 text-2xl mb-3"
					style={{ fontFamily: "Heebo" }}>
					Home guests love
				</h1>
				<NavLink
					className="text-blue-800 text-sm md:text-base -mt-2  ml-auto px-4 underline"
					to={"/homes"}>
					View More Homes
				</NavLink>
			</div>
			<Suspense fallback={<Spinner />}>
				<div className="mx-auto">
					<Slider {...sliderSettings}>
						{homes.map((home) => (
							<FirstHomes home={home} key={home.id} />
						))}
					</Slider>
				</div>
			</Suspense>
		</div>
	);
};

export default Home;
