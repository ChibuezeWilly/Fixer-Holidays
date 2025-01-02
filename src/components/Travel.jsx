import { useNavigate } from "react-router-dom";
const Travel = () => {
	const navigate = useNavigate();
	const toHolidays = () => navigate("/holidays");
	return (
		<div className="mt-10">
			<div className="mt-3 rounded-md px-4 md:px-0 md:mx-16">
				<h1 className="font-bold text-xl text-gray-800 mt-3">
					Travel more, spend less
				</h1>
				<h1 className=" mt-3  text-base text-wrap">
					Discover unbeatable deals on flights and destinations that make your
					dream trips affordable.
				</h1>
				<h1 className=" text-base text-wrap">
					Experience more without stretching your budget.
				</h1>
				<div className="flex md:justify-end mr-10">
					<button className="bg-green-700 text-white py-3 px-10 rounded-md text-base mt-3 md:mt-1" onClick={toHolidays}>
						Book Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Travel;
