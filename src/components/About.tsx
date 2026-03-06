import { motion } from 'motion/react';
import { Droplet, ShieldCheck, PenTool } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <PenTool size={32} className="text-gold mb-6" />,
      title: 'Kreative Exzellenz',
      description: 'Jedes Tattoo ist ein Unikat, entworfen nach deinen Vorstellungen und unserer künstlerischen Vision.'
    },
    {
      icon: <ShieldCheck size={32} className="text-gold mb-6" />,
      title: 'Höchste Hygiene',
      description: 'Wir arbeiten nach strengsten medizinischen Standards für deine Sicherheit und optimale Heilung.'
    },
    {
      icon: <Droplet size={32} className="text-gold mb-6" />,
      title: 'Premium Farben',
      description: 'Ausschließlich vegane, REACH-konforme und langlebige Tattoofarben der besten Hersteller.'
    }
  ];

  return (
    <section id="studio" className="py-32 bg-darker relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
              <img
                src="https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=1000&auto=format&fit=crop"
                alt="Tattoo Studio Interior"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-anthracite p-8 border border-white/5 hidden md:block">
              <p className="font-serif text-4xl text-gold mb-2">10+</p>
              <p className="text-sm uppercase tracking-widest text-light/60">Jahre Erfahrung</p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Über das Studio</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-light leading-tight mb-8">
              Kunst, die unter die <br /> Haut geht.
            </h3>
            <p className="text-light/70 leading-relaxed mb-12 text-lg">
              Willkommen bei Los Nachos. Seit über einem Jahrzehnt sind wir eure Adresse in Kerpen für erstklassige Tattoos und professionelles Piercing. In unserer entspannten und familiären Atmosphäre verwandeln wir eure Ideen in zeitlose Kunstwerke – mit höchstem Anspruch an Hygiene und Perfektion.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  {feature.icon}
                  <h4 className="text-light font-medium uppercase tracking-wider text-sm mb-3">{feature.title}</h4>
                  <p className="text-light/50 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
