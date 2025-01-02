import React from "react";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import CulturalImages from "./CulturalImages";
import { NavLink } from "react-router-dom";

const Cultural = () => {
	const [cultural, setCultural] = useState([]);
 
	useEffect(() => {
		const fetchCultural = async () => {
			try {
				const res = await fetch("https://fixer-api.onrender.com/api/Cultural");
				const data = await res.json();
				setCultural(data);
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
				Cultural Holidays
			</h1>
			<div
				className="border-gray-400 mt-5"
				style={{ borderWidth: "1px" }}></div>

			<p className="mt-5 text-center" style={{ fontFamily: "Heebo" }}>
				Immerse yourself in history, art, and tradition. Explore ancient
				landmarks, vibrant markets, and local festivals that bring a
				destination's rich culture to life. It's a journey that connects you to
				the heart of a place.
			</p>

			<div
				className="border-gray-400 mt-10"
				style={{ borderWidth: "1px" }}></div>

			<h1
				className="text-gray-800 mt-10 text-xl md:text-3xl font-bold"
				style={{ fontFamily: "Heebo" }}>
				Top destinations for Cultural Holidays
			</h1>
			{cultural.map((cultural) => (
				<CulturalImages cultural={cultural} key={cultural.id} />
			))}
		</div>
	);
};

export default Cultural;
