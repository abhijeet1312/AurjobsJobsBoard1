import { useState } from 'react';
import { Search, Filter, MapPin, Clock, Briefcase } from 'lucide-react';
import { useSelector } from 'react-redux';
import JobCard from '../components/JobCard';

export default function BlueCollarJobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { allJobs } = useSelector((state) => state.job);


  const categories = [
    'all',
    'construction',
    'electrical',
    'plumbing',
    'automotive',
    'manufacturing',
    'welding',
    'carpentry',
    'hvac',
    'landscaping'
  ];



  const contractJobs = allJobs.filter(job => job.employment_type === "Blue-Collar");
  console.log(contractJobs)
  const filteredJobs = contractJobs.filter(job => {
    const matchesSearch = job?.job_title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company_display_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.job_location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100 mt-20">
   

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search jobs, companies, locations..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {

                filteredJobs.map(job => (
                  <JobCard key={job?.job_id} job={job} />
                ))


              }
            </div>
          ) : (
            <div className="text-center p-8">
              <p className="text-xl text-gray-600">No jobs found matching your criteria</p>
              <p className="mt-2 text-gray-500">Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </main>


    </div>
  );
}


// import { useState } from 'react';
// import { Search, Filter, MapPin, Clock, Briefcase,  HardHat, Wrench, Truck, Factory, Flame, Hammer, Fan, Trees,  } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import JobCard from '../components/JobCard';

// export default function BlueCollarJobsPage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedLocation, setSelectedLocation] = useState('all');
//   const { allJobs } = useSelector((state) => state.job);
  
//   const categories = [
//     'all',
//     'construction',
//     'electrical',
//     'plumbing',
//     'automotive',
//     'manufacturing',
//     'welding',
//     'carpentry',
//     'hvac',
//     'landscaping'
//   ];
  
//   const locations = [
//     'all',
//     'nearby',
//     'remote',
//     'nationwide'
//   ];
  
//   // Get category icon based on name
//   const getCategoryIcon = (category) => {
//     switch(category) {
//       case 'construction': return <HardHat size={20} />;
//       case 'electrical': return <Flame size={20} />;
//       case 'plumbing': return <Wrench size={20} />;
//       case 'automotive': return <Truck size={20} />;
//       case 'manufacturing': return <Factory size={20} />;
//       case 'welding': return <Flame size={20} />;
//       case 'carpentry': return <Hammer size={20} />;
//       case 'hvac': return <Fan size={20} />;
//       case 'landscaping': return <Trees size={20} />;
//       default: return <Tools size={20} />;
//     }
//   };

//   const contractJobs = allJobs.filter(job => job.employment_type === "Contract");
  
//   const filteredJobs = contractJobs.filter(job => {
//     const matchesSearch = job?.job_title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       job.company_display_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       job.job_location.toLowerCase().includes(searchTerm.toLowerCase());
    
//     const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    
//     const matchesLocation = selectedLocation === 'all' || 
//       (selectedLocation === 'nearby' && job.distance_in_miles < 25) ||
//       (selectedLocation === 'remote' && job.remote === true) ||
//       (selectedLocation === 'nationwide' && job.nationwide === true);
    
//     return matchesSearch && matchesCategory && matchesLocation;
//   });

//   return (
//     <div className="min-h-screen bg-blue-50">
//       {/* Hero Banner */}
//       <div className="bg-blue-800 py-12 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-4xl font-bold text-white mb-4">Skilled Trades & Blue Collar Jobs</h1>
//           <p className="text-blue-100 text-xl mb-8">Find high-paying opportunities that value your skills and expertise</p>
          
//           {/* Search Bar in Hero */}
//           <div className="relative max-w-3xl mx-auto">
//             <Search className="absolute left-4 top-4 text-gray-500" size={20} />
//             <input
//               type="text"
//               placeholder="Search jobs, skills, or locations..."
//               className="w-full pl-12 pr-4 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Category Tabs */}
//       <div className="bg-white shadow-md">
//         <div className="max-w-6xl mx-auto px-6 py-2 overflow-x-auto">
//           <div className="flex space-x-1">
//             {categories.map(category => (
//               <button
//                 key={category}
//                 className={`px-4 py-3 rounded-t-lg flex items-center space-x-2 whitespace-nowrap transition-colors ${
//                   selectedCategory === category 
//                     ? 'bg-blue-100 text-blue-800 font-medium border-b-2 border-blue-600' 
//                     : 'text-gray-600 hover:bg-gray-100'
//                 }`}
//                 onClick={() => setSelectedCategory(category)}
//               >
//                 {category !== 'all' && getCategoryIcon(category)}
//                 <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="max-w-6xl mx-auto p-6">
//         {/* Filters */}
//         <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//           <div className="flex flex-col md:flex-row gap-4 items-center">
//             <div className="font-medium text-gray-700 flex items-center">
//               <Filter className="mr-2 text-blue-600" size={20} />
//               Filters:
//             </div>
            
