
// import { useState } from "react";
// import { Download, Search, ChevronUp, ChevronDown, User, Award, Zap, TrendingUp, PieChart } from "lucide-react";
// import { useLocation } from "react-router-dom";

// export default function AIScreeningResult() {
//   const [sortConfig, setSortConfig] = useState({
//     key: "aiMatchScore",
//     direction: "desc"
//   });
//   const [searchTerm, setSearchTerm] = useState("");

//   const location = useLocation();
//   const candidates = location.state?.screeningData;
//   console.log(candidates)

 
//   // Function to truncate college names
//   const truncateCollege = (college) => {
//     return college.length > 20 ? college.substring(0, 20) + "..." : college;
//   };

//   // Sort function
//   const sortedCandidates = [...candidates].sort((a, b) => {
//     if (a[sortConfig.key] < b[sortConfig.key]) {
//       return sortConfig.direction === "asc" ? -1 : 1;
//     }
//     if (a[sortConfig.key] > b[sortConfig.key]) {
//       return sortConfig.direction === "asc" ? 1 : -1;
//     }
//     return 0;
//   });

//   // Filtered candidates based on search
//   const filteredCandidates = sortedCandidates.filter(candidate => 
//     candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     candidate.education.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     candidate.experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     candidate.technicalAssessment.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     candidate.potentialGrowth.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Request sort
//   const requestSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });
//   };

//   // Function to download Excel
//   const downloadExcel = () => {
//     // In a real application, this would connect to a server endpoint
//     // Here we're simulating the download process
//     const csvContent = [
//       ["Name", "Education", "Experience", "AI Match Score", "Skill Match", "Culture Fit", "Growth Potential", "Communication", "Technical Level"],
//       ...candidates.map(c => [
//         c.name, 
//         c.education, 
//         c.experience, 
//         c.aiMatchScore, 
//         c.skillMatch, 
//         c.cultureFit, 
//         c.potentialGrowth,
//         c.communicationRating,
//         c.technicalAssessment
//       ])
//     ].map(e => e.join(",")).join("\n");
    
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     const url = URL.createObjectURL(blob);
//     link.setAttribute("href", url);
//     link.setAttribute("download", "ai_candidate_screening_data.csv");
//     link.style.visibility = "hidden";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   // Function to get sort icon
//   const getSortIcon = (key) => {
//     if (sortConfig.key === key) {
//       return sortConfig.direction === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
//     }
//     return null;
//   };

//   // Function to get rating color class
//   const getRatingColorClass = (score) => {
//     if (score >= 90) return 'bg-green-100 text-green-800';
//     if (score >= 80) return 'bg-blue-100 text-blue-800';
//     if (score >= 70) return 'bg-yellow-100 text-yellow-800';
//     return 'bg-red-100 text-red-800';
//   };

//   // Function to get growth potential badge
//   const getGrowthBadge = (potential) => {
//     const classes = {
//       "Very High": "bg-purple-100 text-purple-800",
//       "High": "bg-green-100 text-green-800",
//       "Medium": "bg-blue-100 text-blue-800",
//       "Low": "bg-yellow-100 text-yellow-800",
//     };
//     return classes[potential] || "bg-gray-100 text-gray-800";
//   };

//   // Function to get technical assessment badge
//   const getTechnicalBadge = (level) => {
//     const classes = {
//       "Expert": "bg-indigo-100 text-indigo-800",
//       "Advanced": "bg-blue-100 text-blue-800",
//       "Intermediate": "bg-teal-100 text-teal-800",
//       "Beginner": "bg-green-100 text-green-800",
//     };
//     return classes[level] || "bg-gray-100 text-gray-800";
//   };

//   return (
//     <div className=" min-h-screen ">
//       <div className="w-full mx-auto">
//         <div className="bg-white  shadow-lg p-6">
       
//           {/* <p className="text-gray-600 mb-6">AI-powered insights to help you make better hiring decisions</p> */}
          
//           {/* Search and Download Section */}
//           <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//             <div className="relative w-full md:w-64">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Search size={18} className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Search candidates..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <button 
//               onClick={downloadExcel}
//               className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center gap-2 transition-colors w-full md:w-auto justify-center"
//             >
//               <Download size={18} />
//               Download Excel
//             </button>
//           </div>
          
