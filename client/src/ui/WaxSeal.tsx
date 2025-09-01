import { motion } from 'framer-motion';

interface WaxSealProps {
  verdict: 'correct' | 'incorrect' | null;
  onAnimationComplete?: () => void;
}

export default function WaxSeal({ verdict, onAnimationComplete }: WaxSealProps) {
  if (!verdict) return null;

  const isCorrect = verdict === 'correct';
  
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      exit={{ scale: 0, rotate: 180 }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        duration: 0.8 
      }}
      onAnimationComplete={onAnimationComplete}
      className="absolute inset-0 flex items-center justify-center z-20 bg-wood/80 rounded-lg"
    >
      <div className="text-center">
        {/* Wax seal icon */}
        <motion.div 
          className="text-8xl mb-4"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {isCorrect ? '🏺' : '⚔️'}
        </motion.div>
        
        {/* Verdict */}
        <div className="bg-parchment px-8 py-4 rounded-xl border-4 border-gold shadow-2xl">
          <div className="text-2xl font-display font-bold text-royal mb-2">
            ROYAL VERDICT
          </div>
          <div className="text-xl font-display text-ink">
            {isCorrect ? '✓ TRUE' : '✗ FALSE'}
          </div>
        </div>
        
        {/* Stamped effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-3 text-sm text-gold/80 font-body italic"
        >
          *Wax seal stamped by the Royal Council*
        </motion.div>
        
        {/* Sparkling effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: Math.random() * 2,
                repeatDelay: Math.random() * 3
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}