//             <div className="flex flex-wrap gap-3">
//               {/* Location Filter */}
//               <div className="relative">
//                 <MapPin className="absolute left-3 top-3 text-blue-600" size={18} />
//                 <select
//                   className="pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//                   value={selectedLocation}
//                   onChange={(e) => setSelectedLocation(e.target.value)}
//                 >
//                   {locations.map(location => (
//                     <option key={location} value={location}>
//                       {location.charAt(0).toUpperCase() + location.slice(1)}
//                     </option>
//                   ))}
//                 </select>
//               </div>
              
//               {/* Experience Level Filter */}
//               <div className="relative">
//                 <Briefcase className="absolute left-3 top-3 text-blue-600" size={18} />
//                 <select
//                   className="pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//                 >
//                   <option value="any">Any Experience</option>
//                   <option value="entry">Entry Level</option>
//                   <option value="intermediate">Intermediate</option>
//                   <option value="experienced">Experienced</option>
//                 </select>
//               </div>
              
//               {/* Salary Filter */}
//               <div className="relative">
//                 <Clock className="absolute left-3 top-3 text-blue-600" size={18} />
//                 <select
//                   className="pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//                 >
//                   <option value="any">Any Schedule</option>
//                   <option value="fulltime">Full-Time</option>
//                   <option value="parttime">Part-Time</option>
//                   <option value="weekend">Weekend</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Job Count */}
//         <div className="mb-4 flex justify-between items-center">
//           <h2 className="text-xl font-semibold text-gray-800">
//             {filteredJobs.length} Jobs Available
//           </h2>
//           <div className="text-blue-600 font-medium">
//             Sort by: Latest
//           </div>
//         </div>

//         {/* Job Listings */}
//         <div className="space-y-4">
//           {filteredJobs.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredJobs.map(job => (
//                 <JobCard key={job?.job_id} job={job} />
//               ))}
//             </div>
//           ) : (
//             <div className="text-center bg-white p-12 rounded-lg shadow-md">
//               <div className="bg-blue-100 inline-flex rounded-full p-4 mb-4">
//                 <Search className="text-blue-600" size={32} />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">No jobs found</h3>
//               <p className="text-gray-600 mb-6">We couldn't find any jobs matching your current criteria</p>
//               <button 
//                 onClick={() => {
//                   setSearchTerm('');
//                   setSelectedCategory('all');
//                   setSelectedLocation('all');
//                 }}
//                 className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Clear all filters
//               </button>
//             </div>
//           )}
//         </div>
        
//         {/* Featured Categories Section */}
//         <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Blue Collar Categories</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//             {categories.filter(cat => cat !== 'all').map(category => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors"
//               >
//                 <div className="bg-blue-100 p-3 rounded-full text-blue-600 mb-3">
//                   {getCategoryIcon(category)}
//                 </div>
//                 <span className="text-center font-medium capitalize">{category}</span>
//                 <span className="text-xs text-gray-500 mt-1">
//                   {Math.floor(Math.random() * 50) + 5} jobs
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>
        
//         {/* Job Seeker Tips */}
//         <div className="mt-8 bg-blue-700 text-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Blue Collar Job Seeker Tips</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="bg-blue-800 p-4 rounded-lg">
//               <h3 className="font-bold mb-2">Highlight Your Skills</h3>
//               <p className="text-blue-100">Focus on specific technical skills and certifications relevant to your trade</p>
//             </div>
//             <div className="bg-blue-800 p-4 rounded-lg">
//               <h3 className="font-bold mb-2">Showcase Experience</h3>
//               <p className="text-blue-100">Include examples of projects you've completed and any specialized equipment you can operate</p>
//             </div>
//             <div className="bg-blue-800 p-4 rounded-lg">
//               <h3 className="font-bold mb-2">Highlight Reliability</h3>
//               <p className="text-blue-100">Employers value punctuality, work ethic, and ability to complete jobs on schedule</p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }