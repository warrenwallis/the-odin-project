import logo from "../assets/react.svg";

function LoadingSpinner() {
	return (
		<div className="w-full h-full flex justify-center items-center border">
			<img className="animate-spin" src={logo} />
		</div>
	);
}

export default LoadingSpinner;
