const ProfessionalResumePreview = ({resumeData}) => (
    <div className="bg-white p-6 shadow-lg max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-b-2 border-blue-600 pb-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-800">{resumeData.personalInfo.name}</h1>
            <div className="flex flex-wrap justify-between text-gray-600 mt-2">
                <span>{resumeData.personalInfo.location}</span>
                <span>{resumeData.personalInfo.phone}</span>
                <span>{resumeData.personalInfo.email}</span>
                <span>{resumeData.personalInfo.linkedin}</span>
            </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">PROFESSIONAL SUMMARY</h2>
            <p className="text-gray-700">{resumeData.personalInfo.summary}</p>
        </div>

        {/* Experience */}
        <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">WORK EXPERIENCE</h2>
            {resumeData.experience.map((job, index) => (
                <div key={index} className="mb-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">{job.company}, {job.location}</h3>
                            <p className="font-medium">{job.title}</p>
                        </div>
                        {/* <span className="text-gray-600">{job.period}</span> */}
                        <span className="text-gray-600 whitespace-nowrap">
                            {job.startDate} - {job.endDate || 'Present'}
                        </span>
                    </div>
                    {/* <ul className="list-disc pl-5 mt-2">
          {job.achievements.map((achievement, i) => (
            <li key={i} className="text-gray-700 mb-1">{achievement}</li>
          ))}
        </ul> */}
                </div>
            ))}
        </div>

        {/* Education */}
        <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">EDUCATION</h2>
            {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-2">
                    <div className="flex justify-between">
                        <h3 className="text-lg font-medium text-gray-800">{edu.degree}</h3>
                        <span>{edu.year}</span>
                    </div>
                    <p>{edu.school}, {edu.location}</p>
                    <p className="text-gray-700">{edu.details}</p>
                </div>
            ))}
        </div>

        {/* Skills */}
        <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">SKILLS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 className="font-medium text-gray-800">Technical Skills</h3>
                    <p className="text-gray-700">{resumeData.skills.join(', ')}</p>
                </div>
                <div>
                    <h3 className="font-medium text-gray-800">Soft Skills</h3>
                    <p className="text-gray-700">{resumeData.skills.join(', ')}</p>
                </div>
                <div>
                    <h3 className="font-medium text-gray-800">Languages</h3>
                    <p className="text-gray-700">{resumeData.skills.join(', ')}</p>
                </div>
            </div>
        </div>
    </div>
);


export default ProfessionalResumePreview;