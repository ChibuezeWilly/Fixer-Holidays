import { ReactTyped } from "react-typed";

const HeroText = () => {
	return (
		<div className="mt-40 md:mt-48 md:ml-40 flex flex-col justify-center items-center md:justify-start md:items-start md:w-96 overflow-x-hidden">
			<p className="text-2xl md:text-5xl text-white hero overflow-hidden inline-block">
				<ReactTyped strings={["Let's plan your next Holiday"]} typeSpeed={80} />
			</p>
			<p className="text-gray-200 text-base hero mt-5 text-center md:text-start">
				Life's too short for ordinary holidays.
				<br />
				Discover new places, create unforgettable memories and step outside the
				ordinary.
			</p>
		</div>
	);
};

export default HeroText;
