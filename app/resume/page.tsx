'use client';
import { useState } from "react";
import Link from "next/link";

const ResumePage = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setResumeFile(file || null);
  };

  const handleSubmit = async () => {
    if (!resumeFile || !jobDescription) {
      alert("Please upload a resume and paste the job description.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("jobDescription", jobDescription);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload data");
      }

      const data = await response.json();
      console.log("API Response:", data);
      // Navigate to the results page or handle success

    } catch (err) {
      console.error(err);
      setError("An error occurred while uploading the data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center">
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
            onChange={handleResumeUpload}
          />
          <p className="text-gray-600 mb-4">
            Supported formats: PDF, DOC, DOCX
          </p>
        </div>

        {/* Right Section: Job Description */}
        <div className="w-1/2 flex flex-col p-8 m-2">
          <h2 className="text-2xl font-bold mb-4 text-white text-center">
            Paste Job Description
          </h2>
          <textarea
            className="border border-gray-300 p-2 rounded w-full h-full resize-y shadow-md disco-text"
            placeholder="Paste the job description here"
            style={{ minHeight: "100px", maxHeight: "270px" }}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-center w-full mt-8">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Next"}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-600 mt-4">
          {error}
        </div>
      )}

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
  );
};

export default ResumePage;
