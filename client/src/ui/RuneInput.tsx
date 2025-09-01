import { InputHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';

interface RuneInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  rune?: string;
}

const RuneInput = forwardRef<HTMLInputElement, RuneInputProps>(({ 
  label, 
  error, 
  rune = "⚡",
  className = "",
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-display font-semibold text-ink">
          <span className="mr-2">{rune}</span>
          {label}
        </label>
      )}
      
      <motion.div 
        className="relative"
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 
            bg-parchment border-2 border-gold/30 
            rounded-lg font-body text-ink
            focus:border-gold focus:ring-2 focus:ring-gold/20
            transition-all duration-300
            placeholder:text-ink/50
            ${error ? 'border-burgundy focus:border-burgundy focus:ring-burgundy/20' : ''}
            ${className}
          `}
          {...props}
        />
        
        {/* Decorative rune corner */}
        <div className="absolute top-1 right-1 text-gold/30 text-xs pointer-events-none">
          {rune}
        </div>
      </motion.div>
      
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-burgundy font-body flex items-center gap-1"
        >
          <span>⚠️</span>
          {error}
        </motion.p>
      )}
    </div>
  );
});

RuneInput.displayName = 'RuneInput';

export default RuneInput;