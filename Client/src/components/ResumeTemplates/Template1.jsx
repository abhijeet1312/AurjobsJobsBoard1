import { Mail, Phone, MapPin, Award, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function Template1({resumeData}) {
  // const [resumeData] = useState({
  //   name: "Mason Turner",
  //   title: "Experienced Sales Professional | B2B | Networking",
  //   phone: "(234) 456-7234",
  //   email: "hello@mturner.com",
  //   location: "Denver, Colorado",
  //   website: "linkedIn.com",
  //   summary: "Accomplished sales professional with a proven track record in B2B environments, consistently driving sales growth and building long-term client relationships. Expert in consultative selling strategies, solution-based approaches, and leveraging technology and client engagement to achieve further success. Passionate about innovative strategies and technology.",
  //   skills: [
  //     { name: "B2B Sales", level: 95 },
  //     { name: "Account Management", level: 90 },
  //     { name: "Solution Selling", level: 85 },
  //     { name: "CRM Software", level: 80 },
  //     { name: "Pipeline Management", level: 85 },
  //     { name: "Client Relationship Building", level: 95 },
  //     { name: "Sales Presentations", level: 85 },
  //     { name: "Market Analysis", level: 75 }
  //   ],
  //   certifications: [
  //     { name: "Certified Sales Professional (CSP)", issuer: "National Association of Sales Professionals", date: "2020" },
  //     { name: "Solution Selling Methodology", issuer: "SalesTech Institute", date: "2019" },
  //     { name: "Advanced CRM Management", issuer: "Salesforce", date: "2018" }
  //   ],
  //   projects: [
  //     {
  //       title: "Digital Transformation Initiative",
  //       description: "Led a cross-functional team to implement digital sales tools across the organization, resulting in 28% increase in sales efficiency and 15% reduction in sales cycle time.",
  //       year: "2021"
  //     },
  //     {
  //       title: "Customer Retention Program",
  //       description: "Developed and implemented a strategic customer retention program that improved client renewals by 32% and increased upselling opportunities by 24%.",
  //       year: "2020"
  //     },
  //     {
  //       title: "Sales Team Mentorship",
  //       description: "Created and led a mentorship program for junior sales representatives, resulting in average performance increase of 40% for participants within first six months.",
  //       year: "2019"
  //     }
  //   ],
  //   experience: [
  //     {
  //       title: "Senior Account Executive",
  //       company: "TechSolutions Inc.",
  //       location: "Denver, Colorado",
  //       period: "07/2018 - Present",
  //       achievements: [
  //         "Drove a 30% increase in B2B software solutions sales over a two-year period by leveraging a consultative sales approach.",
  //         "Initiated and nurtured relationships with key decision-makers across 45+ national accounts in the tech sector, resulting in a 25% increase in client retention and 15% growth in existing business.",
  //       //   "Consistently exceeded quarterly sales targets by developing customized quarterly targets by 15% through diligent prospecting and pipeline expansion.",
  //       //   "Implemented a targeted content marketing strategy, driving a 40% increase in qualified leads and reducing the sales cycle time by an average of 25%.",
  //       //   "Conducted regular training on CRM software, enhancing team productivity by 35% and ensuring accurate forecasting and pipeline management."
  //       ]
  //     },
  //     {
  //       title: "Account Manager",
  //       company: "Global Logistics Solutions",
  //       location: "Denver, Colorado",
  //       period: "06/2016 - 12/2018",
  //       achievements: [
  //         "Grew existing accounts by 65% within a three-year tenure by developing a robust pipeline of new business in the logistics and transportation industry.",
  //         "Managed 25+ major accounts, and ensured high-quality client service, leading to a 95% increase in average deal size.",
  //       //   "Exceeded annual sales targets by an average of 20% through effective account penetration and strategic solution selling.",
  //       //   "Collaborated with cross-departmental teams to optimize client needs, achieving a 97% customer satisfaction rate.",
  //       //   "Turned over 80% of best sales practices, which contributed to a 35% team sales increase in the next fiscal quarter."
  //       ]
  //     },
  //     {
  //       title: "Sales Associate",
  //       company: "Retail Innovations",
  //       location: "Denver, Colorado",
  //       period: "01/2014 - 06/2016",
  //       achievements: [
  //         "Generated $1.2 million in sales within the consumer electronics sector by creating and nurturing a client base through personalized service and product expertise.",
  //         "Built relationships with customers that led to a 45% increase in repeat customers.",
  //       //   "Collaborated with the product development team to provide customer feedback, contributing to a product line improvement that led to a 25% surge in sales."
  //       ]
  //     }
  //   ],
  //   education: [
  //     {
  //       degree: "Master of Business Administration",
  //       school: "University of Denver",
  //       location: "Denver, Colorado",
  //       period: "08/2011 - 05/2013"
  //     },
  //     {
  //       degree: "Bachelor of Science in Marketing",
  //       school: "Colorado State University",
  //       location: "Fort Collins, Colorado",
  //       period: "08/2007 - 05/2011"
  //     }
  //   ],
  //   achievements: [
  //     {
  //       title: "Maximized Referral Business",
  //       description: "Developed a client referral program that resulted in a sustained 15% YoY increase in business for most recent position."
  //     },
  //     {
  //       title: "Strategic Account Growth",
  //       description: "Successfully expanded key account portfolio by 40% within 12 months at Global Logistics Solutions."
  //     }
  //   ]
  // });

  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const startMonth = start.toLocaleString('default', { month: 'short' });
    const startYear = start.getFullYear();
    
    let endString;
    if (endDate === "Present") {
      endString = "Present";
    } else {
      const end = new Date(endDate);
      const endMonth = end.toLocaleString('default', { month: 'short' });
      const endYear = end.getFullYear();
      endString = `${endMonth} ${endYear}`;
    }
    
    return `${startMonth} ${startYear} - ${endString}`;
  };
  return (
   
      // <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-4xl">
      //   {/* Header */}
      //   <div className="p-6">
      //     <h1 className="text-2xl font-bold text-gray-800">{resumeData.name}</h1>
      //     <p className="text-blue-600 font-medium">{resumeData.title}</p>
          
      //     <div className="flex flex-wrap items-center mt-2 text-sm text-gray-600">
      //       <div className="flex items-center mr-4">
      //         <Phone size={14} className="mr-1 text-blue-600" />
      //         <span>{resumeData.phone}</span>
      //       </div>
      //       <div className="flex items-center mr-4">
      //         <Mail size={14} className="mr-1 text-blue-600" />
      //         <span>{resumeData.email}</span>
      //       </div>
      //       <div className="flex items-center">
      //         <MapPin size={14} className="mr-1 text-blue-600" />
      //         <span>{resumeData.location}</span>
      //       </div>
      //       <div className="flex items-center ml-4">
      //         <span className="text-blue-600 text-sm">{resumeData.website}</span>
      //       </div>
      //     </div>
      //   </div>

      //   {/* Summary */}
      //   <div className="px-6">
      //     <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">SUMMARY</h2>
      //     <p className="text-sm text-gray-700 mb-4">{resumeData.summary}</p>
      //   </div>

      //   {/* Skills */}
      //   <div className="px-6 mt-4">
      //     <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">SKILLS</h2>
      //     <div className="grid grid-cols-2 gap-4 mb-4">
      //       {resumeData.skills.map((skill, index) => (
      //         <div key={index} className="mb-2">
      //           <div className="flex justify-between mb-1">
      //             <span className="text-sm font-medium text-gray-700">{skill.name}</span>
      //             <span className="text-xs text-gray-500">{skill.level}%</span>
      //           </div>
      //           <div className="w-full bg-gray-200 rounded-full h-2">
      //             <div 
      //               className="bg-blue-600 h-2 rounded-full" 
      //               style={{ width: `${skill.level}%` }}
      //             ></div>
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   </div>

      //   {/* Certifications */}
      //   <div className="px-6 mt-4">
      //     <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">CERTIFICATIONS</h2>
      //     <div className="grid grid-cols-1 gap-3 mb-4">
      //       {resumeData.certifications.map((cert, index) => (
      //         <div key={index} className="flex items-start">
      //           <Award size={16} className="mr-2 text-blue-600 mt-1 flex-shrink-0" />
      //           <div>
      //             <h3 className="text-sm font-bold text-gray-800">{cert.name}</h3>
      //             <div className="flex justify-between">
      //               <span className="text-xs text-gray-600">{cert.issuer}</span>
      //               <span className="text-xs text-gray-500">{cert.date}</span>
      //             </div>
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   </div>

      //   {/* Projects */}
      //   <div className="px-6 mt-4">
      //     <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">PROJECTS</h2>
      //     <div className="grid grid-cols-1 gap-4 mb-4">
      //       {resumeData.projects.map((project, index) => (
      //         <div key={index} className="border-l-2 border-blue-500 pl-4 py-1">
      //           <div className="flex justify-between">
      //             <h3 className="text-sm font-bold text-gray-800">{project.title}</h3>
      //             <span className="text-xs text-gray-500">{project.year}</span>
      //           </div>
      //           <p className="text-xs text-gray-700 mt-1">{project.description}</p>
      //         </div>
      //       ))}
      //     </div>
      //   </div>

      //   {/* Experience */}
      //   <div className="px-6 mt-4">
      //     <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">EXPERIENCE</h2>
          
      //     {resumeData.experience.map((exp, index) => (
      //       <div key={index} className="mb-4">
      //         <div className="flex justify-between items-start">
      //           <h3 className="text-base font-bold text-gray-800">{exp.title}</h3>
      //           <div className="text-xs text-gray-600">{exp.period}</div>
      //         </div>
              
      //         <div className="flex items-center mb-2">
      //           <span className="text-blue-600 font-medium">{exp.company}</span>
      //           <div className="flex items-center ml-2 text-sm text-gray-600">
      //             <MapPin size={12} className="mr-1 text-gray-400" />
      //             <span className="text-xs">{exp.location}</span>
      //           </div>
      //         </div>
              
      //         <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
      //           {exp.achievements.map((achievement, i) => (
      //             <li key={i}>{achievement}</li>
      //           ))}
      //         </ul>
      //       </div>
      //     ))}
      //   </div>

      //   {/* Education */}
      //   <div className="px-6 mt-4">
      //     <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">EDUCATION</h2>
          
      //     {resumeData.education.map((edu, index) => (
      //       <div key={index} className="mb-3">
      //         <h3 className="text-base font-bold text-gray-800">{edu.degree}</h3>
      //         <div className="text-blue-600 font-medium">{edu.school}</div>
      //         <div className="flex justify-between">
      //           <div className="flex items-center text-xs text-gray-600">
      //             <MapPin size={12} className="mr-1 text-gray-400" />
      //             <span>{edu.location}</span>
      //           </div>
      //           <div className="text-xs text-gray-600">{edu.period}</div>
      //         </div>
      //       </div>
      //     ))}
      //   </div>

      //   {/* Key Achievements */}
      //   {/* <div className="px-6 mt-4 mb-6">
      //     <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">KEY ACHIEVEMENTS</h2>
          
      //     <div className="grid grid-cols-2 gap-4">
      //       {resumeData.achievements.map((achievement, index) => (
      //         <div key={index} className="border border-gray-200 rounded-md p-3 flex">
      //           <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
      //             <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      //             </svg>
      //           </div>
      //           <div>
      //             <h3 className="text-sm font-bold text-gray-800">{achievement.title}</h3>
      //             <p className="text-xs text-gray-700">{achievement.description}</p>
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   </div>

      
      //   <div className="px-6 py-2 bg-gray-50 text-xs text-gray-500 flex justify-between items-center rounded-b-lg">
      //     <span>www.enhancv.com</span>
      //     <div className="flex items-center">
      //       <span>Powered by</span>
      //       <svg className="w-16 h-4 ml-1" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      //         <path d="M10 10 A 10 10 0 1 0 20 10 A 10 10 0 1 0 0 10 A 10 10 0 1 0 10 10 Z" fill="#e2e8f0" />
      //         <path d="M25 5 L35 5 L35 7 L25 7 Z M25 9 L40 9 L40 11 L25 11 Z M25 13 L32 13 L32 15 L25 15 Z M50 5 L60 5 L60 7 L50 7 Z M45 9 L65 9 L65 11 L45 11 Z M50 13 L60 13 L60 15 L50 15 Z" fill="#4a5568" />
      //       </svg>
      //     </div>
      //   </div> */}
      // </div>
      // <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-4xl h-[3508px]">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto w-full" >
      {/* Header */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">{resumeData.personalInfo.name}</h1>
        <p className="text-blue-600 font-medium">{resumeData.personalInfo.title}</p>
        
        <div className="flex flex-wrap items-center mt-2 text-sm text-gray-600">
          <div className="flex items-center mr-4">
            <Phone size={14} className="mr-1 text-blue-600" />
            <span>{resumeData.personalInfo.phone}</span>
          </div>
          <div className="flex items-center mr-4">
            <Mail size={14} className="mr-1 text-blue-600" />
            <span>{resumeData.personalInfo.email}</span>
          </div>
          <div className="flex items-center mr-4">
            <MapPin size={14} className="mr-1 text-blue-600" />
            <span>{resumeData.personalInfo.location}</span>
          </div>
          {resumeData.personalInfo.website && (
            <div className="flex items-center mr-4">
              <Globe size={14} className="mr-1 text-blue-600" />
              <span>{resumeData.personalInfo.website}</span>
            </div>
          )}
          {resumeData.personalInfo.github && (
            <div className="flex items-center mr-4">
              <Github size={14} className="mr-1 text-blue-600" />
              <span>{resumeData.personalInfo.github}</span>
            </div>
          )}
          {resumeData.personalInfo.linkedin && (
            <div className="flex items-center mr-4">
              <Linkedin size={14} className="mr-1 text-blue-600" />
              <span>{resumeData.personalInfo.linkedin}</span>
            </div>
          )}
          {resumeData.personalInfo.twitter && (
            <div className="flex items-center mr-4">
              <Twitter size={14} className="mr-1 text-blue-600" />
              <span>{resumeData.personalInfo.twitter}</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      <div className="px-6">
        <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">SUMMARY</h2>
        <p className="text-sm text-gray-700 mb-4">{resumeData.personalInfo.summary}</p>
      </div>

      {/* Skills */}
      <div className="px-6 mt-4">
        <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">SKILLS</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="px-6 mt-4">
        <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">EXPERIENCE</h2>
        
        {resumeData.experience.map((exp, index) => (
          <div key={exp.id} className="mb-4">
            <div className="flex justify-between items-start">
              <h3 className="text-base font-bold text-gray-800">{exp.title}</h3>
              <div className="text-xs text-gray-600">
                {formatDateRange(exp.startDate, exp.endDate)}
              </div>
            </div>
            
            <div className="flex items-center mb-2">
              <span className="text-blue-600 font-medium">{exp.company}</span>
              <div className="flex items-center ml-2 text-sm text-gray-600">
                <MapPin size={12} className="mr-1 text-gray-400" />
                <span className="text-xs">{exp.location}</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="px-6 mt-4">
        <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">EDUCATION</h2>
        
        {resumeData.education.map((edu) => (
          <div key={edu.id} className="mb-3">
            <h3 className="text-base font-bold text-gray-800">{edu.degree}</h3>
            <div className="text-blue-600 font-medium">{edu.institution}</div>
            <div className="flex justify-between">
              <div className="flex items-center text-xs text-gray-600">
                <MapPin size={12} className="mr-1 text-gray-400" />
                <span>{edu.location}</span>
              </div>
              <div className="text-xs text-gray-600">
                {formatDateRange(edu.startDate, edu.endDate)}
              </div>
            </div>
            <p className="text-xs text-gray-700 mt-1">{edu.description}</p>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="px-6 mt-4">
        <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">PROJECTS</h2>
        <div className="grid grid-cols-1 gap-4 mb-4">
          {resumeData.projects.map((project) => (
            <div key={project.id} className="border-l-2 border-blue-500 pl-4 py-1">
              <div className="flex justify-between">
                <h3 className="text-sm font-bold text-gray-800">{project.title}</h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-blue-600 hover:underline"
                >
                  View Project
                </a>
              </div>
              <p className="text-xs text-gray-700 mt-1">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="px-6 mt-4 mb-6">
        <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">CERTIFICATIONS</h2>
        <div className="grid grid-cols-1 gap-3">
          {resumeData.certifications.map((cert) => (
            <div key={cert.id} className="flex items-start">
              <Award size={16} className="mr-2 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-gray-800">{cert.name}</h3>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600">{cert.issuer}</span>
                  <span className="text-xs text-gray-500">{cert.date}</span>
                </div>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Verify Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}