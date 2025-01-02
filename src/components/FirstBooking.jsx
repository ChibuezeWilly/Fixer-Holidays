import { CiCalendar, CiUser } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import Destination from "./destinations/Destination";
import Cakendar from "./return/Cakendar";
import Travelers from './travelers/Travelers'
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const FirstBooking = () => {
	Aos.init();
	const [openDestination, setOpenDestination] = useState(false);
	const [openCalednar, setOpenCalednar] = useState(false);
	const [openTravelers, setOpenTravelers] = useState(false);
	const openTraveler = () => setOpenTravelers(true)
	const closeTraveler = () => setOpenTravelers(false);

	return (
		<>
			<form
				action=""
				className="firstbooking mx-auto flex flex-col lg:flex-row justify-center items-center bg-white py-5 space-y-1 md:space-y-0 rounded-lg -mt-24 md:-mt-20 mb-5 pl-7"
				data-aos="fade-up"
				data-aos-delay="150"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="true" style={{width: '70%'}}>
				<div className="w-full destinations">
					<SlLocationPin className="absolute ml-5 mt-2 md:mt-4 text-xl md:text-xl text-slate-800" />
					<input
						type="text"
						placeholder="Destination"
						className="firstbooking py-1 lg:py-3 text-center text-lg rounded-lg "
						onClick={() => setOpenDestination(!openDestination)}
					/>
				</div>
				<div className="w-full calender">
					<CiCalendar
						className="absolute ml-5 mt-2 md:mt-4 text-xl
						md:text-2xl text-slate-800"
					/>
					<input
						type="text"
						placeholder="Return Date"
						className="firstbooking py-1 lg:py-3 lg:px-2 text-center lg:text-center text-base rounded-lg"
						onClick={() => setOpenCalednar(!openCalednar)}
					/>
				</div>
				<div className="w-full travellers">
					<CiUser
						className="absolute ml-5 mt-3 md:mt-4 text-xl
						md:text-2xl text-slate-800"
					/>
					<input
						type="text"
						placeholder="Number of Travellers"
						className="firstbooking py-2 lg:py-3 lg:px-5 text-center text-base rounded-lg"
						onClick={openTraveler}
					/>
				</div>
				<button type="submit"></button>
			</form>
			{openDestination && <Destination isHome={false} />}
			{openCalednar && <Cakendar />}
			{openTravelers && <Travelers closeTraveler = {closeTraveler} />}
		</>
	);
};

export default FirstBooking;
