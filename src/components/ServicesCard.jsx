const ServicesCard = ({ children }) => {
	return (
		<div
			data-aos="flip-down"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="true"
			className="services-card h-72 px-5 py-4 shadow-[0_0_20px_rgba(0,0,0,0.2)] group hover:bg-green-700 transition-all duration-300 ease-in-out">
			{children}
		</div>
	);
};

export default ServicesCard;
