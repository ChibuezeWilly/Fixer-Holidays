import ServicesCard from "./ServicesCard";
import { BsAirplaneEnginesFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiPassport } from "react-icons/gi";
import { MdAirportShuttle } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import Aos from "aos";
const Services = () => {
	Aos.init();
	return (
		<div>
			<h1 className="text-center text-4xl relative mb-5 mt-20 text-gray-800 font-bold" id="services" style={{fontFamily: 'Heebo'}}>
				Our services
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2 md:mx-10 lg:mx-10 mt-14">
				<ServicesCard>
					<BsAirplaneEnginesFill className="text-5xl text-green-700 group-hover:text-white" />
					<h1 className="mt-7 text-2xl font-bold group-hover:text-white">
						Flight Bookings
					</h1>
					<p className="text-gray-700 mt-7 text-base group-hover:text-white">
						Seamlessly book flights to any destination worldwide with unbeatable
						prices
					</p>
				</ServicesCard>
				<ServicesCard>
					<FaHotel className="text-5xl text-green-700 group-hover:text-white" />
					<h1 className="mt-7 text-2xl  font-bold group-hover:text-white">
						Hotel Reservations
					</h1>
					<p className="text-gray-700 mt-7 text-base group-hover:text-white">
						Find and reserve the best hotels that suit your style and budget
					</p>
				</ServicesCard>
				<ServicesCard>
					<FaCar className="text-5xl text-green-700 group-hover:text-white" />
					<h1 className="mt-7 text-2xl font-bold group-hover:text-white">
						Car Rentals
					</h1>
					<p className="text-gray-700 mt-7 text-base group-hover:text-white">
						Rent reliable and affordable cars for convenient travel during your
						stay
					</p>
				</ServicesCard>
				<ServicesCard>
					<MdTour className="text-5xl text-green-700 group-hover:text-white" />
					<h1 className="mt-7 text-2xl  font-bold group-hover:text-white">
						Tour Guides
					</h1>
					<p className="text-gray-700 mt-7 text-base group-hover:text-white">
						Expert tour guides to help you explore the hidden gems of your
						destination.
					</p>
				</ServicesCard>
				<ServicesCard>
					<FaShieldAlt className="text-5xl text-green-700 group-hover:text-white" />
					<h1 className="mt-7 text-2xl  font-bold group-hover:text-white">
						Travel Insurance
					</h1>
					<p className="text-gray-700 mt-7 text-base group-hover:text-white">
						Protect your travels with our comprehensive insurance plans
					</p>
				</ServicesCard>
				<ServicesCard>
					<MdAirportShuttle className="text-6xl text-green-700 group-hover:text-white" />
					<h1 className="mt-5 text-2xl  font-bold group-hover:text-white">
						Airport Transfers
					</h1>
					<p className="text-gray-700 mt-7 text-base group-hover:text-white">
						Enjoy hassle-free airport pickups and drop-offs with reliable
						transfers
					</p>
				</ServicesCard>
				<ServicesCard>
					<GiPassport className="text-6xl text-green-700 group-hover:text-white" />
					<h1 className="mt-6 text-2xl  font-bold group-hover:text-white">
						Visa Assistance
					</h1>
					<p className="text-gray-700 mt-7 text-base">
						Get hassle-free visa processing support for your international
						holidays
					</p>
				</ServicesCard>
				<ServicesCard>
					<FaRegCalendarAlt className="text-5xl text-green-700 group-hover:text-white" />
					<h1 className="mt-5 text-2xl font-bold group-hover:text-white">
						Event Planning & Honeymoons
					</h1>
					<p className="text-gray-700 mt-5 text-base group-hover:text-white">
						Organize unforgettable honeymoons, anniversaries, and special events
					</p>
				</ServicesCard>
			</div>
		</div>
	);
};

export default Services;
