import { Link, NavLink } from "react-router-dom";

function NavigationBar({ numItems }) {
	const navLinkClass = ({ isActive }) =>
		`mx-4 px-4 py-2 rounded-lg ${
			isActive
				? "bg-(--color-primary)/20 text-(--color-primary)"
				: "hover:bg-gray-100"
		}`;

	return (
		<div className="bg-white px-10 py-5 shadow-xl flex justify-between items-center">
			<div className="flex-1">
				<Link to="/" className="font-bold flex items-center text-2xl">
					<i className="fa-solid fa-shop icon-primary text-5xl mr-2"></i>
					ShopHub
				</Link>
			</div>
			<div className="flex-1 flex justify-end text-xl text-primary">
				<NavLink to="/" end className={navLinkClass}>
					<i className="fa-solid fa-house mr-2"></i>
					Home
				</NavLink>
				<NavLink to="/shop" className={navLinkClass}>
					<i className="fa-solid fa-shop mr-2"></i>
					Shop
				</NavLink>
				<NavLink
					to="/cart"
					className={({ isActive }) =>
						`mx-4 px-4 py-2 rounded-lg relative ${
							isActive
								? "bg-(--color-primary)/20 text-(--color-primary)"
								: "hover:bg-gray-100"
						}`
					}
				>
					<i className="fa-solid fa-cart-shopping mr-2"></i>
					Cart
					{numItems > 0 && (
						<span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
							{numItems}
						</span>
					)}
				</NavLink>
			</div>
		</div>
	);
}

export default NavigationBar;
