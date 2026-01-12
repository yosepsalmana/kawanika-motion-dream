import { motion, Easing } from 'framer-motion';

interface MonogramLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
}

const MonogramLogo = ({ size = 'md', className = '', animate = true }: MonogramLogoProps) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-40 h-40',
    xl: 'w-64 h-64',
  };

  const easeValue: Easing = [0.4, 0, 0.2, 1];

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: easeValue,
      },
    },
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className} relative`}
      initial={animate ? { scale: 0.8, opacity: 0 } : undefined}
      animate={animate ? { scale: 1, opacity: 1 } : undefined}
      transition={{ duration: 1, ease: easeValue }}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
      >
        {/* Outer decorative ring */}
        <motion.circle
          cx="100"
          cy="100"
          r="95"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          fill="none"
          initial={animate ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: easeValue }}
        />
        
        {/* Inner decorative ring */}
        <motion.circle
          cx="100"
          cy="100"
          r="85"
          stroke="url(#goldGradient)"
          strokeWidth="0.5"
          fill="none"
          initial={animate ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: easeValue }}
        />

        {/* Letter A - Left side of ampersand */}
        <motion.path
          d="M55 140 L75 60 L95 140 M60 115 L90 115"
          stroke="url(#goldGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={animate ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: easeValue }}
        />

        {/* Ampersand & */}
        <motion.path
          d="M100 90 Q90 80 100 70 Q110 60 115 70 Q120 80 110 95 Q100 110 100 90"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={animate ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.7, ease: easeValue }}
        />

        {/* Letter R - Right side */}
        <motion.path
          d="M110 140 L110 60 L135 60 Q150 60 150 80 Q150 100 130 100 L110 100 M125 100 L150 140"
          stroke="url(#goldGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={animate ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.9, ease: easeValue }}
        />

        {/* Decorative flourishes */}
        <motion.path
          d="M40 100 Q50 90 60 100 Q50 110 40 100"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          fill="hsl(var(--gold) / 0.3)"
          initial={animate ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: easeValue }}
        />
        <motion.path
          d="M160 100 Q150 90 140 100 Q150 110 160 100"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          fill="hsl(var(--gold) / 0.3)"
          initial={animate ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: easeValue }}
        />

        {/* Top decorative element */}
        <motion.path
          d="M85 45 Q100 35 115 45"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          fill="none"
          initial={animate ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3, ease: easeValue }}
        />
        
        {/* Bottom decorative element */}
        <motion.path
          d="M85 155 Q100 165 115 155"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          fill="none"
          initial={animate ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3, ease: easeValue }}
        />

        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--gold))" />
            <stop offset="50%" stopColor="hsl(var(--gold-shimmer))" />
            <stop offset="100%" stopColor="hsl(var(--gold))" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glow effect */}
      {animate && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--gold) / 0.2) 0%, transparent 70%)',
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
    </motion.div>
  );
};

export default MonogramLogo;