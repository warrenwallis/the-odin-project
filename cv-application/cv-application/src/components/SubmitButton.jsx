function SubmitButton({ text = "", onClick = () => {} }) {
	return (
		<div className="flex justify-center">
			<button
				className="text-3xl px-24 py-6 text-white bg-gray-900 rounded-xl"
				onClick={onClick}
			>
				{text}
			</button>
		</div>
	);
}

export default SubmitButton;
