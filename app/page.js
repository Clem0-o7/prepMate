"use client";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      
      {/* Floating AI-themed Background Elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-600 to-purple-700 rounded-full opacity-40 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-500 to-indigo-800 rounded-full opacity-40 blur-3xl animate-float-slow"></div>
      <div className="absolute top-20 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-full opacity-30 blur-2xl animate-pulse"></div>
      
      {/* Hero Section */}
      <div className="relative z-10 text-center max-w-3xl p-10 space-y-8 animate-fade-in-fast">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text animate-gradient-flow">
          Welcome to PrepMate!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slide-up">
        Unlock your learning potential with AI-powered study tools. Improve your understanding and skills across subjects with personalized feedback and fun, interactive simulations.
        </p>
        <Button
          onClick={handleClick}
          className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold px-12 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:bg-gradient-to-l transition-all transform hover:-translate-y-2 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300"
        >
          Get Started
        </Button>
      </div>
      
      {/* AI-inspired Animated Lines */}
      <div className="absolute bottom-20 left-1/4 w-full h-32 bg-gradient-to-r from-blue-600 to-purple-600 opacity-40 blur-2xl transform-gpu animate-data-stream"></div>

      {/* Footer Text */}
      <div className="absolute bottom-10 text-center z-10 animate-slide-up-delay">
        <p className="text-sm md:text-base text-gray-400 tracking-wider">
        Get ready to boost your learning with LearnMate's AI-powered study tools. Sign up today and start your educational journey!
        </p>
      </div>
    </div>
  );
}
