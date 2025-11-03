function Controls() {
	return (
		<div className="flex justify-between w-full py-10">
			<div className="w-2/5 font-bold text-2xl flex items-center">
				Do your best to click on gifs you <br /> haven't clicked on yet!
			</div>
			<div className="flex-1 flex flex-col gap-4 py-4">
				<button className="bg-gray-200 rounded-lg py-2">New Game</button>
				<button className="bg-gray-200 rounded-lg py-2">Reset Score</button>
			</div>
			<div className="flex-1 flex flex-col items-center justify-around font-semibold">
				<div className="text-2xl">Best Score</div>
				100
			</div>
			<div className="flex-1 flex flex-col items-center justify-around font-semibold">
				<div className="text-2xl">Current Score</div>
				100
			</div>
		</div>
	);
}

export default Controls;
