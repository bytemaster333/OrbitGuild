import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GuideBubbleProps {
  character?: string;
  children: ReactNode;
  position?: 'bottom-right' | 'top-left' | 'inline';
  autoShow?: boolean;
  onClose?: () => void;
}

export default function GuideBubble({ 
  character = "🧙‍♀️", 
  children, 
  position = 'bottom-right',
  autoShow = false,
  onClose
}: GuideBubbleProps) {
  const [isVisible, setIsVisible] = useState(autoShow);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setTextVisible(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const positionClasses = {
    'bottom-right': 'fixed bottom-6 right-6 z-50',
    'top-left': 'absolute top-4 left-4 z-40',
    'inline': 'relative'
  };

  const handleClose = () => {
    setIsVisible(false);
    setTextVisible(false);
    onClose?.();
  };

  if (position === 'inline') {
    return (
      <div className="flex items-start gap-4 my-4">
        <div className="text-4xl">{character}</div>
        <div className="bg-parchment border border-gold rounded-lg p-4 shadow-scroll relative flex-1">
          <div className="absolute -left-2 top-6 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-parchment"></div>
          <div className="font-body text-ink leading-relaxed">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className={positionClasses[position]}>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="relative"
          >
            {/* Character avatar */}
            <motion.div 
              className="text-6xl mb-2 cursor-pointer hover:scale-110 transition-transform"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              onClick={() => setIsVisible(!isVisible)}
            >
              {character}
            </motion.div>
            
            {/* Speech bubble */}
            <AnimatePresence>
              {textVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full right-0 mb-2 w-80 bg-parchment border border-gold rounded-lg p-4 shadow-scroll"
                >
                  <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-parchment"></div>
                  
                  {onClose && (
                    <button
                      onClick={handleClose}
                      className="absolute top-2 right-2 w-6 h-6 text-gold hover:text-burgundy transition-colors flex items-center justify-center"
                    >
                      ×
                    </button>
                  )}
                  
                  <div className="font-body text-ink leading-relaxed text-sm">
                    {children}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}