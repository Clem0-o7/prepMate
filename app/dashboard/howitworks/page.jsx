"use client";
import React from 'react';

function HowItWorks() {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">How It Works</h1>
      <p className="text-gray-500 mb-8">Learn how our platform helps you enhance your learning experience efficiently!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">

        {/* Step 1 */}
        <div className="border-2 border-gray-300 rounded-lg p-6 bg-white text-center shadow-lg transition-transform duration-300 hover:bg-blue-200 hover:scale-105">
          <h2 className="text-lg font-bold mb-4">Step 1: Log In</h2>
          <p className="text-md mb-4">Begin by logging into your account or creating a new one.</p>
          <img src="/step1.png" alt="Step 1" className="w-full h-auto mb-4" />
        </div>

        {/* Step 2 */}
        <div className="border-2 border-gray-300 rounded-lg p-6 bg-white text-center shadow-lg transition-transform duration-300 hover:bg-blue-200 hover:scale-105">
          <h2 className="text-lg font-bold mb-4">Step 2: Choose Your Learning Topic</h2>
          <p className="text-md mb-4">Select a subject or topic to get personalized questions.</p>
          <img src="/stepp2.png" alt="Step 2" className="w-full h-auto mb-4" />
        </div>

        {/* Step 3 */}
        <div className="border-2 border-gray-300 rounded-lg p-6 bg-white text-center shadow-lg transition-transform duration-300 hover:bg-blue-200 hover:scale-105">
          <h2 className="text-lg font-bold mb-4">Step 3: Answer Questions</h2>
          <p className="text-md mb-4">You will receive questions related to the topic, which you can answer directly on the platform.</p>
          <img src="/step3.jpg" alt="Step 3" className="w-full h-auto mb-4" />
        </div>

        {/* Step 4 */}
        <div className="border-2 border-gray-300 rounded-lg p-6 bg-white text-center shadow-lg transition-transform duration-300 hover:bg-blue-200 hover:scale-105">
          <h2 className="text-lg font-bold mb-4">Step 4: Submit and View Feedback</h2>
          <p className="text-md mb-4">After answering the questions, submit your responses to view instant feedback.</p>
          <img src="/stepp4.png" alt="Step 4" className="w-full h-auto mb-4" />
        </div>

        {/* Step 5 */}
        <div className="border-2 border-gray-300 rounded-lg p-6 bg-white text-center shadow-lg transition-transform duration-300 hover:bg-blue-200 hover:scale-105">
          <h2 className="text-lg font-bold mb-4">Step 5: Review and Improve</h2>
          <p className="text-md mb-4">Use the feedback to improve your understanding and skills in the subject.</p>
          <img src="/steppp5.jpg" alt="Step 5" className="w-full h-auto mb-4" />
        </div>

      </div>
    </div>
  );
}

export default HowItWorks;
