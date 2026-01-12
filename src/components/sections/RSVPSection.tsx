import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Send } from 'lucide-react';
import GoldDivider from '@/components/ui/GoldDivider';

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    guests: '1',
    wishes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-medium/30 to-background" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-sky-blue mb-4">
            We Hope You Can Join Us
          </p>
          <h2 className="font-display text-5xl md:text-6xl gradient-gold-text mb-4">
            RSVP
          </h2>
          <GoldDivider variant="floral" />
        </motion.div>

        {!isSubmitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-lg bg-navy-medium/50 border border-gold/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Name input */}
            <div className="space-y-2">
              <label className="block text-cream font-heading text-lg">Your Name</label>
              <motion.input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-navy-deep border border-gold/30 text-cream font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                placeholder="Enter your full name"
                required
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            {/* Attendance radio */}
            <div className="space-y-3">
              <label className="block text-cream font-heading text-lg">Will you attend?</label>
              <div className="grid grid-cols-2 gap-4">
                {['Yes, I will attend', 'Sorry, I cannot attend'].map((option) => (
                  <motion.label
                    key={option}
                    className={`flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-all ${
                      formData.attendance === option
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-gold/30 text-cream-soft hover:border-gold/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value={option}
                      checked={formData.attendance === option}
                      onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                      className="sr-only"
                      required
                    />
                    <span className="font-body text-center">{option.includes('Yes') ? 'Yes, I will attend ✨' : 'Sorry, cannot attend 😔'}</span>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Number of guests */}
            {formData.attendance.includes('Yes') && (
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label className="block text-cream font-heading text-lg">Number of guests</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-navy-deep border border-gold/30 text-cream font-body focus:outline-none focus:border-gold transition-colors"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </motion.div>
            )}

            {/* Wishes textarea */}
            <div className="space-y-2">
              <label className="block text-cream font-heading text-lg">Your wishes for us</label>
              <motion.textarea
                value={formData.wishes}
                onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-navy-deep border border-gold/30 text-cream font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Write your wishes and prayers for the couple..."
                rows={4}
                required
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-gold text-primary-foreground font-heading text-lg flex items-center justify-center gap-2 disabled:opacity-70"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <motion.div
                  className="w-6 h-6 border-2 border-primary-foreground border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send RSVP
                </>
              )}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            className="text-center p-12 rounded-lg bg-navy-medium/50 border border-gold/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring' }}
          >
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <Check className="w-10 h-10 text-gold" />
            </motion.div>
            <h3 className="font-display text-3xl text-gold mb-4">Thank You!</h3>
            <p className="text-cream-soft font-body text-lg">
              Your RSVP has been received. We look forward to celebrating with you!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RSVPSection;