import React from 'react'
import Home from './Home'

const Homes = () => {
  return (
		<div className="pt-20">
			<h1 className="text-center mt-10 font-bold text-2xl md:text-4xl text-gray-800">
				Discover Comfort and Elegance in Every Stay
			</h1>

			<p className="text-center mt-10 text-gray-800">
				Our carefully curated homes offer the perfect blend of luxury and
				relaxation, ensuring your stay is as memorable as your destination.
				Experience the warmth of a home away from home
			</p>
			<Home />
		</div>
	);
}

export default Homes
