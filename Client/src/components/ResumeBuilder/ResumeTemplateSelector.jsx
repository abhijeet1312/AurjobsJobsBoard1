// import React, { useState, useRef } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Check, Download, ChevronRight, Lock, Crown } from 'lucide-react';
// import ModernResumePreview from '../ResumeTemplates/ModernResumePreview';
// import MinimalistResumePreview from '../ResumeTemplates/MinimalistResumePreview';
// import ClassicResumePreview from '../ResumeTemplates/ClassicResumePreview';
// import CreativeResumePreview from '../ResumeTemplates/CreativeResumePreview';
// import ProfessionalResumePreview from '../ResumeTemplates/ProfessionalResumePreview';
// import Template1 from '../ResumeTemplates/Template1';
// import Template2 from '../ResumeTemplates/Template2';
// import Template3 from '../ResumeTemplates/Template3';
// import Template4 from '../ResumeTemplates/Template4';
// import html2pdf from 'html2pdf.js';
// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';


// const ResumeTemplateSelector = () => {
//   const location = useLocation();
//   const resumeData = location.state;
//   const resumeRef = useRef();
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [showPremiumModal, setShowPremiumModal] = useState(false);
//   const [selectedPremiumTemplate, setSelectedPremiumTemplate] = useState(null);




//   const customTemplates = [
//     {
//       id: 1,
//       name: "Modern",
//       description: "Clean and professional design with complete details",
//       color: "bg-blue-600",
//       preview: "/api/placeholder/240/320",
//       component: "ModernTemplate",
//       isPremium: false
//     },
//     {
//       id: 2,
//       name: "Minimal",
//       description: "Simple and elegant with essential information",
//       color: "bg-gray-200",
//       preview: "/api/placeholder/240/320",
//       component: "MinimalTemplate",
//       isPremium: false,
//       price: "$4.99"
//     },
//     {
//       id: 3,
//       name: "Professional",
//       description: "Clean and minimal design for corporate environments",
//       color: "bg-blue-600",
//       preview: "/api/placeholder/240/320",
//       component: "ProfressionalTemplate",
//       isPremium: false,
//       price: "$5.99"
//     },
//     {
//       id: 4,
//       name: "Creative",
//       description: "Bold design for creative industries",
//       color: "bg-purple-600",
//       preview: "/api/placeholder/240/320",
//       component: "CreativeTemplate",
//       isPremium: false,
//       price: "$6.99"
//     },
//     {
//       id: 5,
//       name: "Academic",
//       description: "Structured layout for academic and research positions",
//       color: "bg-green-600",
//       preview: "/api/placeholder/240/320",
//       component: "ClassicTemplate",
//       isPremium: false,
//       price: "$4.99"
//     },
//     {
//       id: 6,
//       name: "Template 1",
//       description: "Structured layout for academic and research positions",
//       color: "bg-green-600",
//       preview: "/api/placeholder/240/320",
//       component: "Template1",
//       isPremium: false,
//       price: "$4.99"
//     },
//     {
//       id: 7,
//       name: "Template 2",
//       description: "Structured layout for academic and research positions",
//       color: "bg-green-600",
//       preview: "/api/placeholder/240/320",
//       component: "Template2",
//       isPremium: false,
//       price: "$4.99"
//     },
//     {
//       id: 8,
//       name: "Template 3",
//       description: "Structured layout for academic and research positions",
//       color: "bg-green-600",
//       preview: "/api/placeholder/240/320",
//       component: "Template3",
//       isPremium: false,
//       price: "$4.99"
//     },
//     {
//       id: 9,
//       name: "Template 4",
//       description: "Structured layout for academic and research positions",
//       color: "bg-green-600",
//       preview: "/api/placeholder/240/320",
//       component: "Template4",
//       isPremium: false,
//       price: "$4.99"
//     }
//   ];

