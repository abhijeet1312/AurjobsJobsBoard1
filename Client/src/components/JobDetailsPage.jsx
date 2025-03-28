import React, { useEffect, useRef, useState } from 'react';
import { CalendarDays, MapPin, Building2, Briefcase, Clock, DollarSign, GraduationCap, Laptop2, LogIn, IndianRupee } from 'lucide-react';
import { CheckCircle2, XCircle, X, AlertCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASEURL } from '../utility/config';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import JobDetailsSkeleton from './JobDetailsSkeleton';
import AIMatchingLoader from './AIMatchingLoader';
import { Helmet } from 'react-helmet-async';
// import GoogleAd from './GoogleAd';

const JobDetailsPage = () => {

  const [hasApplied, setHasApplied] = useState(false);
  const [applicationStatusChecked, setApplicationStatusChecked] = useState(false);
  console.log(hasApplied)
  const [appliedDate, setAppliedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isProfileCompeleteModal, setIsCompleteProfileModal] = useState(false);
  const [isAIScreening, setIsAIScreening] = useState(false);
  const [loading, setLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showEligibilityModal, setShowEligibilityModal] = useState(false);
  const [incompleteFields, setIncompleteFields] = useState([]);
  const [candidateScore, setCandidateScore] = useState(null);
  const navigate = useNavigate();
  const { candidateProfile, isAuthenticated } = useSelector((state) => state.candidate);
  console.log(candidateProfile)
  const candidate_id = candidateProfile?.candidate_id;
  const params = useParams()
  // const adRef = useRef(null);
  // const [adsLoaded, setAdsLoaded] = useState(false);






  const skills = candidateProfile?.skills?.map((skill) => skill.candidate_skill).join(', ');
  const formatExperience = (experience) => {
    if (!experience?.candidate_start_date || !experience?.candidate_end_date) {
      return "Experience details not available.";
    }

    // Calculate experience duration
    const start = new Date(experience.candidate_start_date);
    const end = new Date(experience.candidate_end_date);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    const duration = years > 0 ? `${years} years` : "";
    const monthsText = months > 0 ? `${months} months` : "";
    const experienceDuration = [duration, monthsText].filter(Boolean).join(" ");

    // Construct the sentence
    return `${experience.candidate_job_role} at ${experience.candidate_company} for ${experienceDuration}.`;
  }

  const experience = formatExperience(candidateProfile?.experiences[0]);

  const education = candidateProfile?.education?.map((edu) => `${edu.candidate_degree} (${edu.candidate_education_level}) from ${edu.candidate_institute}, Score: ${edu.candidate_score}, ${edu.candidate_start_year}-${edu.candidate_end_year}`).join(', ');




  const [jobDetails, setJobDetails] = useState(null);

  const fetchJobDetails = async (jobId) => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASEURL}/jobs_post/job_details/${jobId}`);

      if (res?.data?.success) {
        setJobDetails(res?.data?.job);
        console.log(res?.data?.job);
      }
    } catch (error) {
      console.error('Error fetching job details:', error);
    } finally {
      setLoading(false);
    }

  }

  // const shouldShowAds = jobDetails?.job_link ? true : false;


  const generateJobStructuredData = () => {
    if (!jobDetails) return null;

    // Parse salary range to get min and max values
    let salaryValue = jobDetails.salary_range;
    if (typeof salaryValue === 'string' && salaryValue.includes('-')) {
      const parts = salaryValue.replace(/[^\d-]/g, '').split('-');
      salaryValue = parts[0]; // Use the minimum salary for structured data
    }

    return {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": jobDetails.job_title,
      "description": jobDetails.job_description,
      "datePosted": jobDetails.posted_at,
      "validThrough": "", // Add an expiry date if available
      "employmentType": jobDetails.employment_type,
      "hiringOrganization": {
        "@type": "Organization",
        "name": jobDetails.company_display_name,
        "logo": jobDetails.company_logo
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": jobDetails.job_location
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "value": salaryValue,
          "unitText": "YEAR"
        }
      },
      "skills": jobDetails.job_skills_required.join(", "),
      "experienceRequirements": {
        "@type": "OccupationalExperienceRequirements",
        "monthsOfExperience": jobDetails.job_experience_required * 12
      },
      "industry": jobDetails.industry,
      "jobBenefits": "", // Add benefits if available
      "workHours": "", // Add work hours if available
      "applicantLocationRequirements": {
        "@type": "Country",
        "name": "IN" // Assuming jobs are in India based on currency
      }
    };
  };






  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };


  const validateProfile = () => {
    const requiredFields = {
      'First Name': candidateProfile?.candidate_first_name,
      'Last Name': candidateProfile?.candidate_last_name,
      'Email': candidateProfile?.candidate_email,
      'Phone': candidateProfile?.candidate_phone,
      // 'Current Role': candidateProfile?.candidate_current_role,
      // 'Availability': candidateProfile?.candidate_availability,
      'Education': candidateProfile?.education?.length > 0,
      'Skills': candidateProfile?.skills?.length > 0,
      'Languages': candidateProfile?.languages?.length > 0,
      // 'Certifications': candidateProfile?.certifications?.length > 0,
      'Addresses': candidateProfile?.addresses?.length > 0,
      'Date of Birth': candidateProfile?.candidate_date_of_birth,
      'Gender': candidateProfile?.candidate_gender,
      // 'Github': candidateProfile?.candidate_github_link,
      'LinkedIn': candidateProfile?.candidate_linkedin_link,
      'Image': candidateProfile?.candidate_image_link,
      'Location': candidateProfile?.candidate_location,
      'Resume': candidateProfile?.candidate_resume_link,
      'Work Preference': candidateProfile?.candidate_work_preference,
    };

    const missing = Object.entries(requiredFields)
      .filter(([_, value]) => !value)
      .map(([field]) => field);

    setIncompleteFields(missing);
    return missing.length === 0;
  };





  const screeningData = {
    candidate: {
      skills: skills || '',
      experience: experience || '0',
      candidateProfile:candidateProfile
    },
    job: {
      requiredSkills: jobDetails?.job_skills_required?.join(', ') || '',
      experienceRequired: jobDetails?.job_experience_required?.toString() || '0',
      jobDescription: jobDetails?.job_description || '',
    }
  };


  const aiScreening = async () => {
    try {
      const res = await axios.post(`http://localhost:3000/match/getJobMatch`,
        screeningData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        }
      );
      if (res?.data?.success) {
        const score = res?.data?.match?.matchScore;
        setCandidateScore(score);
        return score;
      }
      return 0;
    } catch (error) {
      console.error('AI Screening error:', error);
      return 0;
    }
  };

  const handleApply = async () => {


    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }

    const isProfileComplete = validateProfile();
    // const isProfileComplete = false;


    if (!isProfileComplete) {
      setIsCompleteProfileModal(true);
      return;
    }

    const score = await aiScreening();


    // Show AI screening loader
    setIsAIScreening(true);
    setShowEligibilityModal(true);


    // setShowEligibilityModal(true);

    setTimeout(() => {
      setIsAIScreening(false);
    }, 5000); // Adjust timing as needed


    if (score >= 60) {
      try {
        const res = await axios.post(`${BASEURL}/jobs_post/apply_job`, {
          job_id: jobDetails.job_id,
          candidate_id,
          score
        });

        if (res?.data?.success) {
          setIsSubmitted(true);
          setHasApplied(true);
          // setAppliedDate(currentDate);
          setApplicationStatusChecked(true);
          // setShowModal(true);
          // toast.success(res?.data?.message);
        }
      } catch (err) {
        console.log(err);
        toast.error(err?.response?.data?.error);
      }
    }
  };
  const handleEligibilityModalClose = () => {
    setShowEligibilityModal(false);

    // If they were eligible and application was submitted, show success modal
    if (isSubmitted) {
      setShowModal(true);
    }
  };




  const parseJobDescription = (text) => {
    if (!text) return [];

    const sections = text.split(/(?=\|\|\| :)/g);
    return sections.map(section => section.trim()).filter(Boolean);
  };

  const sections = parseJobDescription(jobDetails?.job_description);


  const handleLogin = () => {
    navigate('/candidate_login');
    setShowLoginModal(false);
  };

  const handleSignup = () => {
    navigate('/candidate_register');
    setShowLoginModal(false);
  };

  const handleCompleteProfile = () => {
    navigate('/candidate_dashboard');
    setShowModal(false);
  };


  const checkApplicationStatus = async (jobId, candidateId) => {
    try {
      const res = await axios.get(`${BASEURL}/jobs_post/applied_jobs/${candidate_id}`);

      // console.log(res?.data?.applications)

      if (res?.data?.success) {
        // Check if this specific job is in the user's applied jobs
        const applicationMatch = res?.data?.applications?.find(
          application => application.job_id.toString() === jobId.toString()
        );

        if (applicationMatch) {
          setHasApplied(true);
          setAppliedDate(applicationMatch.applied_at);
        } else {
          setHasApplied(false);
          setAppliedDate(null);
        }
      }

      setApplicationStatusChecked(true);
    } catch (error) {
      console.error('Error checking application status:', error);
      // setHasApplied(false);
      // setAppliedDate(null);
    }
  };

  useEffect(() => {

    const loadJobAndApplicationStatus = async () => {
      await fetchJobDetails(params.jobId);

      if (isAuthenticated && candidate_id) {
        await checkApplicationStatus(params.jobId, candidate_id);
      }
    };

    loadJobAndApplicationStatus();

  }, [params.jobId, candidate_id, isAuthenticated]);






  return (
    <>
      {/* Add Helmet for SEO structured data */}
      {jobDetails && (
        <Helmet>
          <title>{jobDetails?.job_title} | {jobDetails?.company_display_name}</title>
          <meta name="description" content={`${jobDetails?.job_title} job opportunity at ${jobDetails?.company_display_name}. ${jobDetails?.job_experience_required} years experience required. Location: ${jobDetails?.job_location}`} />
          <meta property="og:title" content={`${jobDetails?.job_title} at ${jobDetails?.company_display_name}`} />
          <meta property="og:description" content={jobDetails?.description} />
          <meta property="og:url" content={`http://jobs.aurjobs.com/jobs/${params.jobId}`} />
          <meta name="application-name" content="Aurjobs Job Portal" />

          <meta property="og:site_name" content="Aurjobs Job Portal" />
          <script type="application/ld+json">
            {JSON.stringify(generateJobStructuredData())}
          </script>
        </Helmet>
      )}

      {loading ? (
        <JobDetailsSkeleton />
      ) : (
        <div className="min-h-screen mt-20 bg-gray-50 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            {/* <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col sm:flex-row items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{jobDetails?.job_title}</h1>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      <span>{jobDetails?.company_display_name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{jobDetails?.job_location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IndianRupee className="w-4 h-4" />
                      <span>{jobDetails?.salary_range}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {jobDetails?.employment_type}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {jobDetails?.work_mode}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {jobDetails?.industry}
                    </span>
                  </div>

                  {jobDetails?.job_link && (
                    <div className="block sm:hidden mt-4">
                      <a href={jobDetails?.job_link} target='_blank'>
                        <button
                          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all text-center shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
                        >
                          Apply Now
                        </button>
                      </a>
                    </div>
                  )}
                </div>

                {
                  hasApplied ? (
                    <div className="text-right">
                      <button
                        disabled
                        className="bg-green-500 text-white px-6 py-2 rounded-lg cursor-not-allowed flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        Applied
                      </button>
                      {appliedDate && (
                        <p className="text-sm text-gray-500 mt-2">
                          Applied on {formatDate(appliedDate)}
                        </p>
                      )}
                    </div>
                  ) : (
                    // <button
                    //   onClick={handleApply}
                    //   className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    // >
                    //   Apply Now
                    // </button>

                    jobDetails?.job_link ? (
                      <a href={jobDetails?.job_link} target='_blank'>
                        <div className="hidden sm:block">
                          <a href={jobDetails?.job_link} target='_blank'>
                            <button
                              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all text-center shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
                            >
                              Apply Now
                            </button>
                          </a>
                        </div>

                      </a>
                    ) : (
                      <button
                        onClick={handleApply}
                        className="w-full sm:w-auto max-w-[200px] bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all text-center shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
                      >
                        Apply Now
                      </button>
                    )


                  )
                }
                <AIMatchingLoader
                  isOpen={showEligibilityModal}
                  onClose={handleEligibilityModalClose}
                  score={candidateScore || 0}
                  isLoading={isAIScreening}
                  isSubmitted={isSubmitted}
                />
                <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}>
                  <div className="text-center">
                    <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <LogIn className="w-12 h-12 text-blue-500" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      Login Required
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Please login or create an account to apply for this job.
                    </p>
                    <div className="space-y-3">
                      <button
                        onClick={handleLogin}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                      >
                        Login
                      </button>
                      <button
                        onClick={handleSignup}
                        className="w-full bg-white text-blue-600 border border-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                      >
                        Create Account
                      </button>
                      <button
                        onClick={() => setShowLoginModal(false)}
                        className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Modal>

                <Modal isOpen={isProfileCompeleteModal} onClose={() => setIsCompleteProfileModal(false)}>
                  {!isSubmitted && (


                    <div className="text-center">
                      <div className="bg-red-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <XCircle className="w-12 h-12 text-red-500" />
                      </div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        Complete Your Profile
                      </h2>
                      <p className="text-gray-600 mb-4">
                        Please complete the following information in your profile before applying:
                      </p>
                      <div className="bg-red-50 rounded-lg p-4 mb-6">
                        <ul className="text-left space-y-2">
                          {incompleteFields.map((field, index) => (
                            <li key={index} className="text-red-600 flex items-center space-x-2">
                              <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                              <span>{field}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <button
                          onClick={handleCompleteProfile}
                          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                        >
                          Complete Profile
                        </button>
                        <button
                          onClick={() => setIsCompleteProfileModal(false)}
                          className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </Modal>


              </div>
            </div> */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col sm:flex-row items-start justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                    {/* Company Logo */}
                    <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden shrink-0 mb-2 sm:mb-0">
                      {jobDetails?.company_logo ? (
                        <img
                          src={jobDetails?.company_logo}
                          alt={`${jobDetails?.company_display_name} logo`}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <Building2 className="w-6 h-6 text-gray-400" />
                      )}
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{jobDetails?.job_title}</h1>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      <span>{jobDetails?.company_display_name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{jobDetails?.job_location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IndianRupee className="w-4 h-4" />
                      <span>{jobDetails?.salary_range}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {/* Employment Type Icon */}
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <rect x="8" y="8" width="8" height="8" rx="1" fill="currentColor" />
                      </svg>
                      <span>{jobDetails?.employment_type}</span>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {jobDetails?.work_mode}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {jobDetails?.industry}
                    </span>
                  </div>

                  {jobDetails?.job_link && (
                    <div className="block sm:hidden mt-4">
                      <a href={jobDetails?.job_link} target='_blank'>
                        <button
                          className="w-full cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all text-center shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
                        >
                          Apply Now
                        </button>
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-4 sm:mt-0">
                  {
                    hasApplied ? (
                      <div className="text-right">
                        <button
                          disabled
                          className="bg-green-500 text-white px-6 py-2 rounded-lg cursor-not-allowed flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-5 h-5" />
                          Applied
                        </button>
                        {appliedDate && (
                          <p className="text-sm text-gray-500 mt-2">
                            Applied on {formatDate(appliedDate)}
                          </p>
                        )}
                      </div>
                    ) : (
                      jobDetails?.job_link ? (
                        <div className="hidden sm:block">
                          <a href={jobDetails?.job_link} target='_blank'>
                            <button
                              className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all text-center shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
                            >
                              Apply Now
                            </button>
                          </a>
                        </div>
                      ) : (
                        <button
                          onClick={handleApply}
                          className="w-full sm:w-auto cursor-pointer max-w-[200px] bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all text-center shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
                        >
                          Apply Now
                        </button>
                      )
                    )
                  }
                </div>

                <AIMatchingLoader
                  isOpen={showEligibilityModal}
                  onClose={handleEligibilityModalClose}
                  score={candidateScore || 0}
                  isLoading={isAIScreening}
                  isSubmitted={isSubmitted}
                />
                <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}>
                  <div className="text-center">
                    <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <LogIn className="w-12 h-12 text-blue-500" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      Login Required
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Please login or create an account to apply for this job.
                    </p>
                    <div className="space-y-3">
                      <button
                        onClick={handleLogin}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                      >
                        Login
                      </button>
                      <button
                        onClick={handleSignup}
                        className="w-full bg-white text-blue-600 border border-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                      >
                        Create Account
                      </button>
                      <button
                        onClick={() => setShowLoginModal(false)}
                        className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Modal>

                <Modal isOpen={isProfileCompeleteModal} onClose={() => setIsCompleteProfileModal(false)}>
                  {!isSubmitted && (
                    <div className="text-center">
                      <div className="bg-red-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <XCircle className="w-12 h-12 text-red-500" />
                      </div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        Complete Your Profile
                      </h2>
                      <p className="text-gray-600 mb-4">
                        Please complete the following information in your profile before applying:
                      </p>
                      <div className="bg-red-50 rounded-lg p-4 mb-6">
                        <ul className="text-left space-y-2">
                          {incompleteFields.map((field, index) => (
                            <li key={index} className="text-red-600 flex items-center space-x-2">
                              <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                              <span>{field}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <button
                          onClick={handleCompleteProfile}
                          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                        >
                          Complete Profile
                        </button>
                        <button
                          onClick={() => setIsCompleteProfileModal(false)}
                          className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </Modal>
              </div>
            </div>

            {/* <GoogleAd slot="8506441329" /> */}
           



            {/* Main Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Left Column - Job Details */}
              <div className="col-span-1 sm:col-span-2 space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                  <div className="space-y-8">
                    {sections.map((section, index) => {
                      const [title, ...content] = section.split('\n');
                      return (
                        <div key={index} className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                          {content.map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-gray-600 leading-relaxed">
                              {paragraph.trim()}
                            </p>
                          ))}
                        </div>
                      );
                    })}
                  </div>

                  <h3 className="text-lg font-semibold mt-4 mb-3">Required Skills</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {jobDetails?.job_skills_required.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Additional Info */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Job Overview</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Posted On</p>
                        <p className="text-gray-700">{formatDate(jobDetails?.posted_at)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Experience Required</p>
                        <p className="text-gray-700">{jobDetails?.job_experience_required} years</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Laptop2 className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Work Mode</p>
                        <p className="text-gray-700">{jobDetails?.work_mode}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Company Info</h2>
                  <img
                    src={jobDetails?.company_logo}
                    alt="Company Logo"
                    className="mb-4 rounded"
                  />
                  <p className="text-gray-600 mb-4">
                    {jobDetails?.description}
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Learn more about {jobDetails?.company_display_name}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetailsPage;




const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      {/* Backdrop with blur effect and softer opacity */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content with enhanced animation */}
      <div className="relative bg-white rounded-xl w-full max-w-md mx-4 p-8 shadow-2xl transform transition-all duration-300 ease-out opacity-100 scale-100 translate-y-0">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
};