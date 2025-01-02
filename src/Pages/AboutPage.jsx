import About from "../components/About Us/About";
import AboutBackground from "../components/About Us/AboutBackground";
import Choose from "../components/About Us/Choose";
import Ourguides from "../components/About Us/Ourguides";
import ClientsSay from "../components/About Us/ClientsSay";
import ToPackages from "../components/About Us/ToPackages";
const AboutPage = () => {
	return (
		<div>
      <AboutBackground />
			<About isHome={false} />
			<Choose />
			<Ourguides />
			<ClientsSay />
      		<ToPackages />
		</div>
	);
};

export default AboutPage;