//   // Default to the free template
//   const [selectedTemplate, setSelectedTemplate] = useState(
//     customTemplates.find(template => !template.isPremium)
//   );

//   const handleTemplateSelection = (template) => {
//     if (template.isPremium) {
//       setSelectedPremiumTemplate(template);
//       setShowPremiumModal(true);
//     } else {
//       setSelectedTemplate(template);
//     }
//   };

//   const handlePurchaseTemplate = () => {
//     // In a real app, you would process payment here
//     // For this demo, we'll just close the modal and set the template
//     setSelectedTemplate(selectedPremiumTemplate);
//     setShowPremiumModal(false);
//   };

//   // Add a new function to handle printing
//   // const handleDownloadPDF = () => {
//   //   // Create a new window for printing
//   //   const printWindow = window.open('', '_blank');

//   //   // Add necessary styling and content
//   //   printWindow.document.write(`
//   //   <html>
//   //     <head>
//   //       <title>Resume Preview</title>
//   //       <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
//   //       <style>
//   //         body {
//   //           padding: 0;
//   //           margin: 0;
//   //         }
//   //         @media print {
//   //           body {
//   //             -webkit-print-color-adjust: exact !important;
//   //             print-color-adjust: exact !important;
//   //           }
//   //         }
//   //       </style>
//   //     </head>
//   //     <body>
//   //       ${resumeRef.current.outerHTML}
//   //     </body>
//   //   </html>
//   // `);

//   //   // Ensure resources are loaded before printing
//   //   printWindow.document.close();

//   //   // Wait for resources to load, then print
//   //   printWindow.onload = function () {
//   //     printWindow.focus();
//   //     printWindow.print();
//   //     // Optionally close the window after printing
//   //     // printWindow.onafterprint = function() { printWindow.close(); };
//   //   };
//   // };

//   const handleDownloadPDF = () => {
//     // Create a new window for printing
//     const printWindow = window.open('', '_blank');

//     // Add necessary styling and content
//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>Resume</title>
//           <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
//           <style>
//             body {
//               padding: 0;
//               margin: 0;
//             }
//             @media print {
//               body {
//                 -webkit-print-color-adjust: exact !important;
//                 print-color-adjust: exact !important;
//               }
//             }
//           </style>
//           <script>
//             function autoSavePDF() {
//               const params = {
//                 destination: 'save',
//                 filename: 'resume.pdf',
//                 printBackground: true
//               };
//               try {
//                 window.print(params);
//               } catch(e) {
//                 window.print();
//               }
//             }
//           </script>
//         </head>
//         <body onload="autoSavePDF()">
//           ${resumeRef.current.outerHTML}
//         </body>
//       </html>
//     `);

//     printWindow.document.close();
//   };




//   // Render the selected template
//   const renderTemplate = () => {
//     const TemplateComponent = selectedTemplate.component;
//     return (
//       <div ref={resumeRef}>
//         {
//           TemplateComponent === "ModernTemplate" && (<ModernResumePreview resumeData={resumeData}
//             color={selectedTemplate.color} />)
//         }
//         {
//           TemplateComponent === "MinimalTemplate" && (<MinimalistResumePreview resumeData={resumeData}
//             color={selectedTemplate.color} />)
//         }
//         {
//           TemplateComponent === "ClassicTemplate" && (<ClassicResumePreview resumeData={resumeData}
//             color={selectedTemplate.color} />)
//         }
//         {
//           TemplateComponent === "CreativeTemplate" && (<CreativeResumePreview resumeData={resumeData}
//             color={selectedTemplate.color} />)
//         }
//         {
//           TemplateComponent === "ProfressionalTemplate" && (<ProfessionalResumePreview resumeData={resumeData}
//             color={selectedTemplate.color} />)
//         }
//         {
//           TemplateComponent === "Template1" && (<Template1 resumeData={resumeData}
//             color={selectedTemplate.color} />)
//         }
//         {
//           TemplateComponent === "Template2" && (<Template2 resumeData={resumeData}
//             color={selectedTemplate.color} />)
//         }
//         {
//           TemplateComponent === "Template3" && (<Template3 resumeData={resumeData}
//             color={selectedTemplate.color} />)
//         }
//         {
//           TemplateComponent === "Template4" && (<Template4
//             color={selectedTemplate.color} />)
//         }
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Premium Template Modal */}
//       {showPremiumModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg p-6 max-w-md w-full">
//             <div className="text-center mb-4">
//               <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-500 mb-3">
//                 <Crown className="h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-bold">Premium Template</h3>
//               <p className="text-gray-600 mt-1">
//                 Unlock {selectedPremiumTemplate?.name} template for {selectedPremiumTemplate?.price}
//               </p>
//             </div>

