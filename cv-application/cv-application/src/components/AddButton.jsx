function AddButton({ onClick = () => {} }) {
	return (
		<div className="flex justify-center">
			<button
				className="text-2xl text-white bg-gray-900 p-2 rounded-full"
				onClick={onClick}
			>
				<i className="fa-solid fa-plus"></i>
			</button>
		</div>
	);
}

export default AddButton;
