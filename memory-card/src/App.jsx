import Controls from "./components/Controls";
import Header from "./components/Header";

function App() {
	return (
		<div className="w-screen h-screen">
			<div className="mx-20 border-l border-r h-full flex flex-col items-center">
				<Header />
				<hr className="w-full" />
				<Controls />
			</div>
		</div>
	);
}

export default App;
