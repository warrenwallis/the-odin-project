import { useState } from "react";

function ItemCard({ item, addToCart }) {
	const [quantity, setQuantity] = useState(1);
	return (
		<div
			key={item.id}
			className="py-8 px-8 rounded-lg bg-white shadow-md gap-4 flex flex-col items-center"
		>
			<div className="overflow-hidden w-full h-full py-2">
				<img
					src={item.image}
					alt={item.title}
					className="w-full h-48 object-contain mb-4 transition-transform duration-300 hover:scale-105"
				/>
			</div>
			<div className="w-full flex flex-col gap-4">
				<h2 className="text-lg font-semibold line-clamp-2 min-h-14">
					{item.title}
				</h2>
				<p className="text-(--color-primary-dark) text-2xl font-bold">
					${item.price.toFixed(2)}
				</p>
				<div className="w-full flex">
					<button
						className="border border-gray-300 text-center text-xl rounded-lg p-4 active:border-(--color-primary) active:text-(--color-primary) shrink-0"
						onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
					>
						-
					</button>
					<input
						className="mx-2 flex-1 min-w-0 text-center bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-(--color-primary)"
						value={quantity}
						type="number"
						min={1}
						onChange={(e) =>
							setQuantity(
								parseInt(e.target.value) >= 1 ? parseInt(e.target.value) : 1,
							)
						}
					/>
					<button
						className="border border-gray-300 text-center text-xl rounded-lg p-4 active:border-(--color-primary) active:text-(--color-primary) shrink-0"
						onClick={() => setQuantity((prev) => prev + 1)}
					>
						+
					</button>
				</div>
			</div>
			<button
				className="w-full mt-4 px-4 py-4 bg-primary text-white bg-gray-950 rounded-lg hover:bg-gray-800"
				onClick={() => {
					addToCart(item, quantity);
					setQuantity(1);
				}}
			>
				<i className="fa-solid fa-cart-shopping mr-2"></i>
				Add to Cart
			</button>
		</div>
	);
}

export default ItemCard;
