
import React from 'react';

const GeometricShapes = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Large circle with subtle pulse */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-cenner/5 animate-pulse-slow blur-3xl" />
      
      {/* Abstract shape 1 - with different animation */}
      <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-purple-500/5 animate-rotate-slow blur-3xl" />
      
      {/* Abstract shape 2 - with gentle float */}
      <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-cenner/5 animate-float blur-2xl" />
      
      {/* Neural node cluster suggestion - larger blurred circle */}
      <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-blue-500/5 animate-pulse-slow blur-3xl" />
      
      {/* Abstract shape 4 - hexagon using clip-path */}
      <div 
        className="absolute bottom-10 left-10 w-60 h-60 bg-cenner/5 animate-rotate-slow blur-xl"
        style={{ 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}
      />
      
      {/* Neural connection suggestion - triangle */}
      <div 
        className="absolute top-1/3 right-10 w-40 h-40 bg-purple-500/5 animate-float blur-lg"
        style={{ 
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          animationDelay: '2s'
        }}
      />
      
      {/* Neural node - diamond shape */}
      <div 
        className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-blue-400/5 animate-pulse-slow blur-xl"
        style={{ 
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          animationDelay: '1.5s'
        }}
      />
      
      {/* Central processing node - pentagon */}
      <div 
        className="absolute top-20 left-1/2 w-48 h-48 bg-cenner/5 animate-rotate-slow blur-2xl"
        style={{ 
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          animationDelay: '3s'
        }}
      />

      {/* Additional neural-like shape - octagon */}
      <div 
        className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-cenner/5 animate-float blur-2xl"
        style={{ 
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          animationDelay: '2.7s'
        }}
      />
      
      {/* Data stream suggestion - long rectangle */}
      <div 
        className="absolute top-2/3 left-10 w-72 h-10 bg-blue-400/5 animate-pulse-slow blur-xl"
        style={{ 
          transform: 'rotate(45deg)',
          animationDelay: '1.2s'
        }}
      />
      
      {/* Data stream suggestion 2 - another long rectangle */}
      <div 
        className="absolute top-1/4 right-1/4 w-60 h-8 bg-cenner/5 animate-pulse-slow blur-xl"
        style={{ 
          transform: 'rotate(-30deg)',
          animationDelay: '2.2s'
        }}
      />
    </div>
  );
};

export default GeometricShapes;
