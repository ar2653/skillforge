'use client';
import Link from "next/link";
// app/resume/page.tsx
const ResumePage = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      {/* Main Container for Side-by-Side Layout */}
      <div className="flex w-full max-w-4xl p-4">
        {/* Left Section: Resume Upload */}
        <div className="w-1/2 flex flex-col items-center justify-center px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Upload Your Resume
          </h2>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="border border-gray-300 p-2 rounded mb-4 w-full"
          />
          <p className="text-gray-600 mb-4">
            Supported formats: PDF, DOC, DOCX
          </p>
        </div>

        <div className="w-1/2 flex flex-col p-8 m-2">
          <h2 className="text-2xl font-bold mb-4 text-white text-center">
            Paste Job Description
          </h2>
          <textarea
            className="border border-gray-300 p-2 rounded w-full h-full resize-y shadow-md disco-text"
            placeholder="Paste the job description here"
            style={{ minHeight: "100px", maxHeight: "270px" }}
          />
        </div>

        <style jsx>{`
          @keyframes disco {
            0% {
              color: #ff0000;
            }
            25% {
              color: #00ff00;
            }
            50% {
              color: #0000ff;
            }
            75% {
              color: #ff00ff;
            }
            100% {
              color: #ffff00;
            }
          }

          .disco-text {
            animation: disco 2s infinite;
          }
        `}</style>
      </div>

      {/* Next Button */}
      <div className="flex justify-center w-full mt-8">
        <Link
          href="/result"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default ResumePage;
