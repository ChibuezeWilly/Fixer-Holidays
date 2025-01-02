import React from "react";
import FamilyImage from "./FamilyImage";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Family = () => {
	const [family, setFamily] = useState([]);

	useEffect(() => {
		const fetchCultural = async () => {
			try {
				const res = await fetch("https://fixer-api.onrender.com/api/Family");
				const data = await res.json();
				setFamily(data);
			} catch (error) {
				console.log("Error fetching beaches data", error);
			}
		};

		fetchCultural();
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
				Family Holidays
			</h1>
			<div
				className="border-gray-400 mt-5"
				style={{ borderWidth: "1px" }}></div>

			<p className="mt-5 text-center mx-3 md:mx-0" style={{ fontFamily: "Heebo" }}>
				Enjoy quality time with your loved ones, with fun activities for all
				ages. From theme parks to nature adventures, family holidays are about
				bonding, laughter, and shared experiences.
			</p>

			<div
				className="border-gray-400 mt-10"
				style={{ borderWidth: "1px" }}></div>

			<h1
				className="text-gray-800 mt-10 text-xl md:text-3xl font-bold"
				style={{ fontFamily: "Heebo" }}>
				Top destinations for Family Holidays
			</h1>
			{family.map((families) => (
				<FamilyImage families={families} key={families.id} />
			))}
		</div>
	);
};

export default Family;
