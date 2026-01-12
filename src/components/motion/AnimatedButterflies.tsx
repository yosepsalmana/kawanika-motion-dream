import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Butterfly {
  id: number;
  startX: number;
  startY: number;
  scale: number;
  delay: number;
  duration: number;
}

const AnimatedButterflies = () => {
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  useEffect(() => {
    const generateButterflies = () => {
      const newButterflies: Butterfly[] = [];
      for (let i = 0; i < 6; i++) {
        newButterflies.push({
          id: i,
          startX: Math.random() * 100,
          startY: 20 + Math.random() * 60,
          scale: 0.5 + Math.random() * 0.5,
          delay: Math.random() * 8,
          duration: 20 + Math.random() * 15,
        });
      }
      setButterflies(newButterflies);
    };
    generateButterflies();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {butterflies.map((butterfly) => (
        <motion.div
          key={butterfly.id}
          className="absolute"
          style={{
            left: `${butterfly.startX}%`,
            top: `${butterfly.startY}%`,
            scale: butterfly.scale,
          }}
          animate={{
            x: [0, 200, -100, 300, -200, 0],
            y: [0, -50, 100, -80, 50, 0],
          }}
          transition={{
            duration: butterfly.duration,
            delay: butterfly.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="relative">
            {/* Left Wing */}
            <motion.div
              className="absolute origin-right"
              style={{ right: '50%' }}
              animate={{
                rotateY: [0, 70, 0],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
                <ellipse
                  cx="12"
                  cy="15"
                  rx="12"
                  ry="15"
                  fill="url(#wingGradientL)"
                  opacity="0.8"
                />
                <ellipse
                  cx="14"
                  cy="10"
                  rx="5"
                  ry="6"
                  fill="hsl(var(--gold-shimmer))"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient id="wingGradientL" x1="0" y1="0" x2="24" y2="30">
                    <stop offset="0%" stopColor="hsl(var(--gold))" />
                    <stop offset="100%" stopColor="hsl(var(--sky-blue))" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            {/* Right Wing */}
            <motion.div
              className="absolute origin-left"
              style={{ left: '50%' }}
              animate={{
                rotateY: [0, -70, 0],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
                <ellipse
                  cx="12"
                  cy="15"
                  rx="12"
                  ry="15"
                  fill="url(#wingGradientR)"
                  opacity="0.8"
                />
                <ellipse
                  cx="10"
                  cy="10"
                  rx="5"
                  ry="6"
                  fill="hsl(var(--gold-shimmer))"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient id="wingGradientR" x1="24" y1="0" x2="0" y2="30">
                    <stop offset="0%" stopColor="hsl(var(--gold))" />
                    <stop offset="100%" stopColor="hsl(var(--sky-blue))" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            {/* Body */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-1 h-8 bg-gold rounded-full" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedButterflies;