import React from 'react'

const EmployerDashBoard = () => {
  return (
    <div>
      <h1 className='top-24 text-5xl text-black text-center mt-50'>Employer Dahboard</h1>
    </div>
  )
}

export default EmployerDashBoard
// import { useState } from 'react';
// import { Upload, File, Briefcase, X, Check, AlertCircle } from 'lucide-react';

// export default function AIScreening() {
//   const [resumeFiles, setResumeFiles] = useState([]);
//   const [jobDescriptionFile, setJobDescriptionFile] = useState(null);
// //   const [jobDescriptionText, setJobDescriptionText] = useState('');
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState(null); // null, 'success', 'error'

//   const handleResumeUpload = (e) => {
//     const newFiles = Array.from(e.target.files);
//     const pdfFiles = newFiles.filter(file => file.type === 'application/pdf');
    
//     setResumeFiles([...resumeFiles, ...pdfFiles]);
//   };

//   const handleJobDescriptionUpload = (e) => {
//     if (e.target.files.length > 0 && e.target.files[0].type === 'application/pdf') {
//       setJobDescriptionFile(e.target.files[0]);
//     }
//   };

//   const removeResumeFile = (indexToRemove) => {
//     setResumeFiles(resumeFiles.filter((_, index) => index !== indexToRemove));
//   };

//   const removeJobDescriptionFile = () => {
//     setJobDescriptionFile(null);
//   };

// //   const handleJobDescriptionTextChange = (e) => {
// //     setJobDescriptionText(e.target.value);
// //   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (resumeFiles.length === 0) {
//       setUploadStatus('error');
//       return;
//     }
    
//     // Simulate upload
//     setIsUploading(true);
    
//     setTimeout(() => {
//       setIsUploading(false);
//       setUploadStatus('success');
      
//       // Reset after 3 seconds
//       setTimeout(() => {
//         setUploadStatus(null);
//       }, 3000);
//     }, 2000);
    
//     // In a real application, you would send the files to the server here
//     // using FormData and fetch/axios
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Resume Upload Portal</h1>
//           <p className="mt-2 text-lg text-gray-600">Upload candidate resumes and job descriptions for processing</p>
//         </div>
        
//         <div className="bg-white rounded-lg shadow-xl overflow-hidden">
//           <div className="p-6 sm:p-8">
//             <form onSubmit={handleSubmit}>
//               {/* Resume Upload Section */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
//                   <File className="mr-2 text-indigo-600" size={20} />
//                   Upload Resumes
//                 </h2>
                
//                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50">
//                   <Upload className="text-indigo-500 mb-2" size={32} />
//                   <p className="text-sm text-gray-500 mb-2">Drag and drop PDF files here or click to browse</p>
//                   <p className="text-xs text-gray-400 mb-4">Accepted file types: PDF only</p>
                  
//                   <label className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 cursor-pointer transition-colors">
//                     <span>Select Resume Files</span>
//                     <input 
//                       type="file" 
//                       multiple 
//                       accept=".pdf" 
//                       className="hidden" 
//                       onChange={handleResumeUpload} 
//                     />
//                   </label>
//                 </div>
                
//                 {/* File List */}
//                 {resumeFiles.length > 0 && (
//                   <div className="mt-4">
//                     <h3 className="font-medium text-gray-700 mb-2">Selected Resumes ({resumeFiles.length})</h3>
//                     <ul className="space-y-2">
//                       {resumeFiles.map((file, index) => (
//                         <li key={index} className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md">
//                           <div className="flex items-center">
//                             <File className="text-indigo-500 mr-2" size={16} />
//                             <span className="text-sm text-gray-800 truncate max-w-xs">{file.name}</span>
//                             <span className="ml-2 text-xs text-gray-500">({(file.size / 1024).toFixed(1)} KB)</span>
//                           </div>
//                           <button 
//                             type="button" 
//                             onClick={() => removeResumeFile(index)}
//                             className="text-gray-500 hover:text-red-500"
//                           >
//                             <X size={16} />
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
              
//               {/* Job Description Section */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
//                   <Briefcase className="mr-2 text-indigo-600" size={20} />
//                   Job Description
//                 </h2>
                
//                 <div className="space-y-4">
//                   {/* Job Description PDF Upload */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Upload Job Description PDF</label>
//                     <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 flex flex-col items-center justify-center bg-gray-50">
//                       <Upload className="text-indigo-500 mb-2" size={24} />
//                       <p className="text-sm text-gray-500 mb-2">Upload job description as PDF</p>
                      
//                       <label className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 cursor-pointer transition-colors">
//                         <span>Select Job Description File</span>
//                         <input 
//                           type="file" 
//                           accept=".pdf" 
//                           className="hidden" 
//                           onChange={handleJobDescriptionUpload} 
//                         />
//                       </label>
//                     </div>
//                   </div>
                  
