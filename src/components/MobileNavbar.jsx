import { FaTimes } from "react-icons/fa";
import {
	FaHome,
	FaInfoCircle,
	FaBox,
	FaPlaneDeparture,
	FaBed
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MobileNavbar = ({ closeSideBar }) => {
	const activeLink = ({ isActive }) =>
		isActive
			? "activeMobile bg-white w-full text-black py-2 rounded-lg mt-4 px-8"
			: "flex py-2 px-8 rounded-lg mt-4 text-white text-center";

	return (
		<div className="relative">
			<div className="mobileNavbar fixed flex flex-col text-white justify-start items-start space-y-7 bg-black px-2">
				<FaTimes
					className=" text-3xl mt-5 ml-auto mr-7"
					onClick={closeSideBar}
				/>
				<NavLink className={activeLink} to={"/"}>
					<FaHome className={`text-xl absolute`} />
					<span className="left-8 relative">Home</span>
				</NavLink>
				<NavLink className={activeLink} to={"/about"}>
					<FaInfoCircle className={`text-xl absolute`} />
					<span className="left-8 relative">About</span>
				</NavLink>
				<NavLink className={activeLink} to={"/packages"}>
					<FaPlaneDeparture className={`text-xl absolute`} />
					<span className="left-8 relative">Packages</span>
				</NavLink>
				<NavLink className={activeLink} to={"/holidays"}>
					<FaBox className={`text-xl absolute`} />
					<span className="left-8 relative">Holidays</span>
				</NavLink>
				<NavLink className={activeLink} to={"/homes"}>
					<FaBed className={`text-xl absolute`} />
					<span className="left-8 relative">Homes</span>
				</NavLink>
			</div>
		</div>
	);
};

export default MobileNavbar;