//             <div className="mt-6 space-y-4">
//               <button
//                 onClick={handlePurchaseTemplate}
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
//               >
//                 Unlock Template
//               </button>
//               <button
//                 onClick={() => setShowPremiumModal(false)}
//                 className="w-full border border-gray-300 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
//           <p className="text-gray-600 mt-2">Select a template, preview your resume, and download it in seconds</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Template Selection Panel */}
//           <div className="col-span-1 bg-white rounded-lg shadow-md p-6">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold">Choose a Template</h2>
//               <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                 1 Free Template
//               </span>
//             </div>

//             <div className="space-y-4">
//               {customTemplates.map((template) => (
//                 <div
//                   key={template.id}
//                   className={`p-4 rounded-lg cursor-pointer transition-all duration-200 relative
//                     ${selectedTemplate.id === template.id
//                       ? 'border-2 border-blue-500 bg-blue-50'
//                       : 'border border-gray-200 hover:border-blue-300'}`}
//                   onClick={() => handleTemplateSelection(template)}
//                 >
//                   <div className="flex items-start">
//                     <div className="h-16 w-12 flex-shrink-0 mr-4 rounded overflow-hidden relative">
//                       <img
//                         src={template.preview}
//                         alt={template.name}
//                         className={`h-full w-full object-cover ${template.isPremium ? 'opacity-70' : ''}`}
//                       />
//                       {template.isPremium && (
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <Lock className="h-4 w-4 text-gray-600" />
//                         </div>
//                       )}
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex justify-between items-center">
//                         <div className="flex items-center">
//                           <h3 className="font-medium">{template.name}</h3>
//                           {template.isPremium && (
//                             <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
//                               <Crown className="h-3 w-3 mr-1" /> Premium
//                             </span>
//                           )}
//                           {!template.isPremium && (
//                             <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
//                               Free
//                             </span>
//                           )}
//                         </div>
//                         {selectedTemplate.id === template.id && (
//                           <Check className="h-5 w-5 text-blue-500" />
//                         )}
//                       </div>
//                       <p className="text-sm text-gray-500 mt-1">{template.description}</p>
//                       {template.isPremium && (
//                         <p className="text-sm font-medium text-blue-600 mt-1">{template.price}</p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6">

//               <button
//         className={`w-full flex items-center justify-center rounded-md py-2 px-4 text-white font-medium transition-all
//           ${isDownloading
//             ? 'bg-gray-400 cursor-not-allowed'
//             : 'bg-blue-600 hover:bg-blue-700'}`}
//         onClick={handleDownloadPDF}
//         disabled={isDownloading}
//       >
//         {isDownloading ? (
//           <span className="flex items-center">
//             <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//             </svg>
//             Generating PDF...
//           </span>
//         ) : (
//           <span className="flex items-center">
//             <Download className="mr-2 h-4 w-4" />
//             Download Resume PDF
//           </span>
//         )}
//       </button>
//             </div>

//             <div className="mt-4">
//               <button className="w-full flex items-center justify-center rounded-md py-2 px-4 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
//                 Edit Resume Content
//                 <ChevronRight className="ml-1 h-4 w-4" />
//               </button>
//             </div>
//           </div>

