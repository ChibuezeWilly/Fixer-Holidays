import React from 'react'
import { useNavigate } from "react-router-dom";

const ToPackages = () => {
    const navigate = useNavigate();
        const toPackages = () => {
            navigate("/packages");
        };
  return (
		<div>
			<div className="mt-20">
				<div className="mt-3 rounded-md px-4 md:px-0 md:mx-16">
					<h1
						className="font-bold text-xl text-gray-800 mt-3"
						style={{ fontFamily: "Heebo" }}>
						Travel more, spend less
					</h1>
					<h1
						className=" mt-3  text-base text-wrap"
						style={{ fontFamily: "Heebo" }}>
						At Fixer we believe travel is more than a journey—it’s an experience
						that creates memories to last a lifetime. For over 10 years, we’ve
						helped travelers explore the world with ease, comfort, and joy.
					</h1>
					<h1
						className="text-base text-wrap mt-5 font-semibold text-gray-800"
						style={{ fontFamily: "Heebo" }}>
						Ready to start your next adventure? Let us guide you every step of
						the way!
					</h1>
					<div className="flex md:justify-end mr-10">
						<button
							className={`mt-10 flex justify-end items-end  bg-green-700 text-white text-base py-3 px-14`}
							onClick={toPackages}>
							Read More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToPackages
