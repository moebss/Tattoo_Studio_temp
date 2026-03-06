import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';

const tattoos = [
  { id: 1, style: 'Realism', image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, style: 'Fine Line', image: 'https://images.unsplash.com/photo-1590246814883-578320dd229b?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, style: 'Blackwork', image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, style: 'Traditional', image: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, style: 'Realism', image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, style: 'Fine Line', image: 'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=1000&auto=format&fit=crop' },
];

const styles = ['All', 'Realism', 'Old School', 'Neo-Traditional', 'Blackwork', 'Lettering', 'Maori'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredTattoos = activeFilter === 'All'
    ? tattoos
    : tattoos.filter(t => t.style === activeFilter);

  return (
    <section id="portfolio" className="py-32 bg-darker relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl text-light leading-tight mb-12"
          >
            Unsere <span className="italic text-white/80">Arbeiten</span>
          </motion.h3>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setActiveFilter(style)}
                className={`uppercase tracking-widest text-xs md:text-sm pb-2 border-b-2 transition-all duration-300 ${activeFilter === style
                    ? 'border-gold text-gold'
                    : 'border-transparent text-light/50 hover:text-light'
                  }`}
              >
                {style}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredTattoos.map((tattoo) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={tattoo.id}
                className="group relative aspect-square overflow-hidden cursor-pointer rounded-sm"
                onClick={() => setSelectedImage(tattoo.image)}
              >
                <img
                  src={tattoo.image}
                  alt={`${tattoo.style} Tattoo`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="text-gold w-8 h-8" />
                </div>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-gold uppercase tracking-widest text-xs">{tattoo.style}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] bg-darker/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-8 right-8 text-light/50 hover:text-gold transition-colors"
              >
                <X size={32} />
              </button>
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedImage}
                alt="Enlarged Tattoo"
                className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
