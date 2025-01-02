// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// const GoogleSignIn = () => {
// 	const navigate = useNavigate();
// 	function onSignIn(googleUser) {
// 		var profile = googleUser.getBasicProfile();

// 		const newUser = {
// 			ID: profile.getId(),
// 			Name: profile.getName(),
// 			"Image URL": profile.getImageUrl(),
// 			Email: profile.getEmail(),
// 		};

// 		const fetchUser = async () => {
// 			try {
// 				const res = await fetch("/api/user", {
// 					method: "POST",
// 					headers: {
// 						"Content-Type": "Application/json",
// 					},
// 					body: JSON.stringify(newUser),
// 				});

// 				if (res.ok) {
// 					console.log("User successfully added");
// 					navigate("/book");
// 				}
// 			} catch (error) {
// 				console.log("Error fetching data");
// 			}
// 		};

// 		fetchUser();
// 	}
// 	function onSuccess(googleUser) {
// 		console.log("Logged in as: " + googleUser.getBasicProfile().getName());
// 	}
// 	function onFailure(error) {
// 		console.log(error);
// 	}
// 	function renderButton() {
// 		gapi.signin2.render("my-signin2", {
// 			scope: "profile email",
// 			width: 240,
// 			height: 50,
// 			longtitle: true,
// 			theme: "dark",
// 			onsuccess: onSuccess,
// 			onfailure: onFailure,
// 		});
// 	}
// 	useEffect(() => {
// 		window.onSignIn = onSignIn;

// 		const script = document.createElement("script");
// 		script.src = "https://apis.google.com/js/platform.js";
// 		script.async = true;
// 		script.defer = true;
// 		document.body.appendChild(script);
// 	}, []);
// 	return <div class="g-signin2" data-onsuccess="onSignIn"></div>;
// };

// export default GoogleSignIn;
