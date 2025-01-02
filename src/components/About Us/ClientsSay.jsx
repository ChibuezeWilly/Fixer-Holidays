import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientsSay = () => {
	const sliderSettings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 3000,
		autoplaySpeed: 3000,
		cssEase: "linear",
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: { slidesToShow: 3 },
			},
			{
				breakpoint: 768,
				settings: { slidesToShow: 1 },
			},
		],
	};

	return (
		<div>
			<h1 className="font-bold text-4xl text-gray-800 mt-20 text-center mx-auto">
				Our Clients Say
			</h1>
			<div className="mt-10 mx-auto">
				<Slider {...sliderSettings} className="px-10 md:px-16">
					{/* Slide 1 */}
					<div className="flex justify-center items-center mx-auto">
						<div className="card w-72 h-96 rounded-md shadow-[0_0_20px_rgba(0,0,0,0.2)] p-5 bg-white mx-auto">
							<img
								src="/assets/images/testimonials5.jpeg"
								alt="Fatima Al-Farsi"
								className="h-24 w-24 object-cover rounded-full  mt-3 border-4 border-green-700 mx-auto "
							/>
							<p className="text-center mt-3 text-xl font-bold text-gray-800">
								Fatima Al-Farsi
							</p>
							<p className="text-center font-semibold text-gray-700 text-base">
								Dubai, UAE
							</p>
							<p className="text-center text-gray-700 text-base mt-3">
								The planning and execution were impeccable. The team went above
								and beyond to ensure we had an amazing experience. This is what
								travel should feel like.
							</p>
						</div>
					</div>

					{/* Slide 2 */}
					<div className="flex justify-center mx-auto">
						<div className="card w-72 h-96 mx-3 rounded-md shadow-[0_0_20px_rgba(0,0,0,0.2)] p-5 bg-white ">
							<img
								src="/assets/images/testimonials6.jpeg"
								alt="Emily Johnson"
								className="h-24 w-24 object-cover rounded-full  mt-3 border-4 border-green-700 mx-auto"
							/>
							<p className="text-center mt-3 text-xl font-bold text-gray-800">
								Emily Johnson
							</p>
							<p className="text-center font-semibold text-gray-700 text-base">
								New York, USA
							</p>
							<p className="text-center text-gray-700 text-base mt-3">
								This was hands down the best holiday experience I’ve ever had!
								The guides were knowledgeable, the destinations were stunning,
								and everything was perfectly organized. Can’t wait to book my
								next adventure with you.
							</p>
						</div>
					</div>

					{/* Slide 3 */}
					<div className="flex justify-center mx-auto">
						<div className="card w-72 h-96 mx-3 rounded-md shadow-[0_0_20px_rgba(0,0,0,0.2)] p-5 bg-white">
							<img
								src="/assets/images/testmonials7.jpeg"
								alt="Rajesh Gupta"
								className="h-24 w-24 object-cover rounded-full  mt-3 border-4 border-green-700 mx-auto"
							/>
							<p className="text-center mt-3 text-xl font-bold text-gray-800">
								Rajesh Gupta
							</p>
							<p className="text-center font-semibold text-gray-700 text-base">
								Mumbai, India
							</p>
							<p className="text-center text-gray-700 text-base mt-3">
								The attention to detail and the level of care the team provided
								made this trip unforgettable. From the scenic routes to the
								comfortable accommodations, everything was top-notch.
							</p>
						</div>
					</div>

					{/* Slide 4 */}
					<div className="flex justify-center mx-auto">
						<div className="card w-72 h-96 mx-3 rounded-md shadow-[0_0_20px_rgba(0,0,0,0.2)] p-5 bg-white">
							<img
								src="/assets/images/testimonials8.jpeg"
								alt="Hannah Kim"
								className="h-24 w-24 object-cover rounded-full  mt-3 border-4 border-green-700 mx-auto"
							/>
							<p className="text-center mt-3 text-xl font-bold text-gray-800">
								Hannah Kim
							</p>
							<p className="text-center font-semibold text-gray-700 text-base">
								Seoul, South Korea
							</p>
							<p className="text-center text-gray-700 text-base mt-3">
								I loved how immersive the experience was. Our guide shared so
								many local insights, and I felt like I truly got to know the
								culture of the place. Highly recommend this company.
							</p>
						</div>
					</div>

					{/* Slide 5 */}
					<div className="flex justify-center mx-auto">
						<div className="card w-72 h-96 mx-3 rounded-md shadow-[0_0_20px_rgba(0,0,0,0.2)] p-5 bg-white">
							<img
								src="/assets/images/testimonials9.jpeg"
								alt="Michael O'Connor"
								className="h-24 w-24 object-cover rounded-full  mt-3 border-4 border-green-700 mx-auto"
							/>
							<p className="text-center mt-3 text-xl font-bold text-gray-800">
								Michael O'Connor
							</p>
							<p className="text-center font-semibold text-gray-700 text-base">
								Dublin, Ireland
							</p>
							<p className="text-center text-gray-700 text-base mt-3">
								A dream come true! The team made everything seamless, and their
								passion for travel was contagious. I’ve already recommended this
								to all my friends and family.
							</p>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default ClientsSay;
