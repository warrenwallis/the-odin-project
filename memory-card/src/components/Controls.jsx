function Controls() {
	return (
		<div className="flex justify-between w-full">
			<div className="w-2/5 border font-bold text-2xl">
				Do your best to click on gifs you haven't clicked on yet!
			</div>
			<div className="border flex-1 flex flex-col justify-around">
				<button>New Game</button>
				<button>Reset Score</button>
			</div>
			<div className="border flex-1 flex flex-col items-center justify-around">
				<div>BestScore</div>
				100
			</div>
			<div className="border flex-1 flex flex-col items-center justify-around">
				<div>BestScore</div>
				100
			</div>
		</div>
	);
}

export default Controls;
