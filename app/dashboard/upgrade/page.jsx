'use client'; // Add this if you are using Next.js 13+

import React from 'react';

function Upgrade() {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Upgrade</h1>
      <p className="text-gray-500 mb-8">Upgrade to a monthly plan to access unlimited learning resources</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">

        {/* Free Plan (Default active state) */}
        <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-100 text-center shadow-lg transition-transform duration-300 transform hover:bg-blue-200 hover:scale-105">
          <h2 className="text-lg font-bold mb-4">Free</h2>
          <h3 className="text-3xl font-bold mb-2">0$<span className="text-base font-normal"> /month</span></h3>
          <ul className="text-left mb-6">
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✓</span>Create 3 Free Learning Sessions
            </li>
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✓</span>Unlimited Retake Sessions
            </li>
            <li className="flex items-center mb-2">
              <span className="text-red-500 mr-2">✕</span>Practice Questions
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✕</span>Email Support
            </li>
          </ul>
          <button className="border-2 border-blue-500 text-blue-500 rounded-lg py-2 px-4 w-full font-bold hover:bg-blue-500 hover:text-white transition">
            Get Started
          </button>
        </div>

        {/* Monthly Plan */}
        <div className="border-2 border-gray-300 rounded-lg p-6 bg-white text-center shadow-lg transition-transform duration-300 transform hover:bg-blue-100 hover:border-blue-500 hover:scale-105">
          <h2 className="text-lg font-bold mb-4">Monthly</h2>
          <h3 className="text-3xl font-bold mb-2">7.99$<span className="text-base font-normal"> /month</span></h3>
          <ul className="text-left mb-6">
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✓</span>Create 3 Learning Sessions
            </li>
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✓</span>Unlimited Retake Sessions
            </li>
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✓</span>Practice Questions
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>Email Support
            </li>
          </ul>
          <button className="border-2 border-blue-500 text-blue-500 rounded-lg py-2 px-4 w-full font-bold hover:bg-blue-500 hover:text-white transition">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
}

export default Upgrade;
