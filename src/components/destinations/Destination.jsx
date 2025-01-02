import Destinations from "./Destinations";
import Location from "../../location.json";

const Destination = ({ isHome = true }) => {
	const recentJobs = Location.slice(0, 7) 
	return (
		<div
			className="-mt-7 ml-7 md:ml-24 rounded-md h-60"
			style={{
				width: "90%",
				maxWidth: "600px",
				boxShadow: "4px 4px 10px 2px rgba(0, 0, 0, 0.2)",
				overflowY: "auto",
			}}>
			<p className="ml-7 pt-3 pb-3">Popular destinations</p>
			{recentJobs.map((location, index) => (
				<Destinations key={index} location={location} />
			))}
		</div>
	);
};

export default Destination;
