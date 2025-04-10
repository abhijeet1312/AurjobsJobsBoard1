const ModernResumePreview = ({resumeData}) => {
    // Format dates helper function
    const formatDate = (dateStr) => {
        if (!dateStr || dateStr === "Present") return dateStr;
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return dateStr;
        return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
    };

    return (
        <div id="resume" className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-4xl">

            <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{resumeData.personalInfo.name}</h1>
                    <h2 className="text-xl text-gray-700 mb-3">{resumeData.personalInfo.title}</h2>
                    <div className="flex justify-center flex-wrap gap-3 text-sm text-gray-600">
                        <span>{resumeData.personalInfo.email}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{resumeData.personalInfo.phone}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{resumeData.personalInfo.location}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{resumeData.personalInfo.github}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{resumeData.personalInfo.linkedin}</span>
                    </div>
                </div>

                {/* Summary */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 border-b border-gray-200 pb-1">Professional Summary</h3>
                    <p className="text-gray-700">{resumeData.personalInfo.summary}</p>
                </div>

                {/* Experience */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-1">Experience</h3>
                    {resumeData.experience.map((exp) => (
                        <div key={exp.id} className="mb-5">
                            <div className="flex flex-col sm:flex-row justify-between mb-1">
                                <h4 className="font-semibold text-gray-800">{exp.title}</h4>
                                <span className="text-gray-600 text-sm">
                                    {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                                </span>
                            </div>
                            <p className="font-medium text-gray-700 mb-1">{exp.company}, {exp.location}</p>
                            <p className="text-gray-600 text-sm whitespace-pre-line">{exp.description}</p>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-1">Education</h3>
                    {resumeData.education.map((edu) => (
                        <div key={edu.id} className="mb-5">
                            <div className="flex flex-col sm:flex-row justify-between mb-1">
                                <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                                <span className="text-gray-600 text-sm">
                                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                                </span>
                            </div>
                            <p className="font-medium text-gray-700 mb-1">{edu.institution}, {edu.location}</p>
                            <p className="text-gray-600 text-sm whitespace-pre-line">{edu.description}</p>
                        </div>
                    ))}
                </div>

                {/* Skills */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 border-b border-gray-200 pb-1">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {resumeData.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Projects */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-1">Projects</h3>
                    {resumeData.projects.map((project) => (
                        <div key={project.id} className="mb-5">
                            <h4 className="font-semibold text-gray-800 mb-1">{project.title}</h4>
                            <p className="text-gray-600 text-sm mb-1 whitespace-pre-line">{project.description}</p>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline text-sm"
                                >
                                    {project.link}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-1">Certifications</h3>
                    {resumeData.certifications.map((cert) => (
                        <div key={cert.id} className="mb-5">
                            <div className="flex flex-col sm:flex-row justify-between mb-1">
                                <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                                <span className="text-gray-600 text-sm">
                                    {formatDate(cert.date)}
                                </span>
                            </div>
                            <p className="font-medium text-gray-700 mb-1">{cert.issuer}</p>
                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline text-sm"
                                >
                                    {cert.link}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default ModernResumePreview;