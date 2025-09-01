import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
// import CastleSidebar from './CastleSidebar';
import GuideBubble from './GuideBubble';

interface MedievalLayoutProps {
  children: ReactNode;
  showGuide?: boolean;
  guideMessage?: ReactNode;
}

export default function MedievalLayout({ children, showGuide = false, guideMessage }: MedievalLayoutProps) {
  const [soundEnabled, setSoundEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-parchment via-parchmentDark to-parchment">
      {/* Background texture */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(200,166,75,0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(31,58,91,0.05) 0%, transparent 50%),
            linear-gradient(90deg, transparent 49%, rgba(200,166,75,0.02) 50%, transparent 51%)
          `
        }}
      />
      
      {/* Wooden header */}
      <header className="relative bg-wood border-b-4 border-gold shadow-lg z-20">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div 
              className="text-3xl"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              👑
            </motion.div>
            <div>
              <h1 className="font-display text-2xl font-bold text-gold">
                Orbit Guild
              </h1>
              <p className="text-parchment/70 text-sm font-body">
                Medieval Blockchain Academy
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Sound toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="w-10 h-10 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold hover:bg-gold/30 transition-colors"
            >
              {soundEnabled ? '🔊' : '🔇'}
            </button>
            
            {/* Decorative elements */}
            <div className="hidden md:flex items-center gap-2 text-gold/60">
              <div>⚡</div>
              <div>🔥</div>
              <div>💎</div>
            </div>
          </div>
        </div>
        
        {/* Metal rivets */}
        <div className="absolute top-2 left-4 w-2 h-2 bg-gold/60 rounded-full"></div>
        <div className="absolute top-2 right-4 w-2 h-2 bg-gold/60 rounded-full"></div>
        <div className="absolute bottom-2 left-4 w-2 h-2 bg-gold/60 rounded-full"></div>
        <div className="absolute bottom-2 right-4 w-2 h-2 bg-gold/60 rounded-full"></div>
      </header>

      {/* Main content with sidebar */}
      <div className="flex min-h-[calc(100vh-80px)]">
        {/* <CastleSidebar className="relative z-10" /> */}
        
        <main className="flex-1 relative">
          {/* Page content */}
          <motion.div 
            className="h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
          
          {/* Ambient particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </main>
      </div>
      
      {/* Guide character */}
      {showGuide && guideMessage && (
        <GuideBubble character="🧙‍♀️" position="bottom-right" autoShow>
          {guideMessage}
        </GuideBubble>
      )}
      
      {/* Wooden footer */}
      <footer className="bg-wood border-t-4 border-gold px-6 py-4 relative">
        <div className="text-center text-parchment/60 font-body text-sm">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div>🏰</div>
            <div>⚡</div>
            <div>🔮</div>
          </div>
          <p>© 2024 Orbit Guild - Where Medieval Wisdom Meets Modern Blockchain</p>
        </div>
        
        {/* Metal rivets */}
        <div className="absolute top-2 left-4 w-2 h-2 bg-gold/60 rounded-full"></div>
        <div className="absolute top-2 right-4 w-2 h-2 bg-gold/60 rounded-full"></div>
      </footer>
    </div>
  );
}