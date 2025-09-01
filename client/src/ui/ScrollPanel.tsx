import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollPanelProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function ScrollPanel({ children, className = "", animate = false }: ScrollPanelProps) {
  const Component = animate ? motion.div : 'div';
  
  const motionProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  } : {};

  return (
    <Component 
      className={`bg-parchment border-2 border-gold rounded-lg shadow-scroll p-6 relative ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(200,166,75,0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(200,166,75,0.05) 0%, transparent 50%),
          linear-gradient(45deg, transparent 49%, rgba(200,166,75,0.03) 50%, transparent 51%)
        `
      }}
      {...motionProps}
    >
      {/* Decorative corner flourishes */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-gold opacity-30"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-gold opacity-30"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-gold opacity-30"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-gold opacity-30"></div>
      
      {children}
    </Component>
  );
}