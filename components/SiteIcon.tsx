import React from 'react';

interface SiteIconProps {
  size?: number;
  className?: string;
}

const SiteIcon: React.FC<SiteIconProps> = ({ size = 24, className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 512 512" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      className={className}
    >
      <circle cx="256" cy="256" r="210" strokeWidth="24" fill="none" />
      <path d="M256 46 V466" strokeWidth="16" />
      <path d="M46 256 H466" strokeWidth="16" />
      <path d="M116 116 A196 196 0 0 1 396 396" strokeWidth="16" />
      <path d="M116 396 A196 196 0 0 1 396 116" strokeWidth="16" />
    </svg>
  );
};

export default SiteIcon; 