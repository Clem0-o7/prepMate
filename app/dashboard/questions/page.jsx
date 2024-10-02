'use client'; // Add this if you are using Next.js 13+

import React, { useEffect } from 'react';

function Question() {
  useEffect(() => {
    // Load the new chatbot script ONLY on the Questions page
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://files.bpcontent.cloud/2024/10/02/18/20241002180202-85YCJMFQ.js";
    script2.async = true;
    document.body.appendChild(script2);

    // Cleanup scripts on unmount to avoid duplication across pages
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []); // Only run on component mount

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      {/* Questions Heading */}
      <h1 className="text-2xl font-bold mb-4">Questions</h1>
      <p className="text-gray-500 mb-8">
        Our page Personal AI Assistant will guide you through your journey. Ask anything related to mock interviews, practice questions, and more!
      </p>

      {/* FAQ Section */}
      <div className="max-w-4xl w-full">
        <h2 className="text-xl font-bold mb-4">FAQ (Frequently Asked Questions)</h2>

        {/* Individual Question Boxes */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4 transition-all duration-300 hover:bg-blue-100 hover:scale-105">
          <h3 className="text-lg font-semibold">1. How many questions can I expect during the assessment?</h3>
          <p className="text-gray-500 mt-2">
            Answer: You can expect a total of five questions during the mock assessment. These questions are designed to assess your skills and knowledge effectively.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-4 transition-all duration-300 hover:bg-blue-100 hover:scale-105">
          <h3 className="text-lg font-semibold">2. Will my video and audio responses be stored?</h3>
          <p className="text-gray-500 mt-2">
            Answer: No, we respect your privacy and confidentiality. We never store your video and audio responses after the assessment. Your data is not retained to ensure your complete privacy.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-4 transition-all duration-300 hover:bg-blue-100 hover:scale-105">
          <h3 className="text-lg font-semibold">3. Am I allowed to retake my assessment?</h3>
          <p className="text-gray-500 mt-2">
            Answer: Yes, you are permitted to retake your assessment as many times as you wish. This allows you to practice and improve your performance based on the feedback provided.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-4 transition-all duration-300 hover:bg-blue-100 hover:scale-105">
          <h3 className="text-lg font-semibold">4. How does this website help with my actual assessments?</h3>
          <p className="text-gray-500 mt-2">
            Answer: This website provides a simulated assessment experience that helps you prepare effectively for real-life academic challenges. You can practice answering questions, receive feedback on your performance, and gain confidence in your responses. The insights you gain from the mock assessments can help you understand your strengths and areas for improvement, making you better prepared for your actual assessments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Question;
