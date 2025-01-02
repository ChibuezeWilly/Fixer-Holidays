import { SlLocationPin } from "react-icons/sl";
const Destinations = ({ location }) => {
	return (
		<ul>
			<div className="flex flex-row ml-7 mb-3 destinations">
				<SlLocationPin className="text-2xl mt-1 ml-5 mx-4" />
				<li className="text-sm font-bold hover:cursor-pointer">
					{location.name}
					<br />
					<span className="text-sm font-normal">{location.country}</span>
				</li>
			</div>
		</ul>
	);
};

export default Destinations;
