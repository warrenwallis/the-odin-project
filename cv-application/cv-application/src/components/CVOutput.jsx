function CVOutput({ data }) {
	const { generalInformationData, educationData, jobExperienceData } = data;

	const educationList = educationData.map((education, id) => {
		return (
			<div key={id} className="flex justify-between my-1 text-xl">
				<div>
					{education.schoolName} -{" "}
					<span className="font-bold text-base">{education.major}</span>
				</div>
				<div className="font-bold">{education.graduationYear}</div>
			</div>
		);
	});

	const jobExperienceList = jobExperienceData.map((jobExperience, id) => {
		return (
			<div key={id} className="flex flex-col gap-1 my-4">
				<div className="text-2xl font-medium">{jobExperience.companyName}</div>
				<div className="flex justify-between">
					<div>{jobExperience.positionTitle}</div>
					<div className="font-semibold">
						{jobExperience.startDate} - {jobExperience.endDate}
					</div>
				</div>
				<div className="mt-4">{jobExperience.description}</div>
			</div>
		);
	});

	return (
		<div className="flex flex-col w-full border px-12 py-8">
			<div className="flex flex-col items-center w-full">
				<div className="font-medium text-5xl mb-2">
					{generalInformationData.firstName} {generalInformationData.lastName}
				</div>
				<div className="flex gap-4">
					<div>{generalInformationData.email}</div>
					<div>{generalInformationData.phoneNumber}</div>
				</div>
			</div>
			<div className="border w-full my-4"></div>
			<div className="flex flex-col w-full">{educationList}</div>
			<div className="border w-full my-4"></div>
			<div className="flex flex-col w-full">{jobExperienceList}</div>
		</div>
	);
}

export default CVOutput;