//           {/* Resume Preview Panel */}
//           <div className="col-span-2">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-semibold">Preview</h2>
//                 <div className="flex items-center space-x-2">
//                   <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
//                     {selectedTemplate.name} Template
//                   </span>
//                   {selectedTemplate.isPremium ? (
//                     <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
//                       <Crown className="h-3 w-3 mr-1" /> Premium
//                     </span>
//                   ) : (
//                     <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                       Free
//                     </span>
//                   )}
//                 </div>
//               </div>

//               <div className="bg-gray-100 p-8 rounded-lg">
//                 <div className="max-w-2xl mx-auto transform transition-all duration-300 hover:scale-105" ref={resumeRef}>
//                   {renderTemplate()}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



// export default ResumeTemplateSelector;


import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, Download, ChevronRight, Lock, Crown } from 'lucide-react';
import ModernResumePreview from '../ResumeTemplates/ModernResumePreview';
import MinimalistResumePreview from '../ResumeTemplates/MinimalistResumePreview';
import ClassicResumePreview from '../ResumeTemplates/ClassicResumePreview';
import CreativeResumePreview from '../ResumeTemplates/CreativeResumePreview';
import ProfessionalResumePreview from '../ResumeTemplates/ProfessionalResumePreview';
import Template1 from '../ResumeTemplates/Template1';
import Template2 from '../ResumeTemplates/Template2';
import Template3 from '../ResumeTemplates/Template3';
import Template4 from '../ResumeTemplates/Template4';

