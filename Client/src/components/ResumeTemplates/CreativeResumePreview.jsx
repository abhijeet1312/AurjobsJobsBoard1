const CreativeResumePreview = ({resumeData}) => (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-4xl print:shadow-none print:max-w-full">
        {/* Header with side profile section */}
        <div className="md:flex">
            {/* Sidebar */}
            <div className="bg-blue-800 text-white p-6 md:w-1/3">
                <div className="sticky top-0">
                    {/* Profile Photo Placeholder */}
                    {resumeData.personalInfo.photo ? (
                        <img
                            src={resumeData.personalInfo.photo}
                            alt={resumeData.personalInfo.name}
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white"
                        />
                    ) : (
                        <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-blue-600 flex items-center justify-center border-4 border-white">
                            <span className="text-4xl font-bold">
                                {resumeData.personalInfo.name.split(' ').map(name => name[0]).join('')}
                            </span>
                        </div>
                    )}

                    <h1 className="text-2xl font-bold mb-1 text-center">{resumeData.personalInfo.name}</h1>
                    <h2 className="text-lg mb-6 text-blue-200 text-center border-b border-blue-700 pb-4">{resumeData.personalInfo.title}</h2>

                    {/* Contact Information */}
                    <div className="space-y-3 mb-6">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm">{resumeData.personalInfo.email}</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-sm">{resumeData.personalInfo.phone}</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm">{resumeData.personalInfo.location}</span>
                        </div>
                        {resumeData.personalInfo.linkedin && (
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                <a href={resumeData.personalInfo.linkedin} className="text-sm text-blue-200 hover:text-white" target="_blank" rel="noreferrer">LinkedIn</a>
                            </div>
                        )}
                        {resumeData.personalInfo.website && (
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                <a href={resumeData.personalInfo.website} className="text-sm text-blue-200 hover:text-white" target="_blank" rel="noreferrer">Portfolio</a>
                            </div>
                        )}
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {resumeData.skills.map((skill, index) => (
                                <span key={index} className="bg-blue-700 px-3 py-1 rounded-full text-xs mb-2 inline-block">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                            Education
                        </h3>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="mb-3">
                                <h4 className="font-bold text-sm">{edu.degree}</h4>
                                <h5 className="text-blue-200 text-sm">{edu.institution}</h5>
                                <span className="text-xs text-blue-300">{edu.startDate} - {edu.endDate || 'Present'}</span>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-lg font-bold mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            Certifications
                        </h3>
                        {resumeData.certifications.map((cert, index) => (
                            <div key={index} className="mb-2">
                                <h4 className="font-bold text-sm">{cert.name}</h4>
                                <div className="flex justify-between text-xs text-blue-300">
                                    <span>{cert.issuer}</span>
                                    <span>{cert.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-6 md:w-2/3">
                {/* Summary */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-800 pb-2 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        About Me
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{resumeData.personalInfo.summary}</p>
                </div>

                {/* Experience */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 border-b-2 border-blue-800 pb-2 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Professional Experience
                    </h3>

                    <div className="space-y-6">
                        {resumeData.experience.map((exp, index) => (
                            <div key={index} className="relative pl-8 pb-6">
                                {/* Timeline dot and line */}
                                <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-blue-800"></div>
                                {index !== resumeData.experience.length - 1 && (
                                    <div className="absolute top-4 left-2 w-0.5 h-full bg-blue-100"></div>
                                )}

                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                    <h4 className="font-bold text-xl text-gray-900">{exp.title}</h4>
                                    <span className="text-blue-800 font-medium bg-white px-3 py-1 rounded text-sm mt-1 sm:mt-0">
                                        {exp.startDate} - {exp.endDate || 'Present'}
                                    </span>
                                </div>

                                <h5 className="font-semibold text-gray-700 mb-2 text-lg">
                                    {exp.company}
                                    {exp.location && <span className="text-gray-500 font-normal"> • {exp.location}</span>}
                                </h5>

                                <p className="text-gray-700 mb-2">{exp.description}</p>

                                {exp.achievements && (
                                    <ul className="list-disc list-outside text-gray-700 ml-4 space-y-1">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Projects */}
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 border-b-2 border-blue-800 pb-2 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                        Projects
                    </h3>

                    <div className="space-y-6">
                        {resumeData.projects.map((project, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-800">
                                <h4 className="font-bold text-gray-900 mb-2 text-lg">{project.title}</h4>

                                {project.technologies && (
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <p className="text-gray-700 mb-3">{project.description}</p>

                                {project.link && (
                                    <a href={project.link} className="text-blue-700 hover:underline flex items-center text-sm font-medium" target="_blank" rel="noreferrer">
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
            </div>
        </div>
    </div>
);

export default CreativeResumePreview;