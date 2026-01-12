import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import GoldDivider from '@/components/ui/GoldDivider';

// Import gallery images
import prewedding1 from '@/assets/gallery/prewedding-1.jpg';
import prewedding2 from '@/assets/gallery/prewedding-2.jpg';
import prewedding3 from '@/assets/gallery/prewedding-3.jpg';
import prewedding4 from '@/assets/gallery/prewedding-4.jpg';
import prewedding5 from '@/assets/gallery/prewedding-5.jpg';
import prewedding6 from '@/assets/gallery/prewedding-6.jpg';

const galleryImages = [
  { id: 1, src: prewedding1, title: 'Garden Romance' },
  { id: 2, src: prewedding2, title: 'Sunset Beach' },
  { id: 3, src: prewedding3, title: 'Intimate Moment' },
  { id: 4, src: prewedding4, title: 'Palace Dreams' },
  { id: 5, src: prewedding5, title: 'Golden Fields' },
  { id: 6, src: prewedding6, title: 'Traditional Elegance' },
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
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay with title */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
              >
                <p className="text-cream font-heading text-lg">{image.title}</p>
              </motion.div>

              {/* Border frame on hover */}
              <div className="absolute inset-2 border border-gold/0 group-hover:border-gold/50 rounded transition-all duration-300" />
              
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-gold/0 group-hover:border-gold/60 transition-all duration-300" />
              <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-gold/0 group-hover:border-gold/60 transition-all duration-300" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-gold/0 group-hover:border-gold/60 transition-all duration-300" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-gold/0 group-hover:border-gold/60 transition-all duration-300" />
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
              className="absolute top-6 right-6 p-2 text-cream hover:text-gold transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation arrows */}
            <button
              className="absolute left-6 p-2 text-cream hover:text-gold transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              className="absolute right-6 p-2 text-cream hover:text-gold transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image container */}
            <motion.div
              className="relative max-w-4xl max-h-[85vh] m-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              key={selectedImage}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Image title */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-deep/90 to-transparent rounded-b-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-cream font-heading text-xl text-center">
                  {galleryImages[selectedImage].title}
                </p>
              </motion.div>

              {/* Decorative frame corners */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-gold/60" />
              <div className="absolute -top-3 -right-3 w-12 h-12 border-r-2 border-t-2 border-gold/60" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-l-2 border-b-2 border-gold/60" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-gold/60" />
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream font-body">
              <span className="text-gold">{selectedImage + 1}</span> / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;