import { motion } from 'framer-motion';

const SwayingPlants = () => {
  const plants = [
    { id: 1, position: 'left-0 bottom-0', scale: 1, delay: 0 },
    { id: 2, position: 'right-0 bottom-0', scale: -1, delay: 0.5 },
    { id: 3, position: 'left-10 bottom-0', scale: 0.7, delay: 1 },
    { id: 4, position: 'right-10 bottom-0', scale: -0.7, delay: 1.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {plants.map((plant) => (
        <motion.div
          key={plant.id}
          className={`absolute ${plant.position}`}
          style={{ scaleX: plant.scale > 0 ? 1 : -1, scale: Math.abs(plant.scale) }}
          animate={{
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: 4 + plant.delay,
            delay: plant.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width="200" height="300" viewBox="0 0 200 300" fill="none" className="opacity-40">
            {/* Main stem */}
            <motion.path
              d="M100 300 Q90 250 100 200 Q110 150 100 100 Q90 50 100 0"
              stroke="hsl(var(--gold) / 0.5)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: plant.delay }}
            />
            {/* Leaves */}
            <motion.ellipse
              cx="80"
              cy="180"
              rx="30"
              ry="15"
              fill="hsl(var(--gold) / 0.3)"
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '100px 180px' }}
            />
            <motion.ellipse
              cx="120"
              cy="140"
              rx="35"
              ry="18"
              fill="hsl(var(--sky-blue) / 0.2)"
              animate={{ rotate: [5, -5, 5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '100px 140px' }}
            />
            <motion.ellipse
              cx="75"
              cy="100"
              rx="28"
              ry="12"
              fill="hsl(var(--gold) / 0.25)"
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '100px 100px' }}
            />
            {/* Flower */}
            <motion.circle
              cx="100"
              cy="30"
              r="20"
              fill="hsl(var(--gold) / 0.4)"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="100"
              cy="30"
              r="10"
              fill="hsl(var(--gold-shimmer) / 0.6)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, delay: 0.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default SwayingPlants;