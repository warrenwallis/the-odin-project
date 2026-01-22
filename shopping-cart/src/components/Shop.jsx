import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";

function Shop() {
	const { addToCart } = useOutletContext();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => {
				setProducts(data);
				console.log(data);
			});
	}, []);

	return (
		<div className="bg-white p-10 flex flex-col items-center">
			<h1 className="text-4xl font-bold mb-6">Shop Our Products</h1>
			<p className="text-lg text-gray-700">
				Browse through our collection and add items to your cart
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
				{products.map((product) => (
					<ItemCard key={product.id} item={product} addToCart={addToCart} />
				))}
			</div>
		</div>
	);
}

export default Shop;
