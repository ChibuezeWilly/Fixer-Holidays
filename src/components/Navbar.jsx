import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import MobileNavbar from "./MobileNavbar";
import { useEffect } from "react";
// import GoogleSignIn from "./GoogleSignIn";

const Navbar = () => {
	const [openMobileNavbar, setOpenMobileNavbar] = useState(false);
	const activeLink = ({ isActive }) =>
		isActive
			? `py-2 px-5 rounded-lg text-base ${
					scrolled ? "bg-white text-green-700" : "bg-green-700 text-white"
			  }`
			: `py-2 md:px-4 lg:px-6 rounded-lg text-base`;

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const checkNavbar = () => setScrolled(window.scrollY > 0);

		document.addEventListener("scroll", checkNavbar);

		return () => {
			document.removeEventListener("scroll", checkNavbar);
		};
	}, []);

	return (
		<>
			<div className="">
				<div
					className={`fixed rounded-sm px-0 md:px-0 navbar flex flex-row justify-between
					md:justify-around items-center overflow-hidden py-2 w-full ${
						scrolled ? "bg-green-700 text-white" : "bg-white"
					}`}>
					<div>
						<img src={Logo} alt="" className="h-10 md:h-14 rounded-md ml-5" />
					</div>
					<div className="hidden md:flex">
						<NavLink className={activeLink} to={"/"}>
							Home
						</NavLink>
						<NavLink className={activeLink} to={"/about"}>
							About
						</NavLink>
						<NavLink className={activeLink} to={"/packages"}>
							Packages
						</NavLink>
						<NavLink className={activeLink} to={"/holidays"}>
							Holidays
						</NavLink>
						<NavLink className={activeLink} to={"/homes"}>
							Homes
						</NavLink>
						{/* <GoogleSignIn /> */}
					</div>
					<FaBars
						className="md:hidden text-2xl mr-10"
						onClick={() => setOpenMobileNavbar(!openMobileNavbar)}
					/>
				</div>
			</div>
			{openMobileNavbar && (
				<MobileNavbar closeSideBar={() => setOpenMobileNavbar(false)} />
			)}
		</>
	);
};

export default Navbar;
