import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import MonogramLogo from '@/components/MonogramLogo';
import FloatingPetals from '@/components/motion/FloatingPetals';
import GoldParticles from '@/components/motion/GoldParticles';

interface CoverSectionProps {
  onUnlock: () => void;
  isUnlocked: boolean;
}

const CoverSection = ({ onUnlock, isUnlocked }: CoverSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleUnlock = () => {
    onUnlock();
  };

  return (
    <AnimatePresence>
      {!isUnlocked && (
        <motion.section
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
          exit={{
            scale: 1.2,
            opacity: 0,
            filter: 'blur(20px)',
          }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden">
            <FloatingPetals />
            <GoldParticles />
            
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-medium/30 to-transparent" />
            
            {/* Animated glow orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, hsl(var(--gold) / 0.3) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, hsl(var(--sky-blue) / 0.2) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.1, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Main content */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-8 px-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            {/* Monogram Logo */}
            <MonogramLogo size="xl" animate={true} />

            {/* Couple names */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
                The Wedding of
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl gradient-gold-text">
                Aisha & Rizki
              </h1>
            </motion.div>

            {/* Wedding date */}
            <motion.p
              className="text-lg md:text-xl tracking-[0.2em] text-cream-soft font-heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              12 • 04 • 2025
            </motion.p>

            {/* Unlock button */}
            <motion.button
              onClick={handleUnlock}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative mt-8 px-10 py-4 rounded-full border border-gold/50 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20"
                initial={{ x: '-100%' }}
                animate={isHovered ? { x: '100%' } : { x: '-100%' }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Button shimmer */}
              <div className="absolute inset-0 shimmer opacity-30" />
              
              <span className="relative z-10 font-heading text-lg tracking-wider text-cream">
                Open Invitation
              </span>
              
              {/* Decorative corners */}
              <svg className="absolute top-0 left-0 w-4 h-4 text-gold opacity-60" viewBox="0 0 16 16">
                <path d="M0 16 L0 0 L16 0" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
              <svg className="absolute top-0 right-0 w-4 h-4 text-gold opacity-60" viewBox="0 0 16 16">
                <path d="M16 16 L16 0 L0 0" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
              <svg className="absolute bottom-0 left-0 w-4 h-4 text-gold opacity-60" viewBox="0 0 16 16">
                <path d="M0 0 L0 16 L16 16" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
              <svg className="absolute bottom-0 right-0 w-4 h-4 text-gold opacity-60" viewBox="0 0 16 16">
                <path d="M16 0 L16 16 L0 16" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </motion.button>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <motion.div
                className="w-6 h-10 rounded-full border border-gold/30 flex items-start justify-center p-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-1 h-2 rounded-full bg-gold"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default CoverSection;