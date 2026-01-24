import { Link, useNavigate, useOutletContext } from "react-router-dom";
import ShoppingCartItems from "./ShoppingCartItems";

function Cart() {
	const { numItems, setCart, cart } = useOutletContext();
	const navigate = useNavigate();

	const totalPrice = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0,
	);

	return (
		// <div className="bg-white p-10">
		// 	<h1 className="text-4xl font-bold text-primary mb-6">Cart Page</h1>
		// 	<p className="text-lg text-gray-700">
		// 		Your selected items will appear here.
		// 	</p>
		// </div>
		<>
			{numItems === 0 ? (
				<div className="flex flex-col items-center w-full bg-white p-10 rounded gap-4 shadow-lg">
					<div className="p-4 bg-gray-200 rounded-full">
						<i className="fa-solid fa-basket-shopping text-5xl"></i>
					</div>
					<h1 className="text-4xl font-bold mb-6">Your cart is empty</h1>
					<span className="text-lg text-gray-700">
						Start shopping and add some products to your cart!
					</span>
					<button
						className="mt-6 px-4 py-2 bg-gray-950 text-white rounded hover:bg-primary-dark"
						onClick={() => {
							navigate("/shop");
						}}
					>
						Go to Shop
					</button>
				</div>
			) : (
				<div className="flex flex-col itemms-start w-full">
					<h1 className="text-5xl font-bold mb-6">Shopping Cart</h1>
					<div className="flex gap-6">
						<div className="w-2/3 flex flex-col gap-4">
							{cart.map((item) => (
								<ShoppingCartItems
									key={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									quantity={item.quantity}
									id={item.id}
									setQuantity={(newQuantity) => {
										setCart((prevCart) =>
											prevCart.map((cartItem) =>
												cartItem.id === item.id
													? { ...cartItem, quantity: newQuantity }
													: cartItem,
											),
										);
									}}
								/>
							))}
						</div>
						<div className="w-1/3 h-min border border-gray-200 rounded-lg bg-white p-8">
							<h1 className="text-3xl font-bold mb-10">Order Summary</h1>
							<div className="flex justify-between mb-4 text-xl text-gray-500">
								<p>Items ({numItems}):</p>
								<p>${totalPrice.toFixed(2)}</p>
							</div>
							<div className="flex justify-between text-xl text-gray-500">
								<p>Shipping:</p>
								<p className="text-green-600 font-bold">FREE</p>
							</div>
							<br />
							<div className="flex justify-between text-2xl font-bold border-t border-gray-200 pt-4">
								<p>Total:</p>
								<p>${totalPrice.toFixed(2)}</p>
							</div>
							<button className="w-full mt-6 px-4 py-4 bg-gray-950 text-white rounded-lg hover:bg-gray-800">
								Proceed to Checkout
							</button>
							<Link
								to="/shop"
								className="block w-full mt-4 px-4 py-4 border border-gray-200 text-gray-950 rounded-lg hover:bg-gray-100 text-center"
							>
								Continue Shopping
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Cart;