//           {/* Summary Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//             <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
//               <div className="flex items-center gap-2">
//                 <User className="text-blue-600" size={20} />
//                 <h3 className="font-medium text-blue-800">Candidates</h3>
//               </div>
//               <p className="text-2xl font-bold mt-2">{candidates.length}</p>
//             </div>
//             <div className="bg-green-50 p-4 rounded-lg border border-green-100">
//               <div className="flex items-center gap-2">
//                 <Award className="text-green-600" size={20} />
//                 <h3 className="font-medium text-green-800">Top Match</h3>
//               </div>
//               <p className="text-2xl font-bold mt-2">{Math.max(...candidates.map(c => c.aiMatchScore))}%</p>
//             </div>
//             <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
//               <div className="flex items-center gap-2">
//                 <Zap className="text-purple-600" size={20} />
//                 <h3 className="font-medium text-purple-800">High Potential</h3>
//               </div>
//               <p className="text-2xl font-bold mt-2">{candidates.filter(c => c.potentialGrowth === "High" || c.potentialGrowth === "Very High").length}</p>
//             </div>
//             <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
//               <div className="flex items-center gap-2">
//                 <TrendingUp className="text-indigo-600" size={20} />
//                 <h3 className="font-medium text-indigo-800">Expert Level</h3>
//               </div>
//               <p className="text-2xl font-bold mt-2">{candidates.filter(c => c.technicalAssessment === "Expert").length}</p>
//             </div>
//           </div>
          
