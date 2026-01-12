import { motion } from 'framer-motion';
import MonogramLogo from '@/components/MonogramLogo';

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-medium/50 to-background" />

      <motion.div
        className="relative z-10 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Monogram watermark */}
        <motion.div
          className="flex justify-center mb-8 opacity-30"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <MonogramLogo size="md" animate={false} />
        </motion.div>

        {/* Thank you message */}
        <motion.div
          className="space-y-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-display text-3xl md:text-4xl text-gold">
            Thank You
          </p>
          <p className="text-cream-soft/70 font-body text-lg">
            For being part of our special day. Your presence and blessings mean the world to us.
          </p>
        </motion.div>

        {/* Couple names */}
        <motion.p
          className="font-display text-2xl gradient-gold-text mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Aisha & Rizki
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="w-24 h-px mx-auto mb-8"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, hsl(var(--gold)) 50%, transparent 100%)',
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        {/* Creator credit */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-cream-soft/50 font-body text-sm">
            Crafted with love by
          </p>
          <p className="text-gold font-heading text-lg tracking-wider">
            KAWANIKA
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-cream-soft/30 font-body text-xs mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          © 2025 KAWANIKA. All rights reserved.
        </motion.p>
      </motion.div>

      {/* Fading ambient elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, hsl(var(--navy-deep)) 0%, transparent 100%)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      />
    </footer>
  );
};

export default Footer;