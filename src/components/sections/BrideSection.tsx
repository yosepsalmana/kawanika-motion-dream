import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import GoldDivider from '@/components/ui/GoldDivider';

const BrideSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-0 w-64 h-64 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full text-gold">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
      >
        {/* The Bride label */}
        <motion.p
          className="text-sm tracking-[0.3em] uppercase text-sky-blue mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          The Bride
        </motion.p>

        {/* Photo placeholder with frame */}
        <motion.div
          className="relative w-64 h-64 mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Decorative frame */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
            <motion.rect
              x="10"
              y="10"
              width="180"
              height="180"
              rx="100"
              stroke="hsl(var(--gold))"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
            <motion.rect
              x="20"
              y="20"
              width="160"
              height="160"
              rx="80"
              stroke="hsl(var(--gold) / 0.5)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.3 }}
            />
          </svg>
          
          {/* Photo circle */}
          <div className="absolute inset-8 rounded-full overflow-hidden bg-navy-medium border border-gold/30">
            <div className="w-full h-full bg-gradient-to-br from-gold/10 to-sky-blue/10 flex items-center justify-center">
              <span className="font-display text-6xl text-gold">A</span>
            </div>
          </div>
        </motion.div>

        {/* Bride name */}
        <motion.h2
          className="font-display text-5xl md:text-6xl gradient-gold-text mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Aisha Putri Maharani
        </motion.h2>

        <GoldDivider variant="simple" className="my-6" />

        {/* Parents info */}
        <motion.div
          className="space-y-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-cream-soft/70 font-body text-lg">
            Putri dari
          </p>
          <p className="text-cream font-heading text-xl">
            Bapak H. Ahmad Sudrajat &<br />
            Ibu Hj. Siti Rahayu
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-cream-soft/60 font-body text-lg italic max-w-md mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          "Dengan cinta dan kasih sayang, kami akan memulai perjalanan indah menuju kehidupan baru."
        </motion.p>

        {/* Instagram button */}
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Instagram className="w-5 h-5" />
          <span className="font-body">@aisha.maharani</span>
        </motion.a>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute left-10 top-1/3 w-16 h-16 opacity-30"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 50 50" className="w-full h-full text-gold">
          <path d="M25 5 Q35 15 25 25 Q15 35 25 45" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M15 25 Q25 15 35 25 Q25 35 15 25" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>
    </section>
  );
};

export default BrideSection;