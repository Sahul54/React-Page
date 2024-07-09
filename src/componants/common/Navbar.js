import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow mt-3">
      <div className="container mx-auto px-4 w-10/12 py-2 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-gray-800">eGenome.ai</a>
        <div className="hidden md:flex space-x-6 font-bold ">
          <a href="/concerns" className="hover:text-blue-500">Concerns We Solve</a>
          <a href="/how-it-works" className="hover:text-blue-500">How It Works</a>
          <a href="/why-egenome" className="hover:text-blue-500">Why eGenome</a>
          <a href="/health-assessment" className="hover:text-blue-500">Take Health Assessment</a>
        </div>
        <div className="flex space-x-4">
          <a href="/login" className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">Login</a>
          <a href="/get-started" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;