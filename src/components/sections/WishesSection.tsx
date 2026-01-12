import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import GoldDivider from '@/components/ui/GoldDivider';

// Sample wishes data - in production, this would come from a database
const sampleWishes = [
  {
    id: 1,
    name: 'Sarah Wijaya',
    message: 'Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, wa rahmah. Barakallahu lakuma wa baraka alaikuma.',
    date: '2025-03-15',
  },
  {
    id: 2,
    name: 'Ahmad Fadli',
    message: 'Congratulations to both of you! Wishing you a lifetime of love and happiness. May your journey together be filled with beautiful moments.',
    date: '2025-03-14',
  },
  {
    id: 3,
    name: 'Dewi Kartika',
    message: 'Barakallah! Semoga pernikahan kalian menjadi awal dari kebahagiaan yang tak berujung. Selamat ya!',
    date: '2025-03-13',
  },
  {
    id: 4,
    name: 'Budi Santoso',
    message: 'Happy wedding! Semoga Allah senantiasa memberkahi pernikahan kalian. Langgeng selalu ya! 💕',
    date: '2025-03-12',
  },
  {
    id: 5,
    name: 'Rina Maharani',
    message: 'So happy for you two! May your love grow stronger each day. Best wishes for your new chapter in life!',
    date: '2025-03-11',
  },
  {
    id: 6,
    name: 'Fajar Nugroho',
    message: 'Selamat ya untuk kalian berdua! Semoga menjadi pasangan yang saling melengkapi dan selalu bahagia.',
    date: '2025-03-10',
  },
];

const WishesSection = () => {
  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-medium/30 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-sky-blue mb-4">
            Kind Words
          </p>
          <h2 className="font-display text-5xl md:text-6xl gradient-gold-text mb-4">
            Wedding Wishes
          </h2>
          <GoldDivider variant="floral" />
        </motion.div>

        {/* Wishes icon */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center">
            <MessageCircle className="w-10 h-10 text-gold" />
          </div>
        </motion.div>

        {/* Wishes grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {sampleWishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              className="p-6 rounded-lg bg-navy-medium/50 border border-gold/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-sky-blue/20 flex items-center justify-center">
                  <span className="font-display text-lg text-gold">
                    {wish.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading text-cream">{wish.name}</h4>
                  <p className="text-cream-soft/50 text-sm font-body">
                    {new Date(wish.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>

              {/* Message */}
              <p className="text-cream-soft/80 font-body text-lg leading-relaxed">
                "{wish.message}"
              </p>

              {/* Decorative quote marks */}
              <div className="absolute top-4 right-4 opacity-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more indication */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-cream-soft/50 font-body italic">
            More wishes will appear here as guests send their RSVP
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WishesSection;