//           {/* Candidates Table */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th onClick={() => requestSort("name")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
//                     <div className="flex items-center gap-1">
//                       Name
//                       {getSortIcon("name")}
//                     </div>
//                   </th>
//                   <th onClick={() => requestSort("education")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
//                     <div className="flex items-center gap-1">
//                       Education
//                       {getSortIcon("education")}
//                     </div>
//                   </th>
//                   <th onClick={() => requestSort("experience")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
//                     <div className="flex items-center gap-1">
//                       Experience
//                       {getSortIcon("experience")}
//                     </div>
//                   </th>
//                   <th onClick={() => requestSort("aiMatchScore")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
//                     <div className="flex items-center gap-1">
//                       AI Match
//                       {getSortIcon("aiMatchScore")}
//                     </div>
//                   </th>
//                   <th onClick={() => requestSort("skillMatch")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
//                     <div className="flex items-center gap-1">
//                       Skill Match
//                       {getSortIcon("skillMatch")}
//                     </div>
//                   </th>
//                   <th onClick={() => requestSort("cultureFit")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
//                     <div className="flex items-center gap-1">
//                       Culture Fit
//                       {getSortIcon("cultureFit")}
//                     </div>
//                   </th>
//                   <th onClick={() => requestSort("potentialGrowth")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
//                     <div className="flex items-center gap-1">
//                       Growth
//                       {getSortIcon("potentialGrowth")}
//                     </div>
//                   </th>
//                   <th onClick={() => requestSort("communicationRating")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
//                     <div className="flex items-center gap-1">
//                       Comm.
//                       {getSortIcon("communicationRating")}
//                     </div>
//                   </th>
//                   <th onClick={() => requestSort("technicalAssessment")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
//                     <div className="flex items-center gap-1">
//                       Tech Level
//                       {getSortIcon("technicalAssessment")}
//                     </div>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {filteredCandidates.map((candidate) => (
//                   <tr key={candidate.id} className="hover:bg-gray-50">
//                     <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{candidate.name}</td>
//                     <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{truncateCollege(candidate.education)}</td>
//                     <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.experience}</td>
//                     <td className="px-4 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRatingColorClass(candidate.aiMatchScore)}`}>
//                           {candidate.aiMatchScore}
//                         </span>
//                       </div>
//                     </td>
//                     <td className="px-4 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRatingColorClass(candidate.skillMatch)}`}>
//                           {candidate.skillMatch}
//                         </span>
//                       </div>
//                     </td>
//                     <td className="px-4 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRatingColorClass(candidate.cultureFit)}`}>
//                           {candidate.cultureFit}
//                         </span>
//                       </div>
//                     </td>
//                     <td className="px-4 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGrowthBadge(candidate.potentialGrowth)}`}>
//                           {candidate.potentialGrowth}
//                         </span>
//                       </div>
//                     </td>
//                     <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
//                       {candidate.communicationRating}
//                     </td>
//                     <td className="px-4 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTechnicalBadge(candidate.technicalAssessment)}`}>
//                           {candidate.technicalAssessment}
//                         </span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//                 {filteredCandidates.length === 0 && (
//                   <tr>
//                     <td colSpan="9" className="px-6 py-4 text-center text-sm text-gray-500">
//                       No candidates found matching your search criteria.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
          
         
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { Download, Search, ChevronUp, ChevronDown, User, Award, Zap, TrendingUp, MapPin } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function AIScreeningResult() {
  const [sortConfig, setSortConfig] = useState({
    key: "match_score",
    direction: "desc"
  });
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();
  const candidates = location.state?.screeningData;

  // Sample candidate data - in a real app, this would come from props or context
  // const candidates = [
  //   {
  //     id: 1,
  //     match_score: 60,
  //     review: "Pritha Mohanta is a skilled web developer with a strong background in programming languages such as C, C++, Python, and JavaScript. She has experience working with various tech stacks, including HTML, CSS, Bootstrap, NodeJS, Next JS, React JS, MySQL, Rest assured, Testing, Git, GitHub, Git Bash, Docker, Jira, and CI/CD pipelines. However, her technical skills seem to be more focused on web development rather than the HR-related skills required for the Human Resources Assistant role. Pritha's education and certifications suggest a strong foundation in computer science, but there is a lack of direct experience in HR or related fields. Her soft skills, such as design thinking, communication, adaptability, eagerness to learn, empathy, and employee engagement, are not explicitly mentioned in her resume. With further training and development, Pritha could potentially adapt to the HR role, but her current skill set does not align perfectly with the job requirements.",
  //     name: "Pritha Mohanta",
  //     location: "Bengaluru",
  //     gender: "Female",
  //     mobile: "+91 8310311581",
  //     email: "prithamohanta74@gmail.com",
  //     education: {
  //       university: "Dayananda Sagar College of Engineering",
  //       degree: "B.E in Electronics and Communication",
  //       year: "2025"
  //     },
  //     last_company_worked_in: "Prodigy Infotech",
  //     years_of_job_experience_after_graduation_in_months: 0,
  //     current_role: "Web Developer (Intern)"
  //   },
  //   // For demo purposes, adding a few more simulated candidates with different scores
  //   {
  //     id: 2,
  //     match_score: 85,
  //     review: "Strong HR background with excellent communication skills and relevant experience.",
  //     name: "Ananya Sharma",
  //     location: "Mumbai",
  //     gender: "Female",
  //     mobile: "+91 9876543210",
  //     email: "ananya.sharma@email.com",
  //     education: {
  //       university: "Symbiosis International University",
  //       degree: "MBA in Human Resources",
  //       year: "2023"
  //     },
  //     last_company_worked_in: "TCS",
  //     years_of_job_experience_after_graduation_in_months: 24,
  //     current_role: "HR Coordinator"
  //   },
  //   {
  //     id: 3,
  //     match_score: 72,
  //     review: "Has relevant academic background but limited professional HR experience.",
  //     name: "Rajiv Kumar",
  //     location: "Delhi",
  //     gender: "Male",
  //     mobile: "+91 9876543211",
  //     email: "rajiv.kumar@email.com",
  //     education: {
  //       university: "Delhi University",
  //       degree: "B.A. in Psychology",
  //       year: "2022"
  //     },
  //     last_company_worked_in: "Wipro",
  //     years_of_job_experience_after_graduation_in_months: 12,
  //     current_role: "Talent Acquisition Intern"
  //   }
  // ];

  // Function to truncate university names
  const truncateUniversity = (education) => {
    if (!education || !education.university) return "";
    return education.university.length > 20 ? education.university.substring(0, 20) + "..." : education.university;
  };

  // Calculate experience in years and months
  const formatExperience = (months) => {
    if (months === 0) return "No experience";
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    if (remainingMonths === 0) return `${years} year${years !== 1 ? 's' : ''}`;
    return `${years} year${years !== 1 ? 's' : ''}, ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  };

  // Sort function
  const sortedCandidates = [...candidates].sort((a, b) => {
    let aValue = a[sortConfig.key];
    let bValue = b[sortConfig.key];
    
    // Handle nested objects like education
    if (sortConfig.key === "education") {
      aValue = a.education?.university || "";
      bValue = b.education?.university || "";
    } else if (sortConfig.key === "experience") {
      aValue = a.years_of_job_experience_after_graduation_in_months || 0;
      bValue = b.years_of_job_experience_after_graduation_in_months || 0;
    }
    
    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Filtered candidates based on search
  const filteredCandidates = sortedCandidates.filter(candidate => 
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (candidate.education?.university && candidate.education.university.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (candidate.education?.degree && candidate.education.degree.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (candidate.current_role && candidate.current_role.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (candidate.last_company_worked_in && candidate.last_company_worked_in.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Request sort
  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Function to download Excel
  const downloadExcel = () => {
    // In a real application, this would connect to a server endpoint
    // Here we're simulating the download process
    const csvContent = [
      [ "Name", "Match Score", "Location", "Gender", "Education", "Degree", "Year", "Current Role", "Experience (Months)", "Last Company", "Mobile", "Email"],
      ...candidates.map(c => [
       
        c.name,
        c.match_score, 
        c.location,
        c.gender,
        c.education?.university || "",
        c.education?.degree || "",
        c.education?.year || "",
        c.current_role || "",
        c.years_of_job_experience_after_graduation_in_months || 0,
        c.last_company_worked_in || "",
        c.mobile,
        c.email
      ])
    ].map(e => e.join(",")).join("\n");
    
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "hr_candidate_screening_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to get sort icon
  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
    }
    return null;
  };

  // Function to get rating color class
  const getMatchScoreColorClass = (score) => {
    if (score >= 80) return 'bg-green-100 text-green-800';
    if (score >= 70) return 'bg-blue-100 text-blue-800';
    if (score >= 60) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="min-h-screen">
      <div className="w-full mx-auto h-full">
        <div className="bg-white shadow-lg p-6">
         
          
          {/* Search and Download Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search candidates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              onClick={downloadExcel}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center gap-2 transition-colors w-full md:w-auto justify-center"
            >
              <Download size={18} />
              Download CSV
            </button>
          </div>
          
          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2">
                <User className="text-blue-600" size={20} />
                <h3 className="font-medium text-blue-800">Candidates</h3>
              </div>
              <p className="text-2xl font-bold mt-2">{candidates.length}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <div className="flex items-center gap-2">
                <Award className="text-green-600" size={20} />
                <h3 className="font-medium text-green-800">Top Match</h3>
              </div>
              <p className="text-2xl font-bold mt-2">{Math.max(...candidates.map(c => c.match_score))}%</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <div className="flex items-center gap-2">
                <Zap className="text-purple-600" size={20} />
                <h3 className="font-medium text-purple-800">Experienced</h3>
              </div>
              <p className="text-2xl font-bold mt-2">{candidates.filter(c => (c.years_of_job_experience_after_graduation_in_months || 0) > 12).length}</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <div className="flex items-center gap-2">
                <MapPin className="text-indigo-600" size={20} />
                <h3 className="font-medium text-indigo-800">Locations</h3>
              </div>
              <p className="text-2xl font-bold mt-2">{new Set(candidates.map(c => c.location)).size}</p>
            </div>
          </div>
          
          {/* Candidates Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th onClick={() => requestSort("name")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center gap-1">
                      Name
                      {getSortIcon("name")}
                    </div>
                  </th>
                  <th onClick={() => requestSort("location")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center gap-1">
                      Location
                      {getSortIcon("location")}
                    </div>
                  </th>
                  <th onClick={() => requestSort("education")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center gap-1">
                      Education
                      {getSortIcon("education")}
                    </div>
                  </th>
                  <th onClick={() => requestSort("current_role")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center gap-1">
                      Current Role
                      {getSortIcon("current_role")}
                    </div>
                  </th>
                  <th onClick={() => requestSort("experience")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center gap-1">
                      Experience
                      {getSortIcon("experience")}
                    </div>
                  </th>
                  <th onClick={() => requestSort("last_company_worked_in")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center gap-1">
                      Company
                      {getSortIcon("last_company_worked_in")}
                    </div>
                  </th>
                  <th onClick={() => requestSort("match_score")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center gap-1">
                      Match Score
                      {getSortIcon("match_score")}
                    </div>
                  </th>
                  <th className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      Contact
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCandidates.map((candidate,idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{candidate.name}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.location}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>
                        <div>{truncateUniversity(candidate.education)}</div>
                        <div className="text-xs text-gray-400">{candidate.education?.degree}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.current_role || "N/A"}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatExperience(candidate.years_of_job_experience_after_graduation_in_months || 0)}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.last_company_worked_in || "N/A"}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMatchScoreColorClass(candidate.match_score)}`}>
                          {candidate.match_score}%
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="text-xs">
                        <div>{candidate.mobile}</div>
                        <div className="text-blue-600">{candidate.email}</div>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredCandidates.length === 0 && (
                  <tr>
                    <td colSpan="8" className="px-6 py-4 text-center text-sm text-gray-500">
                      No candidates found matching your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}