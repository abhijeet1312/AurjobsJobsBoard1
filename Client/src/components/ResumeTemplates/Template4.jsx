import { MapPin, Phone, Mail, Linkedin, Award, TrendingUp, Check, CodeSquare } from "lucide-react";

export default function Template4() {
  return (
    <div className="w-full bg-blue-50 p-4 font-sans" style={{ backgroundImage: "radial-gradient(circle, #e0e7ff 2px, transparent 2px)", backgroundSize: "20px 20px" }}>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-3xl overflow-hidden">
        {/* Header Section */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-800">GRACE JACKSON</h1>
          <p className="text-orange-500 font-semibold">Data Scientist | Advanced Analytics | Machine Learning</p>
          
          <div className="flex flex-wrap justify-between mt-2">
            <div className="flex space-x-6 text-sm">
              <div className="flex items-center">
                <Phone size={14} className="mr-1 text-gray-500" />
                <span>8745693210</span>
              </div>
              <div className="flex items-center">
                <Mail size={14} className="mr-1 text-gray-500" />
                <span>grace@example.com</span>
              </div>
              <div className="flex items-center">
                <Linkedin size={14} className="mr-1 text-gray-500" />
                <span>linkedin.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={14} className="mr-1 text-gray-500" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Summary Section */}
        <div className="px-6 pb-4">
          <h2 className="text-blue-800 font-bold border-b border-gray-200 pb-1 mb-2">SUMMARY</h2>
          <p className="text-xs">
            With over 5 years of experience in data science, including advanced classification, regression modeling, and proficient use of R and Python for data analysis. I bring a detail focus toward extracting data insights. Proven track record in developing advanced analytical frameworks that include implementing key predictive models and developing data-driven solutions directly contributing to operational growth and efficiency.
          </p>
        </div>
        
        {/* Experience Section */}
        <div className="px-6 pb-4">
          <h2 className="text-blue-800 font-bold border-b border-gray-200 pb-1 mb-2">EXPERIENCE</h2>
          
          {/* Job 1 */}
          <div className="mb-4">
            <div className="flex justify-between items-center text-xs text-gray-600">
              <span className="font-medium">03/2020 - Present</span>
              <span>San Francisco, CA</span>
            </div>
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-sm font-bold">Senior Data Scientist</h3>
              <span className="text-sm font-semibold text-orange-500">Tech Innovations Inc.</span>
            </div>
            <ul className="list-disc pl-5 text-xs space-y-1">
              <li>Led a team to optimize algorithm performance, improving data processing efficiency by 35% and reducing costs by implementing an advanced prediction model for market trends.</li>
              <li>Spearheaded the development of a recommendation engine that revamped the consumer strategic directions and increased engagement by 28%.</li>
              <li>Spearheaded the migration of a new analytics platform, enhancing data distribution capabilities and leading to a 40% improvement in user engagement.</li>
              {/* <li>Implemented comprehensive security and governance protocol for handling sensitive data in compliance with analytics protocols.</li>
              <li>Managed cross-departmental data governance initiatives, ensuring compliance with industry standards and enhancing data-driven decisions.</li>
              <li>Established partnerships with key vendors to collaborate, building a federated data analytics environment resulting in a 22% higher ROI for related projects.</li> */}
            </ul>
          </div>
          
          {/* Job 2 */}
          {/* <div className="mb-4">
            <div className="flex justify-between items-center text-xs text-gray-600">
              <span className="font-medium">02/2017 - 01/2020</span>
              <span>San Francisco, CA</span>
            </div>
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-sm font-bold">Data Scientist</h3>
              <span className="text-sm font-semibold text-orange-500">Global Interactive</span>
            </div>
            <ul className="list-disc pl-5 text-xs space-y-1">
              <li>Developed a machine learning detection system that reduced false positives by 35%, enhancing data integrity, streamlined data collection and sharing protocols, leading to a 15% reduction in data prep time.</li>
              <li>Initiated innovative data analyses which informed key product development team efforts in the release of 3 new product features.</li>
              <li>Created sophisticated classification models that identified crucial insights and enabled a 25% increase in conversion in targeted marketing campaigns.</li>
              <li>Collaborated closely with the product team to tailor machine learning models, achieving a 40% accuracy rate for customer recommendations.</li>
            </ul>
          </div> */}
          
          {/* Job 3 */}
          <div className="mb-4">
            <div className="flex justify-between items-center text-xs text-gray-600">
              <span className="font-medium">06/2014 - 02/2017</span>
              <span>San Francisco, CA</span>
            </div>
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-sm font-bold">Data Analyst</h3>
              <span className="text-sm font-semibold text-orange-500">Innovative Data Solutions</span>
            </div>
            <ul className="list-disc pl-5 text-xs space-y-1">
              <li>Developed and implemented ETL code, uncovering key trends that led to a 15%-18% sales performance increase.</li>
              <li>Created comprehensive reports and dashboards that provided actionable insights for stakeholder decision-making, enhancing the data/metrics reporting strategy by implementing a data-driven approach, resulting in a 15 percentage point increase in strategic alignment.</li>
              <li>Provided pivotal role in data migration process, enabling smoother transitions for new analytics platforms.</li>
            </ul>
          </div>
        </div>
        
        {/* Projects Section */}
        <div className="px-6 pb-4">
          <h2 className="text-blue-800 font-bold border-b border-gray-200 pb-1 mb-2">PROJECTS</h2>
          
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2 mb-3">
              <div className="flex">
                <div className="mr-2 mt-1">
                  <CodeSquare size={16} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Predictive Sales Analytics Tool</h3>
                  <p className="text-xs">
                    Developed a machine learning model to predict sales trends with 92% accuracy, deployed as a web application using Flask and React. Implemented automated data pipeline for continuous model training.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-1/2 px-2 mb-3">
              <div className="flex">
                <div className="mr-2 mt-1">
                  <CodeSquare size={16} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Customer Segmentation System</h3>
                  <p className="text-xs">
                    Created an unsupervised learning algorithm to identify distinct customer segments, resulting in a 27% increase in targeted marketing campaign performance.
                  </p>
                </div>
              </div>
            </div>
            
            {/* <div className="w-1/2 px-2 mb-3">
              <div className="flex">
                <div className="mr-2 mt-1">
                  <CodeSquare size={16} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Sentiment Analysis Engine</h3>
                  <p className="text-xs">
                    Built a natural language processing system to analyze customer feedback, achieving 85% accuracy in sentiment classification and identifying key product improvement areas.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-1/2 px-2 mb-3">
              <div className="flex">
                <div className="mr-2 mt-1">
                  <CodeSquare size={16} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Fraud Detection Framework</h3>
                  <p className="text-xs">
                    Implemented an anomaly detection system that reduced fraudulent transactions by 63%, saving an estimated $2.4M annually and improving customer trust metrics.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        
        {/* Certifications Section */}
        <div className="px-6 pb-4">
          <h2 className="text-blue-800 font-bold border-b border-gray-200 pb-1 mb-2">CERTIFICATIONS</h2>
          
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2 mb-2">
              <div className="flex items-start">
                <div className="mr-2 mt-1">
                  <Check size={14} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">AWS Certified Machine Learning – Specialty</h3>
                  <p className="text-xs text-gray-600">Amazon Web Services | 2023</p>
                </div>
              </div>
            </div>
            
            {/* <div className="w-1/2 px-2 mb-2">
              <div className="flex items-start">
                <div className="mr-2 mt-1">
                  <Check size={14} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Professional Data Scientist</h3>
                  <p className="text-xs text-gray-600">DataCamp | 2022</p>
                </div>
              </div>
            </div> */}
            
            <div className="w-1/2 px-2 mb-2">
              <div className="flex items-start">
                <div className="mr-2 mt-1">
                  <Check size={14} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">TensorFlow Developer Certificate</h3>
                  <p className="text-xs text-gray-600">Google | 2021</p>
                </div>
              </div>
            </div>
            
            {/* <div className="w-1/2 px-2 mb-2">
              <div className="flex items-start">
                <div className="mr-2 mt-1">
                  <Check size={14} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Microsoft Certified: Azure Data Scientist Associate</h3>
                  <p className="text-xs text-gray-600">Microsoft | 2020</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        
        {/* Education Section */}
        <div className="px-6 pb-4">
          <h2 className="text-blue-800 font-bold border-b border-gray-200 pb-1 mb-2">EDUCATION</h2>
          
          <div className="mb-3">
            <div className="flex justify-between items-center text-xs text-gray-600">
              <span className="font-medium">01/2012 - 01/2014</span>
              <span>Berkeley, CA</span>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold">MSc Applied Mathematics</h3>
              <span className="text-sm font-semibold text-orange-500">University of California, Berkeley</span>
            </div>
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between items-center text-xs text-gray-600">
              <span className="font-medium">01/2008 - 01/2012</span>
              <span>San Francisco, CA</span>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold">Bachelor of Science in Statistics</h3>
              <span className="text-sm font-semibold text-orange-500">San Francisco State University</span>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="px-6 pb-4">
          <h2 className="text-blue-800 font-bold border-b border-gray-200 pb-1 mb-2">SKILLS</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <div>Statistical Modeling</div>
            <div>Data Visualization</div>
            <div>Data Wrangling</div>
            <div>R</div>
            <div>Python</div>
            <div>SQL</div>
          </div>
        </div>
        
        {/* Key Achievements Section */}
        {/* <div className="px-6 pb-6">
          <h2 className="text-blue-800 font-bold border-b border-gray-200 pb-1 mb-2">KEY ACHIEVEMENTS</h2>
          
          <div className="flex gap-4">
            <div className="flex w-1/2">
              <div className="mr-2 mt-1">
                <Award size={16} className="text-orange-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold">Data Warehouse Architecture</h3>
                <p className="text-xs">Created, refined and deployed an enterprise data warehouse system for a major retailer data ecosystem, supporting a 50% reduction in data processing.</p>
              </div>
            </div>
            
            <div className="flex w-1/2">
              <div className="mr-2 mt-1">
                <TrendingUp size={16} className="text-orange-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold">Market Trend Predictive Model</h3>
                <p className="text-xs">Created a model responsible for a 23% uplift in revenue forecast accuracy, utilized by the executive team for strategic planning.</p>
              </div>
            </div>
          </div>
        </div> */}
        
        {/* Footer */}
        {/* <div className="bg-gray-50 py-2 px-6 flex justify-between text-xs text-gray-500 border-t border-gray-200">
          <div>grace-jackson-resume.com</div>
          <div className="flex items-center">
            <span>Powered by</span>
            <span className="ml-1 font-semibold">♥ Timongo</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}