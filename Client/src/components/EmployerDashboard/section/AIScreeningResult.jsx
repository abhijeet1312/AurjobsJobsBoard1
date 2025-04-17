// import { useState } from "react";
// import { Download, Search, ChevronUp, ChevronDown } from "lucide-react";

// export default function AIScreeningResult() {
//   const [sortConfig, setSortConfig] = useState({
//     key: "score",
//     direction: "desc"
//   });
//   const [searchTerm, setSearchTerm] = useState("");

//   // Sample candidate data
//   const candidates = [
//     { id: 1, name: "Alex Johnson", education: "Massachusetts Institute of Technology", experience: "Google", score: 92 },
//     { id: 2, name: "Sarah Williams", education: "Stanford University", experience: "Microsoft", score: 88 },
//     { id: 3, name: "Michael Chen", education: "University of California, Berkeley", experience: "Amazon", score: 95 },
//     { id: 4, name: "Jessica Taylor", education: "Harvard University", experience: "Apple", score: 87 },
//     { id: 5, name: "David Rodriguez", education: "California Institute of Technology", experience: "Netflix", score: 90 },
//     { id: 6, name: "Emma Wilson", education: "University of Michigan", experience: "Meta", score: 84 },
//     { id: 7, name: "Robert Smith", education: "Cornell University", experience: "IBM", score: 82 },
//     { id: 8, name: "Emily Brown", education: "Princeton University", experience: "Oracle", score: 89 },
//     { id: 9, name: "Thomas Davis", education: "Yale University", experience: "Salesforce", score: 91 },
//     { id: 10, name: "Jennifer Lee", education: "Carnegie Mellon University", experience: "Adobe", score: 93 },
//   ];

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
//     candidate.experience.toLowerCase().includes(searchTerm.toLowerCase())
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
//       ["Name", "Education", "Experience", "Score"],
//       ...candidates.map(c => [c.name, c.education, c.experience, c.score])
//     ].map(e => e.join(",")).join("\n");
    
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     const url = URL.createObjectURL(blob);
//     link.setAttribute("href", url);
//     link.setAttribute("download", "candidate_screening_data.csv");
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

//   return (
//     <div className="bg-gray-50 min-h-screen ">
//       <div className="w-full mx-auto">
//         <div className="bg-white  shadow-lg p-6">
//           <h1 className="text-2xl font-bold text-gray-800 mb-6">AI Candidate Screening Dashboard</h1>
          
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
          
//           {/* Candidates Table */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th onClick={() => requestSort("name")} className="px-6 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
//                     <div className="flex items-center gap-1">
//                       Name
//                       {getSortIcon("name")}
//                     </div>
//                   </th>
//                   <th onClick={() => requestSort("education")} className="px-6 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
//                     <div className="flex items-center gap-1">
//                       Education
//                       {getSortIcon("education")}
//                     </div>
//                   </th>
//                   <th onClick={() => requestSort("experience")} className="px-6 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
//                     <div className="flex items-center gap-1">
//                       Experience
//                       {getSortIcon("experience")}
//                     </div>
//                   </th>
//                   <th onClick={() => requestSort("score")} className="px-6 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
//                     <div className="flex items-center gap-1">
//                       Score
//                       {getSortIcon("score")}
//                     </div>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {filteredCandidates.map((candidate) => (
//                   <tr key={candidate.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{candidate.name}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{truncateCollege(candidate.education)}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.experience}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                           candidate.score >= 90 ? 'bg-green-100 text-green-800' :
//                           candidate.score >= 80 ? 'bg-blue-100 text-blue-800' :
//                           candidate.score >= 70 ? 'bg-yellow-100 text-yellow-800' :
//                           'bg-red-100 text-red-800'
//                         }`}>
//                           {candidate.score}
//                         </span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//                 {filteredCandidates.length === 0 && (
//                   <tr>
//                     <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
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
import { Download, Search, ChevronUp, ChevronDown, User, Award, Zap, TrendingUp, PieChart } from "lucide-react";

