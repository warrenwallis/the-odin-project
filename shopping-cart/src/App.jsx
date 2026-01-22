import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
	const [pageIdx, setPageIdx] = useState(0);
	const [cart, setCart] = useState([]);

	const pages = {
		0: <Home />,
		1: (
			<Shop
				addToCart={(item, quantity) => {
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
						} else {
							return [...prevCart, { ...item, quantity }];
						}
					});
				}}
			/>
		),
		2: <Cart cart={cart} setCart={setCart} />,
	};

	const numItems = cart.reduce((total, item) => total + item.quantity, 0);

	return (
		<>
			<NavigationBar
				pageIdx={pageIdx}
				setPageIdx={setPageIdx}
				numItems={numItems}
			/>
			<div className="w-full h-full px-10 py-20 flex justify-center">
				{pages[pageIdx]}
			</div>
		</>
	);
}

export default App;
