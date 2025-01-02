import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const BookingButton = ({ scrolled }) => {
	Aos.init();
	const navigate = useNavigate();
	const CheckNavigate = () => navigate("/book");
	return (
		<button
			className={`booking px-14 py-2 rounded-lg text-base hidden lg:block ${
				scrolled ? "bg-white text-green-700" : "bg-green-700 text-white"
			}`}
			onClick={CheckNavigate}>
			Book Now
		</button>
	);
};

export default BookingButton;
