import { motion } from 'motion/react';
import { Instagram, ArrowUpRight } from 'lucide-react';

export default function Artists() {
  const artists = [
    {
      name: 'Gordian Linck',
      role: 'Inhaber & Artist',
      specialties: ['Allrounder', 'Custom Designs'],
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1000&auto=format&fit=crop',
      instagram: '@losnachostattoo'
    },
    {
      name: 'Jochen',
      role: 'Artist',
      specialties: ['Old School', 'New School', 'Traditional'],
      image: 'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=1000&auto=format&fit=crop',
      instagram: '@losnachostattoo'
    },
    {
      name: 'Martin',
      role: 'Artist',
      specialties: ['Black & Grey', 'Realistic', 'Surrealism'],
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop',
      instagram: '@losnachostattoo'
    },
    {
      name: 'Louis',
      role: 'Artist',
      specialties: ['Lettering', 'Blackwork'],
      image: 'https://images.unsplash.com/photo-1590246814883-578320dd229b?q=80&w=1000&auto=format&fit=crop',
      instagram: '@losnachostattoo'
    }
  ];

  return (
    <section id="artists" className="py-32 bg-anthracite relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Das Team</h2>
            <h3 className="font-serif text-4xl md:text-6xl text-light leading-tight">
              Unsere <span className="italic text-white/80">Künstler</span>
            </h3>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            href="#booking"
            className="hidden md:flex items-center gap-2 text-gold hover:text-light transition-colors uppercase tracking-widest text-sm"
          >
            Termin anfragen <ArrowUpRight size={16} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm relative mb-8">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <a
                  href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 left-6 flex items-center gap-2 text-light opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:text-gold"
                >
                  <Instagram size={20} />
                  <span className="text-sm tracking-wider">{artist.instagram}</span>
                </a>
              </div>

              <h4 className="text-2xl font-serif text-light mb-2 group-hover:text-gold transition-colors">{artist.name}</h4>
              <p className="text-gold uppercase tracking-widest text-xs mb-4">{artist.role}</p>

              <div className="flex flex-wrap gap-2">
                {artist.specialties.map((spec, i) => (
                  <span key={i} className="text-xs uppercase tracking-wider text-light/50 border border-white/10 px-3 py-1 rounded-full">
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
