import "./App.css";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";

function App() {
	return (
		<>
			<NavigationBar />
			<div className="w-full h-full px-10 flex justify-center">
				<Home />
			</div>
		</>
	);
}

export default App;
