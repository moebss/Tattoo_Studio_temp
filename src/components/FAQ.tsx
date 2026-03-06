import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Wie bereite ich mich auf meinen Termin vor?',
    answer: 'Komm ausgeschlafen und gut gegessen zu deinem Termin. Verzichte 24 Stunden vorher auf Alkohol und blutverdünnende Medikamente. Trage bequeme Kleidung, die den zu tätowierenden Bereich leicht zugänglich macht.'
  },
  {
    question: 'Tut tätowieren weh?',
    answer: 'Ja, Tätowieren ist mit Schmerzen verbunden, aber das Empfinden ist sehr individuell und hängt stark von der Körperstelle ab. Wir sorgen für eine entspannte Atmosphäre und legen bei Bedarf Pausen ein.'
  },
  {
    question: 'Wie pflege ich mein neues Tattoo?',
    answer: 'Lass die Folie für die ersten 2-4 Stunden drauf. Danach vorsichtig mit lauwarmem Wasser und pH-neutraler Seife waschen. In den ersten 2 Wochen 2-3 mal täglich dünn mit spezieller Tattoo-Creme eincremen. Keine direkte Sonne, kein Chlorwasser und keine Sauna für 4 Wochen.'
  },
  {
    question: 'Kann ich mein eigenes Design mitbringen?',
    answer: 'Absolut. Du kannst uns deine Ideen und Referenzbilder schicken. Unsere Artists werden diese dann in ihrem eigenen Stil interpretieren und ein einzigartiges Tattoo-Design für dich entwerfen.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-anthracite relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Wissen & Vorbereitung
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl text-light leading-tight mb-12"
          >
            Häufige <span className="italic text-white/80">Fragen</span>
          </motion.h3>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/10">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className="font-serif text-xl text-light group-hover:text-gold transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-gold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-light/70 pb-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
