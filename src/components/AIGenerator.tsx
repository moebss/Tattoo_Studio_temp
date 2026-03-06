import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Loader2, Download } from 'lucide-react';
import { generateTattooImage } from '../services/gemini';

export default function AIGenerator() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setError(null);
    try {
      const image = await generateTattooImage(prompt);
      setGeneratedImage(image);
    } catch (err) {
      setError('Fehler bei der Generierung. Bitte versuche es später erneut.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="ai-generator" className="py-32 bg-anthracite relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-gold" size={20} />
              <h2 className="text-gold uppercase tracking-[0.2em] text-sm">AI Tattoo Generator</h2>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-light leading-tight mb-6">
              Visualisiere deine <br />
              <span className="italic text-white/80">Ideen</span>
            </h3>
            <p className="text-light/70 leading-relaxed mb-8 text-lg">
              Beschreibe dein Wunschmotiv und unsere KI generiert in Sekunden einen ersten Entwurf. Nutze diesen als Inspiration für dein Beratungsgespräch mit unseren Artists.
            </p>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label htmlFor="prompt" className="block text-xs uppercase tracking-widest text-light/50 mb-2">
                  Deine Idee (z.B. "Ein minimalistischer Wolf im Wald, Fine Line")
                </label>
                <textarea
                  id="prompt"
                  rows={3}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full bg-darker border border-white/10 rounded-sm p-4 text-light focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Beschreibe dein Tattoo..."
                  disabled={isGenerating}
                />
              </div>
              <button
                type="submit"
                disabled={isGenerating || !prompt.trim()}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gold text-darker px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-gold-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Generiert...
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    Entwurf generieren
                  </>
                )}
              </button>
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </form>
          </motion.div>

          {/* Image Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md aspect-square rounded-sm border border-white/10 bg-darker flex items-center justify-center relative overflow-hidden group">
              {generatedImage ? (
                <>
                  <img
                    src={generatedImage}
                    alt="Generated Tattoo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={generatedImage}
                      download="tattoo-idea.png"
                      className="flex items-center gap-2 border border-gold text-gold px-6 py-3 text-sm uppercase tracking-widest hover:bg-gold hover:text-darker transition-all duration-300"
                    >
                      <Download size={18} />
                      Download
                    </a>
                  </div>
                </>
              ) : (
                <div className="text-center p-8">
                  <Sparkles className="text-white/10 w-16 h-16 mx-auto mb-4" />
                  <p className="text-light/30 text-sm uppercase tracking-widest">
                    Dein Entwurf erscheint hier
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
