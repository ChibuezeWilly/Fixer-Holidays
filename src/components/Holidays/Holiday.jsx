import React from "react";
import choose8 from "../../assets/images/beach.jpeg";
import choose7 from "../../assets/images/cultural.jpeg";
import choose3 from "../../assets/images/adventure.jpeg";
import choose4 from "../../assets/images2/luxury.jpeg";
import choose5 from "../../assets/images/romantic.jpeg";
import choose6 from "../../assets/images/historical.jpeg";
import choose9 from "../../assets/images/family.jpeg";
import choose2 from "../../assets/images/skii.jpeg";
import choose1 from "../../assets/images/wildlife.jpeg";

import { NavLink } from "react-router-dom";

const Holiday = () => {
	return (
		<div>
			<div className="mx-auto md:mx-10">
				<div className="mx-auto pb-10">
				<div className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5">
					<div className="w-72 md:w-96 h-80 shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5 mx-auto rounded-lg text-center">
					<div className="relative">
				<img
				src={choose8}
				className="w-full h-56 rounded-t-md object-cover"
				alt="choose1"
				/>
				<div className="absolute rounded-md w-full top-0 right-0 h-full choose1">
					<h1
					className="text-white text-2xl mt-28 font-bold"
					style={{ fontFamily: "Heebo" }}>
					Beach & Relaxation Holidays
					</h1>
					<p
				    className="text-blcak mt-16 md:mt-24 px-3 text-sm"
					style={{ fontFamily: "Heebo" }}>
	                beach holiday package to suit your every need. Life
				    is better on the beach
					</p>
					<NavLink
						className={"text-blue-700 underline text-sm left-auto"}
						to={"/beaches"}>
						See More
						</NavLink>
						</div>
						</div>
						</div>
						{/* second one */}
						<div className="w-72 md:w-96 h-80 shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5 mx-auto rounded-lg text-center">
							<div className="relative">
								<img
									src={choose7}
									className="w-full h-56 rounded-t-md object-cover"
									alt="choose1"
								/>
								<div className="absolute rounded-md w-full top-0 right-0  h-full choose1">
									<h1
										className="text-white text-2xl mt-28 font-bold"
										style={{ fontFamily: "Heebo" }}>
										Cultural & Heritage Holidays
									</h1>
									<p
										className="text-blcak  mt-16 md:mt-24 px-3 text-sm"
										style={{ fontFamily: "Heebo" }}>
										Discover the rich heritage traditions of the
										world's most fascinating cultures.
									</p>
									<NavLink
										className={"text-blue-700 underline text-sm left-auto"}
										to={"/cultural"}>
										See More
									</NavLink>
								</div>
							</div>
						</div>
						{/* third one */}
						<div className="w-72 md:w-96 h-80 shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5 mx-auto rounded-lg text-center">
							<div className="relative">
								<img
									src={choose3}
									className="w-full h-56 rounded-t-md object-cover"
									alt="choose1"
								/>
								<div className="absolute rounded-md top-0 w-full right-0 h-full choose1">
									<h1
										className="text-white text-2xl mt-28 font-bold"
										style={{ fontFamily: "Heebo" }}>
										Adventure & Nature Holidays
									</h1>
									<p
										className="text-blcak  mt-16 md:mt-24 px-3 text-sm"
										style={{ fontFamily: "Heebo" }}>
										Fuel your adrenaline with thrilling adventures and natural
										wonders.
									</p>
									<NavLink
										className={"text-blue-700 underline text-sm left-auto"}
										to={"/adventure"}>
										See More
									</NavLink>
								</div>
							</div>
						</div>
						{/* fourth one */}
						<div className="w-72 md:w-96 h-80 shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5 mx-auto rounded-lg text-center">
							<div className="relative">
								<img
									src={choose4}
									className="w-full h-56 rounded-t-md object-cover"
									alt="choose1"
								/>
								<div className="absolute rounded-md w-full top-0 right-0 bg-green-300 h-full choose1">
									<h1
										className="text-white text-2xl mt-28 font-bold"
										style={{ fontFamily: "Heebo" }}>
										Luxury Holidays
									</h1>
									<p
										className="text-blcak mt-24 px-3 text-sm"
										style={{ fontFamily: "Heebo" }}>
										Indulge in world-class comfort and rejuvenate your mind,
										body, and soul.
									</p>
									<NavLink
										className={"text-blue-700 underline text-sm left-auto"}
										to={"/luxury"}>
										See More
									</NavLink>
								</div>
							</div>
						</div>
						{/* fifth one */}
						<div className="w-72 md:w-96 h-80 shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5 mx-auto rounded-lg text-center">
							<div className="relative">
								<img
									src={choose5}
									className="w-full h-56 rounded-t-md object-cover"
									alt="choose1"
								/>
								<div className="absolute rounded-md w-full top-0 right-0 h-full choose1">
									<h1
										className="text-white text-2xl mt-28 font-bold"
										style={{ fontFamily: "Heebo" }}>
										Romantic Getaways
									</h1>
									<p
										className="text-blcak mt-24 px-3 text-sm"
										style={{ fontFamily: "Heebo" }}>
										Rekindle your love in the most enchanting destinations.
									</p>
									<NavLink
										className={"text-blue-700 underline text-sm left-auto"}
										to={"/romantic"}>
										See More
									</NavLink>
								</div>
							</div>
						</div>
						{/* fifth one */}
						<div className="w-72 md:w-96 h-80 shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5 mx-auto rounded-lg text-center">
							<div className="relative">
								<img
									src={choose6}
									className="w-full h-56 rounded-t-md object-cover"
									alt="choose1"
								/>
								<div className="absolute rounded-md w-full top-0 right-0 h-full choose1">
									<h1
										className="text-white text-2xl mt-28 font-bold"
										style={{ fontFamily: "Heebo" }}>
										Historical & Archaeological Holidays
									</h1>
									<p
										className="text-black mt-16 px-3 text-sm"
										style={{ fontFamily: "Heebo" }}>
										Unearth ancient secrets and walk through the footsteps of
										history
									</p>
									<NavLink
										className={"text-blue-700 underline text-sm left-auto"}
										to={"/historical"}>
										See More
									</NavLink>
								</div>
							</div>
						</div>
						{/* sixth one */}
						<div className="w-72 md:w-96 h-80 shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5 mx-auto rounded-lg text-center">
							<div className="relative">
								<img
									src={choose9}
									className="w-full h-56 rounded-t-md object-cover"
									alt="choose1"
								/>
								<div className="absolute rounded-md w-full top-0 right-0 h-full choose1">
									<h1
										className="text-white text-2xl mt-28 font-bold"
										style={{ fontFamily: "Heebo" }}>
										Family Holidays
									</h1>
									<p
										className="text-black mt-24 px-3 text-sm"
										style={{ fontFamily: "Heebo" }}>
										Make every moment count. Fun-filled holidays designed for
										the whole family
									</p>
									<NavLink
										className={"text-blue-700 underline text-sm left-auto"}
										to={"/family"}>
										See More
									</NavLink>
								</div>
							</div>
						</div>
						{/* seventh one */}
						<div className="w-72 md:w-96 h-80 shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5 mx-auto rounded-lg text-center">
							<div className="relative">
								<img
									src={choose2}
									className="w-full h-56 rounded-t-md object-cover"
									alt="choose1"
								/>
								<div className="absolute rounded-md w-full top-0 right-0 h-full choose1">
									<h1
										className="text-white text-2xl mt-28 font-bold"
										style={{ fontFamily: "Heebo" }}>
										Ski Holidays
									</h1>
									<p
										className="text-black mt-24 px-3 text-sm"
										style={{ fontFamily: "Heebo" }}>
										Dive into a snowy dreamland. Winter magic awaits for you to
										explore
									</p>
									<NavLink
										className={"text-blue-700 underline text-sm left-auto"}
										to={"/ski"}>
										See More
									</NavLink>
								</div>
							</div>
						</div>
						{/* eighth one */}
						<div className="w-72 md:w-96 h-80 shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5 mx-auto rounded-lg text-center">
							<div className="relative">
								<img
									src={choose1}
									className="w-full h-56 rounded-t-md object-cover"
									alt="choose1"
								/>
								<div className="absolute rounded-md w-full top-0 right-0 h-full choose1">
									<h1
										className="text-white text-2xl mt-28 font-bold"
										style={{ fontFamily: "Heebo" }}>
										WildLife and Safari Holidays
									</h1>
									<p
										className="text-black md:mt-24 mt-16 px-3 text-sm"
										style={{ fontFamily: "Heebo" }}>
										Embark on a wild journey. Meet nature's most majestic wonders
										up close
									</p>
									<NavLink
										className={"text-blue-700 underline text-sm left-auto"}
										to={"/wildlife"}>
										See More
									</NavLink>
								</div>
							</div>
						</div>
						{/* last one */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Holiday;
