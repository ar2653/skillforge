"use client";
import { useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core"; // Adjust imports as needed
import "@react-pdf-viewer/core/lib/styles/index.css"; // Import core styles

const ResultsPage = () => {
  useEffect(() => {
    // Set the workerSrc to the location of the pdf.worker.js file
    (window as any).pdfjsGlobal = {
      workerSrc:
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js", // Use a valid worker URL
    };
  }, []);

  return (
    <div className="flex h-screen p-8">
      {/* Left Section: Resume Preview */}
      <div className="w-1/2 p-4 border-r border-gray-300 overflow-hidden">
        <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>
        <div className="border h-full overflow-auto">
          <Worker
            workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}
          >
            <Viewer fileUrl="/files/ankush.pdf" />
          </Worker>
        </div>
      </div>
      {/* Right Section: Job Analysis */}
      <div className="w-1/2 p-4 overflow-y-auto">
        {/* Desired Job */}
        <h2 className="text-2xl font-bold mb-4">
          Desired Job: Senior Software Engineer
        </h2>

        {/* Strengths */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Strengths:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-400 px-3 py-1 rounded text-white">
              Web Development Expertise
            </span>
            <span className="bg-green-400 px-3 py-1 rounded text-white">
              Cross-functional Collaboration
            </span>
            <span className="bg-green-400 px-3 py-1 rounded text-white">
              Experience with Modern Frameworks
            </span>
            <span className="bg-green-400 px-3 py-1 rounded text-white">
              Automation and Testing
            </span>
            <span className="bg-green-400 px-3 py-1 rounded text-white">
              Growth Mindset & Innovation
            </span>
          </div>
        </div>

        {/* Skills Needed */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            Skills Needed for Position:
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-red-400 px-3 py-1 rounded text-white">
              React, Angular, Vue.js
            </span> 
            <span className="bg-red-400 px-3 py-1 rounded text-white">
              Front-end Development
            </span>
            <span className="bg-red-400 px-3 py-1 rounded text-white">
              VoIP/Telephony Systems
            </span>
            <span className="bg-red-400 px-3 py-1 rounded text-white">
              Automated Testing Tools
            </span>
            <span className="bg-red-400 px-3 py-1 rounded text-white">
              Full-Stack Development
            </span>
            <span className="bg-red-400 px-3 py-1 rounded text-white">
              Collaboration with Product Managers
            </span>
          </div>
        </div>

        {/* Job Role Skills */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            Skills in the Job Role:
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-500 px-3 py-1 rounded">React.js</span>
            <span className="bg-indigo-500 px-3 py-1 rounded">Vue.js</span>
            <span className="bg-indigo-500 px-3 py-1 rounded">Node.js</span>
            <span className="bg-indigo-500 px-3 py-1 rounded">Python</span>
            <span className="bg-indigo-500 px-3 py-1 rounded">Automation</span>
            <span className="bg-indigo-500 px-3 py-1 rounded">
              CI/CD Pipelines
            </span>
            <span className="bg-indigo-500 px-3 py-1 rounded">
              Cloud Technologies
            </span>
          </div>
        </div>

        {/* Filter Button */}
        <div className="mb-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Filter
          </button>
        </div>

        {/* Certifications Section */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Certifications</h3>

          <div className="bg-blue-600 p-4 rounded-lg mb-4 shadow-lg">
            <h4 className="text-lg font-bold text-white mb-1">
              Certified Cloud Practitioner
            </h4>
            <p className="text-gray-200 mb-2">AWS Certification</p>
            <a
              href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
              className="text-yellow-300 underline hover:text-yellow-400 transition duration-300"
            >
              Link
            </a>
          </div>

          <div className="bg-blue-600 p-4 rounded-lg shadow-lg">
            <h4 className="text-lg font-bold text-white mb-1">
              Microsoft Certified: Azure Developer Associate
            </h4>
            <p className="text-gray-200 mb-2">Microsoft Certification</p>
            <a
              href="https://learn.microsoft.com/en-us/certifications/azure-developer/"
              className="text-yellow-300 underline hover:text-yellow-400 transition duration-300"
            >
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
