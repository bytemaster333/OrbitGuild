import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scene, SceneAction, EffectType } from '../../types/story';
import { GuideBubble } from './GuideBubble';
import { SceneEffects } from './SceneEffects';

import { useLocation } from 'wouter';

interface SceneRendererProps {
  scene: Scene;
  onAction: (action: SceneAction) => void;
  isActive: boolean;
  currentSceneIndex?: number;
  totalScenes?: number;
  onPreviousScene?: () => void;
  onReturnToBeginning?: () => void;
}

export function SceneRenderer({ scene, onAction, isActive, currentSceneIndex, totalScenes, onPreviousScene, onReturnToBeginning }: SceneRendererProps) {
  const [activeEffects, setActiveEffects] = useState<EffectType[]>([]);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (scene.effects && isActive) {
      setActiveEffects(scene.effects);
      const timer = setTimeout(() => setActiveEffects([]), 3000);
      return () => clearTimeout(timer);
    }
  }, [scene.id, isActive]);

  const handleAction = (action: SceneAction) => {
    // Handle special actions
    if (action.action === 'openBuilder') {
      setLocation('/builder/single?preset=erc20_seed');
      return;
    }
    if (action.action === 'openQuiz') {
      setLocation('/academy/quiz');
      return;
    }
    if (action.action === 'tooltip' && action.payload) {
      setShowTooltip(action.payload);
      setTimeout(() => setShowTooltip(null), 4000);
      return;
    }

    // Trigger effect if specified
    if (action.effect) {
      setActiveEffects([action.effect]);
      setTimeout(() => setActiveEffects([]), 2000);
    }

    // Pass action to parent
    onAction(action);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Scene Effects */}
      <SceneEffects effects={activeEffects} />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-5xl mx-auto px-8 py-16">
          
          {/* Enhanced Story Content with Semi-transparent Design */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative mb-8"
          >
            {/* Enhanced medieval story manuscript */}
            <div className="relative medieval-story-box rounded-3xl p-12 overflow-hidden">
              {/* Simple corner decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-gold/50 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-gold/50 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-gold/50 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-gold/50 rounded-br-lg"></div>
              

              
              {/* Story text with medieval manuscript styling */}
              <div className="relative z-10">
                {scene.paragraphs?.map((paragraph, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.6, duration: 0.8 }}
                    className="mb-8 last:mb-0 relative"
                  >
                    {/* Enhanced decorative initial letter */}
                    {index === 0 && (
                      <motion.div
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                        className="float-left mr-6 mb-4"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-gold via-royal to-burgundy rounded-xl flex items-center justify-center text-3xl text-white font-bold shadow-ember border-2 border-gold/50 relative overflow-hidden">
                          <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                          />
                          <span className="relative z-10 font-display">{paragraph.charAt(0)}</span>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Paragraph with enhanced typography */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.6 + 0.4, duration: 1 }}
                      className="text-xl text-ink leading-relaxed font-serif tracking-wide relative drop-shadow-sm"
                    >
                      {index === 0 ? paragraph.substring(1) : paragraph}
                      
                      {/* Decorative paragraph separator for non-last paragraphs */}
                      {index < (scene.paragraphs?.length || 0) - 1 && (
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: '60px', opacity: 0.6 }}
                          transition={{ delay: index * 0.6 + 1.2, duration: 0.8 }}
                          className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"
                        />
                      )}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Guide Character */}
          {scene.guide && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-12"
            >
              <GuideBubble
                name={scene.guide.name || 'Scribe Elara'}
                avatar={scene.guide.avatar || '🧙‍♀️'}
                text={scene.guide.text}
                currentSceneIndex={currentSceneIndex}
                totalScenes={totalScenes}
                onPreviousScene={onPreviousScene}
                onReturnToBeginning={onReturnToBeginning}
              />
            </motion.div>
          )}

          {/* Enhanced Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center"
          >
            <div className="parchment-overlay rounded-2xl p-8">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="font-display text-2xl text-royal mb-6 drop-shadow-sm"
              >
                Choose Your Path
              </motion.h3>
              
              <div className="flex flex-wrap gap-6 justify-center">
                {scene.actions?.map((action, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + index * 0.2 }}
                    onClick={() => handleAction(action)}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 15px 35px rgba(200, 166, 75, 0.4)',
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group px-8 py-4 bg-gradient-to-r from-gold to-royal text-white rounded-xl font-display font-semibold text-lg shadow-ember border-2 border-gold/50 overflow-hidden min-w-[200px] drop-shadow-lg"
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    <span className="relative z-10 drop-shadow-sm">{action.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls - Separate box outside Choose Your Path */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="mt-8 text-center"
          >
            <div className="parchment-overlay rounded-2xl p-6">
              <div className="flex items-center justify-center space-x-4">
                <a
                  href="/academy"
                  className="bg-burgundy/80 text-white px-6 py-3 rounded-lg border border-burgundy/60 text-sm font-medieval hover:bg-burgundy/90 transition-colors shadow-lg backdrop-blur-sm"
                >
                  📚 Back to Academy
                </a>
                
                {(currentSceneIndex ?? 0) > 0 && onPreviousScene && (
                  <button
                    onClick={onPreviousScene}
                    className="bg-royal/80 text-white px-6 py-3 rounded-lg border border-royal/60 text-sm font-medieval hover:bg-royal/90 transition-colors shadow-lg backdrop-blur-sm"
                  >
                    ⬅️ Previous Scene
                  </button>
                )}
                
                {onReturnToBeginning && (
                  <button
                    onClick={onReturnToBeginning}
                    className="bg-gold/80 text-ink px-6 py-3 rounded-lg border border-gold/60 text-sm font-medieval hover:bg-gold/90 transition-colors shadow-lg backdrop-blur-sm"
                  >
                    🏰 Beginning
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Tooltip Display */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
              >
                <div className="medieval-scroll max-w-md p-4 border-2 border-medieval-accent shadow-2xl">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📜</span>
                    <p className="text-sm text-medieval-text font-serif leading-relaxed">
                      {showTooltip}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}