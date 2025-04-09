
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
    </div>
  );
};

export default GeometricShapes;
