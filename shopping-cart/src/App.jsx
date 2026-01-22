import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";

function App() {
	const [cart, setCart] = useState([]);

	const numItems = cart.reduce((total, item) => total + item.quantity, 0);

	const addToCart = (item, quantity) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find(
				(cartItem) => cartItem.id === item.id,
			);
			if (existingItem) {
				return prevCart.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + quantity }
						: cartItem,
				);
			}
			return [...prevCart, { ...item, quantity }];
		});
	};

	return (
		<>
			<NavigationBar numItems={numItems} />
			<div className="w-full h-full px-10 py-20 flex justify-center">
				<Outlet context={{ cart, setCart, numItems, addToCart }} />
			</div>
		</>
	);
}

export default App;
