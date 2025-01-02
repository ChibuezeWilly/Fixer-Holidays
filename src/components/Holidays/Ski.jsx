import React from "react";
import { useState, useEffect } from "react";
import SkiImage from "./SkiImage";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Ski = () => {
	const [ski, setSki] = useState([]);

	useEffect(() => {
		const fetchSki = async () => {
			try {
				const res = await fetch("https://fixer-api.onrender.com/api/Ski");
				const data = await res.json();
				setSki(data);
			} catch (error) {
				console.log("Error fetching beaches data", error);
			}
		};

		fetchSki();
	}, []);

	return (
		<div className="pt-28 mx-auto md:mx-20">
			<NavLink to={"/holidays"} className={"text-blue-700 underline"}>
				<FaArrowLeft className="absolute ml-3" style={{ marginTop: "5px" }} />
				<span className="ml-8">holidays</span>
			</NavLink>
			<h1
				className="text-center font-bold text-gray-800 text-2xl md:text-4xl"
				style={{ fontFamily: "Heebo" }}>
				Ski Holidays
			</h1>
			<div
				className="border-gray-400 mt-5"
				style={{ borderWidth: "1px" }}></div>

			<p className="mt-5 text-center" style={{ fontFamily: "Heebo" }}>
				Hit the slopes in style, whether you're a beginner or an expert. Ski
				holidays offer exhilarating descents, cozy mountain lodges, and stunning
				snow-capped views.
			</p>

			<div
				className="border-gray-400 mt-10"
				style={{ borderWidth: "1px" }}></div>

			<h1
				className="text-gray-800 mt-10 text-xl md:text-3xl font-bold"
				style={{ fontFamily: "Heebo" }}>
				Top destinations for Ski Holidays
			</h1>
			{ski.map((snow) => (
				<SkiImage snow={snow} key={snow.id} />
			))}
		</div>
	);
};

export default Ski;
