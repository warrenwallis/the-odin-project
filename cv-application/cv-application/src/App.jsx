import Header from "./components/Header";
import GeneralInformation from "./components/GeneralInformation";

function App() {
	return (
		<div className="flex justify-center items-center w-screen h-screen px-20 bg-gray-100">
			<div className="flex-col justify-center w-full h-full">
				<Header />
				<GeneralInformation />
			</div>
		</div>
	);
}

export default App;
