const MinimalistResumePreview = ({resumeData}) => (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-4xl">
        {/* Minimalist Header */}
        <div className="p-8 pb-4">
            <h1 className="text-4xl font-light mb-1 text-gray-900">{resumeData.personalInfo.name}</h1>
            <h2 className="text-xl font-light mb-4 text-gray-600">{resumeData.personalInfo.title}</h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <span>{resumeData.personalInfo.email}</span>
                <span>|</span>
                <span>{resumeData.personalInfo.phone}</span>
                <span>|</span>
                <span>{resumeData.personalInfo.location}</span>
                <span>|</span>
                <span>{resumeData.personalInfo.github}</span>

                <span>|</span>
                <span>{resumeData.personalInfo.linkedin}</span>
            </div>
        </div>

        {/* Summary */}
        <div className="px-8 mb-6">
            <p className="text-gray-700 text-sm leading-relaxed">{resumeData.personalInfo.summary}</p>
        </div>

        {/* Main Content */}
        <div className="px-8 pb-8">
            {/* Experience */}
            <div className="mb-6">
                <h3 className="text-lg font-light text-gray-900 mb-4">Experience</h3>
                {resumeData.experience.map((exp, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <h4 className="text-base font-medium text-gray-900">{exp.title}</h4>
                            <span className="text-sm text-gray-600">
                                {exp.startDate} — {exp.endDate}
                            </span>
                        </div>
                        <h5 className="text-sm text-gray-700 mb-1">{exp.company}, {exp.location}</h5>
                        <p className="text-sm text-gray-600">{exp.description}</p>
                    </div>
                ))}
            </div>

            {/* Education */}
            <div className="mb-6">
                <h3 className="text-lg font-light text-gray-900 mb-4">Education</h3>
                {resumeData.education.map((edu, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex justify-between items-baseline mb-1">
                            <h4 className="text-base font-medium text-gray-900">{edu.degree}</h4>
                            <span className="text-sm text-gray-600">
                                {edu.startDate} — {edu.endDate}
                            </span>
                        </div>
                        <h5 className="text-sm text-gray-700 mb-1">{edu.institution}, {edu.location}</h5>
                        <p className="text-sm text-gray-600">{edu.description}</p>
                    </div>
                ))}
            </div>

            {/* Two Column Layout for Skills and other sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div>
                    {/* Skills */}
                    <div className="mb-6">
                        <h3 className="text-lg font-light text-gray-900 mb-4">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {resumeData.skills.map((skill, index) => (
                                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div>
                    {/* Projects */}
                    <div className="mb-6">
                        <h3 className="text-lg font-light text-gray-900 mb-4">Projects</h3>
                        {resumeData.projects.map((project, index) => (
                            <div key={index} className="mb-3">
                                <h4 className="text-base font-medium text-gray-900 mb-1">{project.title}</h4>
                                <p className="text-sm text-gray-600 mb-1">{project.description}</p>
                                {project.link && (
                                    <a href={project.link} className="text-sm text-gray-700 hover:underline" target="_blank" rel="noreferrer">
                                        View Project
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-lg font-light text-gray-900 mb-4">Certifications</h3>
                        {resumeData.certifications.map((cert, index) => (
                            <div key={index} className="mb-2">
                                <h4 className="text-base font-medium text-gray-900 mb-1">{cert.name}</h4>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-700">{cert.issuer}</span>
                                    <span className="text-gray-600">{cert.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default MinimalistResumePreview;