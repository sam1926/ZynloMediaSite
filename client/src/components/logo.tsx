import React from 'react';

export default function Logo() {
  return (
    <div className="logo-container w-12 h-6 relative block">
      <div className="logo-circles relative w-full h-full">
        <span className="circle circle-1 absolute w-5 h-5 bg-bright-orange rounded-full top-1/2 left-0 -translate-y-1/2 transition-transform duration-300"></span>
        <span className="circle circle-2 absolute w-5 h-5 bg-bright-orange rounded-full top-1/2 left-3 -translate-y-1/2 transition-transform duration-300 mix-blend-exclusion"></span>
      </div>
    </div>
  );
}
