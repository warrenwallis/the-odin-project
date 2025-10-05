import logo from "../assets/generalInformation.png"

function GeneralInformation() {
	return (
		<div className="flex flex-col items-center py-10 border border-red-500 text-gray-900">
			<div className="w-full text-2xl font-medium mb-10">
				General Information
			</div>
			<div className="flex w-full">
				<div className="flex flex-col w-3/5">
					<div className="flex justify-between">
						<Input title={"First Name"} />
						<Input title={"Last Name"} />
					</div>
					<Input title={"Email"} size={"full"}/>
					<Input title={"Phone Number"} />
				</div>
				<div className="flex justify-center flex-1">
					<img src={logo} />
				</div>
			</div>
		</div>
	);
}

function Input({ title = null, size = "47/100" }) {
	return (
		<div className={`flex flex-col my-2 text-lg font-medium w-${size}`}>
			{title}
			<input className="p-2 mt-1 rounded-xl bg-gray-900 text-gray-100 focus:outline-none border-3 border-transparent focus:border-gray-400" />
		</div>
	);
}

export default GeneralInformation;
