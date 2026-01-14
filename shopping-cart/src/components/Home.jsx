import shoppingIllustration from "../assets/hero.jpeg";

function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-full h-screen">
			<h1 className="text-5xl font-bold mb-6">Welcome to ShopHub!</h1>
			<p className="text-xl text-primary">
				Your one-stop shop for all your needs. Browse our collection and add
				items to your cart.
			</p>
			<button className="mt-8 px-6 py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) flex items-center">
				Start Shopping
				<i className="fa-solid fa-arrow-right ml-2"></i>
			</button>
			<div className="mt-10 w-full max-w-6xl overflow-hidden rounded-2xl shadow-lg aspect-5/2">
				<img
					src={shoppingIllustration}
					alt="Shopping Illustration"
					className="h-full w-full object-cover"
				/>
			</div>
		</div>
	);
}

export default Home;
