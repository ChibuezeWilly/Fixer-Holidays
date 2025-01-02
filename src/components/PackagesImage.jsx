import React from "react";

const PackagesImage = () => {
	return (
		<div className="packages pt-20">
			<h1
				className="text-3xl text-center md:text-start md:w-96 font-bold text-white mt-44 md:mt-52 md:ml-20"
				style={{ fontFamily: "Heebo" }}>
				Ready to make your dream trip a reality? Explore our packages now
			</h1>
			<p
				className="text-base mt-3 text-white ml-20"
				style={{ fontFamily: "Heebo" }}>
				Affordable luxury with exclusive perks
			</p>

			<div className="flex md:justify-start justify-center mx-auto md:ml-20">
				<button className="h-10 mt-4 w-32 bg-teal-600 rounded-md text-white">
					Explore & Book
				</button>
			</div>
		</div>
	);
};

export default PackagesImage;
