import DeleteButton from "./DeleteButton";

function Input({
	title = null,
	styling = "",
	name,
	value = "",
	onChange = () => {},
	deleteButton = false,
	deleteOnClick = () => {},
	description = false,
}) {
	return (
		<div className={`flex flex-col my-2 text-lg font-medium ${styling}`}>
			<div className="flex justify-between">
				{title}
				{deleteButton && <DeleteButton onClick={deleteOnClick} />}
			</div>
			{description ? (
				<textarea
					className="p-2 mt-1 w-full rounded-xl bg-gray-900 text-gray-100 focus:outline-none border-3 border-transparent focus:border-gray-400"
					name={name}
					value={value}
					onChange={onChange}
					rows={4}
				/>
			) : (
				<input
					className="p-2 mt-1 w-full rounded-xl bg-gray-900 text-gray-100 focus:outline-none border-3 border-transparent focus:border-gray-400"
					name={name}
					value={value}
					onChange={onChange}
				/>
			)}
		</div>
	);
}

export default Input;
