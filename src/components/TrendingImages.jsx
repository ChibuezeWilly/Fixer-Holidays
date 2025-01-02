import { FaMapMarker } from "react-icons/fa";
import Aos from "aos";
const TrendingImages = ({location}) => {
	Aos.init();
	return (
		<div
			data-aos="zoom-in-up"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="true"
			key={location.id}
			className="p-4 flex flex-col items-center rounded-md shadow-xl bg-white">
			<div className="relative h-60 w-full rounded-md overflow-hidden">
				<img
					src={location.image}
					alt={location.name}
					className="object-cover w-full h-full"
				/>
				<p className="absolute top-4 left-4 py-1 px-3 bg-white text-red-600 font-semibold rounded-md shadow-sm">
					{location.price}
				</p>
				<h1 className="absolute bottom-4 right-4 py-1 px-3 bg-white text-red-700 font-bold rounded-md shadow-sm flex items-center gap-2">
					<FaMapMarker className="text-red-600" />
					{location.name}
				</h1>
			</div>
		</div>
	);
};

export default TrendingImages;