export default function AIScreeningResult() {
  const [sortConfig, setSortConfig] = useState({
    key: "aiMatchScore",
    direction: "desc"
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Sample candidate data with enhanced AI metrics
  const candidates = [
    { 
      id: 1, 
      name: "Alex Johnson", 
      education: "Massachusetts Institute of Technology", 
      experience: "Google", 
      aiMatchScore: 92,
      skillMatch: 87,
      cultureFit: 94,
      potentialGrowth: "High",
      communicationRating: 9.1,
      technicalAssessment: "Expert"
    },
    { 
      id: 2, 
      name: "Sarah Williams", 
      education: "Stanford University", 
      experience: "Microsoft", 
      aiMatchScore: 88,
      skillMatch: 92,
      cultureFit: 85,
      potentialGrowth: "High",
      communicationRating: 8.7,
      technicalAssessment: "Advanced"
    },
    { 
      id: 3, 
      name: "Michael Chen", 
      education: "University of California", 
      experience: "Amazon", 
      aiMatchScore: 95,
      skillMatch: 96,
      cultureFit: 89,
      potentialGrowth: "Very High",
      communicationRating: 9.3,
      technicalAssessment: "Expert"
    },
    { 
      id: 4, 
      name: "Jessica Taylor", 
      education: "Harvard University", 
      experience: "Apple", 
      aiMatchScore: 87,
      skillMatch: 84,
      cultureFit: 91,
      potentialGrowth: "Medium",
      communicationRating: 9.5,
      technicalAssessment: "Intermediate"
    },
    { 
      id: 5, 
      name: "David Rodriguez", 
      education: "California Institute of Technology", 
      experience: "Netflix", 
      aiMatchScore: 90,
      skillMatch: 93,
      cultureFit: 82,
      potentialGrowth: "High",
      communicationRating: 8.9,
      technicalAssessment: "Advanced"
    },
    { 
      id: 6, 
      name: "Emma Wilson", 
      education: "University of Michigan", 
      experience: "Meta", 
      aiMatchScore: 84,
      skillMatch: 80,
      cultureFit: 88,
      potentialGrowth: "Medium",
      communicationRating: 8.2,
      technicalAssessment: "Intermediate"
    },
    { 
      id: 7, 
      name: "Robert Smith", 
      education: "Cornell University", 
      experience: "IBM", 
      aiMatchScore: 82,
      skillMatch: 85,
      cultureFit: 79,
      potentialGrowth: "Medium",
      communicationRating: 7.9,
      technicalAssessment: "Intermediate"
    },
    { 
      id: 8, 
      name: "Emily Brown", 
      education: "Princeton University", 
      experience: "Oracle", 
      aiMatchScore: 89,
      skillMatch: 88,
      cultureFit: 90,
      potentialGrowth: "High",
      communicationRating: 9.0,
      technicalAssessment: "Advanced"
    },
    { 
      id: 9, 
      name: "Thomas Davis", 
      education: "Yale University", 
      experience: "Salesforce", 
      aiMatchScore: 91,
      skillMatch: 94,
      cultureFit: 87,
      potentialGrowth: "High",
      communicationRating: 8.8,
      technicalAssessment: "Expert"
    },
    { 
      id: 10, 
      name: "Jennifer Lee", 
      education: "Carnegie Mellon University", 
      experience: "Adobe", 
      aiMatchScore: 93,
      skillMatch: 95,
      cultureFit: 92,
      potentialGrowth: "Very High",
      communicationRating: 9.4,
      technicalAssessment: "Expert"
    },
  ];

  // Function to truncate college names
  const truncateCollege = (college) => {
    return college.length > 20 ? college.substring(0, 20) + "..." : college;
  };

  // Sort function
  const sortedCandidates = [...candidates].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Filtered candidates based on search
  const filteredCandidates = sortedCandidates.filter(candidate => 
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.education.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.technicalAssessment.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.potentialGrowth.toLowerCase().includes(searchTerm.toLowerCase())
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
      ["Name", "Education", "Experience", "AI Match Score", "Skill Match", "Culture Fit", "Growth Potential", "Communication", "Technical Level"],
      ...candidates.map(c => [
        c.name, 
        c.education, 
        c.experience, 
        c.aiMatchScore, 
        c.skillMatch, 
        c.cultureFit, 
        c.potentialGrowth,
        c.communicationRating,
        c.technicalAssessment
      ])
    ].map(e => e.join(",")).join("\n");
    
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "ai_candidate_screening_data.csv");
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
  const getRatingColorClass = (score) => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 80) return 'bg-blue-100 text-blue-800';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  // Function to get growth potential badge
  const getGrowthBadge = (potential) => {
    const classes = {
      "Very High": "bg-purple-100 text-purple-800",
      "High": "bg-green-100 text-green-800",
      "Medium": "bg-blue-100 text-blue-800",
      "Low": "bg-yellow-100 text-yellow-800",
    };
    return classes[potential] || "bg-gray-100 text-gray-800";
  };

  // Function to get technical assessment badge
  const getTechnicalBadge = (level) => {
    const classes = {
      "Expert": "bg-indigo-100 text-indigo-800",
      "Advanced": "bg-blue-100 text-blue-800",
      "Intermediate": "bg-teal-100 text-teal-800",
      "Beginner": "bg-green-100 text-green-800",
    };
    return classes[level] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className=" min-h-screen ">
      <div className="w-full mx-auto">
        <div className="bg-white  shadow-lg p-6">
       
          {/* <p className="text-gray-600 mb-6">AI-powered insights to help you make better hiring decisions</p> */}
          
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
              Download Excel
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
              <p className="text-2xl font-bold mt-2">{Math.max(...candidates.map(c => c.aiMatchScore))}%</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <div className="flex items-center gap-2">
                <Zap className="text-purple-600" size={20} />
                <h3 className="font-medium text-purple-800">High Potential</h3>
              </div>
              <p className="text-2xl font-bold mt-2">{candidates.filter(c => c.potentialGrowth === "High" || c.potentialGrowth === "Very High").length}</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-indigo-600" size={20} />
                <h3 className="font-medium text-indigo-800">Expert Level</h3>
              </div>
              <p className="text-2xl font-bold mt-2">{candidates.filter(c => c.technicalAssessment === "Expert").length}</p>
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
                  <th onClick={() => requestSort("education")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center gap-1">
                      Education
                      {getSortIcon("education")}
                    </div>
                  </th>
                  <th onClick={() => requestSort("experience")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center gap-1">
                      Experience
                      {getSortIcon("experience")}
                    </div>
                  </th>
                  <th onClick={() => requestSort("aiMatchScore")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center gap-1">
                      AI Match
                      {getSortIcon("aiMatchScore")}
                    </div>
                  </th>
                  <th onClick={() => requestSort("skillMatch")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center gap-1">
                      Skill Match
                      {getSortIcon("skillMatch")}
                    </div>
                  </th>
                  <th onClick={() => requestSort("cultureFit")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center gap-1">
                      Culture Fit
                      {getSortIcon("cultureFit")}
                    </div>
                  </th>
                  <th onClick={() => requestSort("potentialGrowth")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center gap-1">
                      Growth
                      {getSortIcon("potentialGrowth")}
                    </div>
                  </th>
                  <th onClick={() => requestSort("communicationRating")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center gap-1">
                      Comm.
                      {getSortIcon("communicationRating")}
                    </div>
                  </th>
                  <th onClick={() => requestSort("technicalAssessment")} className="px-4 py-3 border-b border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center gap-1">
                      Tech Level
                      {getSortIcon("technicalAssessment")}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCandidates.map((candidate) => (
                  <tr key={candidate.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{candidate.name}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{truncateCollege(candidate.education)}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{candidate.experience}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRatingColorClass(candidate.aiMatchScore)}`}>
                          {candidate.aiMatchScore}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRatingColorClass(candidate.skillMatch)}`}>
                          {candidate.skillMatch}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRatingColorClass(candidate.cultureFit)}`}>
                          {candidate.cultureFit}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGrowthBadge(candidate.potentialGrowth)}`}>
                          {candidate.potentialGrowth}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                      {candidate.communicationRating}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTechnicalBadge(candidate.technicalAssessment)}`}>
                          {candidate.technicalAssessment}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredCandidates.length === 0 && (
                  <tr>
                    <td colSpan="9" className="px-6 py-4 text-center text-sm text-gray-500">
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