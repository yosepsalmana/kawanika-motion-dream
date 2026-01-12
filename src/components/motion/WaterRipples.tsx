import { motion } from 'framer-motion';

const WaterRipples = () => {
  const ripples = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden pointer-events-none opacity-30">
      <svg
        viewBox="0 0 1200 200"
        className="absolute bottom-0 w-full"
        preserveAspectRatio="none"
      >
        {ripples.map((index) => (
          <motion.path
            key={index}
            d="M0 100 Q150 80 300 100 T600 100 T900 100 T1200 100 L1200 200 L0 200 Z"
            fill={`hsl(var(--sky-blue) / ${0.1 - index * 0.015})`}
            animate={{
              d: [
                'M0 100 Q150 80 300 100 T600 100 T900 100 T1200 100 L1200 200 L0 200 Z',
                'M0 100 Q150 120 300 100 T600 100 T900 100 T1200 100 L1200 200 L0 200 Z',
                'M0 100 Q150 80 300 100 T600 100 T900 100 T1200 100 L1200 200 L0 200 Z',
              ],
            }}
            transition={{
              duration: 4 + index * 0.5,
              delay: index * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              transform: `translateY(${index * 15}px)`,
            }}
          />
        ))}
      </svg>
      
      {/* Shimmer effect on water */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, hsl(var(--gold-shimmer) / 0.1) 50%, transparent 100%)',
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};

export default WaterRipples;