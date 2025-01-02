import React from "react";
import { useState, useEffect } from "react";
import LuxuryImage from "./LuxuryImage";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Luxury = () => {
	const [luxury1, setLuxury] = useState([]);

	useEffect(() => {
		const fetchCultural = async () => {
			try {
				const res = await fetch("https://fixer-api.onrender.com/api/Luxury");
				const data = await res.json();
				setLuxury(data);
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
				Luxury Holidays
			</h1>
			<div
				className="border-gray-400 mt-5"
				style={{ borderWidth: "1px" }}></div>

			<p className="mt-5 text-center" style={{ fontFamily: "Heebo" }}>
				Indulge in opulence with world-class service, stunning resorts, and
				exquisite dining. Perfect for those seeking relaxation, exclusivity, and
				pampering in a breathtaking setting.
			</p>

			<div
				className="border-gray-400 mt-10"
				style={{ borderWidth: "1px" }}></div>

			<h1
				className="text-gray-800 mt-10 text-xl md:text-3xl font-bold"
				style={{ fontFamily: "Heebo" }}>
				Top destinations for Luxury Holidays
			</h1>
			{luxury1.map((luxury) => (
				<LuxuryImage luxury={luxury} key={luxury.id} />
			))}
		</div>
	);
};

export default Luxury;
