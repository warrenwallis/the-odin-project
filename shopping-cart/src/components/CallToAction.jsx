import { Link } from "react-router-dom";

function CallToAction() {
	return (
		<div className="w-full max-w-6xl flex flex-col items-center gap-6 mt-10 mb-10 bg-(--color-primary) rounded-lg p-8 shadow-lg">
			<p className="flex-1 text-white text-4xl font-semibold">
				Ready to start your shopping?
			</p>
			<p className="text-gray-200 text-xl">
				Explore our products and build your perfect cart today
			</p>
			<Link
				to="/shop"
				className="bg-white hover:bg-gray-200 text-(--color-primary) font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
			>
				Go to Shop
				<i className="fa-solid fa-arrow-right ml-2"></i>
			</Link>
		</div>
	);
}

export default CallToAction;
