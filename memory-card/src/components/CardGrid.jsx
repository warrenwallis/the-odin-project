import { useEffect, useState } from "react";
import apiFetch from "../services/apiFetch";
import LoadingSpinner from "./LoadingSpinner";

function CardGrid({ updateScore, setGameValid, seen, setSeen }) {
	const [isLoading, setIsLoading] = useState(true);
	const [emojis, setEmojis] = useState([]);

	const updateGameState = (id) => {
		console.log(id);

		if (seen.has(id)) {
			console.log("Already Clicked");
			setGameValid(false);
		} else {
			console.log("Nice");
			setSeen((prev) => new Set(prev).add(id));
			updateScore();
		}

		randomize();
	};

	const randomize = () => {
		const newEmojis = [...emojis];

		for (let i = newEmojis.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
			[newEmojis[i], newEmojis[j]] = [newEmojis[j], newEmojis[i]]; // swap elements
		}

		setEmojis(newEmojis);
	};

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			const response = await apiFetch("/v2/emoji");
			const data = await response.json();

			console.log(data.data);
			setEmojis(data.data);
			setIsLoading(false);
		})();
	}, []);

	return (
		<>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<div className="grid grid-cols-5 gap-4 w-full py-10">
					{emojis.map((card, idx) => (
						<button
							className="border flex justify-center rounded-lg h-45"
							key={idx}
							onClick={(e) => {
								e.preventDefault();
								updateGameState(card.id);
							}}
						>
							<Card src={card.images.original.url} />
						</button>
					))}
				</div>
			)}
		</>
	);
}

function Card({ src }) {
	return <img src={src} />;
}

export default CardGrid;
