import { FadeLoader } from "react-spinners";

const Spinner = ({ loading }) => {
	const override = {
		display: "block",
		margin: "0 auto",
		borderColor: "red",
	};
	return (
		<FadeLoader
			color="black"
			fontSize="30px"
			loading={loading}
			cssOverride={override}
			size={150}
			aria-label="Loading Spinner"
			data-testid="loader"
		/>
	);
};

export default Spinner;
