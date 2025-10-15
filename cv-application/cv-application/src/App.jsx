import Header from "./components/Header";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import JobExperience from "./components/JobExperience";
import SubmitButton from "./components/SubmitButton";
import { useContext, useState } from "react";
import { EditContext } from "./contexts/ViewContext";
import CVOutput from "./components/CVOutput";

function App() {
	const { edit, toggleEdit } = useContext(EditContext);
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

	const handleReset = (e) => {
		e.preventDefault();

		toggleEdit(true);
	};

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
				) : (
					<CVOutput data={data} />
				)}
				<div className="flex justify-center py-10">
					<SubmitButton
						text={edit ? "Submit" : "Edit"}
						onClick={(e) => {
							e.preventDefault();
							toggleEdit((prev) => !prev);
						}}
					/>
				</div>
			</form>
		</div>
	);
}

export default App;
