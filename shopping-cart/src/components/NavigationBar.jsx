import { useState } from "react";

const pages = { 0: "Home", 1: "Shop", 2: "Cart" };

function NavigationBar() {
	const [pageIdx, setPageIdx] = useState(0);
	return (
		<div className="bg-white px-10 py-5 shadow-xl flex justify-between">
			<div className="flex-1">
				<button className="font-bold flex items-center text-2xl">
					<i className="fa-solid fa-shop icon-primary text-5xl mr-2"></i>
					ShopHub
				</button>
			</div>
			<div className="flex-1 flex justify-end text-xl text-primary">
				<button
					className={`mx-4 px-4 py-2 rounded-lg ${
						pageIdx === 0
							? "bg-(--color-primary)/20 text-(--color-primary)"
							: ""
					}`}
				>
					<i className="fa-solid fa-house mr-2"></i>
					Home
				</button>
				<button
					className={`mx-4 px-4 py-2 rounded-lg ${
						pageIdx === 1
							? "bg-(--color-primary)/20 text-(--color-primary)"
							: ""
					}`}
				>
					<i className="fa-solid fa-shop mr-2"></i>
					Shop
				</button>
				<button
					className={`mx-4 px-4 py-2 rounded-lg ${
						pageIdx === 2
							? "bg-(--color-primary)/20 text-(--color-primary)"
							: ""
					}`}
				>
					<i className="fa-solid fa-cart-shopping mr-2"></i>
					Cart
				</button>
			</div>
		</div>
	);
}

export default NavigationBar;
