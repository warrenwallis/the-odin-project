import logo from "../assets/logo.png";

function Header({ resetGame }) {
	return (
		<div className="w-full py-10">
			<img src={logo} onClick={resetGame} />
		</div>
	);
}

export default Header;
