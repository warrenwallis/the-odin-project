import Header from "./components/Header";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import JobExperience from "./components/JobExperience";
import SubmitButton from "./components/SubmitButton";
import { useState } from "react";

function App() {
	const [data, setData] = useState({
		generalInformationData: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
		},
		educationData: [
			{
				schoolName: "",
				major: "",
				graduationYear: "",
			},
		],
		jobExperienceData: [
			{
				companyName: "",
				positionTitle: "",
				startDate: "",
				endDate: "",
				description: "",
			},
		],
	});
	const [edit, setEdit] = useState(true);

	const handleReset = (e) => {
		e.preventDefault();

		setEdit(true);
	};

	console.log(data);

	return (
		<div className="flex justify-center items-center w-screen h-screen px-20">
			<form className="flex-col justify-center w-full h-full">
				<Header onClick={handleReset} />
				{edit ? (
					<>
						<GeneralInformation
							data={data.generalInformationData}
							setData={(updatedGeneralInformationData) => {
								setData((prev) => ({
									...prev,
									generalInformationData: updatedGeneralInformationData(
										prev.generalInformationData
									),
								}));
							}}
						/>
						<Education
							data={data.educationData}
							setData={(updatedEducationData) => {
								setData((prev) => ({
									...prev,
									educationData: updatedEducationData(prev.educationData),
								}));
							}}
						/>
						<JobExperience
							data={data.jobExperienceData}
							setData={(updatedJobExperienceData) => {
								setData((prev) => ({
									...prev,
									jobExperienceData: updatedJobExperienceData(
										prev.jobExperienceData
									),
								}));
							}}
						/>
					</>
				) : null}
				<div className="flex justify-center py-10">
					<SubmitButton
						text={edit ? "Submit" : "Edit"}
						onClick={(e) => {
							e.preventDefault();
							setEdit((prev) => !prev);
						}}
					/>
				</div>
			</form>
		</div>
	);
}

export default App;
