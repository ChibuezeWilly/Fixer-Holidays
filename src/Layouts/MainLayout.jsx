import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
	const location = useLocation();
	const Home = location.pathname === "/";
	return (
		<>
			<div>
				<Navbar isHome={Home} />
				<Outlet />
				<Footer />
			</div>
		</>
	);
};

export default MainLayout;
