import React from "react";
import { useState, useEffect, Suspense } from "react";
import FirstHomes from "../FirstHomes";

const Home = () => {
	const [homes, setHomes] = useState([]);
	useEffect(() => {
		const fetchHomes = async () => {
			try {
				const res = await fetch("https://fixer-api.onrender.com/api/homes");
				const data = await res.json();
				setHomes(data);
			} catch (error) {
				console.error("Error fetching locations:", error);
			}
		};

		fetchHomes();
	}, []);
	return (
		<div className="mt-20 md:mx-16 ">
			<Suspense>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center">
					{homes.map((home) => (
						<FirstHomes home={home} key={home.id} />
					))}
				</div>
			</Suspense>
		</div>
	);
};

export default Home;
