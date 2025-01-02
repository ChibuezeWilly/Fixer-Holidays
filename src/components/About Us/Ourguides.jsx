import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
const Ourguides = () => {
	return (
		<div className="mt-10 md:mt-20 ">
			<h1
				className="text-center text-3xl text-gray-800 font-bold"
				style={{ fontFamily: "Heebo" }}>
				Meet Our Guides
			</h1>
			<div
				className="flex flex-col col-span-1 md:col-span-2 lg:col-span-4 md:flex-row justify-center items-center mt-10 gap-5"
				data-aos="fade-down"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="true">
				{/* first one */}
				<div className="w-64 h-96 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
					<img src="/assets/images/team-1.jpg" alt="team" />
					<div className="flex flex-row -mt-5">
						<div className="flex flex-row mx-auto items-center space-x-5">
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center">
								<FaTwitter className=" text-white text-xl" />
							</div>
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center">
								<FaFacebook className=" text-white text-xl" />
							</div>
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center">
								<FaYoutube className=" text-white text-xl" />
							</div>
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center">
								<FaLinkedinIn className=" text-white text-xl" />
							</div>
						</div>
					</div>
					<h1
						className="text-center font-bold text-gray-800 text-lg mt-4"
						style={{ fontFamily: "Heebo" }}>
						Ethan Thompson
					</h1>
					<p
						className="text-center text-gray-700 text-base mt-2"
						style={{ fontFamily: "Heebo" }}>
						Lead Cultural Expert
					</p>
				</div>
				{/* second one */}
				<div className="w-64 h-96 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
					<img src="/assets/images/team-2.jpg" alt="team" />
					<div className="flex flex-row -mt-5">
						<div className="flex flex-row mx-auto items-center space-x-5">
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center">
								<FaTwitter className=" text-white text-xl" />
							</div>
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center">
								<FaFacebook className=" text-white text-xl" />
							</div>
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center">
								<FaYoutube className=" text-white text-xl" />
							</div>
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center">
								<FaLinkedinIn className=" text-white text-xl" />
							</div>
						</div>
					</div>
					<h1
						className="text-center font-bold text-gray-800 text-lg mt-4"
						style={{ fontFamily: "Heebo" }}>
						Sophia Williams
					</h1>
					<p
						className="text-center text-gray-700 text-base mt-2"
						style={{ fontFamily: "Heebo" }}>
						Senior Adventure Guide
					</p>
				</div>
				{/* third one */}
				<div className="w-64 h-96 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
					<img src="/assets/images/team-3.jpg" alt="team" />
					<div className="flex flex-row -mt-5">
						<div className="flex flex-row mx-auto items-center space-x-5">
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center">
								<FaTwitter className=" text-white text-xl" />
							</div>
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center">
								<FaFacebook className=" text-white text-xl" />
							</div>
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center ">
								<FaYoutube className=" text-white text-xl" />
							</div>
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center">
								<FaLinkedinIn className=" text-white text-xl" />
							</div>
						</div>
					</div>
					<h1
						className="text-center font-bold text-gray-800 text-lg mt-4"
						style={{ fontFamily: "Heebo" }}>
						Benjamin Carter
					</h1>
					<p
						className="text-center text-gray-700 text-base mt-2"
						style={{ fontFamily: "Heebo" }}>
						Expert Travel Coordinator
					</p>
				</div>
				{/* fourth one */}
				<div className="w-64 h-96 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
					<img src="/assets/images/team-4.jpg" alt="team" />
					<div className="flex flex-row -mt-5">
						<div className="flex flex-row mx-auto items-center space-x-5">
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center">
								<FaTwitter className=" text-white text-xl" />
							</div>
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center">
								<FaFacebook className=" text-white text-xl" />
							</div>
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center">
								<FaYoutube className=" text-white text-xl" />
							</div>
							<div className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center">
								<FaLinkedinIn className=" text-white text-xl" />
							</div>
						</div>
					</div>
					<h1
						className="text-center font-bold text-gray-800 text-lg mt-4"
						style={{ fontFamily: "Heebo" }}>
						Maya Patel
					</h1>
					<p
						className="text-center text-gray-700 text-base mt-2"
						style={{ fontFamily: "Heebo" }}>
						Nature & Wildlife Specialist
					</p>
				</div>
			</div>
		</div>
	);
};

export default Ourguides;
