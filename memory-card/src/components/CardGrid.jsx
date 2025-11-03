import react from "../assets/react.svg";

function CardGrid() {
	const cardList = Array.from({ length: 20 }, (_, i) => <Card key={i} />);
	return (
		<div className="grid grid-cols-5 gap-4 w-full py-10">
			{cardList.map((card) => (
				<button
					className="border flex justify-center py-20 rounded-lg"
					key={card.key}
				>
					{card}
				</button>
			))}
		</div>
	);
}

function Card() {
	return <img src={react} />;
}

export default CardGrid;