//                   {/* Show uploaded job description file */}
//                   {jobDescriptionFile && (
//                     <div className="mt-2">
//                       <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md">
//                         <div className="flex items-center">
//                           <File className="text-indigo-500 mr-2" size={16} />
//                           <span className="text-sm text-gray-800 truncate max-w-xs">{jobDescriptionFile.name}</span>
//                           <span className="ml-2 text-xs text-gray-500">({(jobDescriptionFile.size / 1024).toFixed(1)} KB)</span>
//                         </div>
//                         <button 
//                           type="button" 
//                           onClick={removeJobDescriptionFile}
//                           className="text-gray-500 hover:text-red-500"
//                         >
//                           <X size={16} />
//                         </button>
//                       </div>
//                     </div>
//                   )}
                  
//                 </div>
//               </div>
              
//               {/* Submit Button */}
//               <div className="flex justify-center">
//                 <button
//                   type="submit"
//                   disabled={isUploading}
//                   className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-70 flex items-center justify-center"
//                 >
//                   {isUploading ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Uploading...
//                     </>
//                   ) : "Submit"}
//                 </button>
//               </div>
              
//               {/* Status Message */}
//               {uploadStatus === 'success' && (
//                 <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md flex items-center">
//                   <Check className="mr-2" size={18} />
//                   <span>Files uploaded successfully!</span>
//                 </div>
//               )}
              
//               {uploadStatus === 'error' && (
//                 <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-md flex items-center">
//                   <AlertCircle className="mr-2" size={18} />
//                   <span>Please upload at least one resume file.</span>
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
        
//         <div className="text-center mt-6 text-sm text-gray-500">
//           All uploaded files are processed securely. See our privacy policy for details.
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState } from 'react';
// import { Upload, File, Briefcase, X, Check, AlertCircle, ChevronRight, ChevronLeft, Search, Users, Award } from 'lucide-react';

// export default function AIScreening() {
//   // State for wizard steps
//   const [currentStep, setCurrentStep] = useState(1);
//   const [resumeFiles, setResumeFiles] = useState([]);
//   const [jobDescriptionFile, setJobDescriptionFile] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadStatus, setUploadStatus] = useState(null); // null, 'success', 'error'
//   const [processing, setProcessing] = useState(false);
//   const [completed, setCompleted] = useState(false);

//   const handleResumeUpload = (e) => {
//     const newFiles = Array.from(e.target.files);
//     const pdfFiles = newFiles.filter(file => file.type === 'application/pdf');
    
//     setResumeFiles([...resumeFiles, ...pdfFiles]);
//   };

//   const handleJobDescriptionUpload = (e) => {
//     if (e.target.files.length > 0 && e.target.files[0].type === 'application/pdf') {
//       setJobDescriptionFile(e.target.files[0]);
//     }
//   };

//   const removeResumeFile = (indexToRemove) => {
//     setResumeFiles(resumeFiles.filter((_, index) => index !== indexToRemove));
//   };

//   const removeJobDescriptionFile = () => {
//     setJobDescriptionFile(null);
//   };

//   const nextStep = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   const prevStep = () => {
//     setCurrentStep(currentStep - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (resumeFiles.length === 0 || !jobDescriptionFile) {
//       setUploadStatus('error');
//       return;
//     }
    
//     // Simulate upload
//     setIsUploading(true);
    
//     setTimeout(() => {
//       setIsUploading(false);
//       setUploadStatus('success');
//       setProcessing(true);
      
//       // Simulate processing
//       setTimeout(() => {
//         setProcessing(false);
//         setCompleted(true);
//       }, 3000);
//     }, 2000);
//   };

//   const renderStepIndicator = () => {
//     return (
//       <div className="mb-8">
//         <div className="flex items-center justify-center">
//           <div className="flex items-center">
//             <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
//               1
//             </div>
//             <div className={`w-12 h-1 sm:w-24 ${currentStep >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
//             <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
//               2
//             </div>
//             <div className={`w-12 h-1 sm:w-24 ${currentStep >= 3 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
//             <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
//               3
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center mt-2">
//           <div className="flex text-xs text-gray-500 space-x-14 sm:space-x-36">
//             <span className={currentStep === 1 ? 'font-bold text-indigo-600' : ''}>Upload Resumes</span>
//             <span className={currentStep === 2 ? 'font-bold text-indigo-600' : ''}>Job Description</span>
//             <span className={currentStep === 3 ? 'font-bold text-indigo-600' : ''}>Process</span>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderStep1 = () => {
//     return (
//       <div className="space-y-6">
//         <div className="text-center mb-6">
//           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
//             <Users className="text-indigo-600" size={32} />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800">Upload Candidate Resumes</h2>
//           <p className="text-gray-600 mt-2">Select all the candidate resumes you want to evaluate</p>
//         </div>
        
//         <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center bg-gray-50">
//           <Upload className="text-indigo-500 mb-3" size={40} />
//           <p className="text-sm text-gray-500 mb-2">Drag and drop PDF files here or click to browse</p>
//           <p className="text-xs text-gray-400 mb-4">Accepted file types: PDF only</p>
          
//           <label className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 cursor-pointer transition-colors">
//             <span>Select Resume Files</span>
//             <input 
//               type="file" 
//               multiple 
//               accept=".pdf" 
//               className="hidden" 
//               onChange={handleResumeUpload} 
//             />
//           </label>
//         </div>
        
//         {/* File List */}
//         {resumeFiles.length > 0 && (
//           <div className="mt-6">
//             <h3 className="font-medium text-gray-700 mb-3">Selected Resumes ({resumeFiles.length})</h3>
//             <div className="bg-white rounded-lg border border-gray-200 p-4">
//               <ul className="space-y-2 max-h-64 overflow-y-auto">
//                 {resumeFiles.map((file, index) => (
//                   <li key={index} className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-md border border-gray-100">
//                     <div className="flex items-center">
//                       <File className="text-indigo-500 mr-3" size={18} />
//                       <span className="text-sm text-gray-800 truncate max-w-xs">{file.name}</span>
//                       <span className="ml-2 text-xs text-gray-500">({(file.size / 1024).toFixed(1)} KB)</span>
//                     </div>
//                     <button 
//                       type="button" 
//                       onClick={() => removeResumeFile(index)}
//                       className="text-gray-500 hover:text-red-500 p-1"
//                     >
//                       <X size={18} />
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}
        
