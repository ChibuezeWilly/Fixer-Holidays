import React from 'react'
import { useNavigate } from "react-router-dom";

const FirstHomes = ({home}) => {
		const navigate = useNavigate()
		const toBook = () => navigate('/book')
  return (
		<div className="mx-auto">
			<div className="card w-80 h-auto mx-auto rounded-md shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5">
				<img
					src={home.image}
					alt=""
					className="h-64 object-cover w-full rounded-t-md"
				/>
				<h1 className="text-gray-800 text-xl font-bold px-3 pt-2">
					{home.homeName}
				</h1>
				<p className="px-3 text-sm">{home.location}</p>
				<div className="flex flex-row mt-1">
					<p className="bg-blue-900 text-white py-1 px-2 rounded-sm ml-3 mt-1">
						{home.rating}
					</p>
					<p className="mt-2 ml-2 text-sm font-bold text-gray-800">
						{home.remarks}
					</p>
					<p className="text-gray-800 mt-2 ml-2">.</p>
					<p className="mt-2 ml-2 text-sm">{home.reviews}</p>
				</div>
				<div className="flex justify-center items-center mt-5">
					<p className=" text-gray-800 text-end mx-3">
						{`Starting from`}
						<span className="text-lg pb-5 font-bold ml-2">{home.price}</span>
					</p>
					<button
						className="w-28 h-9 bg-blue-900 rounded-md mb-2 mx-auto text-white"
						onClick={toBook}>
						Book Now
					</button>
				</div>
			</div>
		</div>
	);
}

export default FirstHomes
