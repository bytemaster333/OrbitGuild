import { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface GildedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export default function GildedButton({ 
  children, 
  variant = 'primary', 
  icon, 
  size = 'md',
  className = "",
  disabled,
  ...props 
}: GildedButtonProps) {
  const baseClasses = "font-display font-semibold rounded-lg transition-all duration-300 relative overflow-hidden group flex items-center justify-center gap-2";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const variantClasses = {
    primary: `
      bg-gradient-to-r from-gold to-gold/80 
      text-wood border-2 border-gold/60
      hover:shadow-ember hover:from-gold/90 hover:to-gold
      active:scale-95
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
    secondary: `
      bg-transparent text-gold 
      border-2 border-gold
      hover:bg-gold hover:text-wood hover:shadow-ember
      active:scale-95
      disabled:opacity-50 disabled:cursor-not-allowed
    `
  };

  const { onAnimationStart, onAnimationEnd, ...restProps } = props as any;

  return (
    <motion.button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      disabled={disabled}
      {...restProps}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
      
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}