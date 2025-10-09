function DeleteButton({ onClick = () => {} }) {
	return (
		<div className="flex justify-center">
			<button
				className="text-sm px-2 text-white bg-gray-900 rounded-full"
				onClick={onClick}
			>
				<i className="fa-solid fa-xmark"></i>
			</button>
		</div>
	);
}

export default DeleteButton;
