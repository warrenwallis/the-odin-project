import { useNavigate, useOutletContext } from "react-router-dom";

function Cart() {
	const { numItems } = useOutletContext();
	const navigate = useNavigate();

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
				<div></div>
			)}
		</>
	);
}

export default Cart;
