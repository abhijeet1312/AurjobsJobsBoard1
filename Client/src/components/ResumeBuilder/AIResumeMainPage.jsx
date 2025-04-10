import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Upload, 
  Check, 
  Edit2, 
  Star, 
  Download, 
  User,
  Loader2,
  ArrowRight
} from 'lucide-react';

const AIResumeMainPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loadingState, setLoadingState] = useState(null);
  const navigate = useNavigate()


  const handleStartNewResume = () => {
    setLoadingState('new');
    setTimeout(()=>{
        navigate('/ai_resume_builder_form')
    },4000)
    
  
  };

  const handleUploadResume = () => {
    setLoadingState('upload');
  };


const LoadingScreen = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-800 p-6"
    >
      <div className="text-center max-w-2xl w-full">
        {/* Animated Main Icon */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            transition: { 
              duration: 1.5, 
              repeat: Infinity 
            }
          }}
          className="mb-8"
        >
          {loadingState === 'new' ? (
            <User className="w-32 h-32 mx-auto text-white" />
          ) : (
            <Upload className="w-32 h-32 mx-auto text-white" />
          )}
        </motion.div>
        
        {/* Main Loading Text */}
        <h2 className="text-3xl font-bold text-white mb-4">
          {loadingState === 'new' ? 'Preparing New Resume Template' : 'Uploading Your Resume'}
        </h2>
        
        {/* Advanced Loading Indicators */}
        <div className="flex flex-col items-center space-y-6 mb-8">
          {/* Circular Progress Loaders */}
          <div className="flex space-x-4">
            {[1, 2, 3].map((_, index) => (
              <motion.div 
                key={index}
                animate={{
                  rotate: [0, 360],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.2
                  }
                }}
                className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full"
              />
            ))}
          </div>
          
          {/* Animated Loading Dots */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((_, index) => (
              <motion.div 
                key={index}
                animate={{ 
                  scale: [1, 1.5, 1],
                  transition: { 
                    duration: 1, 
                    repeat: Infinity,
                    delay: index * 0.2 
                  }
                }} 
                className="w-3 h-3 bg-white rounded-full"
              />
            ))}
          </div>
          
          {/* Loader with Spinner and Text */}
          <motion.div
            animate={{
              rotate: [0, 360],
              transition: {
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            className="flex items-center space-x-4 bg-white/10 px-6 py-3 rounded-full"
          >
            <Loader2 className="w-6 h-6 text-white animate-spin" />
            <span className="text-white">
              {loadingState === 'new' 
                ? 'Customizing your template' 
                : 'Processing document'}
            </span>
          </motion.div>

          {/* Animated Progress Bars */}
          <div className="w-full bg-white/10 rounded-full h-2.5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ 
                width: ['0%', '50%', '75%', '100%'],
                transition: {
                  duration: 3,
                  ease: "easeInOut"
                }
              }}
              className="bg-white h-2.5 rounded-full"
            />
          </div>
        </div>
        
        {/* Contextual Loading Message */}
        <p className="text-xl text-indigo-100">
          {loadingState === 'new' 
            ? 'Our AI is crafting the perfect resume template just for you...' 
            : 'Securely analyzing and processing your document...'}
        </p>

        {/* Animated Next Step Hint */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: {
              delay: 2,
              duration: 0.5
            }
          }}
          className="mt-6 flex items-center justify-center space-x-2 text-white"
        >
          <span>Next: Personalize Your Resume</span>
          <ArrowRight className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </motion.div>
  );
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
  const resumeTemplates = [
    {
      name: "Professional Classic",
      description: "Clean, elegant design perfect for corporate roles",
      icon: <FileText className="w-12 h-12 text-indigo-300" />
    },
    {
      name: "Creative Modern",
      description: "Bold layout for creative and tech industries",
      icon: <Edit2 className="w-12 h-12 text-purple-300" />
    },
    {
      name: "Minimalist Chic",
      description: "Simple, streamlined design for all professions",
      icon: <Download className="w-12 h-12 text-indigo-300" />
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-800 text-white min-h-screen">
      {/* Animated Background Shapes */}
      <div className="absolute z-30 inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
            transition: { 
              duration: 5, 
              repeat: Infinity 
            }
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -10, 0],
            transition: { 
              duration: 6, 
              repeat: Infinity 
            }
          }}
        />
      </div>

     
      {/* <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className={`${isScrolled ? 'w-10 h-10' : 'w-12 h-12'} rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold mr-3 transition-all duration-300`}>
                AJ
              </div>
              <span className={`font-bold transition-all duration-300 ${isScrolled ? 'text-indigo-900 text-lg' : 'text-white text-xl'}`}>
                Aurjobs Resume Builder
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className={`hover:text-indigo-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Builder</a>
              <a href="#services" className={`hover:text-indigo-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Resumes</a>
              <a href="#team" className={`hover:text-indigo-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Cover Letters</a>
              <a href="#testimonials" className={`hover:text-indigo-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>CVs</a>
              <a href="#testimonials" className={`hover:text-indigo-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Resources</a>

            </div>
            <button className={`${isScrolled ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300`}>
              Contact Us
            </button>
          </div>
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="container mx-auto px-6 mt-10 relative z-10 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6 leading-tight"
            >
              Create Your <span className="text-indigo-300">Professional Resume</span><br />
              In Just Minutes
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 text-indigo-100 max-w-lg"
            >
              Effortlessly craft a standout resume with our AI-powered builder, designed to help you land your dream job.
            </motion.p>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-8">
              <motion.button 
              onClick={handleStartNewResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-800 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold flex items-center space-x-2"
              >
                <FileText className="w-5 h-5" />
                <span>Start New Resume</span>
              </motion.button>
              <motion.button 
              onClick={handleUploadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-800 px-8 py-3 rounded-full font-semibold flex items-center space-x-2"
              >
                <Upload className="w-5 h-5" />
                <span>Upload Existing</span>
              </motion.button>
            </div>

            {loadingState && <LoadingScreen />}

            {/* Template Selector */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Choose Your Template</h3>
              <div className="space-y-4">
                {resumeTemplates.map((template, index) => (
                  <motion.div
                    key={template.name}
                    onClick={() => setSelectedTemplate(index)}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center space-x-4 p-4 rounded-xl cursor-pointer transition 
                      ${selectedTemplate === index 
                        ? 'bg-white/20 border border-indigo-300' 
                        : 'bg-white/10 hover:bg-white/20'}`}
                  >
                    {template.icon}
                    <div>
                      <h4 className="font-semibold">{template.name}</h4>
                      <p className="text-indigo-100 text-sm">{template.description}</p>
                    </div>
                    {selectedTemplate === index && (
                      <Check className="ml-auto text-indigo-300" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Resume Preview */}
          <div className="flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl transform rotate-6 scale-105 opacity-50 blur-xl"></div>
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full mr-4"></div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                    <p className="text-gray-600">Senior Software Engineer</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Fake Resume Sections */}
                  <div className="bg-gray-100 h-4 rounded w-3/4"></div>
                  <div className="bg-gray-100 h-4 rounded w-full"></div>
                  <div className="bg-gray-100 h-4 rounded w-5/6"></div>

                  <div className="mt-4">
                    <div className="bg-gray-100 h-20 rounded"></div>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span>Professional Template</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIResumeMainPage;