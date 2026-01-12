import { motion } from 'framer-motion';
import GoldDivider from '@/components/ui/GoldDivider';

const QuranSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-medium/20 to-background" />
      
      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center space-y-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
      >
        {/* Bismillah */}
        <motion.p
          className="font-display text-3xl md:text-4xl text-gold"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </motion.p>

        <GoldDivider variant="floral" className="my-8" />

        {/* Arabic verse */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-2xl md:text-3xl leading-relaxed text-cream font-heading" dir="rtl">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
          </p>
        </motion.div>

        {/* Translation */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg md:text-xl text-cream-soft/80 font-body leading-relaxed italic">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, 
            agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. 
            Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
          </p>
          
          <motion.p
            className="text-gold-light font-heading text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            — QS. Ar-Rum: 21
          </motion.p>
        </motion.div>

        <GoldDivider variant="ornate" className="mt-12" />
      </motion.div>

      {/* Decorative corner ornaments */}
      <svg className="absolute top-10 left-10 w-24 h-24 text-gold/20" viewBox="0 0 100 100">
        <motion.path
          d="M0 100 L0 30 Q0 0 30 0 L100 0"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />
        <motion.circle
          cx="30"
          cy="30"
          r="5"
          fill="currentColor"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        />
      </svg>
      <svg className="absolute top-10 right-10 w-24 h-24 text-gold/20 rotate-90" viewBox="0 0 100 100">
        <motion.path
          d="M0 100 L0 30 Q0 0 30 0 L100 0"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />
      </svg>
      <svg className="absolute bottom-10 left-10 w-24 h-24 text-gold/20 -rotate-90" viewBox="0 0 100 100">
        <motion.path
          d="M0 100 L0 30 Q0 0 30 0 L100 0"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />
      </svg>
      <svg className="absolute bottom-10 right-10 w-24 h-24 text-gold/20 rotate-180" viewBox="0 0 100 100">
        <motion.path
          d="M0 100 L0 30 Q0 0 30 0 L100 0"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />
      </svg>
    </section>
  );
};

export default QuranSection;