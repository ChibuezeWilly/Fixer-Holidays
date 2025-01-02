import React from "react";
import BeachesImage from "./BeachesImage";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Beaches = () => {
	const [beaches, setBeaches] = useState([]);

	useEffect(() => {
		const fetchBeaches = async () => {
			try {
				const res = await fetch("https://fixer-api.onrender.com/api/Beach");
				const data = await res.json();
				setBeaches(data);
			} catch (error) {
				console.log("Error fetching beaches data", error);
			}
		};

		fetchBeaches();
	}, []);

	return (
		<div className="pt-28 mx-auto md:mx-20">
			<NavLink to={"/holidays"} className={"text-blue-700 underline mb-5"}>
				<FaArrowLeft className="absolute ml-5" style={{ marginTop: "5px" }} />
				<span className="ml-10">holidays</span>
			</NavLink>
			<h1
				className="text-center font-bold text-gray-800 text-2xl md:text-4xl  mt-5"
				style={{ fontFamily: "Heebo" }}>
				Beach & Relaxation Holidays
			</h1>
			<div
				className="border-gray-400 mt-5"
				style={{ borderWidth: "1px" }}></div>

			<p className="mt-5 text-center" style={{ fontFamily: "Heebo" }}>
				Indulge in opulence with world-class service, stunning resorts, and
				exquisite dining. Perfect for those seeking relaxation, exclusivity, and
				pampering in a breathtaking setting
			</p>

			<div
				className="border-gray-400 mt-10"
				style={{ borderWidth: "1px" }}></div>

			<h1
				className="text-gray-800 mt-10 text-xl md:text-3xl font-bold"
				style={{ fontFamily: "Heebo" }}>
				Top destinations for Beach Holidays
			</h1>
			{beaches.map((beach) => (
				<BeachesImage beach={beach} key={beach.id} />
			))}
		</div>
	);
};

export default Beaches;
