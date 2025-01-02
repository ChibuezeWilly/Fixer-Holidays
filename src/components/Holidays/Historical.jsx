import React from "react";
import { useState, useEffect } from "react";
import HistoricalImage from "./HistoricalImage";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Historical = () => {
	const [historical, setHistorical] = useState([]);

	useEffect(() => {
		const fetchCultural = async () => {
			try {
				const res = await fetch(
					"https://fixer-api.onrender.com/api/Historical"
				);
				const data = await res.json();
				setHistorical(data);
			} catch (error) {
				console.log("Error fetching beaches data", error);
			}
		};

		fetchCultural();
	}, []);

	return (
		<div className="pt-28 mx-auto md:mx-20">
			<NavLink to={"/holidays"} className={"text-blue-700 underline"}>
				<FaArrowLeft className="absolute" style={{ marginTop: "5px" }} />
				<span className="ml-5">holidays</span>
			</NavLink>
			<h1
				className="text-center font-bold text-gray-800 text-2xl md:text-4xl"
				style={{ fontFamily: "Heebo" }}>
				Historical Holidays
			</h1>
			<div
				className="border-gray-400 mt-5"
				style={{ borderWidth: "1px" }}></div>

			<p className="mt-5 text-center" style={{ fontFamily: "Heebo" }}>
				Step back in time and explore ancient ruins, iconic landmarks, and
				fascinating museums. Historical holidays offer a deep dive into the
				past, bringing history to life in extraordinary ways
			</p>

			<div
				className="border-gray-400 mt-10"
				style={{ borderWidth: "1px" }}></div>

			<h1
				className="text-gray-800 mt-10 text-xl md:text-3xl font-bold"
				style={{ fontFamily: "Heebo" }}>
				Top destinations for Historical Holidays
			</h1>
			{historical.map((history) => (
				<HistoricalImage history={history} key={history.id} />
			))}
		</div>
	);
};

export default Historical;
