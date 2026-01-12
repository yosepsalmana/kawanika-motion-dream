import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

// Import all sections
import CoverSection from '@/components/sections/CoverSection';
import QuranSection from '@/components/sections/QuranSection';
import BrideSection from '@/components/sections/BrideSection';
import GroomSection from '@/components/sections/GroomSection';
import LoveStorySection from '@/components/sections/LoveStorySection';
import GallerySection from '@/components/sections/GallerySection';
import WeddingDetailsSection from '@/components/sections/WeddingDetailsSection';
import RSVPSection from '@/components/sections/RSVPSection';
import GiftSection from '@/components/sections/GiftSection';
import WishesSection from '@/components/sections/WishesSection';
import Footer from '@/components/sections/Footer';

// Import motion elements
import FloatingPetals from '@/components/motion/FloatingPetals';
import AnimatedButterflies from '@/components/motion/AnimatedButterflies';
import GoldParticles from '@/components/motion/GoldParticles';
import SwayingPlants from '@/components/motion/SwayingPlants';

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleUnlock = () => {
    setIsUnlocked(true);
    setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    // Create audio element for background music
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    if (isUnlocked && !isMuted) {
      audioRef.current.play().catch(() => {
        // Autoplay may be blocked
        console.log('Audio autoplay blocked');
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isUnlocked, isMuted]);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Cover section - always visible until unlocked */}
      <CoverSection onUnlock={handleUnlock} isUnlocked={isUnlocked} />

      {/* Main content - visible after unlock */}
      <AnimatePresence>
        {isUnlocked && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Global ambient motion elements */}
            <FloatingPetals />
            <AnimatedButterflies />
            <GoldParticles />
            <SwayingPlants />

            {/* Audio control button */}
            <motion.button
              onClick={toggleMute}
              className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-navy-medium/80 border border-gold/30 backdrop-blur-sm text-gold hover:bg-navy-medium transition-colors"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </motion.button>

            {/* All sections */}
            <QuranSection />
            <BrideSection />
            <GroomSection />
            <LoveStorySection />
            <GallerySection />
            <WeddingDetailsSection />
            <RSVPSection />
            <GiftSection />
            <WishesSection />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;