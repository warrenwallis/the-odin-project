function DescriptionCards() {
	return (
		<div className="w-full max-w-6xl flex md:flex-col lg:flex-row sm:items-center gap-8 mt-10">
			<div className="w-full flex flex-col items-center justify-around bg-white rounded-lg shadow-lg p-6 gap-4">
				<div className="text-4xl bg-[#DBE7FF] text-(--color-primary) rounded-full p-2">
					<i className="fa-solid fa-bag-shopping"></i>
				</div>
				<p className="text-2xl font-semibold">Easy Shopping</p>
				<p className="text-gray-600">
					Browse products and add them to your cart with just a few clicks
				</p>
			</div>
			<div className="w-full flex flex-col items-center bg-white rounded-lg shadow-md p-6 gap-4">
				<div className="text-4xl bg-[#D4FFE6] text-[#00B736] rounded-full p-2">
					<i className="fa-solid fa-credit-card"></i>
				</div>
				<p className="text-2xl font-semibold">Secure Checkout</p>
				<p className="text-gray-600">
					Your payment information is always safe and secure
				</p>
			</div>
			<div className="w-full flex flex-col items-center bg-white rounded-lg shadow-md p-6 gap-4">
				<div className="text-4xl bg-[#F7E3FF] text-[#BD1DFF] rounded-full p-2">
					<i className="fa-solid fa-truck"></i>
				</div>
				<p className="text-2xl font-semibold">Fast Delivery</p>
				<p className="text-gray-600">
					Get your products delivered quickly to your doorstep
				</p>
			</div>
		</div>
	);
}

export default DescriptionCards;
