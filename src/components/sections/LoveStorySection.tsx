import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import GoldDivider from '@/components/ui/GoldDivider';

const loveStoryData = [
  {
    year: '2020',
    title: 'First Meet',
    description: 'Pertemuan pertama kami terjadi di sebuah seminar. Senyuman hangat dan obrolan yang mengalir menjadi awal dari segalanya.',
    icon: '💫',
  },
  {
    year: '2021',
    title: 'Getting Closer',
    description: 'Kami mulai lebih sering berkomunikasi. Setiap percakapan membawa kami lebih dekat dan memahami satu sama lain.',
    icon: '💕',
  },
  {
    year: '2023',
    title: 'The Proposal',
    description: 'Di bawah langit malam yang bertabur bintang, dia berlutut dan mengucapkan kata-kata yang mengubah hidup kami selamanya.',
    icon: '💍',
  },
  {
    year: '2025',
    title: 'Forever Begins',
    description: 'Hari ini kami memulai perjalanan baru sebagai satu. Bersama selamanya dalam cinta dan kebahagiaan.',
    icon: '👰🤵',
  },
];

const LoveStorySection = () => {
  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-medium/30 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-sky-blue mb-4">
            Our Journey
          </p>
          <h2 className="font-display text-5xl md:text-6xl gradient-gold-text mb-4">
            Love Story
          </h2>
          <GoldDivider variant="floral" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, hsl(var(--gold)) 10%, hsl(var(--gold)) 90%, transparent 100%)',
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          {loveStoryData.map((story, index) => (
            <motion.div
              key={story.year}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Content card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <motion.div
                  className="p-6 rounded-lg bg-navy-medium/50 border border-gold/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.02, borderColor: 'hsl(var(--gold) / 0.5)' }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-4xl mb-4 block">{story.icon}</span>
                  <p className="text-gold font-heading text-lg mb-2">{story.year}</p>
                  <h3 className="font-display text-3xl text-cream mb-3">{story.title}</h3>
                  <p className="text-cream-soft/70 font-body text-lg">{story.description}</p>
                </motion.div>
              </div>

              {/* Center dot */}
              <div className="w-2/12 flex justify-center">
                <motion.div
                  className="relative w-4 h-4 rounded-full bg-gold shadow-gold z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4, type: 'spring' }}
                >
                  {/* Pulse animation */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gold"
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Empty space for other side */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Decorative hearts */}
        <motion.div
          className="absolute top-20 right-10 text-gold/20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Heart className="w-16 h-16" fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-10 text-gold/20"
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <Heart className="w-12 h-12" fill="currentColor" />
        </motion.div>
      </div>
    </section>
  );
};

export default LoveStorySection;