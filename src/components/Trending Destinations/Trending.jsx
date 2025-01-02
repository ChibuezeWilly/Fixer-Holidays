import React, { useState, useEffect, Suspense } from "react";
import Slider from "react-slick";
import Spinner from "../Spinner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingImages = React.lazy(() => import("../TrendingImages"));

const Trending = () => {
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		const fetchLocations = async () => {
			try {
				const res = await fetch(
					"https://fixer-api.onrender.com/api/locations?_limit=10"
				);
				const data = await res.json();
				setLocations(data);
			} catch (error) {
				console.error("Error fetching locations:", error);
			}
		};
		fetchLocations();
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
		<div className="mx-auto md:mx-10 mt-20">
			<h1 className="trending text-4xl font-bold text-center text-gray-800 mb-8">
				Trending Destinations
			</h1>
			<Suspense fallback={<Spinner />}>
				<Slider {...sliderSettings} className="px-2">
					{locations.map((location) => (
						<TrendingImages location={location} key={location.id} />
					))}
				</Slider>
			</Suspense>
		</div>
	);
};

export default Trending;

{
	/* {loading ? (
				<Spinner loading={loading} />
			) : (
				<Slider {...sliderSettings} className="px-4">
					{locations.map((location) => (
						<TrendingImages location={location} key={location.id} />
					))}
				</Slider>
			)} */
}
