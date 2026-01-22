import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";

function App() {
	const [pageIdx, setPageIdx] = useState(0);
	return (
		<>
			<NavigationBar pageIdx={pageIdx} setPageIdx={setPageIdx} />
			<div className="w-full h-full px-10 py-20 flex justify-center">
				<Home />
			</div>
		</>
	);
}

export default App;
