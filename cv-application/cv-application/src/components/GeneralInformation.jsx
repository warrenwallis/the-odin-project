import { useContext } from "react";
import logo from "../assets/generalInformation.png";
import Input from "./Input";
import { EditContext } from "../contexts/ViewContext";

function GeneralInformation({ data, setData }) {
	const { edit } = useContext(EditContext);

	const handleChange = (e) => {
		setData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div className="flex flex-col items-center py-10 text-gray-900">
			<div className="w-full text-2xl font-medium mb-10">
				General Information
			</div>
			<div className="flex w-full">
				<div className="flex flex-col w-3/5">
					<div className="flex gap-8">
						<Input
							title={"First Name"}
							styling={"flex-1"}
							name="firstName"
							value={data["firstName"]}
							onChange={handleChange}
						/>
						<Input
							title={"Last Name"}
							styling={"flex-1"}
							name="lastName"
							value={data["lastName"]}
							onChange={handleChange}
						/>
					</div>
					<Input
						title={"Email"}
						name="email"
						value={data["email"]}
						onChange={handleChange}
					/>
					<div className="flex gap-8">
						<Input
							title={"Phone Number"}
							styling={"flex-1"}
							name="phoneNumber"
							value={data["phoneNumber"]}
							onChange={handleChange}
						/>
						<Input title={"Spacer"} styling={"invisible flex-1"} />
					</div>
				</div>
				<div className="flex justify-center flex-1">
					<img src={logo} />
				</div>
			</div>
		</div>
	);
}

export default GeneralInformation;
