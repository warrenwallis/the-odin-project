import { useState } from "react";
import CardGrid from "./components/CardGrid";
import Controls from "./components/Controls";
import Header from "./components/Header";

function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [gameValid, setGameValid] = useState(true);
	const [seen, setSeen] = useState(new Set());

	const SCORE_INCREMENT = 10;

	const updateScore = () => {
		if (gameValid) {
			setScore(score + SCORE_INCREMENT);

			if (score + SCORE_INCREMENT > bestScore)
				setBestScore(score + SCORE_INCREMENT);
		}
	};

	const resetGame = () => {
		setScore(0);
		setSeen(new Set());
		setGameValid(true);
	};

	return (
		<div className="w-screen h-screen">
			<div className="mx-20 h-full flex flex-col items-center">
				<Header resetGame={resetGame} />
				<hr className="w-full" />
				<Controls
					score={score}
					bestScore={bestScore}
					newGame={resetGame}
					resetScore={() => {
						setBestScore(0);
						resetGame();
					}}
				/>
				<hr className="w-full" />
				{gameValid ? (
					<CardGrid
						updateScore={updateScore}
						setGameValid={setGameValid}
						seen={seen}
						setSeen={setSeen}
					/>
				) : (
					<div className="w-full h-full flex justify-center items-start py-25">
						<div className="flex flex-col gap-10">
							<div className="text-red-600 text-5xl">Game Over</div>
							<div className="flex justify-center gap-1 text-2xl font-bold">
								<div>Score:</div>
								<div>{score}</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
