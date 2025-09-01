import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import scribeElaraImage from '@assets/generated_images/Scribe_Elara_character_portrait_bfb376bf.png';
import medievalLibraryBg from '@assets/generated_images/Medieval_library_background_1ede44cd.png';

interface GuideBubbleProps {
  name: string;
  avatar: string;
  text: string;
  currentSceneIndex?: number;
  totalScenes?: number;
  onPreviousScene?: () => void;
  onReturnToBeginning?: () => void;
}

export function GuideBubble({ name, avatar, text, currentSceneIndex = 0, totalScenes = 1, onPreviousScene, onReturnToBeginning }: GuideBubbleProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    
    let currentIndex = 0;
    const typewriterTimer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typewriterTimer);
      }
    }, 30);

    return () => clearInterval(typewriterTimer);
  }, [text]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
      className="relative mb-12"
    >
      {/* Simple transparent chat panel */}
      <div className="relative rounded-3xl p-8 overflow-hidden"
           style={{
             background: 'rgba(255, 248, 220, 0.4)',
             backdropFilter: 'blur(6px)',
             border: '1px solid rgba(200, 166, 75, 0.4)',
             boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)'
           }}>


        <div className="relative z-10 flex items-start space-x-6 max-w-4xl mx-auto">
          {/* Enhanced Character Portrait */}
          <motion.div
            animate={{ 
              y: isTyping ? [0, -3, 0] : 0,
              filter: isTyping ? ['brightness(1)', 'brightness(1.1)', 'brightness(1)'] : 'brightness(1)'
            }}
            transition={{ 
              y: { duration: 2, repeat: isTyping ? Infinity : 0, ease: "easeInOut" },
              filter: { duration: 1.5, repeat: isTyping ? Infinity : 0 }
            }}
            className="flex-shrink-0 relative"
          >
            <div className="w-24 h-32 rounded-2xl overflow-hidden border-3 border-gold shadow-ember relative">
              <img 
                src={scribeElaraImage} 
                alt={name}
                className="w-full h-full object-cover"
              />
              {/* Mystical glow overlay */}
              <motion.div
                animate={{ opacity: isTyping ? [0.3, 0.6, 0.3] : 0.3 }}
                transition={{ duration: 2, repeat: isTyping ? Infinity : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-royal/20 pointer-events-none"
              />
            </div>
            
            {/* Character nameplate */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-gold to-royal px-3 py-1 rounded-lg border border-gold/50 shadow-lg">
                <span className="text-white font-display text-xs font-semibold">{name}</span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Speech Bubble */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-gradient-to-br from-parchment via-parchmentDark to-parchment rounded-2xl p-6 border-2 border-gold/40 shadow-scroll relative"
            >
              {/* Ornate corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-gold/60"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-gold/60"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-gold/60"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-gold/60"></div>
              
              <div className="relative">
                <p className="text-xl text-ink leading-relaxed font-serif tracking-wide drop-shadow-sm">
                  {displayedText}
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-gold ml-1 inline-block drop-shadow-sm"
                    >
                      ✦
                    </motion.span>
                  )}
                </p>
              </div>
            </motion.div>
            
            {/* Enhanced Speech Bubble Tail */}
            <div className="absolute left-0 top-8 transform -translate-x-3">
              <motion.div
                animate={{ scale: isTyping ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 2, repeat: isTyping ? Infinity : 0 }}
                className="relative"
              >
                <div className="w-0 h-0 border-t-12 border-t-transparent border-r-16 border-r-gold/40 border-b-12 border-b-transparent"></div>
                <div className="absolute top-2 left-2 w-0 h-0 border-t-8 border-t-transparent border-r-12 border-r-parchment border-b-8 border-b-transparent"></div>
              </motion.div>
            </div>
          </div>
          

        </div>
      </div>
    </motion.div>
  );
}