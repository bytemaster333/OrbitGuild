import { ReactNode, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ArcaneConsoleProps {
  children: ReactNode;
  className?: string;
  title?: string;
  glowColor?: 'green' | 'gold' | 'blue';
}

export default function ArcaneConsole({ 
  children, 
  className = "", 
  title = "Arcane Scrying Chamber",
  glowColor = 'green'
}: ArcaneConsoleProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const glowColors = {
    green: 'shadow-[0_0_30px_rgba(34,197,94,0.3)] border-green-500',
    gold: 'shadow-[0_0_30px_rgba(200,166,75,0.3)] border-gold',
    blue: 'shadow-[0_0_30px_rgba(59,130,246,0.3)] border-blue-500'
  };

  return (
    <div className={`bg-wood/95 rounded-lg border-2 ${glowColors[glowColor]} ${className}`}>
      {/* Console header */}
      <div className="border-b border-current p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: isActive ? 360 : 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-2xl"
          >
            🔮
          </motion.div>
          <h3 className="font-display text-lg text-parchment">{title}</h3>
        </div>
        
        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <motion.div
            className="w-3 h-3 rounded-full bg-current"
            animate={{ opacity: isActive ? [0.3, 1, 0.3] : 0.3 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-sm text-parchment/70 font-mono">
            {isActive ? 'ACTIVE' : 'INITIALIZING...'}
          </span>
        </div>
      </div>

      {/* Console content */}
      <div className="p-6">
        {/* Runic frame decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 opacity-20">
          <div className="w-full h-full border-l-2 border-t-2 border-current"></div>
          <div className="absolute top-1 left-1 text-xs">⚡</div>
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 opacity-20">
          <div className="w-full h-full border-r-2 border-t-2 border-current"></div>
          <div className="absolute top-1 right-1 text-xs">🔥</div>
        </div>
        <div className="absolute bottom-4 left-4 w-8 h-8 opacity-20">
          <div className="w-full h-full border-l-2 border-b-2 border-current"></div>
          <div className="absolute bottom-1 left-1 text-xs">💎</div>
        </div>
        <div className="absolute bottom-4 right-4 w-8 h-8 opacity-20">
          <div className="w-full h-full border-r-2 border-b-2 border-current"></div>
          <div className="absolute bottom-1 right-1 text-xs">⭐</div>
        </div>

        <div className="relative">
          {children}
        </div>
      </div>

      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-current rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </div>
  );
}