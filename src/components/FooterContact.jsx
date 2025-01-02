import React from "react";
import {
	FaPhone,
	FaMapMarker,
	FaEnvelope,
	FaTwitter,
	FaFacebook,
	FaYoutube,
	FaLinkedinIn,
} from "react-icons/fa";

const FooterContact = () => {
	return (
		<>
			<div className="relative company mb-5 md:mb-0">
				<h1 className="font-bold text-2xl text-gray mb-5 text-white mt-3 md:mt-0">
					Contact Us
				</h1>
				<li className="list-none mb-3 flex flex-row text-white">
					<FaMapMarker className="text-base mt-1" />
					<span to="" className="text-base ml-3">
						Fifatin Cotonou, Benin Republic.
					</span>
				</li>
				<li className="list-none mb-3 flex flex-row text-white">
					<FaPhone className="text-sm mt-2" />
					<span href="" className="text-base ml-3">
						+229 61 97 5355
					</span>
				</li>
				<li className="list-none mb-3 flex flex-row text-white">
					<FaEnvelope className="text-base mt-2" />
					<span href="" className="text-base ml-2 mt-1">
						pricelesswilliams1234@gmail.com
					</span>
				</li>
				<div className="flex flex-row items-center space-x-5 mt-5">
					<li className="list-none flex flex-row text-white">
						<div className="h-7 w-7 rounded-full bg-white flex items-center justify-center">
							<FaTwitter className="text-base text-black rounded-md" />
						</div>
					</li>
					<li className="list-none flex flex-row">
						<div className="h-7 w-7 rounded-full bg-white flex items-center justify-center">
							<FaYoutube className="text-base text-black rounded-md" />
						</div>
					</li>
					<li className="list-none flex flex-row">
						<div className="h-7 w-7 rounded-full bg-white flex items-center justify-center">
							<FaFacebook className="text-base  rounded-md" />
						</div>
					</li>
					<li className="list-none flex flex-row">
						<div className="h-7 w-7 rounded-full bg-white flex items-center justify-center">
							<FaLinkedinIn className="text-base rounded-md" />
						</div>
					</li>
				</div>
			</div>
		</>
	);
};

export default FooterContact;
