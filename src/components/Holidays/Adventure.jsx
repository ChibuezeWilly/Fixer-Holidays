import React from "react";
import AdventureImage from "./AdventureImage";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Adventure = () => {
	const [adventure, setAdventure] = useState([]);

	useEffect(() => {
		const fetchCultural = async () => {
			try {
				const res = await fetch("https://fixer-api.onrender.com/api/adventure");
				const data = await res.json();
				setAdventure(data);
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
				Adventure & Nature Holidays
			</h1>
			<div
				className="border-gray-400 mt-5"
				style={{ borderWidth: "1px" }}></div>

			<p className="mt-5 text-center" style={{ fontFamily: "Heebo" }}>
				For thrill-seekers looking to push their limits—trek through rugged
				landscapes, conquer mountains, or dive into the unknown. Adventure
				awaits at every turn.
			</p>

			<div
				className="border-gray-400 mt-10"
				style={{ borderWidth: "1px" }}></div>

			<h1
				className="text-gray-800 mt-10 text-xl md:text-3xl font-bold"
				style={{ fontFamily: "Heebo" }}>
				Top destinations for Adventure Holidays
			</h1>
			{adventure.map((nature) => (
				<AdventureImage nature={nature} key={nature.id} />
			))}
		</div>
	);
};

export default Adventure;
