import "./styles.css";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import PackagesPage from "./Pages/PackagesPage";
import AboutPage from "./Pages/AboutPage";
import HolidayPage from "./Pages/HolidayPage";
import Package, { holidayLoader } from "./components/Package";
import Beaches from "./components/Holidays/Beaches";
import Cultural from "./components/Holidays/Cultural";
import Adventure from "./components/Holidays/Adventure";
import Luxury from "./components/Holidays/Luxury";
import Romantic from "./components/Holidays/Romantic";
import Wildlife from "./components/Holidays/Wildlife";
import Historical from "./components/Holidays/Historical";
import Family from "./components/Holidays/Family";
import Ski from './components/Holidays/Ski'
import BookNow from "./components/BookNow";
import Homes from "./components/Homes/Homes";
import Paypal from "./components/Paypal";


const App = () => {

	const newTraveler = async ({traveler}) => {
		const res = await fetch("https://fixer-api.onrender.com/api/travelers", {
			method: "POST",
			headers: { "Content-Type": "Application/json" },
			body: JSON.stringify(traveler),
		});
	}

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/about" element={<AboutPage isHome={false} />} />
				<Route path="/packages" element={<PackagesPage />} />
				<Route
					path="/packages/:id"
					element={<Package />}
					loader={holidayLoader}
				/>
				<Route path="/holidays" element={<HolidayPage />} />
				<Route path="/beaches" element={<Beaches />} />
				<Route path="/cultural" element={<Cultural />} />
				<Route path="/adventure" element={<Adventure />} />
				<Route path="/luxury" element={<Luxury />} />
				<Route path="/romantic" element={<Romantic />} />
				<Route path="/family" element={<Family />} />
				<Route path="/wildlife" element={<Wildlife />} />
				<Route path="/historical" element={<Historical />} />
				<Route path="/ski" element={<Ski />} />
				<Route path="/book" element={<BookNow newTraveler={newTraveler} />} />
				<Route path="/homes" element={<Homes />} />
				<Route path="/paypal" element={<Paypal />} />
			</Route>
		),
		{
			future: {
				v7_relativeSplatPath: true,
			},
		}
	);

	return <RouterProvider router={router} />;
};

export default App;
