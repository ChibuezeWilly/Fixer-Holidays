import React from "react";
import { FaStar, FaCalendar, FaMapMarker } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CulturalImages = ({ cultural }) => {
	const navigate = useNavigate();
	const toBook = () => navigate("/book");
	return (
		<div className="mx-5 md:mx-10">
			<div className="flex mt-10 border-gray-200">
				<div className="flex flex-col lg:flex-row w-full justify-around items-center shadow-[0_0_20px_rgba(0,0,0,0.2) md:h-96">
					<img
						src={cultural.image}
						alt=""
						className="rounded-md object-cover h-72 md:h-full"
						style={{ maxWidth: "450px", width: "100%" }}
					/>
					<div className="" style={{ maxWidth: "500px", width: "100%" }}>
						<div className="flex flex-row justify-between">
							<p className="flex flex-row rounded-md mt-2">
								<span className="text-lg" style={{ fontFamily: "Heebo" }}>
									{cultural.rating}
								</span>
								<FaStar className=" ml-2" style={{ marginTop: "5px" }} />
								<FaStar className="" style={{ marginTop: "5px" }} />
								<FaStar className="" style={{ marginTop: "5px" }} />
								<FaStar className="" style={{ marginTop: "5px" }} />
								<FaStar className="" style={{ marginTop: "5px" }} />
								<span></span>
							</p>
							<p
								className="mt-1 text-base text-black flex flex-row"
								style={{ fontFamily: "Heebo" }}>
								<FaMapMarker style={{ marginTop: "3px" }} />
								<span className="ml-2" style={{ fontFamily: "Heebo" }}>
									{cultural.name}
								</span>
							</p>
						</div>
						<div className="flex flex-row justify-between items-center mt-5">
							<p
								className=" text-2xl font-semibold text-gray-800"
								style={{ fontFamily: "Heebo" }}>
								{cultural.price}
							</p>
							<p
								className=" text-sm text-gray-800"
								style={{ fontFamily: "Heebo" }}>
								<FaCalendar className="absolute" style={{ marginTop: "1px" }} />
								<span className="ml-5">{cultural.duration}</span>
							</p>
						</div>

						<p
							className="mt-5 text-sm text-gray-800"
							style={{ fontFamily: "Heebo" }}>
							{cultural.description}
						</p>
						<div className="flex flex-col md:flex-row justify-between ">
							<div className="flex flex-col md:flex-row justify-between ">
								<div className="flex flex-col mt-1">
									<p className="flex flex-row mt-2">
										<span className="ml-3 text-base">
											{cultural.activities[0]}
										</span>
									</p>
									<p className="flex flex-row mt-2">
										<span className="ml-3 text-base">
											{cultural.activities[1]}
										</span>
									</p>
									<p className="flex flex-row mt-2">
										<span className="ml-3 text-base">
											{cultural.activities[2]}
										</span>
									</p>
								</div>
								<div className="flex flex-col mt-2">
									<p className="flex flex-row">
										<span className="ml-3 text-base">
											{cultural.activities[3]}
										</span>
									</p>
									<p className="flex flex-row mt-2">
										<span className="ml-3 text-base">
											Family-friendly environment
										</span>
									</p>
									<p className="flex flex-row mt-2">
										<span className="ml-3 text-base">
											{cultural.activities[4]}
										</span>
									</p>
								</div>
							</div>
						</div>
						<div className="flex justify-center items-center">
							<button className="w-36 h-10 mt-5 bg-green-700 rounded-md mb-10 mx-auto text-white" onClick={toBook}>
								Book Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CulturalImages;
