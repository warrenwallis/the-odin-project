function GeneralInformation() {
	return (
		<div className="flex flex-col items-center py-10 border border-red-500 text-gray-900">
			<div className="w-full text-2xl font-medium mb-15">
				General Information
			</div>
			<div className="">
				<Input title="First Name" />
			</div>
		</div>
	);
}

function Input({ title = null }) {
	return (
		<div className="flex flex-col text-lg font-medium">
			{title}
			<input className="p-2 mt-1 rounded-md bg-gray-700 text-gray-100 focus:outline-none border-3 border-transparent focus:border-gray-400" />
		</div>
	);
}

export default GeneralInformation;
