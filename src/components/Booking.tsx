import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Upload, CheckCircle2 } from 'lucide-react';

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="booking" className="py-32 bg-darker relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold uppercase tracking-[0.2em] text-sm mb-4">Termin buchen</h2>
            <h3 className="font-serif text-4xl md:text-6xl text-light leading-tight mb-8">
              Dein nächstes <br />
              <span className="italic text-white/80">Kunstwerk</span>
            </h3>
            <p className="text-light/70 leading-relaxed mb-12 text-lg">
              Fülle das Formular aus, um einen Termin oder ein Beratungsgespräch anzufragen. Wir melden uns innerhalb von 48 Stunden bei dir.
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-gold pl-6">
                <h4 className="text-light font-medium uppercase tracking-wider text-sm mb-2">Mindestpreis</h4>
                <p className="text-light/50 text-sm">Ab 150€ für kleine Motive</p>
              </div>
              <div className="border-l-2 border-gold pl-6">
                <h4 className="text-light font-medium uppercase tracking-wider text-sm mb-2">Stundenpreis</h4>
                <p className="text-light/50 text-sm">180€ / Stunde für größere Projekte</p>
              </div>
              <div className="border-l-2 border-gold pl-6">
                <h4 className="text-light font-medium uppercase tracking-wider text-sm mb-2">Beratung</h4>
                <p className="text-light/50 text-sm">Kostenlos und unverbindlich</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-anthracite p-8 md:p-12 border border-white/5"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <CheckCircle2 className="text-gold w-16 h-16 mb-6" />
                <h4 className="font-serif text-3xl text-light mb-4">Anfrage gesendet</h4>
                <p className="text-light/70">Wir melden uns in Kürze bei dir.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-light/50 mb-2">Name</label>
                    <input type="text" id="name" required className="w-full bg-darker border border-white/10 rounded-sm p-4 text-light focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-light/50 mb-2">E-Mail</label>
                    <input type="email" id="email" required className="w-full bg-darker border border-white/10 rounded-sm p-4 text-light focus:outline-none focus:border-gold transition-colors" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="style" className="block text-xs uppercase tracking-widest text-light/50 mb-2">Stil</label>
                    <select id="style" className="w-full bg-darker border border-white/10 rounded-sm p-4 text-light focus:outline-none focus:border-gold transition-colors appearance-none">
                      <option>Realism</option>
                      <option>Fine Line</option>
                      <option>Blackwork</option>
                      <option>Traditional</option>
                      <option>Weiß noch nicht</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="size" className="block text-xs uppercase tracking-widest text-light/50 mb-2">Größe (ca.)</label>
                    <input type="text" id="size" placeholder="z.B. 10x10 cm" className="w-full bg-darker border border-white/10 rounded-sm p-4 text-light focus:outline-none focus:border-gold transition-colors" />
                  </div>
                </div>

                <div>
                  <label htmlFor="placement" className="block text-xs uppercase tracking-widest text-light/50 mb-2">Körperstelle</label>
                  <input type="text" id="placement" placeholder="z.B. Rechter Unterarm" className="w-full bg-darker border border-white/10 rounded-sm p-4 text-light focus:outline-none focus:border-gold transition-colors" />
                </div>

                <div>
                  <label htmlFor="description" className="block text-xs uppercase tracking-widest text-light/50 mb-2">Beschreibung</label>
                  <textarea id="description" rows={4} required className="w-full bg-darker border border-white/10 rounded-sm p-4 text-light focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Beschreibe deine Idee..."></textarea>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-light/50 mb-2">Referenzbilder</label>
                  <div className="w-full bg-darker border border-dashed border-white/20 rounded-sm p-8 text-center hover:border-gold transition-colors cursor-pointer group">
                    <Upload className="mx-auto text-light/30 group-hover:text-gold mb-4 transition-colors" size={24} />
                    <p className="text-light/50 text-sm">Klicke oder ziehe Bilder hierher</p>
                  </div>
                </div>

                <button type="submit" className="w-full bg-gold text-darker px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-gold-hover transition-all duration-300">
                  Anfrage senden
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
