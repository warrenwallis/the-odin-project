import Header from "./components/Header";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";

function App() {
	return (
		<div className="flex justify-center items-center w-screen h-screen px-20 bg-gray-100">
			<form className="flex-col justify-center w-full h-full">
				<Header />
				<GeneralInformation />
				<Education />
			</form>
		</div>
	);
}

export default App;
