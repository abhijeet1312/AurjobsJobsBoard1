import { MapPin, Calendar, Mail, Phone, Github, Linkedin, Globe, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Template2({resumeData}) {

  const formatDateRange = (startDate, endDate) => {
    const formatDate = (dateStr) => {
      if (dateStr === "Present") return dateStr;
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
    };
    
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };


  return (
    // <div className="bg-gray-100 p-6 min-h-screen flex justify-center">
      // <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-4xl">
      //   {/* Header */}
      //   <div className="p-6 pb-4">
      //     <h1 className="text-2xl font-bold text-blue-900">{resumeData.name}</h1>
      //     <p className="text-blue-500 text-sm font-medium">{resumeData.title}</p>
          
      //     <div className="flex flex-wrap items-center mt-2 text-xs text-gray-600 space-x-4">
      //       <div className="flex items-center">
      //         <span>{resumeData.email}</span>
      //       </div>
      //       <div className="flex items-center">
      //         <span>{resumeData.linkedin}</span>
      //       </div>
      //       <div className="flex items-center">
      //         <MapPin size={12} className="mr-1 text-gray-400" />
      //         <span>{resumeData.location}</span>
      //       </div>
      //     </div>
      //   </div>

      //   {/* Main Content - Two Columns */}
      //   <div className="flex px-6">
      //     {/* Left Column */}
      //     <div className="w-1/2 pr-4">
      //       {/* Summary */}
      //       <div>
      //         <h2 className="text-sm font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">SUMMARY</h2>
      //         <p className="text-xs text-gray-700 mb-4 leading-tight">{resumeData.summary}</p>
      //       </div>

      //       {/* Experience */}
      //       <div className="mt-4">
      //         <h2 className="text-sm font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">EXPERIENCE</h2>
              
      //         {resumeData.experience.map((exp, index) => (
      //           <div key={index} className="mb-3">
      //             <div className="flex items-start">
      //               <div className="bg-blue-100 rounded p-1 mr-2 mt-0.5 flex-shrink-0">
      //                 <div className="w-4 h-4 bg-blue-100 flex items-center justify-center">
      //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      //                     <rect width="14" height="10" x="5" y="7" stroke="#2563EB" strokeWidth="2" />
      //                     <path d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7" stroke="#2563EB" strokeWidth="2" />
      //                   </svg>
      //                 </div>
      //               </div>
      //               <div className="flex-1">
      //                 <h3 className="text-sm font-bold text-gray-800">{exp.title}</h3>
      //                 <div className="text-xs text-blue-500 font-medium">{exp.company}</div>
                      
      //                 <div className="flex justify-between text-xs text-gray-500 mt-0.5">
      //                   <div className="flex items-center">
      //                     <MapPin size={10} className="mr-1" />
      //                     <span>{exp.location}</span>
      //                   </div>
      //                   <div className="flex items-center">
      //                     <Calendar size={10} className="mr-1" />
      //                     <span>{exp.period}</span>
      //                   </div>
      //                 </div>
                      
      //                 <p className="text-xs text-gray-600 italic mt-1 leading-tight">{exp.description}</p>
                      
      //                 <ul className="text-xs text-gray-700 list-disc pl-4 mt-1 space-y-0.5 leading-tight">
      //                   {exp.achievements.map((achievement, i) => (
      //                     <li key={i}>{achievement}</li>
      //                   ))}
      //                 </ul>
      //               </div>
      //             </div>
      //           </div>
      //         ))}
      //       </div>

      //       {/* Education */}
      //       <div className="mt-4">
      //         <h2 className="text-sm font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">EDUCATION</h2>
              
      //         {resumeData.education.map((edu, index) => (
      //           <div key={index} className="mb-2 flex items-start">
      //             <div className="bg-amber-100 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
      //               <div className="w-4 h-4 flex items-center justify-center">
      //                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      //                   <path d="M12 3L20 9V21H4V9L12 3Z" stroke="#D97706" strokeWidth="2" />
      //                   <path d="M8 14C8 12.8954 8.89543 12 10 12H14C15.1046 12 16 12.8954 16 14V21H8V14Z" stroke="#D97706" strokeWidth="2" />
      //                 </svg>
      //               </div>
      //             </div>
      //             <div>
      //               <h3 className="text-sm font-bold text-gray-800">{edu.degree}</h3>
      //               <div className="text-xs text-blue-500">{edu.school}</div>
      //               <div className="flex justify-between text-xs text-gray-500 mt-0.5">
      //                 <div className="flex items-center">
      //                   <MapPin size={10} className="mr-1" />
      //                   <span>{edu.location}</span>
      //                 </div>
      //                 <div className="flex items-center ml-6">
      //                   <Calendar size={10} className="mr-1" />
      //                   <span>{edu.period}</span>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         ))}
      //       </div>

      //       {/* Languages */}
      //       <div className="mt-4">
      //         <h2 className="text-sm font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">LANGUAGES</h2>
      //         <div className="grid grid-cols-2 gap-2">
      //           {resumeData.languages.map((lang, index) => (
      //             <div key={index} className="flex items-center justify-between mb-2">
      //               <span className="text-xs font-medium text-gray-700">{lang.name}</span>
      //               {renderSkillLevel(lang.level)}
      //             </div>
      //           ))}
      //         </div>
      //       </div>
      //     </div>

      //     {/* Right Column */}
      //     <div className="w-1/2 pl-4">
      //       {/* Strengths */}
      //       <div>
      //         <h2 className="text-sm font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">STRENGTHS</h2>
              
      //         {resumeData.strengths.map((strength, index) => (
      //           <div key={index} className="mb-3">
      //             <div className="flex items-start mb-1">
      //               <div className="bg-blue-100 rounded p-1 mr-2 mt-0.5 flex-shrink-0">
      //                 {index === 0 && (
      //                   <div className="w-4 h-4 flex items-center justify-center">
      //                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      //                       <path d="M3 3V21H21" stroke="#2563EB" strokeWidth="2" />
      //                       <path d="M19 5L10 14L7 11" stroke="#2563EB" strokeWidth="2" />
      //                     </svg>
      //                   </div>
      //                 )}
      //                 {index === 1 && (
      //                   <div className="w-4 h-4 flex items-center justify-center">
      //                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      //                       <rect x="4" y="4" width="16" height="16" rx="2" stroke="#2563EB" strokeWidth="2" />
      //                       <path d="M12 4V20" stroke="#2563EB" strokeWidth="2" />
      //                       <path d="M4 12H20" stroke="#2563EB" strokeWidth="2" />
      //                     </svg>
      //                   </div>
      //                 )}
      //                 {index === 2 && (
      //                   <div className="w-4 h-4 flex items-center justify-center">
      //                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      //                       <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#2563EB" strokeWidth="2" />
      //                       <path d="M12 8V16" stroke="#2563EB" strokeWidth="2" />
      //                       <path d="M8 12H16" stroke="#2563EB" strokeWidth="2" />
      //                     </svg>
      //                   </div>
      //                 )}
      //               </div>
      //               <div>
      //                 <span className="text-xs font-bold text-gray-800">{strength.title}</span>
      //                 <p className="text-xs text-gray-600 leading-tight">{strength.description}</p>
      //               </div>
      //             </div>
      //           </div>
      //         ))}
      //       </div>

      //       {/* Skills */}
      //       <div className="mt-4">
      //         <h2 className="text-sm font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">SKILLS</h2>
      //         <div className="grid grid-cols-1 gap-y-1.5">
      //           {resumeData.skills.map((skill, index) => (
      //             <div key={index} className="flex items-center justify-between">
      //               <span className="text-xs font-medium text-gray-700">{skill.name}</span>
      //               {renderSkillLevel(skill.level)}
      //             </div>
      //           ))}
      //         </div>
      //       </div>

      //       {/* Certification */}
      //       <div className="mt-4">
      //         <h2 className="text-sm font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">CERTIFICATION</h2>
              
      //         {resumeData.certifications.map((cert, index) => (
      //           <div key={index} className="mb-2">
      //             <div className="flex items-start">
      //               <div className="bg-blue-100 rounded p-1 mr-2 mt-0.5 flex-shrink-0">
      //                 <div className="w-4 h-4 flex items-center justify-center">
      //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      //                     <path d="M12 15L8.5 18L9.5 14L6.5 11.5L10.5 11L12 7L13.5 11L17.5 11.5L14.5 14L15.5 18L12 15Z" fill="#2563EB" />
      //                     <circle cx="12" cy="12" r="9" stroke="#2563EB" strokeWidth="2" />
      //                   </svg>
      //                 </div>
      //               </div>
      //               <div>
      //                 <span className="text-xs font-bold text-blue-500">{cert.title}</span>
      //                 <p className="text-xs text-gray-600 leading-tight">{cert.description}</p>
      //               </div>
      //             </div>
      //           </div>
      //         ))}
      //       </div>

      //       {/* Interests */}
      //       <div className="mt-4">
      //         <h2 className="text-sm font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">INTERESTS</h2>
              
      //         {resumeData.interests.map((interest, index) => (
      //           <div key={index} className="mb-2">
      //             <div className="flex items-start">
      //               <div className="bg-blue-100 rounded p-1 mr-2 mt-0.5 flex-shrink-0">
      //                 <div className="w-4 h-4 flex items-center justify-center">
      //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      //                     <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#2563EB" strokeWidth="2" />
      //                     <path d="M3 12H21" stroke="#2563EB" strokeWidth="2" />
      //                     <path d="M12 3C14.5013 5.46452 15.9228 8.67423 16 12C15.9228 15.3258 14.5013 18.5355 12 21C9.49872 18.5355 8.07725 15.3258 8 12C8.07725 8.67423 9.49872 5.46452 12 3Z" stroke="#2563EB" strokeWidth="2" />
      //                   </svg>
      //                 </div>
      //               </div>
      //               <div>
      //                 <span className="text-xs font-bold text-gray-800">{interest.title}</span>
      //                 <p className="text-xs text-gray-600 leading-tight">{interest.description}</p>
      //               </div>
      //             </div>
      //           </div>
      //         ))}
      //       </div>
      //     </div>
      //   </div>

      //   {/* Footer */}
      //   <div className="px-6 py-2 bg-gray-50 text-xs text-gray-500 flex justify-between items-center rounded-b-lg mt-6">
      //     <span>www.enhancv.com</span>
      //     <div className="flex items-center">
      //       <span>Powered by</span>
      //       <svg className="w-16 h-4 ml-1" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      //         <path d="M10 10 A 10 10 0 1 0 20 10 A 10 10 0 1 0 0 10 A 10 10 0 1 0 10 10 Z" fill="#e2e8f0" />
      //         <path d="M25 5 L35 5 L35 7 L25 7 Z M25 9 L40 9 L40 11 L25 11 Z M25 13 L32 13 L32 15 L25 15 Z M50 5 L60 5 L60 7 L50 7 Z M45 9 L65 9 L65 11 L45 11 Z M50 13 L60 13 L60 15 L50 15 Z" fill="#4a5568" />
      //       </svg>
      //     </div>
      //   </div>
      // </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-4xl">
      {/* Header */}
      <div className="p-6 pb-4">
        <h1 className="text-2xl font-bold text-blue-900">{resumeData.personalInfo.name}</h1>
        <p className="text-blue-500 text-sm font-medium">{resumeData.personalInfo.title}</p>
        
        <div className="flex flex-wrap items-center mt-2 text-xs text-gray-600 space-x-4">
          <div className="flex items-center">
            <Mail size={12} className="mr-1 text-gray-400" />
            <span>{resumeData.personalInfo.email}</span>
          </div>
          <div className="flex items-center">
            <Phone size={12} className="mr-1 text-gray-400" />
            <span>{resumeData.personalInfo.phone}</span>
          </div>
          <div className="flex items-center">
            <MapPin size={12} className="mr-1 text-gray-400" />
            <span>{resumeData.personalInfo.location}</span>
          </div>
          {resumeData.personalInfo.github && (
            <div className="flex items-center">
              <Github size={12} className="mr-1 text-gray-400" />
              <span>{resumeData.personalInfo.github}</span>
            </div>
          )}
          {resumeData.personalInfo.linkedin && (
            <div className="flex items-center">
              <Linkedin size={12} className="mr-1 text-gray-400" />
              <span>{resumeData.personalInfo.linkedin}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content - Two Columns */}
      <div className="flex px-6">
        {/* Left Column */}
        <div className="w-1/2 pr-4">
          {/* Summary */}
          <div>
            <h2 className="text-sm font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">SUMMARY</h2>
            <p className="text-xs text-gray-700 mb-4 leading-tight">{resumeData.personalInfo.summary}</p>
          </div>

          {/* Experience */}
          <div className="mt-4">
            <h2 className="text-sm font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">EXPERIENCE</h2>
            
            {resumeData.experience.map((exp) => (
              <div key={exp.id} className="mb-3">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded p-1 mr-2 mt-0.5 flex-shrink-0">
                    <div className="w-4 h-4 bg-blue-100 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="14" height="10" x="5" y="7" stroke="#2563EB" strokeWidth="2" />
                        <path d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7" stroke="#2563EB" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-800">{exp.title}</h3>
                    <div className="text-xs text-blue-500 font-medium">{exp.company}</div>
                    
                    <div className="flex justify-between text-xs text-gray-500 mt-0.5">
                      <div className="flex items-center">
                        <MapPin size={10} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={10} className="mr-1" />
                        <span>{formatDateRange(exp.startDate, exp.endDate)}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-600 mt-1 leading-tight">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-4">
            <h2 className="text-sm font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">EDUCATION</h2>
            
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="mb-2 flex items-start">
                <div className="bg-amber-100 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3L20 9V21H4V9L12 3Z" stroke="#D97706" strokeWidth="2" />
                      <path d="M8 14C8 12.8954 8.89543 12 10 12H14C15.1046 12 16 12.8954 16 14V21H8V14Z" stroke="#D97706" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800">{edu.degree}</h3>
                  <div className="text-xs text-blue-500">{edu.institution}</div>
                  <div className="flex justify-between text-xs text-gray-500 mt-0.5">
                    <div className="flex items-center">
                      <MapPin size={10} className="mr-1" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center ml-6">
                      <Calendar size={10} className="mr-1" />
                      <span>{formatDateRange(edu.startDate, edu.endDate)}</span>
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-xs text-gray-600 mt-1 leading-tight">{edu.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          {/* <div className="mt-4">
            <h2 className="text-sm font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">PROJECTS</h2>
            
            {resumeData.projects.map((project) => (
              <div key={project.id} className="mb-3">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded p-1 mr-2 mt-0.5 flex-shrink-0">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#2563EB" strokeWidth="2" />
                        <path d="M3 9H21" stroke="#2563EB" strokeWidth="2" />
                        <path d="M9 21V9" stroke="#2563EB" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-800">{project.title}</h3>
                    <p className="text-xs text-gray-600 mt-1 leading-tight">{project.description}</p>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline mt-1 inline-block">
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Right Column */}
        <div className="w-1/2 pl-4">
          {/* Skills */}
          <div>
            <h2 className="text-sm font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">SKILLS</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {resumeData.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-blue-50 text-blue-700 rounded-full px-2 py-1 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-4">
            <h2 className="text-sm font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">CERTIFICATIONS</h2>
            
            {resumeData.certifications.map((cert) => (
              <div key={cert.id} className="mb-2">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded p-1 mr-2 mt-0.5 flex-shrink-0">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15L8.5 18L9.5 14L6.5 11.5L10.5 11L12 7L13.5 11L17.5 11.5L14.5 14L15.5 18L12 15Z" fill="#2563EB" />
                        <circle cx="12" cy="12" r="9" stroke="#2563EB" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-500">{cert.name}</span>
                    <div className="flex justify-between text-xs text-gray-600 mt-0.5">
                      <span>{cert.issuer}</span>
                      <span className="ml-4">{new Date(cert.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                    </div>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline mt-1 inline-block">
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
    
    {/* Projects  */}

          <div className="mt-4">
            <h2 className="text-sm font-bold text-blue-900 border-b border-gray-300 pb-1 mb-2">PROJECTS</h2>
            
            {resumeData.projects.map((project) => (
              <div key={project.id} className="mb-3">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded p-1 mr-2 mt-0.5 flex-shrink-0">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#2563EB" strokeWidth="2" />
                        <path d="M3 9H21" stroke="#2563EB" strokeWidth="2" />
                        <path d="M9 21V9" stroke="#2563EB" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-800">{project.title}</h3>
                    <p className="text-xs text-gray-600 mt-1 leading-tight">{project.description}</p>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline mt-1 inline-block">
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-2 bg-gray-50 text-xs text-gray-500 flex justify-between items-center rounded-b-lg mt-6">
        <span>www.enhancv.com</span>
        <div className="flex items-center">
          <span>Powered by</span>
          <svg className="w-16 h-4 ml-1" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 A 10 10 0 1 0 20 10 A 10 10 0 1 0 0 10 A 10 10 0 1 0 10 10 Z" fill="#e2e8f0" />
            <path d="M25 5 L35 5 L35 7 L25 7 Z M25 9 L40 9 L40 11 L25 11 Z M25 13 L32 13 L32 15 L25 15 Z M50 5 L60 5 L60 7 L50 7 Z M45 9 L65 9 L65 11 L45 11 Z M50 13 L60 13 L60 15 L50 15 Z" fill="#4a5568" />
          </svg>
        </div>
      </div>
    </div>
    // </div>
  );
}