//         <div className="flex justify-end mt-8">
//           <button
//             type="button"
//             onClick={nextStep}
//             disabled={resumeFiles.length === 0}
//             className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Next Step
//             <ChevronRight className="ml-2" size={18} />
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const renderStep2 = () => {
//     return (
//       <div className="space-y-6">
//         <div className="text-center mb-6">
//           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
//             <Briefcase className="text-indigo-600" size={32} />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800">Upload Job Description</h2>
//           <p className="text-gray-600 mt-2">Provide the job description to match against candidate resumes</p>
//         </div>
        
//         <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center bg-gray-50">
//           <Upload className="text-indigo-500 mb-3" size={40} />
//           <p className="text-sm text-gray-500 mb-2">Upload job description as PDF</p>
//           <p className="text-xs text-gray-400 mb-4">We'll extract requirements and skills from the document</p>
          
//           <label className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 cursor-pointer transition-colors">
//             <span>Select Job Description File</span>
//             <input 
//               type="file" 
//               accept=".pdf" 
//               className="hidden" 
//               onChange={handleJobDescriptionUpload} 
//             />
//           </label>
//         </div>
        
//         {/* Show uploaded job description file */}
//         {jobDescriptionFile && (
//           <div className="mt-6">
//             <h3 className="font-medium text-gray-700 mb-3">Selected Job Description</h3>
//             <div className="bg-white rounded-lg border border-gray-200 p-4">
//               <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-md border border-gray-100">
//                 <div className="flex items-center">
//                   <File className="text-indigo-500 mr-3" size={18} />
//                   <span className="text-sm text-gray-800 truncate max-w-xs">{jobDescriptionFile.name}</span>
//                   <span className="ml-2 text-xs text-gray-500">({(jobDescriptionFile.size / 1024).toFixed(1)} KB)</span>
//                 </div>
//                 <button 
//                   type="button" 
//                   onClick={removeJobDescriptionFile}
//                   className="text-gray-500 hover:text-red-500 p-1"
//                 >
//                   <X size={18} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
        
//         <div className="flex justify-between mt-8">
//           <button
//             type="button"
//             onClick={prevStep}
//             className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
//           >
//             <ChevronLeft className="mr-2" size={18} />
//             Previous
//           </button>
          
//           <button
//             type="button"
//             onClick={nextStep}
//             disabled={!jobDescriptionFile}
//             className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Next Step
//             <ChevronRight className="ml-2" size={18} />
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const renderStep3 = () => {
//     return (
//       <div className="space-y-6">
//         <div className="text-center mb-6">
//           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
//             <Search className="text-indigo-600" size={32} />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800">Process Files</h2>
//           <p className="text-gray-600 mt-2">Review your uploads and start the screening process</p>
//         </div>
        
//         <div className="bg-white rounded-lg border border-gray-200 p-6">
//           <h3 className="font-medium text-gray-800 mb-4">Summary</h3>
          
//           <div className="space-y-4">
//             <div className="flex items-center justify-between py-3 border-b border-gray-100">
//               <div className="flex items-center">
//                 <Users className="text-indigo-500 mr-3" size={20} />
//                 <span className="font-medium">Candidate Resumes</span>
//               </div>
//               <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">{resumeFiles.length} files</span>
//             </div>
            
//             <div className="flex items-center justify-between py-3">
//               <div className="flex items-center">
//                 <Briefcase className="text-indigo-500 mr-3" size={20} />
//                 <span className="font-medium">Job Description</span>
//               </div>
//               <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">1 file</span>
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
//           <h3 className="font-medium text-gray-800 mb-4">Our AI Will</h3>
          
//           <ul className="space-y-3">
//             <li className="flex items-start">
//               <div className="flex-shrink-0 mt-1">
//                 <Check className="text-green-500" size={16} />
//               </div>
//               <span className="ml-2 text-gray-700">Extract key skills and requirements from the job description</span>
//             </li>
//             <li className="flex items-start">
//               <div className="flex-shrink-0 mt-1">
//                 <Check className="text-green-500" size={16} />
//               </div>
//               <span className="ml-2 text-gray-700">Analyze candidate resumes for relevant experience and skills</span>
//             </li>
//             <li className="flex items-start">
//               <div className="flex-shrink-0 mt-1">
//                 <Check className="text-green-500" size={16} />
//               </div>
//               <span className="ml-2 text-gray-700">Rank candidates based on job requirements match</span>
//             </li>
//             <li className="flex items-start">
//               <div className="flex-shrink-0 mt-1">
//                 <Check className="text-green-500" size={16} />
//               </div>
//               <span className="ml-2 text-gray-700">Generate detailed candidate assessment reports</span>
//             </li>
//           </ul>
//         </div>
        
//         <div className="flex justify-between mt-8">
//           <button
//             type="button"
//             onClick={prevStep}
//             className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
//           >
//             <ChevronLeft className="mr-2" size={18} />
//             Previous
//           </button>
          
//           <button
//             type="button"
//             onClick={handleSubmit}
//             disabled={isUploading || processing}
//             className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isUploading ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Uploading...
//               </>
//             ) : processing ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Processing...
//               </>
//             ) : "Start Screening"}
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const renderCompletedScreen = () => {
//     return (
//       <div className="text-center space-y-6 py-8">
//         <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100">
//           <Check className="h-12 w-12 text-green-600" />
//         </div>
        
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800">Screening Completed!</h2>
//           <p className="text-gray-600 mt-2">
//             We've successfully processed {resumeFiles.length} resumes against your job description.
//           </p>
//         </div>
        
//         <div className="bg-white rounded-lg border border-gray-200 p-6 max-w-md mx-auto">
//           <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
//             <Award className="text-indigo-500 mr-2" size={20} />
//             Top Candidates
//           </h3>
          
//           <div className="space-y-3">
//             {[...Array(3)].map((_, index) => (
//               <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
//                 <div className="flex items-center">
//                   <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
//                     <span className="font-semibold text-indigo-600">{index + 1}</span>
//                   </div>
//                   <div className="text-left">
//                     <p className="font-medium text-gray-800">Candidate {index + 1}</p>
//                     <p className="text-sm text-gray-500">Match Score: {90 - index * 5}%</p>
//                   </div>
//                 </div>
//                 <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
//                   View Details
//                 </button>
//               </div>
//             ))}
//           </div>
          
//           <div className="mt-4">
//             <button className="w-full py-2 px-4 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 font-medium">
//               View Full Results
//             </button>
//           </div>
//         </div>
        
//         <button
//           onClick={() => {
//             setResumeFiles([]);
//             setJobDescriptionFile(null);
//             setCurrentStep(1);
//             setCompleted(false);
//           }}
//           className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
//         >
//           Start New Screening
//         </button>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">AI Resume Screening</h1>
//           <p className="mt-2 text-lg text-gray-600">Find the best candidates quickly and efficiently</p>
//         </div>
        
//         <div className="bg-white rounded-lg shadow-xl overflow-hidden">
//           <div className="p-6 sm:p-8">
//             {!completed && renderStepIndicator()}
            
//             {completed ? renderCompletedScreen() : (
//               <>
//                 {currentStep === 1 && renderStep1()}
//                 {currentStep === 2 && renderStep2()}
//                 {currentStep === 3 && renderStep3()}
//               </>
//             )}
//           </div>
//         </div>
        
//         <div className="text-center mt-6 text-sm text-gray-500">
//           All uploaded files are processed securely. See our privacy policy for details.
//         </div>
//       </div>
//     </div>
//   );
// }