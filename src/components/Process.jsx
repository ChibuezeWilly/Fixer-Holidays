import React from 'react'
import Aos from "aos";
import { FaGlobe, FaPlane, FaDollarSign } from 'react-icons/fa'
const Process = () => {
		Aos.init();
  return (
		<div className="mx-28">
			<h1
				className="text-center text-4xl mt-20 text-gray-800 font-bold space-x-5"
				style={{ fontFamily: "Heebo" }}>
				3 Easy Steps
			</h1>
			<div className="flex flex-col md:flex-row justify-evenly items-center mt-20 gap-14">
				<div
					data-aos="fade-up"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
					className="w-72 h-72 border-green-700 flex flex-col items-center px-4"
					style={{ borderWidth: "1px" }}>
					<div className="bg-green-700 -mt-11 rounded-full h-20 w-20 flex items-center justify-center">
						<FaGlobe className="text-5xl text-white " />
					</div>
					<h1 className="font-bold text-center text-gray-800 text-2xl mt-7">
						Choose A Destination
					</h1>
					<p
						className="text-lg mt-4 text-center"
						style={{ fontFamily: "Heebo" }}>
						Explore a wide range of stunning travel destinations and pick the
						perfect one for your next adventure
					</p>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
					className="w-72 h-72 border-green-700 flex flex-col items-center px-4"
					style={{ borderWidth: "1px" }}>
					<div className="bg-green-700 -mt-11 rounded-full h-20 w-20 flex items-center justify-center">
						<FaDollarSign className="text-5xl text-white " />
					</div>
					<h1 className="font-bold text-center text-gray-800 text-2xl mt-7">
						Pay Online
					</h1>
					<p
						className="text-lg mt-4 text-center"
						style={{ fontFamily: "Heebo" }}>
						Complete your booking effortlessly with our secure online payment
						options, designed for your convenience
					</p>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
					className="w-72 h-72 border-green-700 flex flex-col items-center px-4"
					style={{ borderWidth: "1px" }}>
					<div className="bg-green-700 -mt-11 rounded-full h-20 w-20 flex items-center justify-center">
						<FaPlane className="text-5xl text-white " />
					</div>
					<h1 className="font-bold text-center text-gray-800 text-2xl mt-7">
						Fly Today
					</h1>
					<p
						className="text-lg mt-4 text-center"
						style={{ fontFamily: "Heebo" }}>
						Get ready to embark on your journey! Pack your bags and take off on
						a seamless travel experience
					</p>
				</div>
			</div>
		</div>
	);
}

export default Process
