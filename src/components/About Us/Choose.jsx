import React from "react";
import choose8 from "/assets/images/choose8.jpeg";
import choose7 from "/assets/images/choose7.jpeg";
import choose3 from "/assets/images/choose3.jpeg";
import choose4 from "/assets/images/choose4.jpeg";
import choose5 from "/assets/images/choose5.jpeg";
import choose6 from "/assets/images/choose6.jpeg";

const Choose = () => {
	return (
		<div className="mt-20">
			<h1 className="font-bold text-4xl text-gray-800  text-center mb-5">
				Why Choose Us
			</h1>
			<div className="">
				<div className="mx-auto pb-10">
					<div className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10">
						<div className="w-72 h-72 shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5 mx-auto rounded-lg text-center">
							<div className="relative">
								<img
									src={choose8}
									className="w-full h-72 rounded-md object-cover"
									alt="choose1"
								/>
								<div className="absolute rounded-md top-24 right-0 bg-black h-48 choose1">
									<h1
										className="text-white text-xl mt-10 font-bold"
										style={{ fontFamily: "Heebo" }}>
										Unforgettable Experiences
									</h1>
									<p
										className="text-white mt-1 px-3 text-base"
										style={{ fontFamily: "Heebo" }}>
										We believe that every journey should be extraordinary.
										That’s why we craft tailor-made holiday packages designed to
										match your interests, preferences, and dreams.
									</p>
								</div>
							</div>
						</div>
						{/* second one */}
						<div className="w-72 h-72 shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5 mx-auto rounded-lg text-center">
							<div className="relative">
								<img
									src={choose7}
									className="w-full h-72 rounded-md object-cover"
									alt="choose1"
								/>
								<div className="absolute rounded-md top-24 right-0 bg-black h-48 choose1">
									<h1
										className="text-white text-xl mt-10 font-bold"
										style={{ fontFamily: "Heebo" }}>
										Hassle-Free Travel
									</h1>
									<p
										className="text-white mt-1 px-3 text-base"
										style={{ fontFamily: "Heebo" }}>
										Travel Leave the stress of planning behind and let us handle
										the details! From personalized itineraries to seamless
										bookings so you can relax and enjoy the journey.
									</p>
								</div>
							</div>
						</div>
						{/* third one */}
						<div className="w-72 h-72 shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5 mx-auto rounded-lg text-center">
							<div className="relative">
								<img
									src={choose3}
									className="w-full h-72 rounded-md object-cover"
									alt="choose1"
								/>
								<div className="absolute rounded-md top-24 right-0 bg-black h-48 choose1">
									<h1
										className="text-white text-xl mt-19 font-bold"
										style={{ fontFamily: "Heebo" }}>
										Exceptional Customer Support
									</h1>
									<p
										className="text-white mt-4 px-3 text-base"
										style={{ fontFamily: "Heebo" }}>
										Your satisfaction is our top priority. Our dedicated
										customer support team is available around the clock to
										assist you, whether you have a question, need help with a
										booking, or require assistance during your trip
									</p>
								</div>
							</div>
						</div>
						{/* fourth one */}
						<div className="w-72 h-72 shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5 mx-auto rounded-lg text-center">
							<div className="relative">
								<img
									src={choose4}
									className="w-full h-72 rounded-md object-cover"
									alt="choose1"
								/>
								<div className="absolute rounded-md top-24 right-0 bg-black h-48 choose1">
									<h1
										className="text-white text-xl mt-7 font-bold"
										style={{ fontFamily: "Heebo" }}>
										Best Price Guarantee
									</h1>
									<p
										className="text-white mt-4 px-3 text-base"
										style={{ fontFamily: "Heebo" }}>
										We combine quality with affordability, offering you
										unbeatable prices on premium holiday packages to provide and
										maintaining the highest standards.
									</p>
								</div>
							</div>
						</div>
						{/* fifth one */}
						<div className="w-72 h-72 shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5 mx-auto rounded-lg text-center">
							<div className="relative">
								<img
									src={choose5}
									className="w-full h-72 rounded-md object-cover"
									alt="choose1"
								/>
								<div className="absolute rounded-md top-24 right-0 bg-black h-48 choose1">
									<h1
										className="text-white text-xl mt-7 font-bold"
										style={{ fontFamily: "Heebo" }}>
										Sustainable Tourism
									</h1>
									<p
										className="text-white mt-4 px-3 text-base"
										style={{ fontFamily: "Heebo" }}>
										We’re committed to making a positive impact on the world
										through responsible travel. By supporting local businesses,
										reducing our carbon footprint, and promoting eco-friendly
										practices.
									</p>
								</div>
							</div>
						</div>
						{/* fifth one */}
						<div className="w-72 h-72 shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-5 mx-auto rounded-lg text-center">
							<div className="relative">
								<img
									src={choose6}
									className="w-full h-72 rounded-md object-cover"
									alt="choose1"
								/>
								<div className="absolute rounded-md top-24 right-0 bg-black h-48 choose1">
									<h1
										className="text-white text-xl mt-7 font-bold"
										style={{ fontFamily: "Heebo" }}>
										Expert Local Guides
									</h1>
									<p
										className="text-white mt-4 px-3 text-base"
										style={{ fontFamily: "Heebo" }}>
										Our handpicked local guides are not just knowledgeable but
										also passionate about their destinations. They’ll take you
										beyond the typical tourist spots sharing unique insights and
										fascinating stories
									</p>
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

export default Choose;
