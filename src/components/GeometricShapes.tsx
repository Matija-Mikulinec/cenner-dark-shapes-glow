
import React from 'react';

const GeometricShapes = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Large circle */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-cenner/5 animate-pulse-slow blur-3xl" />
      
      {/* Abstract shape 1 */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-purple-500/5 animate-rotate-slow blur-3xl" />
      
      {/* Abstract shape 2 */}
      <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-cenner/5 animate-float blur-2xl" />
      
      {/* Abstract shape 3 */}
      <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-blue-500/5 animate-pulse-slow blur-3xl" />
      
      {/* Abstract shape 4 - hexagon using clip-path */}
      <div 
        className="absolute bottom-10 left-10 w-60 h-60 bg-cenner/5 animate-rotate-slow blur-xl"
        style={{ 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}
      />
      
      {/* New triangle shape */}
      <div 
        className="absolute top-1/3 right-10 w-40 h-40 bg-purple-500/5 animate-float blur-lg"
        style={{ 
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
      />
      
      {/* New diamond shape */}
      <div 
        className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-blue-400/5 animate-pulse-slow blur-xl"
        style={{ 
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
        }}
      />
      
      {/* New shape - pentagon */}
      <div 
        className="absolute top-20 left-1/2 w-48 h-48 bg-cenner/5 animate-rotate-slow blur-2xl"
        style={{ 
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
        }}
      />
    </div>
  );
};

export default GeometricShapes;
