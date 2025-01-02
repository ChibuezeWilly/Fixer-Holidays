import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Company = () => {
	return (
		<div className="comapany mb-5 md:mb-0">
			<h1 className="font-bold text-2xl text-gray mb-5 text-white ">Company</h1>
			<li className="list-none mb-3 flex flex-row text-white">
				<FaAngleRight className="text-lg mt-1" />
				<NavLink to="/about" className="text-base ml-1">
					About us
				</NavLink>
			</li>
			<li className="list-none mb-3 flex flex-row  text-white">
				<FaAngleRight className="text-lg mt-1" />
				<NavLink to="/packages" className="text-base ml-1">
					Packages
				</NavLink>
			</li>
			<li className="list-none mb-5 flex flex-row text-white">
				<FaAngleRight className="text-lg mt-1" />
				<NavLink to="/holidays" className="text-base ml-1">
					Holidays
				</NavLink>
			</li>
		</div>
	);
};

export default Company;
