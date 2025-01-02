import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Paypal = () => {
	const navigate = useNavigate();
	const toHolidays = () => navigate("/holidays");

	useEffect(() => {
		// Dynamically load the PayPal SDK script
		const script = document.createElement("script");
		script.src =
			"https://www.paypal.com/sdk/js?client-id=AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R&currency=USD";
		script.async = true;
		document.body.appendChild(script);

		script.onload = () => {
			// Render PayPal Buttons
			window.paypal
				.Buttons({
					createOrder: (data, actions) => {
						// Create an order with the dynamic price
						return actions.order.create({
							purchase_units: [
								{
									amount: {
										value: "100.00", 
									},
								},
							],
						});

					},
					onApprove: (data, actions) => {
						// When the payment is approved
						return actions.order.capture().then((details) => {
							alert(
								"Transaction completed by " + details.payer.name.given_name
							);
							// Add additional actions here if needed
						});
					},
					onError: (err) => {
						// Handle error
						console.error("Error with PayPal transaction", err);
						alert(
							"An error occurred while processing your payment. Please try again."
						);
					},
				})
				.render("#paypal-button-container");
		};
	}, []);

	return (
		<>
			<div className="pt-32" style={{height: '400px'}}>
				<div className="flex justify-center items-center mx-auto">
					<div className="shadow-[0_0_20px_rgba(0,0,0,0.2)] h-64 w-72 px-10">
						<h1
							className="mb-5 text-2xl font-bold text-center mt-5"
							style={{ fontFamily: "Heebo" }}>
							Confirm Booking
						</h1>
						<div id="paypal-button-container" className="mt-10"></div>
					</div>
				</div>
				<div className="mx-auto h-10 w-52 mt-10 border-red-500 border-2 rounded-full">
					<h1 className="flex justify-evenly items-center" onClick={toHolidays}>
						<span className="text-lg font-bold mt-1">Cancel Trip</span>
						<FaTimes className="text-xl mt-1" />
					</h1>
				</div>
			</div>
		</>
	);
};

export { Paypal as default};
