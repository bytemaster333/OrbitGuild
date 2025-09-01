import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navigationItems = [
  { path: '/', label: 'Royal Hall', icon: '🏰', description: 'Main entrance' },
  { path: '/academy/lesson', label: 'Academy', icon: '📚', description: 'Learning chambers' },
  { path: '/academy/quiz', label: 'Trial', icon: '⚖️', description: 'Council judgment' },
  { path: '/builder/single', label: 'Forge', icon: '⚒️', description: 'Token workshop' },
  { path: '/replay', label: 'Scrying', icon: '🔮', description: 'Arcane console' },
];

interface CastleSidebarProps {
  className?: string;
}

export default function CastleSidebar({ className = "" }: CastleSidebarProps) {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.div 
      className={`bg-wood border-r-2 border-gold h-full flex flex-col ${className}`}
      animate={{ width: isCollapsed ? 80 : 240 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Header */}
      <div className="p-4 border-b border-gold/30">
        <motion.div 
          className="flex items-center gap-3"
          animate={{ justifyContent: isCollapsed ? 'center' : 'flex-start' }}
        >
          <div className="text-2xl">👑</div>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="font-display font-bold text-gold"
              >
                Orbit Guild
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute top-4 -right-3 w-6 h-6 bg-wood border border-gold rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-wood transition-colors z-10"
        >
          <motion.div
            animate={{ rotate: isCollapsed ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ←
          </motion.div>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path === '/academy/lesson' && location.pathname === '/academy/quiz') ||
            (item.path.startsWith('/builder') && location.pathname.startsWith('/builder'));
          
          return (
            <Link key={item.path} to={item.path}>
              <motion.div
                className={`
                  relative flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200
                  ${isActive 
                    ? 'bg-gold/20 text-gold border border-gold/30' 
                    : 'text-parchment/80 hover:text-gold hover:bg-gold/10'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-xl min-w-[24px]">{item.icon}</div>
                
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex-1"
                    >
                      <div className="font-display font-semibold">{item.label}</div>
                      <div className="text-xs opacity-70">{item.description}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 w-1 h-8 bg-gold rounded-r-full"
                    style={{ transform: 'translateY(-50%)' }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gold/30">
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-xs text-parchment/60 font-body"
            >
              <div>🏰 Medieval Learning</div>
              <div>Experience</div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {isCollapsed && (
          <div className="text-center">
            <div className="text-parchment/60">🏰</div>
          </div>
        )}
      </div>
    </motion.div>
  );
}