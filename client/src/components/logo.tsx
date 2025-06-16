import React from 'react';

export default function Logo() {
  return (
    <div className="logo-container w-12 h-12 relative block">
      <img 
        src="./favicon-32x32.png" 
        alt="Logo" 
        className="w-full h-full object-contain" 
      />
    </div>
  );
}
