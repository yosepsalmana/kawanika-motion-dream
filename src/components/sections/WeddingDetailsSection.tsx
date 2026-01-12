import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Navigation } from 'lucide-react';
import { useState, useEffect } from 'react';
import GoldDivider from '@/components/ui/GoldDivider';
import WaterRipples from '@/components/motion/WaterRipples';

const WeddingDetailsSection = () => {
  const weddingDate = new Date('2025-04-12T08:00:00');
  
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSaveCalendar = () => {
    const event = {
      text: 'Wedding of Aisha & Rizki',
      dates: '20250412T080000/20250412T180000',
      details: 'The Wedding Celebration of Aisha Putri Maharani & Muhammad Rizki Pratama',
      location: 'Grand Ballroom, Hotel Mulia Senayan, Jakarta',
    };
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden">
      {/* Background with water effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-medium/40 to-background" />
      <WaterRipples />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-sky-blue mb-4">
            Save The Date
          </p>
          <h2 className="font-display text-5xl md:text-6xl gradient-gold-text mb-4">
            Wedding Details
          </h2>
          <GoldDivider variant="floral" />
        </motion.div>

        {/* Countdown timer */}
        <motion.div
          className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { value: countdown.days, label: 'Days' },
            { value: countdown.hours, label: 'Hours' },
            { value: countdown.minutes, label: 'Minutes' },
            { value: countdown.seconds, label: 'Seconds' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center p-4 md:p-6 rounded-lg bg-navy-medium/50 border border-gold/20 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <motion.span
                className="block font-heading text-3xl md:text-5xl text-gold"
                key={item.value}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(item.value).padStart(2, '0')}
              </motion.span>
              <span className="text-cream-soft/70 font-body text-sm md:text-base mt-2 block">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Akad Nikah */}
          <motion.div
            className="p-8 rounded-lg bg-navy-medium/50 border border-gold/20 backdrop-blur-sm"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center">
              <h3 className="font-display text-3xl text-gold mb-6">Akad Nikah</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-cream">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span className="font-body text-lg">Sabtu, 12 April 2025</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-cream">
                  <Clock className="w-5 h-5 text-gold" />
                  <span className="font-body text-lg">08:00 - 10:00 WIB</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-cream">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span className="font-body text-lg">Masjid Agung At-Tin</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resepsi */}
          <motion.div
            className="p-8 rounded-lg bg-navy-medium/50 border border-gold/20 backdrop-blur-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center">
              <h3 className="font-display text-3xl text-gold mb-6">Resepsi</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-cream">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span className="font-body text-lg">Sabtu, 12 April 2025</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-cream">
                  <Clock className="w-5 h-5 text-gold" />
                  <span className="font-body text-lg">11:00 - 14:00 WIB</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-cream">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span className="font-body text-lg">Grand Ballroom, Hotel Mulia</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map embed */}
        <motion.div
          className="rounded-lg overflow-hidden border border-gold/20 mb-8 aspect-video"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2904399474!2d106.79652851476913!3d-6.2253631954879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d9295c3a1%3A0x9e67f9c0a3c12b0!2sHotel%20Mulia%20Senayan%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1640000000000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(50%) contrast(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            onClick={handleSaveCalendar}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-primary-foreground font-heading text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar className="w-5 h-5" />
            Save to Calendar
          </motion.button>
          
          <motion.a
            href="https://maps.google.com/?q=Hotel+Mulia+Senayan+Jakarta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold text-gold font-heading text-lg"
            whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--gold) / 0.1)' }}
            whileTap={{ scale: 0.98 }}
          >
            <Navigation className="w-5 h-5" />
            Get Directions
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingDetailsSection;