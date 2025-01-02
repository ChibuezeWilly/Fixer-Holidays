import BackgroundImage from "../components/BackgroundImage"
import Services from "../components/Services"
import About from "../components/About Us/About"
import Choose from "../components/About Us/Choose";
import Trending from "../components/Trending Destinations/Trending";
import Packages from "../components/Packages";
import Home from "../components/Home";
import Process from "../components/Process";
import ClientsSay from "../components/About Us/ClientsSay";
import Travel from "../components/Travel";
const HomePage = () => {
  return (
		<div>
			<BackgroundImage />
			<About />
			<Services />
			<Choose/>
			<Trending />
			<Packages />
			<Home />
			<ClientsSay />
			<Process />
			<Travel />
		</div>
	);
}

export default HomePage

