import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookNow = ({newTraveler}) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [travelers, setTravelers] = useState("1");

	const navigate = useNavigate();
	const toCheckout = () => {
		setTimeout(() => {
			navigate("/paypal");
		}, 3000);
	};
	// form submission
	const submitForm = (e) => {
		e.preventDefault();
		const traveler = {
			name,
			email,
			phone,
			address,
			travelers
		};
		if (traveler) {
			console.log(traveler);
			clearField()
			showMessage("Trip successfully booked", "green");
			toCheckout();
		} else {
			showMessage("Please complete all fields", "red");
		}
		newTraveler({traveler});
	};
	// form submission
	const showMessage = (message, color) => {
		const error = document.getElementById("error");
		error.innerText = message;
		error.style.backgroundColor = color;
		setTimeout(() => {
			error.innerText = "";
			error.style.backgroundColor = "";
		}, 3000);
	};

	// clear fields

	const clearField = () => {
		setTimeout(() => {
			setName("");
			setEmail("");
			setPhone("");
			setAddress("");
			setTravelers("");
		}, 3000);
	}

	return (
		<div className="pt-28 flex flex-col justify-center items-center gap-6">
			<main>
				<div className="w-full max-w-lg p-8 bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-lg">
					<h1 className="text-2xl font-semibold text-center mb-8 text-gray-800">
						Book the best trip of your life today
					</h1>
					<form className="space-y-6" onSubmit={submitForm}>
						{/* Name Input */}
						<div>
							<label htmlFor="name" className="block text-gray-700 font-medium">
								Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Enter Full Name"
								className="block w-full py-3 px-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						{/* Email Input */}
						<div>
							<label
								htmlFor="email"
								className="block text-gray-700 font-medium">
								Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Enter Email Address"
								className="block w-full py-3 px-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						{/* Phone Input */}
						<div>
							<label
								htmlFor="phone"
								className="block text-gray-700 font-medium">
								Phone
							</label>
							<input
								type="tel"
								name="phone"
								id="phone"
								placeholder="Enter Phone Number"
								className="block w-full py-3 px-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>

						{/* Address Input */}
						<div>
							<label
								htmlFor="address"
								className="block text-gray-700 font-medium">
								Address
							</label>
							<input
								type="text"
								name="address"
								id="address"
								placeholder="Enter Address"
								className="block w-full py-3 px-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
						</div>

						{/* Number of Travelers Select */}
						<div>
							<label
								htmlFor="travelers"
								className="block text-gray-700 font-medium">
								Number of Travelers
							</label>
							<select
								name="travelers"
								id="travelers"
								className="block w-full py-3 px-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								value={travelers}
								onChange={(e) => setTravelers(e.target.value)}>
								Number of travelers
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
							</select>
						</div>
					

						{/* Button Container with Flex */}
						<div className="mt-6">
							<button
								type="submit"
								className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 -mt-16">
								Book Now
							</button>
						</div>
					</form>
				</div>
			</main>
			<p
				id="error"
				className="h-20 w-full flex justify-center items-center text-lg text-white"></p>
		</div>
	);
};

export default BookNow;
