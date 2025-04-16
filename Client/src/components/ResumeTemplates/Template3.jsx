import React from 'react';
import { Mail, Linkedin, MapPin, Award, Target, ChevronUp, Users, Heart, Github, Globe, Twitter } from 'lucide-react';

export default function Template3({resumeData}) {

  const { 
    personalInfo, 
    experience, 
    education, 
    skills, 
    projects,
    certifications
  } = resumeData;

  const formatDate = (dateString) => {
    if (dateString === 'Present') return dateString;
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' }).replace('/', '/');
    } catch (e) {
      return dateString;
    }
  };
  return (
    // <div className="w-full font-sans">
    //   <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //     {/* Header */}
    //     <div className="bg-blue-900 text-white p-6 relative">
    //       <div className="flex justify-between">
    //         <div className="w-3/4">
    //           <h1 className="text-xl font-bold">BRANDON HALE</h1>
    //           <p className="text-sm font-normal mt-1">Senior Business Development Director | Biotech & Pharma Expertise</p>
              
    //           <div className="flex mt-3 text-xs items-center">
    //             <div className="flex items-center mr-6">
    //               <Mail size={12} className="mr-1" />
    //               <span>brandon@example.com</span>
    //             </div>
    //             <div className="flex items-center">
    //               <Linkedin size={12} className="mr-1" />
    //               <span>linkedin.com</span>
    //             </div>
    //           </div>
              
    //           <div className="flex mt-1 text-xs items-center">
    //             <div className="flex items-center mr-6">
    //               <span>+1 (234) 555-7654</span>
    //             </div>
    //             <div className="flex items-center">
    //               <MapPin size={12} className="mr-1" />
    //               <span>Jacksonville, Florida</span>
    //             </div>
    //           </div>
    //         </div>
            
    //         <div className="w-1/4 flex justify-end">
    //           <div className="w-16 h-16 rounded-full overflow-hidden">
    //             <img src="/api/placeholder/160/160" alt="Profile" className="w-full h-full object-cover" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
        
    //     <div className="flex">
    //       {/* Left Column */}
    //       <div className="w-1/2 p-4">
    //         <section className="mb-6">
    //           <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">EXPERIENCE</h2>
              
    //           <div className="mb-4">
    //             <div className="font-bold text-sm">Business Development Manager</div>
    //             <div className="text-gray-700 italic text-xs">Genomtech</div>
    //             <div className="flex text-xs text-gray-600 mb-2">
    //               <div className="flex items-center mr-4">
    //                 <span>05/2018 - 12/2021</span>
    //               </div>
    //               <div className="flex items-center">
    //                 <MapPin size={10} className="mr-1" />
    //                 <span>San Francisco, CA, USA</span>
    //               </div>
    //             </div>
    //             <ul className="list-disc pl-4 text-xs">
    //               <li className="mb-1">Generated $30M in new revenue by identifying and securing business opportunities in the biotech sector</li>
    //               <li className="mb-1">Increased client portfolio by 40% through targeted outreach and networking efforts, resulting in 12+ new pharmaceutical affiliations</li>
    //               <li className="mb-1">Led a cross-functional business development team, achieving noteworthy strategic selling at a 15% increase in year-over-year revenue</li>
    //               <li className="mb-1">Designed and executed healthcare customer retention campaigns that demonstrated measurable progress toward established satisfaction rates</li>
    //             </ul>
    //           </div>
              
    //           <div className="mb-4">
    //             <div className="font-bold text-sm">Regional Sales Director</div>
    //             <div className="text-gray-700 italic text-xs">Regeneron Pharmaceuticals</div>
    //             <div className="flex text-xs text-gray-600 mb-2">
    //               <div className="flex items-center mr-4">
    //                 <span>03/2015 - 04/2018</span>
    //               </div>
    //               <div className="flex items-center">
    //                 <MapPin size={10} className="mr-1" />
    //                 <span>San Diego, CA, USA</span>
    //               </div>
    //             </div>
    //             <ul className="list-disc pl-4 text-xs">
    //               <li className="mb-1">Strategized and executed a high-growth market entry strategy, growing the regional sales revenue to $50M</li>
    //               <li className="mb-1">Developed and motivated a high-performance sales team, achieving a consistent overperformance against targeted KPIs and deadlines</li>
    //               <li className="mb-1">Successfully launched three blockbuster drugs in the regional market, contributing significantly to the company's market share growth</li>
    //               <li className="mb-1">Implemented a CRM system and enhanced customer service to develop stronger customer relations</li>
    //               <li className="mb-1">Negotiated two contracts with hospital networks, contributing to a 20% expansion of the company's market penetration</li>
    //             </ul>
    //           </div>
              
    //           <div className="mb-4">
    //             <div className="font-bold text-sm">Key Account Manager</div>
    //             <div className="text-gray-700 italic text-xs">Pfizer Inc</div>
    //             <div className="flex text-xs text-gray-600 mb-2">
    //               <div className="flex items-center mr-4">
    //                 <span>06/2012 - 02/2015</span>
    //               </div>
    //               <div className="flex items-center">
    //                 <MapPin size={10} className="mr-1" />
    //                 <span>Boston, MA, USA</span>
    //               </div>
    //             </div>
    //             <ul className="list-disc pl-4 text-xs">
    //               <li className="mb-1">Managed the growth of strategic accounts, resulting in a 35% increase in annual revenue from top-tier clients</li>
    //               <li className="mb-1">Cultivated relationships with key players in portfolio blue-chip therapeutic areas, growing the account base by 20%</li>
    //               <li className="mb-1">Conducted Pfizer's market research by delivering profile alliances with biotech partners and executing negotiated agreements</li>
    //             </ul>
    //           </div>
    //         </section>
            
    //         <section className="mb-6">
    //           <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">EDUCATION</h2>
              
    //           <div className="mb-3">
    //             <div className="font-bold text-sm">Master of Business Administration</div>
    //             <div className="text-gray-700 italic text-xs">University of Florida</div>
    //             <div className="flex text-xs text-gray-600">
    //               <div className="flex items-center mr-4">
    //                 <span>07/2007 - 07/2009</span>
    //               </div>
    //               <div className="flex items-center">
    //                 <MapPin size={10} className="mr-1" />
    //                 <span>Jacksonville, FL, USA</span>
    //               </div>
    //             </div>
    //           </div>
              
    //           <div className="mb-3">
    //             <div className="font-bold text-sm">Bachelor of Science in Biotechnology</div>
    //             <div className="text-gray-700 italic text-xs">Florida State University</div>
    //             <div className="flex text-xs text-gray-600">
    //               <div className="flex items-center mr-4">
    //                 <span>09/2003 - 05/2007</span>
    //               </div>
    //               <div className="flex items-center">
    //                 <MapPin size={10} className="mr-1" />
    //                 <span>Tallahassee, FL, USA</span>
    //               </div>
    //             </div>
    //           </div>
    //         </section>
            
    //         <section>
    //           <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">SKILLS</h2>
    //           <div className="flex flex-wrap gap-2">
    //             <span className="text-xs">Business Development</span>
    //             <span className="text-xs mx-1">•</span>
    //             <span className="text-xs">Strategic Sales Planning</span>
    //             <span className="text-xs mx-1">•</span>
    //             <span className="text-xs">Client Retention Strategies</span>
    //             <span className="text-xs mx-1">•</span>
    //             <span className="text-xs">CRM Systems</span>
    //             <span className="text-xs mx-1">•</span>
    //             <span className="text-xs">Market Analysis</span>
    //           </div>
    //         </section>
    //       </div>
          
    //       {/* Right Column */}
    //       <div className="w-1/2 p-4 bg-gray-50">
    //         <section className="mb-6">
    //           <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">SUMMARY</h2>
    //           <p className="text-xs">
    //             With over a decade of experience in the biopharmaceutical industry, I have successfully established strategic partnerships while consistently exceeding sales targets. My expertise in negotiating complex licensing and commercial terms, along with a proven track record in forging the cornerstone of my career, highlighted by a digital sale generating $500M in new business. I am passionate about taking on challenges in a senior business development position.
    //           </p>
    //         </section>
            
    //         <section className="mb-6">
    //           <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">KEY ACHIEVEMENTS</h2>
              
    //           <div className="mb-3 flex">
    //             <div className="mr-3 mt-1">
    //               <Award size={16} className="text-blue-500" />
    //             </div>
    //             <div>
    //               <div className="font-bold text-xs">Top Regional Sales Performer</div>
    //               <p className="text-xs text-gray-600">Recognized as the top performing sales director at Regeneron Pharmaceuticals</p>
    //             </div>
    //           </div>
              
    //           <div className="mb-3 flex">
    //             <div className="mr-3 mt-1">
    //               <Target size={16} className="text-blue-500" />
    //             </div>
    //             <div>
    //               <div className="font-bold text-xs">Successful Market Entry</div>
    //               <p className="text-xs text-gray-600">Coordinated the launch campaign for a blockbuster drug at Regeneron, resulting in a 45% market share within 6 months</p>
    //             </div>
    //           </div>
              
    //           <div className="mb-3 flex">
    //             <div className="mr-3 mt-1">
    //               <ChevronUp size={16} className="text-blue-500" />
    //             </div>
    //             <div>
    //               <div className="font-bold text-xs">Strategic Account Revenue Growth</div>
    //               <p className="text-xs text-gray-600">Increased revenue from key accounts at Pfizer, leading to a 35% increase in annual figures</p>
    //             </div>
    //           </div>
              
    //           <div className="mb-3 flex">
    //             <div className="mr-3 mt-1">
    //               <Users size={16} className="text-blue-500" />
    //             </div>
    //             <div>
    //               <div className="font-bold text-xs">Sales Team Development Award</div>
    //               <p className="text-xs text-gray-600">Developed the sales training program at Genomtech, improving team performance by 15%</p>
    //             </div>
    //           </div>
    //         </section>
            
    //         <section className="mb-6">
    //           <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">COURSES</h2>
              
    //           <div className="mb-3">
    //             <div className="font-bold text-xs">Advanced Biopharmaceutical Business Development</div>
    //             <p className="text-xs text-gray-600">Explored strategic partnership models and contract negotiations offered by Harvard Business School</p>
    //           </div>
              
    //           <div className="mb-3">
    //             <div className="font-bold text-xs">Regulatory Affairs for Biologics</div>
    //             <p className="text-xs text-gray-600">Deep aspects of FDA and EMA compliance for biological product licensing</p>
    //           </div>
    //         </section>
            
    //         <section>
    //           <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">PASSIONS</h2>
              
    //           <div className="mb-3 flex">
    //             <div className="mr-3 mt-1">
    //               <Heart size={16} className="text-blue-500" />
    //             </div>
    //             <div>
    //               <div className="font-bold text-xs">Leadership and Mentoring</div>
    //               <p className="text-xs text-gray-600">Enthusiastic about developing sales talent and fostering leadership skills within teams</p>
    //             </div>
    //           </div>
              
    //           <div className="mb-3 flex">
    //             <div className="mr-3 mt-1">
    //               <Heart size={16} className="text-blue-500" />
    //             </div>
    //             <div>
    //               <div className="font-bold text-xs">Community Outreach</div>
    //               <p className="text-xs text-gray-600">Actively involved in community outreach programs, advocating for science education and STEM advancement initiatives</p>
    //             </div>
    //           </div>
    //         </section>
    //       </div>
    //     </div>
        
    //     <div className="bg-gray-50 p-2 text-xs text-gray-500 flex justify-between border-t border-gray-200">
    //       <div>www.exampleresume.com</div>
    //       <div className="flex items-center">
    //         <span>Powered by</span>
    //         <span className="ml-1 font-semibold">♥ Timongo</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full font-sans">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-blue-900 text-white p-6 relative">
        <div className="flex justify-between">
          <div className="w-3/4">
            <h1 className="text-xl font-bold">{personalInfo.name.toUpperCase()}</h1>
            <p className="text-sm font-normal mt-1">{personalInfo.title}</p>
            
            <div className="flex mt-3 text-xs items-center">
              <div className="flex items-center mr-6">
                <Mail size={12} className="mr-1" />
                <span>{personalInfo.email}</span>
              </div>
              {personalInfo.linkedin && (
                <div className="flex items-center">
                  <Linkedin size={12} className="mr-1" />
                  <span>{personalInfo.linkedin}</span>
                </div>
              )}
            </div>
            
            <div className="flex mt-1 text-xs items-center">
              <div className="flex items-center mr-6">
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={12} className="mr-1" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex mt-1 text-xs items-center">
              {personalInfo.github && (
                <div className="flex items-center mr-6">
                  <GitHub size={12} className="mr-1" />
                  <span>{personalInfo.github}</span>
                </div>
              )}
              {personalInfo.website && (
                <div className="flex items-center mr-6">
                  <Globe size={12} className="mr-1" />
                  <span>{personalInfo.website}</span>
                </div>
              )}
              {personalInfo.twitter && (
                <div className="flex items-center">
                  <Twitter size={12} className="mr-1" />
                  <span>{personalInfo.twitter}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* <div className="w-1/4 flex justify-end">
            {personalInfo.profileImage && (
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src="https://avatars.githubusercontent.com/u/112320710?v=4" alt="Profile" className="w-full h-full object-cover" />
              </div>
            )}
          </div> */}
          <div className="w-1/4 flex justify-end">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-blue-700">
                {/* Use placeholder API for image */}
                <img src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
        </div>
      </div>
      
      <div className="flex">
        {/* Left Column */}
        <div className="w-1/2 p-4">
          <section className="mb-6">
            <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">EXPERIENCE</h2>
            
            {experience.map(job => (
              <div key={job.id} className="mb-4">
                <div className="font-bold text-sm">{job.title}</div>
                <div className="text-gray-700 italic text-xs">{job.company}</div>
                <div className="flex text-xs text-gray-600 mb-2">
                  <div className="flex items-center mr-4">
                    <span>{formatDate(job.startDate)} - {formatDate(job.endDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={10} className="mr-1" />
                    <span>{job.location}</span>
                  </div>
                </div>
                <p className="text-xs mb-2">{job.description}</p>
              </div>
            ))}
          </section>
          
          <section className="mb-6">
            <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">EDUCATION</h2>
            
            {education.map(edu => (
              <div key={edu.id} className="mb-3">
                <div className="font-bold text-sm">{edu.degree}</div>
                <div className="text-gray-700 italic text-xs">{edu.institution}</div>
                <div className="flex text-xs text-gray-600">
                  <div className="flex items-center mr-4">
                    <span>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={10} className="mr-1" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <p className="text-xs mt-1">{edu.description}</p>
              </div>
            ))}
          </section>
          
          <section>
            <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">SKILLS</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <React.Fragment key={index}>
                  <span className="text-xs">{skill}</span>
                  {index < skills.length - 1 && <span className="text-xs mx-1">•</span>}
                </React.Fragment>
              ))}
            </div>
          </section>
        </div>
        
        {/* Right Column */}
        <div className="w-1/2 p-4 bg-gray-50">
          <section className="mb-6">
            <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">SUMMARY</h2>
            <p className="text-xs">
              {personalInfo.summary}
            </p>
          </section>
          
          <section className="mb-6">
            <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">PROJECTS</h2>
            
            {projects.map(project => (
              <div key={project.id} className="mb-3 flex">
                <div className="mr-3 mt-1">
                  <Target size={16} className="text-blue-500" />
                </div>
                <div>
                  <div className="font-bold text-xs">{project.title}</div>
                  <p className="text-xs text-gray-600">{project.description}</p>
                  {project.link && (
                    <a href={project.link} className="text-xs text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </section>
          
          <section className="mb-6">
            <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">CERTIFICATIONS</h2>
            
            {certifications.map(cert => (
              <div key={cert.id} className="mb-3">
                <div className="font-bold text-xs">{cert.name}</div>
                <div className="flex justify-between">
                  <p className="text-xs text-gray-600">{cert.issuer}</p>
                  <p className="text-xs text-gray-600">{formatDate(cert.date)}</p>
                </div>
                {cert.link && (
                  <a href={cert.link} className="text-xs text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
      
      <div className="bg-gray-50 p-2 text-xs text-gray-500 flex justify-between border-t border-gray-200">
        <div>www.johndoe-portfolio.com</div>
        <div className="flex items-center">
          <span>Last Updated: April 2025</span>
        </div>
      </div>
    </div>
  </div>
  );
}