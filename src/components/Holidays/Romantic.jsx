import React from "react";
import RomanticImage from "./RomanticImage";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Romantic = () => {
	const [romantic, setRomantic] = useState([]);
	useEffect(() => {
		const fetchCultural = async () => {
			try {
				const res = await fetch("https://fixer-api.onrender.com/api/Romantic");
				const data = await res.json();
				setRomantic(data);
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
				Romantic Holidays
			</h1>
			<div
				className="border-gray-400 mt-5"
				style={{ borderWidth: "1px" }}></div>

			<p className="mt-5 text-center" style={{ fontFamily: "Heebo" }}>
				Escape to serene destinations with your loved one. Whether it's a
				candlelit dinner on the beach or cozying up in a mountain retreat, these
				holidays are all about creating unforgettable memories together
			</p>

			<div
				className="border-gray-400 mt-10"
				style={{ borderWidth: "1px" }}></div>

			<h1
				className="text-gray-800 mt-10 text-xl md:text-3xl font-bold"
				style={{ fontFamily: "Heebo" }}>
				Top destinations for Romantic Holidays
			</h1>
			{romantic.map((romantic) => (
				<RomanticImage romantic={romantic} key={romantic.id} />
			))}
		</div>
	);
};

export default Romantic;
