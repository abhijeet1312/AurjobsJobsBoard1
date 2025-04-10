

const ClassicResumePreview = ({resumeData}) => (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-4xl print:shadow-none print:max-w-full">
        {/* Header with improved responsiveness and visual hierarchy */}
        <div className="p-8 border-b border-gray-200 bg-gray-50">
            <h1 className="text-3xl font-bold mb-2 text-gray-900">{resumeData.personalInfo.name}</h1>
            <h2 className="text-xl mb-4 text-blue-700">{resumeData.personalInfo.title}</h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{resumeData.personalInfo.email}</span>
                </div>
                <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{resumeData.personalInfo.phone}</span>
                </div>
                <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{resumeData.personalInfo.location}</span>
                </div>
                {resumeData.personalInfo.linkedin && (
                    <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <a href={resumeData.personalInfo.linkedin} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                    </div>
                )}
                {resumeData.personalInfo.website && (
                    <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <a href={resumeData.personalInfo.website} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
                            Portfolio
                        </a>
                    </div>
                )}
            </div>
        </div>

        {/* Content with improved spacing and readability */}
        <div className="p-8">
            {/* Summary */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-200 pb-1 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Summary
                </h3>
                <p className="text-gray-700 leading-relaxed">{resumeData.personalInfo.summary}</p>
            </div>

            {/* Experience */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase border-b border-gray-200 pb-1 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Experience
                </h3>
                {resumeData.experience.map((exp, index) => (
                    <div key={index} className="mb-5 pl-4 border-l-2 border-gray-100 hover:border-blue-500 transition-colors duration-300">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                            <h4 className="font-bold text-gray-800">{exp.title}</h4>
                            <span className="text-gray-600 whitespace-nowrap">
                                {exp.startDate} - {exp.endDate || 'Present'}
                            </span>
                        </div>
                        <h5 className="font-semibold text-gray-700 mb-2">{exp.company}, {exp.location}</h5>
                        <p className="text-gray-700 mb-2">{exp.description}</p>
                        {exp.achievements && (
                            <ul className="list-disc list-inside text-gray-700 ml-2">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="mb-1">{achievement}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            {/* Two column layout for skills and education */}
            <div className="flex flex-col md:flex-row gap-8 mb-6">
                {/* Skills */}
                <div className="md:w-1/2">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-200 pb-1 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Skills
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {resumeData.skills.map((skill, index) => (
                            <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="md:w-1/2">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-200 pb-1 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                        Education
                    </h3>
                    {resumeData.education.map((edu, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                                <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                                <span className="text-gray-600 whitespace-nowrap">
                                    {edu.startDate} - {edu.endDate || 'Present'}
                                </span>
                            </div>
                            <h5 className="font-semibold text-gray-700 mb-1">{edu.institution}, {edu.location}</h5>
                            {edu.gpa && <p className="text-gray-700 mb-1">GPA: {edu.gpa}</p>}
                            {edu.description && <p className="text-gray-700">{edu.description}</p>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Projects */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-200 pb-1 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                    Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resumeData.projects.map((project, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                            <h4 className="font-bold text-gray-800 mb-2">{project.title}</h4>
                            <p className="text-gray-700 mb-2">{project.description}</p>
                            {project.technologies && (
                                <div className="flex flex-wrap gap-1 mb-2">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {project.link && (
                                <a href={project.link} className="text-blue-600 hover:underline flex items-center text-sm" target="_blank" rel="noreferrer">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    View Project
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-200 pb-1 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resumeData.certifications.map((cert, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg p-3 hover:border-blue-200 transition-colors duration-300">
                            <h4 className="font-bold text-gray-800 mb-1">{cert.name}</h4>
                            <div className="flex justify-between">
                                <span className="text-gray-700">{cert.issuer}</span>
                                <span className="text-gray-600">{cert.date}</span>
                            </div>
                            {cert.url && (
                                <a href={cert.url} className="text-blue-600 hover:underline text-sm mt-1 inline-block" target="_blank" rel="noreferrer">
                                    View Certificate
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Footer with optional additional info */}
        <div className="bg-gray-50 p-4 text-center text-gray-500 text-sm">
            <p>References available upon request</p>
        </div>
    </div>
);

export default ClassicResumePreview;