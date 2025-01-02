import React from "react";
import { ReactTyped } from "react-typed";

const AboutBackground = () => {
	return (
		<div className="aboutImage">
			<div className="pt-20 mr-auto flex flex-col justify-center items-center overflow-x-hidden">
				<p
					className="text-2xl md:text-5xl text-white overflow-hidden mt-40"
					style={{ fontFamily: "Heebo" }}>
					<ReactTyped strings={["Your Journey, Our Passion "]} typeSpeed={80} />
				</p>
				<p
					className="text-gray-200 text-center text-base hero mt-5"
					style={{ fontFamily: "Heebo" }}>
					We craft travel experiences that inspire and delight. <br /> From
					breathtaking destinations to seamless planning <br />our goal is to turn
					your dream adventures into unforgettable memories.
					<br />
				</p>
			</div>
		</div>
	);
};

export default AboutBackground;
