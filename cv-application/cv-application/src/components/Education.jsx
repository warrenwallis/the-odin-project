import logo from "../assets/education.png";
import Input from "./Input";
import AddButton from "./AddButton";

function Education({ data, setData }) {
	const handleChange = (e, id) => {
		setData((datas) =>
			datas.map((data, dataId) => {
				if (dataId === id) {
					return { ...data, [e.target.name]: e.target.value };
				} else {
					return data;
				}
			})
		);
	};

	const addEducation = (e) => {
		e.preventDefault();
		setData((prev) => [
			...prev,
			{
				schoolName: "",
				major: "",
				graduationYear: "",
			},
		]);
	};

	const deleteEducation = (e, id) => {
		e.preventDefault();
		setData((data) => [...data.slice(0, id), ...data.slice(id + 1)]);
	};

	const educationList = data.map((education, id) => {
		return (
			<div key={id} className="mb-8">
				<Input
					title={`School Name ${id + 1}`}
					name="schoolName"
					value={education["schoolName"]}
					onChange={(e) => {
						handleChange(e, id);
					}}
					deleteButton={id > 0 ? true : false}
					deleteOnClick={(e) => {
						deleteEducation(e, id);
					}}
				/>
				<div className="flex gap-8">
					<Input
						title={`Major ${id + 1}`}
						styling={"flex-1"}
						name="major"
						value={education["major"]}
						onChange={(e) => {
							handleChange(e, id);
						}}
					/>
					<Input
						title={"Graduation Year"}
						styling={"flex-1"}
						name="graduationYear"
						value={education["graduationYear"]}
						onChange={(e) => {
							handleChange(e, id);
						}}
					/>
				</div>
			</div>
		);
	});

	return (
		<div className="flex flex-col items-center py-10 text-gray-900">
			<div className="w-full text-2xl font-medium mb-10">Education</div>
			<div className="flex items-center w-full">
				<div className="flex flex-col w-3/5">
					{educationList}
					<AddButton onClick={addEducation} />
				</div>
				<div className="flex justify-center flex-1">
					<img src={logo} />
				</div>
			</div>
		</div>
	);
}

export default Education;
