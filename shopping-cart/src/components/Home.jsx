import shoppingIllustration from "../assets/hero.jpeg";
import CallToAction from "./CallToAction";
import DescriptionCards from "./DescriptionCards";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-full h-screen">
			<h1 className="text-5xl font-bold mb-6">Welcome to ShopHub!</h1>
			<p className="text-xl text-primary">
				Your one-stop shop for all your needs. Browse our collection and add
				items to your cart.
			</p>
			<Link
				to="/shop"
				className="mt-8 px-6 py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) flex items-center"
			>
				Start Shopping
				<i className="fa-solid fa-arrow-right ml-2"></i>
			</Link>
			<div className="mt-10 w-full max-w-6xl overflow-hidden rounded-2xl shadow-lg h-96">
				<img
					src={shoppingIllustration}
					alt="Shopping Illustration"
					className="h-full w-full object-cover "
				/>
			</div>
			<DescriptionCards />
			<CallToAction />
		</div>
	);
}

export default Home;
