import logo from "../assets/companyLogo.png";

function Header({ onClick = () => {} }) {
	return (
		<div className="flex justify-start items-center w-full py-8">
			<button
				className="inline-flex items-center justify-center scale-75 origin-left text-6xl"
				onClick={onClick}
			>
				<img className="mr-3" src={logo} />
				Builder
			</button>
		</div>
	);
}

export default Header;
