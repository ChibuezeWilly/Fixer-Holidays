const Gallery = () => {
	return (
		<div className="mt-7 md:mt-0 company">
			<h1 className="font-bold text-2xl text-gray text-white mb-5">Gallery</h1>
			<div className="flex flex-col mb-5">
				<div className="flex flex-row  items-center space-x-3 mb-3">
					<img
						src="/src/assets/images/tokyo.jpg"
						className="h-10 border-yellow-600 border-4"
						alt=""
					/>
					<img
						src="/src/assets/images/paris.jpg"
						className="h-10 border-yellow-600 border-4"
						alt=""
					/>
					<img
						src="/src/assets/images/maldives.jpg"
						className="h-10 border-yellow-600 border-4"
						alt=""
					/>
				</div>
				<div className="flex flex-row space-x-3  items-center">
					<img
						src="/src/assets/images/seycheslles.jpeg"
						className="h-20 border-yellow-600 border-4"
						alt=""
					/>
					<img
						src="/src/assets/images/santorini.jpg"
						className="h-10 border-yellow-600 border-4"
						alt=""
					/>
					<img
						src="/src/assets/images/seoul.jpg"
						className="h-14 border-yellow-600 border-4"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
