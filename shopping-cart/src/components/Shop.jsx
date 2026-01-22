import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function Shop({ addToCart }) {
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
		<div className="bg-white p-10">
			<h1 className="text-4xl font-bold text-primary mb-6">Shop Page</h1>
			<p className="text-lg text-gray-700">Welcome to our shop!</p>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
				{products.map((product) => (
					<ItemCard key={product.id} item={product} addToCart={addToCart} />
				))}
			</div>
		</div>
	);
}

export default Shop;