const ResumeTemplateSelector = () => {
  const location = useLocation();
  const resumeData = location.state;
  const resumeRef = useRef();
  const [isDownloading, setIsDownloading] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [selectedPremiumTemplate, setSelectedPremiumTemplate] = useState(null);

  const customTemplates = [
    {
      id: 1,
      name: "Modern",
      description: "Clean and professional design with complete details",
      color: "bg-blue-600",
      preview: "/api/placeholder/240/320",
      component: "ModernTemplate",
      isPremium: false
    },
    {
      id: 2,
      name: "Minimal",
      description: "Simple and elegant with essential information",
      color: "bg-gray-200",
      preview: "/api/placeholder/240/320",
      component: "MinimalTemplate",
      isPremium: false
    },
    // {
    //   id: 3,
    //   name: "Professional",
    //   description: "Clean and minimal design for corporate environments",
    //   color: "bg-blue-600",
    //   preview: "/api/placeholder/240/320",
    //   component: "ProfressionalTemplate",
    //   isPremium: false
    // },
    {
      id: 4,
      name: "Creative",
      description: "Bold design for creative industries",
      color: "bg-purple-600",
      preview: "/api/placeholder/240/320",
      component: "CreativeTemplate",
      isPremium: false
    },
    {
      id: 5,
      name: "Academic",
      description: "Structured layout for academic and research positions",
      color: "bg-green-600",
      preview: "/api/placeholder/240/320",
      component: "ClassicTemplate",
      isPremium: false
    },
    {
      id: 6,
      name: "Template 1",
      description: "Structured layout for academic and research positions",
      color: "bg-green-600",
      preview: "/api/placeholder/240/320",
      component: "Template1",
      isPremium: false
    },
    {
      id: 7,
      name: "Template 2",
      description: "Structured layout for academic and research positions",
      color: "bg-green-600",
      preview: "/api/placeholder/240/320",
      component: "Template2",
      isPremium: false
    },
    {
      id: 8,
      name: "Template 3",
      description: "Structured layout for academic and research positions",
      color: "bg-green-600",
      preview: "/api/placeholder/240/320",
      component: "Template3",
      isPremium: false
    },
    {
      id: 9,
      name: "Template 4",
      description: "Structured layout for academic and research positions",
      color: "bg-green-600",
      preview: "/api/placeholder/240/320",
      component: "Template4",
      isPremium: false
    }
  ];

  // Default to the free template
  const [selectedTemplate, setSelectedTemplate] = useState(
    customTemplates.find(template => !template.isPremium)
  );

  const handleTemplateSelection = (template) => {
    if (template.isPremium) {
      setSelectedPremiumTemplate(template);
      setShowPremiumModal(true);
    } else {
      setSelectedTemplate(template);
    }
  };

  const handlePurchaseTemplate = () => {
    // In a real app, you would process payment here
    setSelectedTemplate(selectedPremiumTemplate);
    setShowPremiumModal(false);
  };

  

  const handleDownloadPDF = () => {
    setIsDownloading(true);
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');

    // Add necessary styling and content with A4 size specifications
    printWindow.document.write(`
      <html>
        <head>
          <title>Resume - ${selectedTemplate.name}</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          <style>
            @page {
              size: A4;
              margin: 0;
            }
            body {
              padding: 0;
              margin: 0;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .resume-container {
              width: 210mm;
              height: 297mm;
              margin: 0 auto;
              background-color: white;
              position: relative;
              overflow: hidden;
            }
            /* Ensure content fits properly within A4 dimensions */
            .resume-content {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              transform-origin: top left;
              box-sizing: border-box;
            }
            @media print {
              html, body {
                width: 210mm;
                height: 297mm;
              }
              .resume-container {
                box-shadow: none;
              }
            }
          </style>
          <script>
            window.onload = function() {
              setTimeout(() => {
                const params = {
                  destination: 'save',
                  filename: 'resume.pdf',
                  printBackground: true
                };
                try {
                  window.print(params);
                  window.close();
                } catch(e) {
                  window.print();
                  // Close the window after print dialog
                  window.addEventListener('afterprint', function() {
                    window.close();
                  });
                }
              }, 1000); // Small delay to ensure content is fully loaded
            }
          </script>
        </head>
        <body>
          <div class="resume-container">
            <div class="resume-content">
              ${resumeRef.current.outerHTML}
            </div>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    
    // Reset downloading state after a delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 3000);
  };

  // const handleDownloadPDF = () => {
  //   // Create a new window for printing
  //   const printWindow = window.open('', '_blank');

  //   // Add necessary styling and content
  //   printWindow.document.write(`
  //     <html>
  //       <head>
  //         <title>Resume</title>
  //         <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  //         <style>
  //           body {
  //             padding: 0;
  //             margin: 0;
  //           }
  //           @media print {
  //             body {
  //               -webkit-print-color-adjust: exact !important;
  //               print-color-adjust: exact !important;
  //             }
  //           }
  //         </style>
  //         <script>
  //           function autoSavePDF() {
  //             const params = {
  //               destination: 'save',
  //               filename: 'resume.pdf',
  //               printBackground: true
  //             };
  //             try {
  //               window.print(params);
  //             } catch(e) {
  //               window.print();
  //             }
  //           }
  //         </script>
  //       </head>
  //       <body onload="autoSavePDF()">
  //         ${resumeRef.current.outerHTML}
  //       </body>
  //     </html>
  //   `);

  //   printWindow.document.close();
  // };

  // Render the selected template
  const renderTemplate = () => {
    const TemplateComponent = selectedTemplate.component;
    return (
      <div id='resumeRef' ref={resumeRef}>
        {
          TemplateComponent === "ModernTemplate" && (<ModernResumePreview resumeData={resumeData}
            color={selectedTemplate.color} />)
        }
        {
          TemplateComponent === "MinimalTemplate" && (<MinimalistResumePreview resumeData={resumeData}
            color={selectedTemplate.color} />)
        }
        {
          TemplateComponent === "ClassicTemplate" && (<ClassicResumePreview resumeData={resumeData}
            color={selectedTemplate.color} />)
        }
        {
          TemplateComponent === "CreativeTemplate" && (<CreativeResumePreview resumeData={resumeData}
            color={selectedTemplate.color} />)
        }
        {/* {
          TemplateComponent === "ProfressionalTemplate" && (<ProfessionalResumePreview resumeData={resumeData}
            color={selectedTemplate.color} />)
        } */}
        {
          TemplateComponent === "Template1" && (<Template1 resumeData={resumeData}
            color={selectedTemplate.color} />)
        }
        {
          TemplateComponent === "Template2" && (<Template2 resumeData={resumeData}
            color={selectedTemplate.color} />)
        }
        {
          TemplateComponent === "Template3" && (<Template3 resumeData={resumeData}
            color={selectedTemplate.color} />)
        }
        {
          TemplateComponent === "Template4" && (<Template4
            color={selectedTemplate.color} />)
        }
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* Premium Template Modal */}
      {showPremiumModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-500 mb-3">
                <Crown className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Premium Template</h3>
              <p className="text-gray-600 mt-1">
                Unlock {selectedPremiumTemplate?.name} template for {selectedPremiumTemplate?.price}
              </p>
            </div>
            <div className="mt-6 space-y-4">
              <button
                onClick={handlePurchaseTemplate}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
              >
                Unlock Template
              </button>
              <button
                onClick={() => setShowPremiumModal(false)}
                className="w-full border border-gray-300 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
          <p className="text-gray-600 mt-2">Select a template, preview your resume, and download it in seconds</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Template Selection Panel */}
          <div className="col-span-1 bg-white rounded-lg shadow-md p-6 ">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Choose a Template</h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All</button>
            </div>

            {/* Template Grid - Similar to ResumeGenius */}
            <div className="grid grid-cols-2 gap-4">
              {customTemplates.map((template) => (
                <div
                  key={template.id}
                  className={`cursor-pointer transition-all duration-200 relative rounded-lg overflow-hidden
                    ${selectedTemplate.id === template.id
                      ? 'ring-2 ring-blue-500'
                      : 'hover:ring-1 hover:ring-blue-300'}`}
                  onClick={() => handleTemplateSelection(template)}
                >
                  {/* Template Preview */}
                  <div className="h-52 w-full relative">
                    <img
                      src={template.preview}
                      alt={template.name}
                      className={`h-full w-full object-cover ${template.isPremium ? 'opacity-70' : ''}`}
                    />
                    {template.isPremium && (
                      <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 rounded-full p-1">
                        <Crown className="h-4 w-4" />
                      </div>
                    )}
                    {selectedTemplate.id === template.id && (
                      <div className="absolute inset-0 bg-blue-500 bg-opacity-20 flex items-center justify-center">
                        <div className="bg-blue-500 rounded-full p-1">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Template Name */}
                  <div className="p-2 text-center">
                    <h3 className="font-medium text-gray-800">{template.name}</h3>
                    {template.isPremium ? (
                      <span className="text-xs font-medium text-blue-600">{template.price}</span>
                    ) : (
                      <span className="text-xs font-medium text-green-600">Free</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button
                className={`w-full flex items-center justify-center rounded-md py-2 px-4 text-white font-medium transition-all
                  ${isDownloading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'}`}
                onClick={handleDownloadPDF}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating PDF...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume PDF
                  </span>
                )}
              </button>
            </div>

            <div className="mt-4">
              <button className="w-full flex items-center justify-center rounded-md py-2 px-4 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
                Edit Resume Content
                <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Resume Preview Panel */}
          <div className="col-span-2 ">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Preview</h2>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {selectedTemplate.name} Template
                  </span>
                  {selectedTemplate.isPremium ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      <Crown className="h-3 w-3 mr-1" /> Premium
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Free
                    </span>
                  )}
                </div>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg">
                <div className="max-w-2xl mx-auto transform transition-all duration-300 hover:scale-105">
                  {renderTemplate()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplateSelector;