import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound404() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  
  // Create a bouncing effect when the component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => ({
        x: prev.x + (Math.random() * 2 - 1),
        y: prev.y + (Math.random() * 2 - 1)
      }));
    }, 150);
    
    return () => clearInterval(interval);
  }, []);
  
  // Move the 404 text randomly when hovering
  const handleMouseEnter = () => {
    setIsHovering(true);
    setPosition({
      x: Math.random() * 60 + 20,
      y: Math.random() * 60 + 20
    });
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-200 opacity-30"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-3xl text-center">
        {/* Interactive 404 text */}
        <div 
          className={`text-9xl font-bold text-blue-600 mb-6 transition-all duration-300 cursor-pointer ${isHovering ? 'scale-110' : 'scale-100'}`}
          style={{ 
            top: `${position.y}%`, 
            left: `${position.x}%`,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          404
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for seems to be missing.</p>
        
        {/* Navigation options */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button 
            onClick={handleHomeClick}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Go Home
          </button>
          <button className="bg-purple-100 hover:bg-purple-200 text-purple-800 py-3 px-8 rounded-lg text-lg font-medium border border-purple-300 transition-all duration-300 transform hover:scale-105">
            Contact Support
          </button>
        </div>
        
        {/* Search box */}
       
      </div>
      
      
    </div>
  );
}