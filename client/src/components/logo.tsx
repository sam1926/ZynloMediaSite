import React from 'react';
import favicon from './zynlologo.png'; // Adjust path if needed

export default function Logo() {
  return (
    <div className="logo-container w-12 h-12 relative block">
      <img 
        src={favicon} 
        alt="Logo" 
        className="w-full h-full object-contain" 
      />
    </div>
  );
}
