import logo from "../assets/jobExperience.png";
import Input from "./Input";
import AddButton from "./AddButton";

function JobExperience({ data, setData }) {
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

	const addData = (e) => {
		e.preventDefault();
		setData((prev) => [
			...prev,
			{
				companyName: "",
				positionTitle: "",
				startDate: "",
				endDate: "",
				description: "",
			},
		]);
	};

	const deleteData = (e, id) => {
		e.preventDefault();
		setData((data) => [...data.slice(0, id), ...data.slice(id + 1)]);
	};

	const experienceList = data.map((experience, id) => {
		return (
			<div key={id} className="mb-8">
				<Input
					title={`Company Name ${id + 1}`}
					name="companyName"
					value={experience["companyName"]}
					onChange={(e) => {
						handleChange(e, id);
					}}
					deleteButton={id > 0 ? true : false}
					deleteOnClick={(e) => {
						deleteData(e, id);
					}}
				/>
				<Input
					title={`Position Title ${id + 1}`}
					name="positionTitle"
					value={experience["positionTitle"]}
					onChange={(e) => {
						handleChange(e, id);
					}}
				/>
				<div className="flex gap-8">
					<Input
						title={`Start Date ${id + 1}`}
						styling={"flex-1"}
						name="startDate"
						value={experience["startDate"]}
						onChange={(e) => {
							handleChange(e, id);
						}}
					/>
					<Input
						title={`End Date ${id + 1}`}
						styling={"flex-1"}
						name="endDate"
						value={experience["endDate"]}
						onChange={(e) => {
							handleChange(e, id);
						}}
					/>
				</div>
				<Input
					title={"Description"}
					styling={"flex-1"}
					name="description"
					value={experience["description"]}
					onChange={(e) => {
						handleChange(e, id);
					}}
					description={true}
				/>
			</div>
		);
	});

	return (
		<div className="flex flex-col items-center py-10 text-gray-900">
			<div className="w-full text-2xl font-medium mb-10">Job Experience</div>
			<div className="flex items-center w-full">
				<div className="flex flex-col w-3/5">
					{experienceList}
					<AddButton onClick={addData} />
				</div>
				<div className="flex justify-center flex-1">
					<img src={logo} />
				</div>
			</div>
		</div>
	);
}

export default JobExperience;
