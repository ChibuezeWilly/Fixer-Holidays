import React from "react";
import { FaMapMarker, FaCalendar, FaUser, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const HolidayCard = ({ holiday, toBook }) => {
	return (
		<div
			key={holiday.id}
			className="w-80 rounded-md shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-10 mb-10 mx-auto"
			style={{ height: "400px" }}>
			<img
				src={holiday.image}
				alt=""
				className=" h-40 rounded-t-md w-full object-cover"
				loading="lazy" // Lazy load images for better performance
			/>
			<div className="flex flex-row mt-3 mx-4 justify-around items-center">
				<p>
					<FaMapMarker
						className="absolute text-green-700 text-xs"
						style={{ marginTop: "7px" }}
					/>
					<span
						className="ml-5 text-gray-700 font-bold text-sm"
						style={{ fontFamily: "Heebo" }}>
						{holiday.name}
					</span>
				</p>
				<p>
					<FaCalendar
						className="absolute text-green-700 text-xs"
						style={{ marginTop: "7px" }}
					/>
					<span
						className="ml-5 text-gray-700 text-sm"
						style={{ fontFamily: "Heebo" }}>
						{holiday.holidays[1].duration}
					</span>
				</p>
				<p>
					<FaUser
						className="absolute text-green-700 text-xs"
						style={{ marginTop: "7px" }}
					/>
					<span
						className="ml-5 text-gray-700 text-sm"
						style={{ fontFamily: "Heebo" }}>
						{holiday.holidays[1].people}
					</span>
				</p>
			</div>
			<p
				className="text-base text-gray-800 mt-3 font-semibold mx-9"
				style={{ fontFamily: "Heebo" }}>
				{holiday.description}
			</p>
			<div
				className="mt-3 border-gray-300 mx-8"
				style={{ borderWidth: "1px" }}></div>
			<div className="mx-6 mt-2 relative">
				<p className="">
					<FaStar
						className="absolute text-green-700"
						style={{ marginTop: "7px", fontFamily: "Heebo" }}
					/>
					<span className="ml-6 text-lg mt-1 font-semibold">
						{holiday.rating}
					</span>
				</p>
				<p
					className="text-xl font-semibold absolute - right-0 -mt-6"
					style={{ fontFamily: "Heebo" }}>
					{holiday.price}
				</p>
			</div>
			<div className="flex flex-row justify-center items-center mt-5">
				<Link
					className="text-sm w-24 bg-green-700 text-white h-8 rounded-s-md text-center"
					to={`/packages/${holiday.id}`}
					style={{ paddingTop: "5px" }}>
					Read More
				</Link>
				<button
					className="text-sm w-24 bg-green-700 text-white h-8 rounded-e-md ml-3"
					onClick={toBook}>
					Book Now
				</button>
			</div>
		</div>
	);
};

export default HolidayCard;
