import React from "react";
import { useState, useEffect } from "react";
import WildlifeImage from "./WildlifeImage";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Wildlife = () => {
	const [wildlife, setWildlife] = useState([]);

	useEffect(() => {
		const fetchWildlife = async () => {
			try {
				const res = await fetch("https://fixer-api.onrender.com/api/Wildlife");
				const data = await res.json();
				setWildlife(data);
			} catch (error) {
				console.log("Error fetching beaches data", error);
			}
		};

		fetchWildlife();
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
				Wildlife Holidays
			</h1>
			<div
				className="border-gray-400 mt-5"
				style={{ borderWidth: "1px" }}></div>

			<p className="mt-5 text-center" style={{ fontFamily: "Heebo" }}>
				Get up close and personal with nature. From safaris to birdwatching,
				wildlife holidays allow you to experience animals in their natural
				habitats, creating memories you'll never forget.
			</p>

			<div
				className="border-gray-400 mt-10"
				style={{ borderWidth: "1px" }}></div>

			<h1
				className="text-gray-800 mt-10 text-xl md:text-3xl font-bold"
				style={{ fontFamily: "Heebo" }}>
				Top destinations for Wildlife Holidays
			</h1>
			{wildlife.map((wildLife) => (
				<WildlifeImage wildLife={wildLife} key={wildlife.id} />
			))}
		</div>
	);
};

export default Wildlife;
