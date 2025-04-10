import { React, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Handshake,  Github, Linkedin, Globe, Twitter, Plus, Trash2, ChevronUp, ChevronDown, User, Briefcase, GraduationCap, Award, FileText, Settings, Calendar, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Lightbulb, CheckCircle, AlertCircle, ExternalLink, Code, Tag, Search, Link, Star, Download, Eye, Zap, } from 'lucide-react';
import ModernResumePreview from '../ResumeTemplates/ModernResumePreview';
import MinimalistResumePreview from '../ResumeTemplates/MinimalistResumePreview';
import CreativeResumePreview from '../ResumeTemplates/CreativeResumePreview';
import ProfessionalResumePreview from '../ResumeTemplates/ProfessionalResumePreview';
import ClassicResumePreview from '../ResumeTemplates/ClassicResumePreview';
// import { useReactToPrint } from "react-to-print";
import { useNavigate } from 'react-router-dom';



export default function ResumeBuilder() {
    const [expanded, setExpanded] = useState(true);
    const resumeRef = useRef(null);



    const toggleSidebar = () => {
        setExpanded(!expanded);
    };

    const [resumeData, setResumeData] = useState({
        personalInfo: {
            name: "John Doe",
            title: "Full Stack Developer",
            email: "john.doe@example.com",
            phone: "+1 (555) 123-4567",
            location: "San Francisco, CA",
            github: '',
            linkedin: '',
            website: '',
            twitter: '',
            summary: "Experienced software engineer with expertise in React, Node.js, and cloud technologies. Passionate about creating intuitive user experiences and scalable solutions."
        },
        experience: [
            {
                id: 1,
                title: "Senior Frontend Developer",
                company: "Tech Solutions Inc.",
                location: "San Francisco, CA",
                startDate: "2020-01",
                endDate: "Present",
                description: "Led the development of responsive web applications using React and TypeScript. Implemented CI/CD pipelines and optimized performance."
            },
            {
                id: 2,
                title: "Frontend Developer",
                company: "Digital Innovations",
                location: "Boston, MA",
                startDate: "2018-03",
                endDate: "2019-12",
                description: "Developed and maintained multiple client-facing applications. Collaborated with UX designers to implement intuitive interfaces."
            }
        ],
        education: [
            {
                id: 1,
                degree: "Master of Computer Science",
                institution: "Stanford University",
                location: "Stanford, CA",
                startDate: "2016-09",
                endDate: "2018-06",
                description: "Focused on Human-Computer Interaction and Software Engineering."
            },
            {
                id: 2,
                degree: "Bachelor of Science in Computer Science",
                institution: "University of Washington",
                location: "Seattle, WA",
                startDate: "2012-09",
                endDate: "2016-06",
                description: "Dean's List. Major GPA: 3.85/4.0"
            }
        ],
        skills: [  // const [resumeData, setResumeData] = useState({lls: [
            "React", "JavaScript", "TypeScript", "HTML/CSS", "Node.js",
            "Tailwind CSS", "Git", "Jest", "RESTful APIs", "GraphQL",
            "Responsive Design", "UI/UX"
        ],
        projects: [
            {
                id: 1,
                title: "E-commerce Platform",
                description: "Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented user authentication, product catalog, and payment processing.",
                link: "https://github.com/johndoe/ecommerce"
            },
            {
                id: 2,
                title: "Task Management App",
                description: "Developed a real-time task management application with React and Firebase. Features include drag-and-drop interface, task assignments, and notifications.",
                link: "https://github.com/johndoe/taskmanager"
            }
        ],
        certifications: [
            {
                id: 1,
                name: "AWS Certified Developer",
                issuer: "Amazon Web Services",
                date: "2022-05",
                link: "https://aws.amazon.com/certification/"
            },
            {
                id: 2,
                name: "Google Cloud Professional Developer",
                issuer: "Google",
                date: "2021-03",
                link: "https://cloud.google.com/certification"
            }
        ]
    });

    // const [resumeData, setResumeData] = useState({
    //     personalInfo: {
    //         name: "",
    //         title: "",
    //         email: "",
    //         phone: "",
    //         location: "",
    //         github: '',
    //         linkedin: '',
    //         website: '',
    //         twitter: '',
    //         summary: ""
    //     },
    //     experience: [

    //     ],
    //     education: [

    //     ],
    //     skills: [

    //     ],
    //     projects: [

    //     ],
    //     certifications: [

    //     ]
    // });

    const [activeSection, setActiveSection] = useState('all');
    const [theme, setTheme] = useState('modern');
    const [resumePreview, setResumePreview] = useState(false);
    const navigate = useNavigate();


    const handleNavigate = ()=>{
        navigate("/resume_template_selector",{ state: resumeData })
    }

    const addItem = (section) => {
        const newId = Math.max(0, ...resumeData[section].map(item => item.id)) + 1;

        let newItem;
        switch (section) {
            case 'experience':
                newItem = {
                    id: newId,
                    title: "New Position",
                    company: "Company Name",
                    location: "Location",
                    startDate: "",
                    endDate: "",
                    description: "Description of your responsibilities and achievements."
                };
                break;
            case 'education':
                newItem = {
                    id: newId,
                    degree: "New Degree",
                    institution: "Institution Name",
                    location: "Location",
                    startDate: "",
                    endDate: "",
                    description: "Description of your studies and achievements."
                };
                break;
            case 'projects':
                newItem = {
                    id: newId,
                    title: "New Project",
                    description: "Description of your project.",
                    link: ""
                };
                break;
            case 'certifications':
                newItem = {
                    id: newId,
                    name: "New Certification",
                    issuer: "Issuer",
                    date: "",
                    link: ""
                };
                break;
            default:
                newItem = { id: newId };
        }

        setResumeData({
            ...resumeData,
            [section]: [...resumeData[section], newItem]
        });
    };

    const removeItem = (section, id) => {
        setResumeData({
            ...resumeData,
            [section]: resumeData[section].filter(item => item.id !== id)
        });
    };

    const updatePersonalInfo = (field, value) => {
        setResumeData(prevData => ({
            ...prevData,
            personalInfo: {
                ...prevData.personalInfo,
                [field]: value
            }
        }));
    };

    const updateItem = (section, id, field, value) => {
        setResumeData(prevData => ({
            ...prevData,
            [section]: prevData[section].map(item =>
                item.id === id ? { ...item, [field]: value } : item
            )
        }));
    };

    const addSkill = (skill) => {
        if (skill && !resumeData.skills.includes(skill)) {
            setResumeData({
                ...resumeData,
                skills: [...resumeData.skills, skill]
            });
        }
    };

    const removeSkill = (skill) => {
        setResumeData({
            ...resumeData,
            skills: resumeData.skills.filter(s => s !== skill)
        });
    };

    const SkillsSection = () => {
        const [newSkill, setNewSkill] = useState('');
        const [skillCategory, setSkillCategory] = useState('');

        const handleAddSkill = () => {
            if (newSkill.trim()) {
                addSkill(newSkill.trim());
                setNewSkill('');
            }
        };

        // Common skill categories for suggestions
        const skillCategories = [
            "Technical", "Soft Skills", "Languages", "Tools", "Frameworks", "Design"
        ];

        // Group skills by category if available
        const groupedSkills = resumeData.skills.reduce((acc, skill) => {
            const category = skill.category || "Other";
            if (!acc[category]) acc[category] = [];
            acc[category].push(skill);
            return acc;
        }, {});

        return (
            <div className="p-6">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 flex items-center">
                        <Tag className="mr-2" size={20} />
                        Professional Skills
                    </h2>

                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                        <div className="mb-5">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    value={newSkill}
                                    onChange={(e) => setNewSkill(e.target.value)}
                                    placeholder="Add a skill (e.g., JavaScript, Project Management, Photoshop)..."
                                    className="w-full pl-10 pr-16 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all"
                                    onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                                />
                                <button
                                    onClick={handleAddSkill}
                                    className="absolute inset-y-0 right-0 px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors flex items-center"
                                >
                                    <Plus size={18} className="mr-1" />
                                    Add
                                </button>
                            </div>

                            {skillCategories.length > 0 && (
                                <div className="mt-3">
                                    <p className="text-sm text-gray-600 mb-2">Popular categories:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {skillCategories.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => setSkillCategory(category)}
                                                className={`text-xs px-3 py-1 rounded-full transition-colors ${skillCategory === category
                                                    ? 'bg-blue-100 text-blue-700 border border-blue-300'
                                                    : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {resumeData.skills.length > 0 ? (
                            <div className="mt-5">
                                <h3 className="font-medium text-gray-800 mb-3">Your Skills ({resumeData.skills.length})</h3>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-2 rounded-full border border-blue-200 flex items-center group hover:shadow-sm transition-all"
                                        >
                                            <span className="mr-2 text-gray-800">{skill}</span>
                                            <button
                                                onClick={() => removeSkill(skill)}
                                                className="text-gray-400 opacity-50 group-hover:opacity-100 hover:text-red-500 transition-all rounded-full p-1 hover:bg-white"
                                                aria-label="Remove skill"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
                                <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-3">
                                    <Tag size={24} />
                                </div>
                                <h3 className="text-lg font-medium text-gray-800 mb-1">No Skills Added Yet</h3>
                                <p className="text-gray-600 max-w-md mx-auto mb-4">
                                    Add relevant skills to showcase your professional expertise. Employers often scan this section first!
                                </p>
                                <p className="text-sm text-gray-500 mb-2">Try adding skills like:</p>
                                <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                                    {["JavaScript", "Communication", "Project Management", "Adobe Photoshop", "Data Analysis"].map(
                                        (suggestion) => (
                                            <button
                                                key={suggestion}
                                                onClick={() => {
                                                    addSkill(suggestion);
                                                }}
                                                className="text-xs bg-white px-3 py-1 rounded-full border border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                                            >
                                                + {suggestion}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        )}

                        {resumeData.skills.length > 0 && (
                            <div className="mt-5 pt-5 border-t border-gray-200">
                                <p className="text-sm text-gray-600 italic">
                                    Pro tip: List your most relevant skills first. Include a mix of technical and soft skills.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };



    const ResumePreview = () => {
        if (theme === 'modern') {
            return <ModernResumePreview resumeData={resumeData} />;
        } else if (theme === 'minimalist') {
            return <MinimalistResumePreview resumeData={resumeData} />;
        } else if (theme === 'classic') {
            return <ClassicResumePreview resumeData={resumeData} />;
        } else if (theme === 'creative') {
            return <CreativeResumePreview resumeData={resumeData} />
        } else if (theme === 'professional') {
            return <ProfessionalResumePreview resumeData={resumeData} />
        } else {
            // Default to modern theme
            return <ModernResumePreview resumeData={resumeData} />;
        }
    };

    // const handlePrintPDF = useReactToPrint({
    //     content: () => resumeRef.current,
    //     documentTitle: `${resumeData?.personalInfo?.name || 'My'}_Resume`,
        
    //     onAfterPrint: () => console.log('Resume PDF generated!'),
    // });




    const SectionSelector = ({ section, title, icon: Icon }) => {
        return (
            <button
                onClick={() => setActiveSection(section)}
                className={`flex items-center w-full px-4 py-3 mb-1 text-left transition-colors rounded-xl ${activeSection === section
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-white hover:bg-indigo-600"
                    } ${expanded ? "" : "justify-center"}`}
            >
                {/* Force the icon to render with explicit color and size */}
                <div className={activeSection === section ? "text-indigo-600" : "text-white"}>
                    <Icon size={18} />
                </div>

                {expanded && <span className="font-medium ml-3">{title}</span>}
            </button>
        );
    };

    return (


        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">

            {/* Control Bar */}
            <div className="bg-white shadow-sm border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center space-x-4">
                            <div>
                                <label htmlFor="theme-selector" className="block text-xs font-medium text-gray-500 mb-1">
                                    Template
                                </label>
                                <div className="relative">
                                    <select
                                        id="theme-selector"
                                        value={theme}
                                        onChange={(e) => setTheme(e.target.value)}
                                        className="block w-full pl-3 pr-10 py-2 text-sm border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
                                    >
                                        <option value="modern">Modern</option>
                                        <option value="minimalist">Minimalist</option>
                                        <option value="classic">Classic</option>
                                        <option value="creative">Creative</option>
                                        <option value="professional">Professional</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                        <ChevronDown size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex space-x-3">
                            <button
                                onClick={() => setResumePreview(!resumePreview)}
                                className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
                            >
                                Full Resume Preview
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content - Full width with no padding */}
            {
                !resumePreview ? <main className="w-full pr-4 bg-gradient-to-r from-blue-100 to-white ">
                    <div className="flex flex-col lg:flex-row">
                        {/* Sidebar - No margin, no padding */}

                        <div className={`mr-2  flex-shrink-0  transition-all duration-300 ${expanded ? "w-full lg:w-64" : "w-16"}`}>
                            <div className="bg-gradient-to-r from-indigo-900 to-purple-800 p-4 shadow-sm overflow-hidden border-r rounded-r-4xl border-gray-200 h-auto top-12 relative">
                                <div className="flex justify-end mb-2">
                                    <button
                                        onClick={toggleSidebar}
                                        className="p-1 rounded-md hover:bg-indigo-700 text-white absolute top-2 right-2"
                                    >
                                        {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                                    </button>
                                </div>

                                <nav className="py-2">
                                    <SectionSelector section="all" title="Welcome" icon={Handshake} />
                                    <SectionSelector section="personal" title="Personal Info" icon={User} />
                                    <SectionSelector section="experience" title="Experience" icon={Briefcase} />
                                    <SectionSelector section="education" title="Education" icon={GraduationCap} />
                                    <SectionSelector section="skills" title="Skills" icon={Award} />
                                    <SectionSelector section="projects" title="Projects" icon={FileText} />
                                    <SectionSelector section="certifications" title="Certifications" icon={Award} />
                                </nav>

                                {expanded && (
                                    <div className="px-4 py-3 bg-indigo-50 rounded-2xl border-t border-indigo-100 mt-2">
                                        <h3 className="text-sm font-medium text-indigo-800 mb-2">Pro Tip</h3>
                                        <p className="text-xs text-yellow-500">
                                            Customize each section to highlight your strengths and achievements relevant to the job you're targeting.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Form and Preview - No margins/padding between components */}
                        <div className="flex-grow flex flex-col lg:flex-row">
                            {/* Form Section */}
                            <div className="w-full  lg:w-1/2">

                                <div className="bg-white rounded-2xl mt-6  shadow-sm border-r border-t border-b border-gray-200 h-auto">
                                    {/* {renderActiveSection()} */}

                                    {
                                        activeSection === 'all' && (
                                            <div className="bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 rounded-lg overflow-hidden shadow-xl">
                                                <div className="p-8 text-white">
                                                    <h2 className="text-3xl font-bold mb-4">Create Your Professional Resume</h2>
                                                    <p className="text-lg opacity-90 mb-8">Stand out with a beautifully designed resume that showcases your skills and experience</p>

                                                    {/* Feature cards */}
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                                        <div className="bg-blue-500 bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                                                            <div className="flex items-center mb-3">
                                                                <Zap className="text-yellow-300 mr-2" size={20} />
                                                                <h3 className="font-semibold">Easy to Use</h3>
                                                            </div>
                                                            <p className="text-sm opacity-90">Create a professional resume in minutes with our intuitive builder</p>
                                                        </div>

                                                        <div className="bg-blue-500 bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                                                            <div className="flex items-center mb-3">
                                                                <Eye className="text-yellow-300 mr-2" size={20} />
                                                                <h3 className="font-semibold">ATS Optimized</h3>
                                                            </div>
                                                            <p className="text-sm opacity-90">Engineered to pass Applicant Tracking Systems and reach human recruiters</p>
                                                        </div>

                                                        <div className="bg-blue-500 bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                                                            <div className="flex items-center mb-3">
                                                                <Download className="text-yellow-300 mr-2" size={20} />
                                                                <h3 className="font-semibold">Export Options</h3>
                                                            </div>
                                                            <p className="text-sm opacity-90">Download your resume as PDF, DOCX, or share online with a custom link</p>
                                                        </div>
                                                    </div>

                                                    {/* Template Selection Teaser */}
                                                    <div className="flex items-center justify-between bg-blue-500 bg-opacity-5 rounded-lg p-4">
                                                        <div>
                                                            <div className="flex items-center mb-2">
                                                                <Star className="text-yellow-300 mr-2" size={20} />
                                                                <h3 className="font-semibold">Multiple Professional Templates</h3>
                                                            </div>
                                                            <p className="text-sm opacity-90">Choose from various styles to match your industry and personality</p>
                                                        </div>

                                                        <div className="flex space-x-2">
                                                            {[1, 2, 3].map(i => (
                                                                <div key={i} className={`h-12 w-8 rounded ${i === 1 ? 'bg-blue-500 bg-opacity-30 ring-2 ring-white' : 'bg-white bg-opacity-10'}`}></div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                    {activeSection === 'personal' &&

                                        <div className="p-8">
                                            {/* Main Form Content */}
                                            <div className="mb-8">
                                                <div className="flex items-center mb-4">
                                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                                                        <User size={16} />
                                                    </div>
                                                    <h2 className="text-2xl font-bold text-[#2b2d2f]">Personal Information</h2>
                                                </div>

                                                {/* Main Info */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                    <div className="space-y-4">
                                                        <div className="relative group">
                                                            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Full Name</label>
                                                            <div className="relative">
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                                                                    <User size={18} />
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    value={resumeData.personalInfo.name}
                                                                    onChange={(e) => updatePersonalInfo('name', e.target.value)}
                                                                    className="w-full pl-10 p-3 border-2 border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-200 hover:border-blue-300"
                                                                    placeholder="John Doe"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="relative group">
                                                            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Professional Title</label>
                                                            <div className="relative">
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                                                                    <FileText size={18} />
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    value={resumeData.personalInfo.title}
                                                                    onChange={(e) => updatePersonalInfo('title', e.target.value)}
                                                                    className="w-full pl-10 p-3 border-2 border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-200 hover:border-blue-300"
                                                                    placeholder="Software Engineer"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-4">
                                                        <div className="relative group">
                                                            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Email</label>
                                                            <div className="relative">
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                                                                    <Mail size={18} />
                                                                </span>
                                                                <input
                                                                    type="email"
                                                                    value={resumeData.personalInfo.email}
                                                                    onChange={(e) => updatePersonalInfo('email', e.target.value)}
                                                                    className="w-full pl-10 p-3 border-2 border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-200 hover:border-blue-300"
                                                                    placeholder="john.doe@example.com"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="relative group">
                                                            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Phone</label>
                                                            <div className="relative">
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                                                                    <Phone size={18} />
                                                                </span>
                                                                <input
                                                                    type="tel"
                                                                    value={resumeData.personalInfo.phone}
                                                                    onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                                                                    className="w-full pl-10 p-3 border-2 border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-200 hover:border-blue-300"
                                                                    placeholder="(123) 456-7890"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Location */}
                                                <div className="mb-6">
                                                    <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Location</label>
                                                    <div className="relative">
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                                                            <MapPin size={18} />
                                                        </span>
                                                        <input
                                                            type="text"
                                                            value={resumeData.personalInfo.location}
                                                            onChange={(e) => updatePersonalInfo('location', e.target.value)}
                                                            className="w-full pl-10 p-3 border-2 border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-200 hover:border-blue-300"
                                                            placeholder="San Francisco, CA"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Social Profiles */}
                                            <div className="mb-8">
                                                <div className="flex items-center mb-4">
                                                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                                                        <Globe size={16} />
                                                    </div>
                                                    <h2 className="text-2xl font-bold text-gray-800">Social Profiles</h2>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="relative group shadow-sm hover:shadow-md transition-shadow rounded-lg overflow-hidden">
                                                        <label className="block text-sm font-medium text-gray-700 p-2 bg-gray-50 border-b">GitHub</label>
                                                        <div className="relative">
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                                                <Github size={18} className="text-purple-500" />
                                                            </span>
                                                            <input
                                                                type="text"
                                                                value={resumeData.personalInfo.github}
                                                                onChange={(e) => updatePersonalInfo('github', e.target.value)}
                                                                className="w-full pl-10 p-3 border-0 focus:ring-purple-500 bg-white"
                                                                placeholder="github.com/johndoe"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="relative group shadow-sm hover:shadow-md transition-shadow rounded-lg overflow-hidden">
                                                        <label className="block text-sm font-medium text-gray-700 p-2 bg-gray-50 border-b">LinkedIn</label>
                                                        <div className="relative">
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                                                <Linkedin size={18} className="text-purple-500" />
                                                            </span>
                                                            <input
                                                                type="text"
                                                                value={resumeData.personalInfo.linkedin}
                                                                onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                                                                className="w-full pl-10 p-3 border-0 focus:ring-purple-500 bg-white"
                                                                placeholder="linkedin.com/in/johndoe"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="relative group shadow-sm hover:shadow-md transition-shadow rounded-lg overflow-hidden">
                                                        <label className="block text-sm font-medium text-gray-700 p-2 bg-gray-50 border-b">Personal Website</label>
                                                        <div className="relative">
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                                                <Globe size={18} className="text-purple-500" />
                                                            </span>
                                                            <input
                                                                type="text"
                                                                value={resumeData.personalInfo.website}
                                                                onChange={(e) => updatePersonalInfo('website', e.target.value)}
                                                                className="w-full pl-10 p-3 border-0 focus:ring-purple-500 bg-white"
                                                                placeholder="johndoe.com"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="relative group shadow-sm hover:shadow-md transition-shadow rounded-lg overflow-hidden">
                                                        <label className="block text-sm font-medium text-gray-700 p-2 bg-gray-50 border-b">Twitter</label>
                                                        <div className="relative">
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                                                <Twitter size={18} className="text-purple-500" />
                                                            </span>
                                                            <input
                                                                type="text"
                                                                value={resumeData.personalInfo.twitter}
                                                                onChange={(e) => updatePersonalInfo('twitter', e.target.value)}
                                                                className="w-full pl-10 p-3 border-0 focus:ring-purple-500 bg-white"
                                                                placeholder="twitter.com/johndoe"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Professional Summary */}
                                            <div className="mb-8">
                                                <div className="flex items-center mb-4">
                                                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                                                        <FileText size={16} />
                                                    </div>
                                                    <h2 className="text-2xl font-bold text-gray-800">Professional Summary</h2>
                                                </div>

                                                <div className="bg-white shadow-md rounded-lg p-1">
                                                    <textarea
                                                        value={resumeData.personalInfo.summary}
                                                        onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                                                        className="w-full p-4 border-0 focus:ring-green-500 bg-white rounded-lg h-32"
                                                        placeholder="Experienced software engineer with 5+ years of experience in developing scalable web applications..."
                                                    />
                                                </div>
                                                <p className="text-sm text-gray-500 mt-2 ml-2">A compelling summary will help you stand out. Keep it concise and impactful.</p>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex justify-end space-x-4 mt-8">
                                                <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                                                    Cancel
                                                </button>
                                                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors font-medium shadow-md hover:shadow-lg">
                                                    Save Profile
                                                </button>
                                            </div>
                                        </div>


                                    }
                                    {activeSection === 'experience' &&

                                        <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl ">
                                            <div className="mb-8">
                                                <h1 className="text-4xl text-indigo-900 font-bold mb-3">Experience</h1>
                                                <p className="text-gray-600 text-lg">This is going to be easy, we promise! Let's start with your most recent job.</p>
                                            </div>

                                            <div className="space-y-6">
                                                {resumeData.experience.map((exp) => (
                                                    <div
                                                        key={exp.id}
                                                        className="border border-indigo-100 rounded-xl p-6 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                                                    >
                                                        <div className="flex justify-between items-start mb-4">
                                                            <h3 className="font-medium text-lg text-indigo-800">
                                                                {exp.title ? `${exp.title} at ${exp.company}` : 'New Experience'}
                                                            </h3>
                                                            <button
                                                                onClick={() => removeItem('experience', exp.id)}
                                                                className="text-red-400 hover:text-red-600 transition-colors duration-200 bg-red-50 p-2 rounded-full"
                                                            >
                                                                <Trash2 size={18} />
                                                            </button>
                                                        </div>

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                            <div>
                                                                <label className="block text-sm font-medium text-indigo-700 mb-2">Job Title</label>
                                                                <input
                                                                    type="text"
                                                                    value={exp.title}
                                                                    onChange={(e) => updateItem('experience', exp.id, 'title', e.target.value)}
                                                                    className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200"
                                                                    placeholder="e.g. Marketing Manager"
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-sm font-medium text-indigo-700 mb-2">Company</label>
                                                                <input
                                                                    type="text"
                                                                    value={exp.company}
                                                                    onChange={(e) => updateItem('experience', exp.id, 'company', e.target.value)}
                                                                    className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200"
                                                                    placeholder="e.g. Apple Inc."
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                                            <div>
                                                                <label className="block text-sm font-medium text-indigo-700 mb-2">Location</label>
                                                                <input
                                                                    type="text"
                                                                    value={exp.location}
                                                                    onChange={(e) => updateItem('experience', exp.id, 'location', e.target.value)}
                                                                    className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200"
                                                                    placeholder="e.g. New York, NY"
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-sm font-medium text-indigo-700 mb-2">Start Date</label>
                                                                <input
                                                                    type="month"
                                                                    value={exp.startDate}
                                                                    onChange={(e) => updateItem('experience', exp.id, 'startDate', e.target.value)}
                                                                    className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200"
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-sm font-medium text-indigo-700 mb-2">End Date</label>
                                                                <div className="relative">
                                                                    <input
                                                                        type="month"
                                                                        value={exp.endDate}
                                                                        onChange={(e) => updateItem('experience', exp.id, 'endDate', e.target.value)}
                                                                        className={`w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200 ${exp.currentlyWorking ? 'opacity-50' : ''}`}
                                                                        disabled={exp.currentlyWorking}
                                                                    />
                                                                    {exp.currentlyWorking && (
                                                                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-500 font-medium">
                                                                            Present
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mb-6">
                                                            <label className="flex items-center text-sm font-medium text-indigo-700">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={exp.currentlyWorking}
                                                                    onChange={(e) => toggleCurrentlyWorking(exp.id, e.target.checked)}
                                                                    className="mr-2 h-5 w-5 text-indigo-600 rounded border-indigo-300 focus:ring-indigo-500"
                                                                />
                                                                I currently work here
                                                            </label>
                                                        </div>

                                                        <div>
                                                            <label className="block text-sm font-medium text-indigo-700 mb-2">Description</label>
                                                            <div className="relative">
                                                                <textarea
                                                                    value={exp.description}
                                                                    onChange={(e) => updateItem('experience', exp.id, 'description', e.target.value)}
                                                                    className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200 h-32 resize-none"
                                                                    placeholder="Describe your responsibilities and achievements..."
                                                                />
                                                                <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                                                                    {exp.description.length} / 2000
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}

                                                <button
                                                    onClick={() => addItem('experience')}
                                                    className="flex items-center text-indigo-600 hover:text-indigo-800 bg-indigo-50 py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:bg-indigo-100"
                                                >
                                                    <Plus size={20} className="mr-2" /> Add Another Experience
                                                </button>
                                            </div>

                                            <div className="flex justify-between mt-10">
                                                <button className="px-8 py-3 bg-white text-indigo-700 border border-indigo-200 rounded-xl hover:bg-indigo-50 transition-colors duration-200 font-medium flex items-center">
                                                    <ArrowLeft size={18} className="mr-2" /> Back
                                                </button>
                                                <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors duration-200 font-medium flex items-center shadow-sm">
                                                    Continue <ArrowRight size={18} className="ml-2" />
                                                </button>
                                            </div>

                                            <div className="mt-10 p-6 bg-white border border-indigo-100 rounded-xl shadow-sm">
                                                <h3 className="text-lg font-medium text-indigo-800 mb-4 flex items-center">
                                                    <Lightbulb size={20} className="text-yellow-500 mr-2" /> Experience Tips
                                                </h3>
                                                <ul className="space-y-4">
                                                    <li className="flex">
                                                        <div className="text-yellow-500 mr-3 mt-1">
                                                            <CheckCircle size={16} />
                                                        </div>
                                                        <p className="text-gray-700">Highlight experience relevant to the position you want or are applying for.</p>
                                                    </li>
                                                    <li className="flex">
                                                        <div className="text-yellow-500 mr-3 mt-1">
                                                            <CheckCircle size={16} />
                                                        </div>
                                                        <p className="text-gray-700">Use keywords from the job listing. This will help you get past screening software used by hiring departments.</p>
                                                    </li>
                                                    <li className="flex">
                                                        <div className="text-yellow-500 mr-3 mt-1">
                                                            <CheckCircle size={16} />
                                                        </div>
                                                        <p className="text-gray-700">Our pre-written bullet points give you an idea of what responsibilities to list.</p>
                                                    </li>
                                                </ul>
                                                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-100 rounded-lg flex items-start">
                                                    <div className="text-yellow-600 mr-3 mt-1">
                                                        <AlertCircle size={16} />
                                                    </div>
                                                    <p className="text-sm text-gray-700">Pro tip: List your achievements with quantifiable results rather than just responsibilities. For example, "Increased sales by 20%" is more impactful than "Responsible for sales."</p>
                                                </div>
                                            </div>
                                        </div>

                                    }
                                    {activeSection === 'education' &&



                                        <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-sm">
                                            <div className="mb-8">
                                                <h1 className="text-4xl text-indigo-900 font-bold mb-3">Education</h1>
                                                <p className="text-gray-600 text-lg mb-2">Tell us about your educational background to showcase your academic achievements.</p>
                                                <div className="space-y-6">
                                                    {resumeData.education.map((edu) => (
                                                        <div
                                                            key={edu.id}
                                                            className="border border-indigo-100 rounded-xl p-6 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                                                        >
                                                            <div className="flex justify-between items-start mb-4">
                                                                <div>
                                                                    <h3 className="font-medium text-lg text-indigo-800">
                                                                        {edu.degree && edu.institution ? `${edu.degree} at ${edu.institution}` : 'New Education'}
                                                                    </h3>
                                                                    {edu.startDate && edu.endDate && (
                                                                        <p className="text-gray-500 text-sm mt-1">{edu.startDate} - {edu.endDate}</p>
                                                                    )}
                                                                </div>
                                                                <button
                                                                    onClick={() => removeItem('education', edu.id)}
                                                                    className="text-red-400 hover:text-red-600 transition-colors duration-200 bg-red-50 p-2 rounded-full"
                                                                >
                                                                    <Trash2 size={18} />
                                                                </button>
                                                            </div>

                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                                <div>
                                                                    <label className="block text-sm font-medium text-indigo-700 mb-2">Degree</label>
                                                                    <input
                                                                        type="text"
                                                                        value={edu.degree}
                                                                        onChange={(e) => updateItem('education', edu.id, 'degree', e.target.value)}
                                                                        className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200"
                                                                        placeholder="e.g. Bachelor of Science"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label className="block text-sm font-medium text-indigo-700 mb-2">Institution</label>
                                                                    <input
                                                                        type="text"
                                                                        value={edu.institution}
                                                                        onChange={(e) => updateItem('education', edu.id, 'institution', e.target.value)}
                                                                        className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200"
                                                                        placeholder="e.g. Stanford University"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                                                <div>
                                                                    <label className="block text-sm font-medium text-indigo-700 mb-2">Location</label>
                                                                    <input
                                                                        type="text"
                                                                        value={edu.location}
                                                                        onChange={(e) => updateItem('education', edu.id, 'location', e.target.value)}
                                                                        className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200"
                                                                        placeholder="e.g. Stanford, CA"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label className="block text-sm font-medium text-indigo-700 mb-2">Start Date</label>
                                                                    <input
                                                                        type="month"
                                                                        value={edu.startDate}
                                                                        onChange={(e) => updateItem('education', edu.id, 'startDate', e.target.value)}
                                                                        className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label className="block text-sm font-medium text-indigo-700 mb-2">End Date</label>
                                                                    <input
                                                                        type="month"
                                                                        value={edu.endDate}
                                                                        onChange={(e) => updateItem('education', edu.id, 'endDate', e.target.value)}
                                                                        className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="mb-2">
                                                                <div className="flex justify-between">
                                                                    <label className="block text-sm font-medium text-indigo-700 mb-2">Description</label>
                                                                    <span className="text-xs text-gray-500">{edu.description.length} / 1000</span>
                                                                </div>
                                                                <textarea
                                                                    value={edu.description}
                                                                    onChange={(e) => updateItem('education', edu.id, 'description', e.target.value)}
                                                                    className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200 h-32 resize-none"
                                                                    placeholder="Include relevant coursework, honors, awards, GPA (if above 3.5), research, etc."
                                                                />
                                                            </div>

                                                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                <div>
                                                                    <label className="block text-sm font-medium text-indigo-700 mb-2">Field of Study</label>
                                                                    <input
                                                                        type="text"
                                                                        value={edu.fieldOfStudy || ''}
                                                                        onChange={(e) => updateItem('education', edu.id, 'fieldOfStudy', e.target.value)}
                                                                        className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200"
                                                                        placeholder="e.g. Computer Science"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label className="block text-sm font-medium text-indigo-700 mb-2">GPA <span className="text-gray-500 text-xs">(optional)</span></label>
                                                                    <input
                                                                        type="text"
                                                                        value={edu.gpa || ''}
                                                                        onChange={(e) => updateItem('education', edu.id, 'gpa', e.target.value)}
                                                                        className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200"
                                                                        placeholder="e.g. 3.8/4.0"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}

                                                    <button
                                                        onClick={() => addItem('education')}
                                                        className="flex items-center text-indigo-600 hover:text-indigo-800 bg-indigo-50 py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:bg-indigo-100"
                                                    >
                                                        <Plus size={20} className="mr-2" /> Add Another Education
                                                    </button>

                                                    <div className="mt-6 p-6 bg-white border border-indigo-100 rounded-xl shadow-sm">
                                                        <h3 className="text-lg font-medium text-indigo-800 mb-4 flex items-center">
                                                            <GraduationCap size={20} className="text-indigo-500 mr-2" /> Education Tips
                                                        </h3>
                                                        <ul className="space-y-3">
                                                            <li className="flex">
                                                                <div className="text-indigo-500 mr-3 mt-1">
                                                                    <CheckCircle size={16} />
                                                                </div>
                                                                <p className="text-gray-700">List your highest level of education first, followed by others in reverse chronological order.</p>
                                                            </li>
                                                            <li className="flex">
                                                                <div className="text-indigo-500 mr-3 mt-1">
                                                                    <CheckCircle size={16} />
                                                                </div>
                                                                <p className="text-gray-700">Include your GPA if it's 3.5 or higher (on a 4.0 scale).</p>
                                                            </li>
                                                            <li className="flex">
                                                                <div className="text-indigo-500 mr-3 mt-1">
                                                                    <CheckCircle size={16} />
                                                                </div>
                                                                <p className="text-gray-700">Mention relevant coursework, academic achievements, and extracurricular activities.</p>
                                                            </li>
                                                        </ul>
                                                        <div className="mt-4 p-3 bg-indigo-50 border border-indigo-100 rounded-lg flex items-start">
                                                            <div className="text-indigo-600 mr-3 mt-1">
                                                                <AlertCircle size={16} />
                                                            </div>
                                                            <p className="text-sm text-gray-700">Pro tip: If you're a recent graduate with limited work experience, place your education section before your work experience on your resume.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                    {activeSection === 'skills' && <SkillsSection />}
                                    {activeSection === 'certifications' &&


                                        <div className="p-6">
                                            {resumeData.certifications.length > 0 && (
                                                <div className="mb-8 ">
                                                    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Certifications</h2>
                                                    <div className="space-y-4">
                                                        {resumeData.certifications.map((cert) => (
                                                            <div key={cert.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                                                                <div className="flex justify-between items-start mb-3">
                                                                    <div className="flex-1">
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Certification Name"
                                                                            value={cert.name}
                                                                            onChange={(e) => updateItem('certifications', cert.id, 'name', e.target.value)}
                                                                            className="w-full text-lg font-medium text-gray-800 p-2 border-0 focus:ring-2 focus:ring-blue-300 rounded focus:outline-none"
                                                                        />
                                                                    </div>
                                                                    <button
                                                                        onClick={() => removeItem('certifications', cert.id)}
                                                                        className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-100"
                                                                        aria-label="Remove certification"
                                                                    >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                                        </svg>
                                                                    </button>
                                                                </div>

                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                    <div>
                                                                        <label className="block text-sm font-medium text-gray-600 mb-1">Issuing Organization</label>
                                                                        <input
                                                                            type="text"
                                                                            placeholder="e.g. Microsoft, Google, AWS"
                                                                            value={cert.issuer}
                                                                            onChange={(e) => updateItem('certifications', cert.id, 'issuer', e.target.value)}
                                                                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                                                                        />
                                                                    </div>

                                                                    <div>
                                                                        <label className="block text-sm font-medium text-gray-600 mb-1">Date Received</label>
                                                                        <input
                                                                            type="text"
                                                                            placeholder="e.g. June 2023"
                                                                            value={cert.date}
                                                                            onChange={(e) => updateItem('certifications', cert.id, 'date', e.target.value)}
                                                                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="mt-3">
                                                                    <label className="block text-sm font-medium text-gray-600 mb-1">Credential URL</label>
                                                                    <div className="flex items-center">
                                                                        <div className="bg-gray-100 p-2 rounded-l-lg border border-gray-300 border-r-0">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                                                                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                                                            </svg>
                                                                        </div>
                                                                        <input
                                                                            type="text"
                                                                            placeholder="https://credential-url.com/verify/..."
                                                                            value={cert.link}
                                                                            onChange={(e) => updateItem('certifications', cert.id, 'link', e.target.value)}
                                                                            className="w-full p-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <button
                                                        onClick={() => addItem('certifications')}
                                                        className="mt-4 flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors shadow-sm"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                                        </svg>
                                                        Add New Certification
                                                    </button>
                                                </div>
                                            )}

                                            {resumeData.certifications.length === 0 && (
                                                <div className="mb-8">
                                                    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Certifications</h2>
                                                    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                                        <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                        <h3 className="text-lg font-medium text-gray-800 mb-2">No Certifications Added</h3>
                                                        <p className="text-gray-600 mb-4">Showcase your professional certifications to stand out from other candidates.</p>
                                                        <button
                                                            onClick={() => addItem('certifications')}
                                                            className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors shadow-sm"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                                            </svg>
                                                            Add Your First Certification
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            <button onClick={handleNavigate} className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors shadow-sm">Save & Continue</button>
                                        </div>
                                    }
                                    {activeSection === 'projects' &&

                                        <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-sm">
                                            <div className="mb-8">
                                                <h1 className="text-4xl text-indigo-900 font-bold mb-3">Projects</h1>
                                                <p className="text-gray-600 text-lg">Showcase your best work and demonstrate your skills with relevant projects.</p>
                                            </div>

                                            <div className="space-y-6">
                                                {resumeData.projects.map((project) => (
                                                    <div
                                                        key={project.id}
                                                        className="border border-indigo-100 rounded-xl p-6 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                                                    >
                                                        <div className="flex justify-between items-start mb-4">
                                                            <div>
                                                                <h3 className="font-medium text-lg text-indigo-800">
                                                                    {project.title || 'New Project'}
                                                                </h3>
                                                                {project.link && (
                                                                    <a
                                                                        href={project.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-indigo-500 text-sm mt-1 flex items-center hover:text-indigo-700 transition-colors"
                                                                    >
                                                                        <ExternalLink size={14} className="mr-1" /> {project.link.replace(/^https?:\/\//, '')}
                                                                    </a>
                                                                )}
                                                            </div>
                                                            <button
                                                                onClick={() => removeItem('projects', project.id)}
                                                                className="text-red-400 hover:text-red-600 transition-colors duration-200 bg-red-50 p-2 rounded-full"
                                                            >
                                                                <Trash2 size={18} />
                                                            </button>
                                                        </div>

                                                        <div className="mb-6">
                                                            <label className="block text-sm font-medium text-indigo-700 mb-2">Project Title</label>
                                                            <input
                                                                type="text"
                                                                value={project.title}
                                                                onChange={(e) => updateItem('projects', project.id, 'title', e.target.value)}
                                                                className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200"
                                                                placeholder="e.g. E-commerce Website Redesign"
                                                            />
                                                        </div>

                                                        <div className="mb-6">
                                                            <div className="flex justify-between">
                                                                <label className="block text-sm font-medium text-indigo-700 mb-2">Description</label>
                                                                <span className="text-xs text-gray-500">{(project.description || '').length} / 500</span>
                                                            </div>
                                                            <textarea
                                                                value={project.description}
                                                                onChange={(e) => updateItem('projects', project.id, 'description', e.target.value)}
                                                                className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200 h-32 resize-none"
                                                                placeholder="Describe your project, technologies used, your role, and outcomes achieved..."
                                                            />
                                                        </div>

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            <div>
                                                                <label className="block text-sm font-medium text-indigo-700 mb-2">Link</label>
                                                                <div className="relative">
                                                                    <input
                                                                        type="url"
                                                                        value={project.link}
                                                                        onChange={(e) => updateItem('projects', project.id, 'link', e.target.value)}
                                                                        className="w-full p-4 pl-10 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200"
                                                                        placeholder="e.g. https://github.com/yourusername/project"
                                                                    />
                                                                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" size={18} />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <label className="block text-sm font-medium text-indigo-700 mb-2">Date Completed <span className="text-gray-500 text-xs">(optional)</span></label>
                                                                <input
                                                                    type="month"
                                                                    value={project.completionDate || ''}
                                                                    onChange={(e) => updateItem('projects', project.id, 'completionDate', e.target.value)}
                                                                    className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="mt-6">
                                                            <label className="block text-sm font-medium text-indigo-700 mb-2">Technologies Used <span className="text-gray-500 text-xs">(optional)</span></label>
                                                            <input
                                                                type="text"
                                                                value={project.technologies || ''}
                                                                onChange={(e) => updateItem('projects', project.id, 'technologies', e.target.value)}
                                                                className="w-full p-4 border border-indigo-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all duration-200"
                                                                placeholder="e.g. React, Node.js, MongoDB, AWS"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}

                                                <button
                                                    onClick={() => addItem('projects')}
                                                    className="flex items-center text-indigo-600 hover:text-indigo-800 bg-indigo-50 py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:bg-indigo-100"
                                                >
                                                    <Plus size={20} className="mr-2" /> Add Another Project
                                                </button>

                                                <div className="mt-6 p-6 bg-white border border-indigo-100 rounded-xl shadow-sm">
                                                    <h3 className="text-lg font-medium text-indigo-800 mb-4 flex items-center">
                                                        <Code size={20} className="text-indigo-500 mr-2" /> Project Tips
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        <li className="flex">
                                                            <div className="text-indigo-500 mr-3 mt-1">
                                                                <CheckCircle size={16} />
                                                            </div>
                                                            <p className="text-gray-700">Include projects that demonstrate skills relevant to the job you're applying for.</p>
                                                        </li>
                                                        <li className="flex">
                                                            <div className="text-indigo-500 mr-3 mt-1">
                                                                <CheckCircle size={16} />
                                                            </div>
                                                            <p className="text-gray-700">Quantify your achievements with metrics where possible (e.g., "Increased user engagement by 40%").</p>
                                                        </li>
                                                        <li className="flex">
                                                            <div className="text-indigo-500 mr-3 mt-1">
                                                                <CheckCircle size={16} />
                                                            </div>
                                                            <p className="text-gray-700">List technologies and tools used to showcase your technical proficiency.</p>
                                                        </li>
                                                    </ul>
                                                    <div className="mt-4 p-3 bg-indigo-50 border border-indigo-100 rounded-lg flex items-start">
                                                        <div className="text-indigo-600 mr-3 mt-1">
                                                            <AlertCircle size={16} />
                                                        </div>
                                                        <p className="text-sm text-gray-700">Pro tip: For portfolio projects, include a link to a live demo or repository. For academic or professional projects without public links, focus on detailing your contribution and the project's impact.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex justify-between mt-10">
                                                <button className="px-8 py-3 bg-white text-indigo-700 border border-indigo-200 rounded-xl hover:bg-indigo-50 transition-colors duration-200 font-medium flex items-center">
                                                    <ArrowLeft size={18} className="mr-2" /> Back
                                                </button>
                                                <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors duration-200 font-medium flex items-center shadow-sm">
                                                    Continue <ArrowRight size={18} className="ml-2" />
                                                </button>
                                            </div>
                                        </div>

                                    }
                                </div>
                            </div>

                            {/* Preview Section */}
                            <div ref={resumeRef} className="w-full ml-2  mt-6 lg:w-1/2">
                                {
                                    resumeData?.personalInfo.name ? (
                                        <ResumePreview latexTemplate={theme} />
                                    ) : (
                                        <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl mx-auto">

                                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <div className="h-6 w-48 bg-white bg-opacity-30 rounded mb-2"></div>
                                                        <div className="h-4 w-32 bg-white bg-opacity-20 rounded"></div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <div className="h-8 w-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                                            <Mail size={16} className="text-white" />
                                                        </div>
                                                        <div className="h-8 w-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                                            <Phone size={16} className="text-white" />
                                                        </div>
                                                        <div className="h-8 w-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                                            <MapPin size={16} className="text-white" />
                                                        </div>
                                                        <div className="h-8 w-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                                            <Linkedin size={16} className="text-white" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="p-6">

                                                <div className="mb-8">
                                                    <div className="flex items-center mb-4">
                                                        <User className="text-blue-600 mr-2" size={20} />
                                                        <div className="h-5 w-32 bg-blue-600 rounded"></div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="h-3 w-full bg-gray-200 rounded"></div>
                                                        <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                                                        <div className="h-3 w-4/6 bg-gray-200 rounded"></div>
                                                    </div>
                                                </div>


                                                <div className="mb-8">
                                                    <div className="flex items-center mb-4">
                                                        <Briefcase className="text-blue-600 mr-2" size={20} />
                                                        <div className="h-5 w-32 bg-blue-600 rounded"></div>
                                                    </div>


                                                    <div className="mb-5 pl-2 border-l-2 border-blue-400">
                                                        <div className="flex justify-between mb-2">
                                                            <div className="h-4 w-40 bg-gray-300 rounded"></div>
                                                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                                        </div>
                                                        <div className="h-3 w-32 bg-gray-200 mb-3 rounded"></div>
                                                        <div className="space-y-2 ml-3">
                                                            <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                                                            <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
                                                            <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                                                        </div>
                                                    </div>


                                                    <div className="pl-2 border-l-2 border-blue-400">
                                                        <div className="flex justify-between mb-2">
                                                            <div className="h-4 w-40 bg-gray-300 rounded"></div>
                                                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                                        </div>
                                                        <div className="h-3 w-32 bg-gray-200 mb-3 rounded"></div>
                                                        <div className="space-y-2 ml-3">
                                                            <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                                                            <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="grid grid-cols-2 gap-6">

                                                    <div>
                                                        <div className="flex items-center mb-4">
                                                            <GraduationCap className="text-blue-600 mr-2" size={20} />
                                                            <div className="h-5 w-32 bg-blue-600 rounded"></div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <div className="h-4 w-40 bg-gray-300 rounded mb-2"></div>
                                                            <div className="h-3 w-32 bg-gray-200 mb-1 rounded"></div>
                                                            <div className="h-3 w-24 bg-gray-200 rounded"></div>
                                                        </div>
                                                    </div>


                                                    <div>
                                                        <div className="flex items-center mb-4">
                                                            <Code className="text-blue-600 mr-2" size={20} />
                                                            <div className="h-5 w-32 bg-blue-600 rounded"></div>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {[1, 2, 3, 4, 5, 6].map(i => (
                                                                <div key={i} className="h-8 w-20 bg-blue-100 rounded-full flex items-center justify-center">
                                                                    <div className="h-2 w-12 bg-blue-400 rounded"></div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="mt-8">
                                                    <div className="flex items-center mb-4">
                                                        <Award className="text-blue-600 mr-2" size={20} />
                                                        <div className="h-5 w-32 bg-blue-600 rounded"></div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="h-12 bg-gray-100 rounded p-2 flex items-center">
                                                            <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
                                                        </div>
                                                        <div className="h-12 bg-gray-100 rounded p-2 flex items-center">
                                                            <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                    )
                                }
                                {/* <ResumePreview latexTemplate={theme} /> */}

                            </div>
                        </div>


                    </div>
                </main> : (
                    <div ref={resumeRef} className=" rounded-lg shadow-lg p-6 w-full max-w-7xl mx-auto">

                        {
                            resumeData?.personalInfo.name ? (
                                <ResumePreview latexTemplate={theme} />
                            ) : (
                                <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl mx-auto">

                                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="h-6 w-48 bg-white bg-opacity-30 rounded mb-2"></div>
                                                <div className="h-4 w-32 bg-white bg-opacity-20 rounded"></div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="h-8 w-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                                    <Mail size={16} className="text-white" />
                                                </div>
                                                <div className="h-8 w-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                                    <Phone size={16} className="text-white" />
                                                </div>
                                                <div className="h-8 w-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                                    <MapPin size={16} className="text-white" />
                                                </div>
                                                <div className="h-8 w-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                                    <Linkedin size={16} className="text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="p-6">

                                        <div className="mb-8">
                                            <div className="flex items-center mb-4">
                                                <User className="text-blue-600 mr-2" size={20} />
                                                <div className="h-5 w-32 bg-blue-600 rounded"></div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-3 w-full bg-gray-200 rounded"></div>
                                                <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                                                <div className="h-3 w-4/6 bg-gray-200 rounded"></div>
                                            </div>
                                        </div>


                                        <div className="mb-8">
                                            <div className="flex items-center mb-4">
                                                <Briefcase className="text-blue-600 mr-2" size={20} />
                                                <div className="h-5 w-32 bg-blue-600 rounded"></div>
                                            </div>


                                            <div className="mb-5 pl-2 border-l-2 border-blue-400">
                                                <div className="flex justify-between mb-2">
                                                    <div className="h-4 w-40 bg-gray-300 rounded"></div>
                                                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                                </div>
                                                <div className="h-3 w-32 bg-gray-200 mb-3 rounded"></div>
                                                <div className="space-y-2 ml-3">
                                                    <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                                                    <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
                                                    <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                                                </div>
                                            </div>


                                            <div className="pl-2 border-l-2 border-blue-400">
                                                <div className="flex justify-between mb-2">
                                                    <div className="h-4 w-40 bg-gray-300 rounded"></div>
                                                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                                </div>
                                                <div className="h-3 w-32 bg-gray-200 mb-3 rounded"></div>
                                                <div className="space-y-2 ml-3">
                                                    <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                                                    <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="grid grid-cols-2 gap-6">

                                            <div>
                                                <div className="flex items-center mb-4">
                                                    <GraduationCap className="text-blue-600 mr-2" size={20} />
                                                    <div className="h-5 w-32 bg-blue-600 rounded"></div>
                                                </div>
                                                <div className="mb-3">
                                                    <div className="h-4 w-40 bg-gray-300 rounded mb-2"></div>
                                                    <div className="h-3 w-32 bg-gray-200 mb-1 rounded"></div>
                                                    <div className="h-3 w-24 bg-gray-200 rounded"></div>
                                                </div>
                                            </div>


                                            <div>
                                                <div className="flex items-center mb-4">
                                                    <Code className="text-blue-600 mr-2" size={20} />
                                                    <div className="h-5 w-32 bg-blue-600 rounded"></div>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                                        <div key={i} className="h-8 w-20 bg-blue-100 rounded-full flex items-center justify-center">
                                                            <div className="h-2 w-12 bg-blue-400 rounded"></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>


                                        <div className="mt-8">
                                            <div className="flex items-center mb-4">
                                                <Award className="text-blue-600 mr-2" size={20} />
                                                <div className="h-5 w-32 bg-blue-600 rounded"></div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="h-12 bg-gray-100 rounded p-2 flex items-center">
                                                    <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
                                                </div>
                                                <div className="h-12 bg-gray-100 rounded p-2 flex items-center">
                                                    <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            )
                        }
                        {/* <ResumePreview latexTemplate={theme} /> */}
                        <button
                            onClick={() => setResumePreview(false)}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
                        >
                            Close Preview
                        </button>
                        {/* <button
                            onClick={handlePrintPDF}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
                        >
                            Download PDF
                        </button> */}
                    </div>
                )
            }




        </div>


    );
};
