import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SceneRenderer } from './SceneRenderer';
import { Scene, SceneAction, StoryData } from '../../types/story';
import storyData from '../../data/lesson.story.json';
import medievalAcademyBg from '@assets/generated_images/Medieval_academy_background_3feca1d5.png';
import epicOpeningBg from '@assets/generated_images/Epic_medieval_opening_screen_c1f9d91c.png';

export function StoryNavigation() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  const story = storyData as StoryData;
  const currentScene = story.scenes[currentSceneIndex];

  useEffect(() => {
    // Extended cinematic intro to showcase the beautiful opening
    const introTimer = setTimeout(() => setShowIntro(false), 5000);
    return () => clearTimeout(introTimer);
  }, []);

  const handleSceneAction = (action: SceneAction) => {
    switch (action.action) {
      case 'next':
        if (currentSceneIndex < story.scenes.length - 1) {
          setCurrentSceneIndex(currentSceneIndex + 1);
        }
        break;
      case 'restart':
        setCurrentSceneIndex(0);
        break;
      default:
        // Handle other actions in SceneRenderer
        break;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full-screen medieval academy background */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${medievalAcademyBg})`,
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Static atmospheric overlay */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-orange-800/5"></div>
      </div>


      {/* Enhanced Scene Progress - stays top right */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-parchment/90 backdrop-blur-sm rounded-xl p-4 border border-gold/30 shadow-scroll">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-display text-royal">Chapter Progress:</span>
            <div className="flex space-x-2">
              {story.scenes.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index <= currentSceneIndex 
                      ? 'bg-gold shadow-ember scale-110' 
                      : 'bg-ink/20 hover:bg-ink/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Cinematic Intro */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 z-40 overflow-hidden"
          >
            {/* Epic Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${epicOpeningBg})` }}
            />
            
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Magical particle effects */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: Math.random() * window.innerWidth,
                    y: window.innerHeight + 50,
                    opacity: 0 
                  }}
                  animate={{ 
                    y: -50,
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 3
                  }}
                  className="absolute w-2 h-2 bg-amber-400 rounded-full shadow-lg"
                  style={{
                    boxShadow: '0 0 10px #fbbf24, 0 0 20px #fbbf24, 0 0 30px #fbbf24'
                  }}
                />
              ))}
            </div>
            
            {/* Main title content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                className="text-center max-w-4xl px-8"
              >
                {/* Ornate title frame */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 1.2 }}
                  className="relative mb-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent h-px top-0" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent h-px bottom-0" />
                </motion.div>
                
                {/* Main title with enhanced styling */}
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="text-5xl md:text-7xl font-display text-transparent bg-clip-text bg-gradient-to-b from-gold via-amber-300 to-yellow-600 mb-6 leading-tight tracking-wider"
                  style={{
                    textShadow: '0 0 30px rgba(251, 191, 36, 0.5)',
                    filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.8))'
                  }}
                >
                  {story.title}
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="text-lg md:text-xl text-amber-100 mb-8 font-medium tracking-wide"
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
                >
                  Begin Your Journey into the World of Blockchain Mastery
                </motion.p>
                
                {/* Decorative elements */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '300px' }}
                  transition={{ delay: 2, duration: 1.5 }}
                  className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
                />
                
                {/* Loading indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                  className="text-amber-300 text-sm tracking-widest"
                >
                  ENTERING THE ACADEMY...
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Story Content */}
      <AnimatePresence mode="wait">
        {!showIntro && (
          <motion.div
            key={currentScene.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <SceneRenderer
              scene={currentScene}
              onAction={handleSceneAction}
              isActive={!showIntro}
              currentSceneIndex={currentSceneIndex}
              totalScenes={story.scenes.length}
              onPreviousScene={() => setCurrentSceneIndex(currentSceneIndex - 1)}
              onReturnToBeginning={() => setCurrentSceneIndex(0)}
            />
          </motion.div>
        )}
      </AnimatePresence>




    </div>
  );
}