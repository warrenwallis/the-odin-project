import CardGrid from "./components/CardGrid";
import Controls from "./components/Controls";
import Header from "./components/Header";

function App() {
	return (
		<div className="w-screen h-screen">
			<div className="mx-20 h-full flex flex-col items-center">
				<Header />
				<hr className="w-full" />
				<Controls />
				<hr className="w-full" />
				<CardGrid />
			</div>
		</div>
	);
}

export default App;
