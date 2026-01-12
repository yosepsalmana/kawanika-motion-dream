import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import GoldDivider from '@/components/ui/GoldDivider';

const galleryImages = [
  { id: 1, placeholder: 'Pre-wedding 1' },
  { id: 2, placeholder: 'Pre-wedding 2' },
  { id: 3, placeholder: 'Pre-wedding 3' },
  { id: 4, placeholder: 'Pre-wedding 4' },
  { id: 5, placeholder: 'Pre-wedding 5' },
  { id: 6, placeholder: 'Pre-wedding 6' },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-medium/20 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-sky-blue mb-4">
            Our Moments
          </p>
          <h2 className="font-display text-5xl md:text-6xl gradient-gold-text mb-4">
            Gallery
          </h2>
          <GoldDivider variant="floral" />
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative aspect-[4/5] rounded-lg overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Placeholder image */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-medium to-navy-light flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="font-display text-2xl text-gold">{image.id}</span>
                  </div>
                  <p className="text-cream-soft/50 font-body text-sm">{image.placeholder}</p>
                </div>
              </div>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-300"
              />

              {/* Border frame */}
              <div className="absolute inset-2 border border-gold/0 group-hover:border-gold/30 rounded transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 p-2 text-cream hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation arrows */}
            <button
              className="absolute left-6 p-2 text-cream hover:text-gold transition-colors"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              className="absolute right-6 p-2 text-cream hover:text-gold transition-colors"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image container */}
            <motion.div
              className="relative max-w-4xl max-h-[80vh] aspect-[4/5] m-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-navy-medium to-navy-light flex items-center justify-center border border-gold/30">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="font-display text-4xl text-gold">{galleryImages[selectedImage].id}</span>
                  </div>
                  <p className="text-cream font-heading text-xl">{galleryImages[selectedImage].placeholder}</p>
                </div>
              </div>

              {/* Decorative frame */}
              <svg className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] pointer-events-none">
                <rect
                  x="8"
                  y="8"
                  width="calc(100% - 16px)"
                  height="calc(100% - 16px)"
                  rx="12"
                  stroke="hsl(var(--gold) / 0.3)"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream font-body">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;