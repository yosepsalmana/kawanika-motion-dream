import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  opacity: number;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals: Petal[] = [];
      for (let i = 0; i < 20; i++) {
        newPetals.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 15 + Math.random() * 10,
          size: 10 + Math.random() * 20,
          rotation: Math.random() * 360,
          opacity: 0.3 + Math.random() * 0.4,
        });
      }
      setPetals(newPetals);
    };
    generatePetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: '-5%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(petal.id) * 100, Math.cos(petal.id) * -50, 0],
            rotate: [petal.rotation, petal.rotation + 360],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            style={{ opacity: petal.opacity }}
          >
            <path
              d="M12 2C12 2 14 6 14 10C14 14 12 18 12 18C12 18 10 14 10 10C10 6 12 2 12 2Z"
              fill="hsl(var(--gold-light))"
            />
            <path
              d="M12 6C12 6 16 8 18 12C20 16 18 20 18 20C18 20 14 18 12 14C10 10 12 6 12 6Z"
              fill="hsl(var(--gold))"
              opacity="0.8"
            />
            <path
              d="M12 6C12 6 8 8 6 12C4 16 6 20 6 20C6 20 10 18 12 14C14 10 12 6 12 6Z"
              fill="hsl(var(--sky-blue))"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingPetals;