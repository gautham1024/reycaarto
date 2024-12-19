"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Careers = () => {
  const { register, handleSubmit, reset } = useForm();
  const [resumeLink, setResumeLink] = useState("");
  const [uploading, setUploading] = useState(false);

  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dyeomezjm/upload";
  const UPLOAD_PRESET = "preset1";  // Ensure you use an unsigned preset

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setUploading(true);
    
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("resource_type", "auto");

    try {
      const res = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResumeLink(res.data.secure_url);
      alert("Resume uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload resume. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (data) => {
    if (!resumeLink) {
      alert("Please upload your resume before submitting the form.");
      return;
    }

    const formData = new FormData();

    // Add all form fields to the FormData object
    formData.append("access_key", "342ed2ed-59c3-467d-82a7-1df159506973"); // Replace with your Web3Forms access key
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    formData.append("city", data.city);
    formData.append("resume_link", resumeLink); // Resume file link
    formData.append("message", data.message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        alert("Your application has been submitted successfully!");
        
        // Reset the form fields and resume link after successful submission
        reset(); // Reset form fields
        setResumeLink(""); // Clear the resume link
      } else {
        alert("Something went wrong. Please try again.");
        console.error(result);
      }
    } catch (error) {
      alert("Error occurred while sending your data.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <h2 className="text-4xl font-bold text-center mb-4">Careers</h2>
          <p className="text-center text-lg">
            Join our team! Apply now by filling out the form below.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8 bg-white">
          <div>
            <label className="block text-gray-700 font-medium">First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter your first name"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              {...register("firstname")}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              {...register("lastname")}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              {...register("email")}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">City/Town/Village</label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city/town/village"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              {...register("city")}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Resume</label>
            <input
              type="file"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleFileUpload}
              required
            />
            {uploading && <p>Uploading...</p>}
            {resumeLink && (
              <p className="text-sm text-green-600 mt-2">File uploaded: <a href={resumeLink} target="_blank" className="underline">View Resume</a></p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message to Recruiter</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="4"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              {...register("message")}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Careers;
