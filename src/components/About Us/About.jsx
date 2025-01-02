import React from "react";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import about from "../../assets/images/about.jpg";
const About = ({ isHome = true }) => {
	const navigate = useNavigate();
	const toAbout = () => {
		navigate("/about");
	};
	Aos.init();
	return (
		<>
			<h1
				className="text-4xl text-gray-800 mb-4 text-center mt-10 font-bold"
				style={{ fontFamily: "Heebo" }}>
				About us
			</h1>
			<div
				className={`flex flex-col items-center md:mx-16 md:flex-row justify-between overflow-y-hidden  ${
					isHome ? "mt-5" : "mt-5"
				}`}>
				<img
					src={about}
					alt=""
					className="aboutimage rounded-sm"
					data-aos="fade-right"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
				/>
				<div
					className="about"
					data-aos="fade-left"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true">
					<p className="mt-3 text-3xl about1">
						Welcome to <span className="text-green-700">Fixer</span>
					</p>
					<p className="text-base mt-4 text-gray-700">
						Where we turn your dream getaways into unforgettable realities. With
						a passion for travel and years of expertise, we specialize in
						creating unique and personalized holiday experiences.{" "}
						<span className={`text-green-700 ${isHome ? 'hidden' : 'block'}`}>Founded in 2010</span> our
						company began as a small family business with a love for adventure.
						Today, we’ve grown to be a leading provider of curated travel
						experiences across the globe
					</p>
					<p className="mt-5 text-base text-gray-700">
						Our <span className="text-green-700 text-base">mission </span> is to
						provide unforgettable travel experiences that bring people closer to
						the beauty of the world, while fostering a deep respect for the
						environment and local cultures
					</p>
					<p className="mt-5 text-base text-gray-700">
						Whether it’s relaxing on a sun-soaked beach, exploring exotic
						destinations, or discovering hidden gems, our mission is to make
						every moment extraordinary. Let’s plan your next holiday adventure
						and help you create memories that last a lifetime!
					</p>
					<div className="flex flex-col md:flex-row justify-evenly mt-5">
						<div className="first-list">
							<li className="list-none flex flex-row mb-2">
								<FaArrowRight className="text-green-700 text-xl mt-1 text-center" />{" "}
								<p className="ml-5 text-base "> First Class Flight</p>
							</li>
							<li className="list-none flex flex-row mb-2">
								<FaArrowRight className="text-green-700 text-xl mt-1" />{" "}
								<p className="ml-5 text-base"> 5 Star Accommodations</p>
							</li>
							<li className="list-none flex flex-row mb-2">
								<FaArrowRight className="text-green-700 text-xl mt-1" />{" "}
								<p className="ml-5 text-base"> 100 Premium City Tours</p>
							</li>
						</div>
						<div className="second-list">
							<li className="list-none flex flex-row mb-2">
								<FaArrowRight className="text-green-700 text-xl mt-1" />
								<p className="ml-5 text-base"> Handpicked Hotels</p>
							</li>
							<li className="list-none flex flex-row mb-2">
								<FaArrowRight className="text-green-700 text-xl mt-1" />{" "}
								<p className="ml-5 text-base"> Latest Model Vehicles</p>
							</li>
							<li className="list-none flex flex-row mb-2">
								<FaArrowRight className="text-green-700 text-xl mt-1" />{" "}
								<p className="ml-5 text-base"> 24/7 Service</p>
							</li>
						</div>
					</div>
				</div>
			</div>
			<button
				className={`mt-10 flex justify-center items-center mx-auto bg-green-700 text-white py-3 px-14 text-sm ${
					isHome ? "flex" : "hidden"
				}`}
				onClick={toAbout}>
				See More
			</button>
		</>
	);
};

export default About;
