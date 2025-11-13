function Controls({ score, bestScore, newGame, resetScore }) {
	return (
		<div className="flex justify-between w-full py-10">
			<div className="w-2/5 font-bold text-2xl flex items-center">
				Do your best to click on gifs you <br /> haven't clicked on yet!
			</div>
			<div className="flex-1 flex flex-col gap-4 py-4">
				<button className="bg-gray-200 rounded-lg py-2" onClick={newGame}>
					New Game
				</button>
				<button className="bg-gray-200 rounded-lg py-2" onClick={resetScore}>
					Reset Scores
				</button>
			</div>
			<div className="flex-1 flex flex-col items-center justify-around font-semibold">
				<div className="text-2xl">Best Score</div>
				{bestScore}
			</div>
			<div className="flex-1 flex flex-col items-center justify-around font-semibold">
				<div className="text-2xl">Current Score</div>
				{score}
			</div>
		</div>
	);
}

export default Controls;
