
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center group">
      <div className="relative">
        <h1 className="text-4xl md:text-5xl font-bold text-cenner relative z-10">cenner</h1>
        <div className="absolute -bottom-1 left-0 w-0 h-1 bg-cenner/50 group-hover:w-full transition-all duration-300 rounded"></div>
        <div className="absolute -inset-1 bg-cenner/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </Link>
  );
};

export default Logo;
