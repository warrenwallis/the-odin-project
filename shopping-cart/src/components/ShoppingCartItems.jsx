import { useOutletContext } from "react-router-dom";

function ShoppingCartItems({
	title = "Sample Product",
	image = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
	price = 29.99,
	quantity = 1,
	id = -1,
	setQuantity = () => {},
}) {
	const { setCart } = useOutletContext();

	return (
		<div className="w-full flex gap-4 border border-gray-200 rounded-lg bg-white p-8">
			<div className="p-1">
				<img
					src={image}
					alt="Product Image"
					className="w-24 h-24 object-contain"
				/>
			</div>
			<div className="flex flex-col flex-1 gap-2">
				<div className="flex justify-between">
					<h1 className="text-xl font-semibold">{title} </h1>
					<button
						className="hover:bg-red-200 rounded-xl p-1"
						onClick={() => {
							setCart((prevCart) =>
								prevCart.filter((cartItem) => cartItem.id !== id),
							);
						}}
					>
						<i className="fa-solid fa-trash text-red-600"></i>
					</button>
				</div>
				<p className="text-(--color-primary-dark) text-2xl font-bold">
					${price.toFixed(2)}
				</p>
				<div className="flex">
					<button
						className="border border-gray-300 text-center text-xl rounded-lg px-4 active:border-(--color-primary) active:text-(--color-primary) shrink-0"
						onClick={() => setQuantity(Math.max(1, quantity - 1))}
					>
						-
					</button>
					<input
						className="mx-2 w-24 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:border-(--color-primary) bg-white border border-gray-300 font-semibold"
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
						onClick={() => setQuantity(quantity + 1)}
					>
						+
					</button>
				</div>
				<div className="flex justify-between">
					<p>Subtotal</p>
					<div className="text-lg font-semibold">
						${(price * quantity).toFixed(2)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ShoppingCartItems;
