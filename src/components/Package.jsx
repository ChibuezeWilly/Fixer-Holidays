import React from "react";
import { useParams, useLoaderData, NavLink } from "react-router-dom";
import {
	FaStar,
	FaUserAlt,
	FaMountain,
	FaMapMarker,
	FaArrowLeft,
	FaBed,
	FaUsers,
	FaLandmark,
	FaUtensils,
	FaCalendar,
} from "react-icons/fa";

const Package = () => {
	const { id } = useParams();
	const holiday = useLoaderData();
	return (
		<div className="pt-20 mx-5 md:mx-20">
			<NavLink className={"text-blue-700 underline mt-20"} to={"/packages"}>
				<FaArrowLeft className="absolute mt-4" style={{ marginTop: "6px" }} />
				<span className="ml-6 mt-20">Back to packages</span>
			</NavLink>
			<h1
				className="pt-10 text-gray-800 font-bold text-center text-2xl md:text-4xl"
				style={{ fontFamily: "Heebo" }}>
				Book the best trip of your life
			</h1>

			<div className="flex shadow-[0_0_20px_rgba(0,0,0,0.2) mt-20">
				<div className="flex flex-col lg:flex-row w-full justify-around items-center shadow-[0_0_20px_rgba(0,0,0,0.2)">
					<img
						src={holiday.image}
						alt=""
						className="rounded-md object-cover h-full"
						style={{ maxWidth: "450px", width: "100%" }}
					/>
					<div className="" style={{ maxWidth: "500px", width: "100%" }}>
						<div className="flex flex-row justify-between">
							<p className="flex flex-row rounded-md mt-2">
								<span className="text-lg" style={{ fontFamily: "Heebo" }}>
									{holiday.rating}
								</span>
								<FaStar className=" ml-2" style={{ marginTop: "5px" }} />
								<FaStar className="" style={{ marginTop: "5px" }} />
								<FaStar className="" style={{ marginTop: "5px" }} />
								<FaStar className="" style={{ marginTop: "5px" }} />
								<FaStar className="" style={{ marginTop: "5px" }} />
								<span></span>
							</p>
							<p
								className="mt-2 text-base text-black flex flex-row"
								style={{ fontFamily: "Heebo" }}>
								<FaMapMarker style={{ marginTop: "3px" }} />
								<span className="ml-2" style={{ fontFamily: "Heebo" }}>
									{holiday.country}
								</span>
							</p>
						</div>
						<div className="flex flex-row justify-between items-center mt-5">
							<p
								className=" text-2xl font-semibold text-gray-800"
								style={{ fontFamily: "Heebo" }}>
								{holiday.name}
							</p>
							<p
								className=" text-2xl font-semibold text-gray-800"
								style={{ fontFamily: "Heebo" }}>
								{holiday.price}
							</p>
						</div>

						<p
							className="mt-5 text-sm text-gray-800"
							style={{ fontFamily: "Heebo" }}>
							{holiday.description1}
						</p>
						<div className="flex flex-col md:flex-row justify-between ">
							<div className="flex flex-col mt-4">
								<p className="flex flex-row">
									<FaUserAlt className="mt-1" />
									<span className="ml-3 text-base">
										{holiday.holidays[1].people}
									</span>
								</p>
								<p className="flex flex-row mt-2">
									<FaMountain className="mt-1" />
									<span className="ml-3 text-base">
										Perfect for outdoor activities
									</span>
								</p>
								<p className="flex flex-row mt-2">
									<FaBed className="mt-1" />
									<span className="ml-3 text-base">Luxury accommodation</span>
								</p>
								<p className="flex flex-row mt-2">
									<FaCalendar className="mt-1" />
									<span className="ml-3 text-base">
										{holiday.holidays[1].duration}
									</span>
								</p>
							</div>
							<div className="flex flex-col mt-4">
								<p className="flex flex-row">
									<FaLandmark className="mt-1" />
									<span className="ml-3 text-base">Cultural experiences</span>
								</p>
								<p className="flex flex-row mt-2">
									<FaUsers className="mt-1" />
									<span className="ml-3 text-base">
										Family-friendly environment
									</span>
								</p>
								<p className="flex flex-row mt-2">
									<FaUtensils className="mt-1" />
									<span className="ml-3 text-base">Local cuisine tasting</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const holidayLoader = async ({ params }) => {
	const res = await fetch(
		`https://fixer-api.onrender.com/api/locations/${params.id}`
	);
	const data = await res.json();
	return data;
};

export { Package as default, holidayLoader };
