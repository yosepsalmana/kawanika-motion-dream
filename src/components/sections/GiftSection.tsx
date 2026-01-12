import { motion } from 'framer-motion';
import { Copy, Check, Gift, CreditCard, MapPin } from 'lucide-react';
import { useState } from 'react';
import GoldDivider from '@/components/ui/GoldDivider';

const giftOptions = [
  {
    bank: 'Bank Central Asia (BCA)',
    accountNumber: '1234567890',
    accountName: 'Aisha Putri Maharani',
    icon: CreditCard,
  },
  {
    bank: 'Bank Mandiri',
    accountNumber: '0987654321',
    accountName: 'Muhammad Rizki Pratama',
    icon: CreditCard,
  },
];

const GiftSection = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-medium/20 to-background" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-sky-blue mb-4">
            Your Blessings
          </p>
          <h2 className="font-display text-5xl md:text-6xl gradient-gold-text mb-4">
            Wedding Gift
          </h2>
          <GoldDivider variant="floral" />
          <p className="text-cream-soft/70 font-body text-lg mt-6 max-w-lg mx-auto">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have provided options below.
          </p>
        </motion.div>

        {/* Gift icon */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Gift className="w-12 h-12 text-gold" />
            </motion.div>
          </div>
        </motion.div>

        {/* Bank accounts */}
        <div className="space-y-6 mb-12">
          {giftOptions.map((option, index) => (
            <motion.div
              key={option.bank}
              className="p-6 rounded-lg bg-navy-medium/50 border border-gold/20 backdrop-blur-sm"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <option.icon className="w-6 h-6 text-gold" />
                    <h3 className="font-heading text-xl text-cream">{option.bank}</h3>
                  </div>
                  <p className="text-2xl font-heading text-gold tracking-wider mb-1">
                    {option.accountNumber}
                  </p>
                  <p className="text-cream-soft/70 font-body">
                    a/n {option.accountName}
                  </p>
                </div>
                
                <motion.button
                  onClick={() => handleCopy(option.accountNumber, index)}
                  className={`p-3 rounded-lg border transition-all ${
                    copiedIndex === index
                      ? 'border-green-500 bg-green-500/10 text-green-500'
                      : 'border-gold/30 text-gold hover:bg-gold/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copiedIndex === index ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Physical gift address */}
        <motion.div
          className="p-6 rounded-lg bg-navy-medium/50 border border-gold/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gold/10">
              <MapPin className="w-6 h-6 text-gold" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-xl text-cream mb-2">Physical Gift Address</h3>
              <p className="text-cream-soft/70 font-body text-lg">
                Jl. Sudirman No. 123, Menteng<br />
                Jakarta Pusat, DKI Jakarta 10310<br />
                Indonesia
              </p>
              <p className="text-cream-soft/50 font-body text-sm mt-2">
                (Recipient: Aisha & Rizki)
              </p>
            </div>
            
            <motion.button
              onClick={() => handleCopy('Jl. Sudirman No. 123, Menteng, Jakarta Pusat, DKI Jakarta 10310', 99)}
              className={`p-3 rounded-lg border transition-all ${
                copiedIndex === 99
                  ? 'border-green-500 bg-green-500/10 text-green-500'
                  : 'border-gold/30 text-gold hover:bg-gold/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {copiedIndex === 99 ? (
                <Check className="w-5 h-5" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftSection;