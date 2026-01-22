function NavigationBar({ pageIdx, setPageIdx, numItems }) {
	return (
		<div className="bg-white px-10 py-5 shadow-xl flex justify-between items-center">
			<div className="flex-1">
				<button
					className="font-bold flex items-center text-2xl"
					onClick={() => setPageIdx(0)}
				>
					<i className="fa-solid fa-shop icon-primary text-5xl mr-2"></i>
					ShopHub
				</button>
			</div>
			<div className="flex-1 flex justify-end text-xl text-primary">
				<button
					className={`mx-4 px-4 py-2 rounded-lg  ${
						pageIdx === 0
							? "bg-(--color-primary)/20 text-(--color-primary)"
							: "hover:bg-gray-100"
					}`}
					onClick={() => setPageIdx(0)}
				>
					<i className="fa-solid fa-house mr-2"></i>
					Home
				</button>
				<button
					className={`mx-4 px-4 py-2 rounded-lg  ${
						pageIdx === 1
							? "bg-(--color-primary)/20 text-(--color-primary)"
							: "hover:bg-gray-100"
					}`}
					onClick={() => setPageIdx(1)}
				>
					<i className="fa-solid fa-shop mr-2"></i>
					Shop
				</button>
				<button
					className={`mx-4 px-4 py-2 rounded-lg relative ${
						pageIdx === 2
							? "bg-(--color-primary)/20 text-(--color-primary)"
							: "hover:bg-gray-100"
					}`}
					onClick={() => setPageIdx(2)}
				>
					<i className="fa-solid fa-cart-shopping mr-2"></i>
					Cart
					{numItems > 0 && (
						<span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
							{numItems}
						</span>
					)}
				</button>
			</div>
		</div>
	);
}

export default NavigationBar;
