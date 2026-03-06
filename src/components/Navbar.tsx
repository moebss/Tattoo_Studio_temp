import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Studio', href: '#studio' },
    { name: 'Artists', href: '#artists' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-darker/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl tracking-wider text-light group-hover:text-gold transition-colors">
            LOS<span className="text-gold">NACHOS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-light/70 hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            className="border border-gold text-gold px-6 py-2 text-sm uppercase tracking-widest hover:bg-gold hover:text-darker transition-all duration-300"
          >
            Termin buchen
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-light hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-darker/95 backdrop-blur-xl border-t border-white/5 py-6 px-6 md:hidden flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg uppercase tracking-widest text-light/80 hover:text-gold transition-colors block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="border border-gold text-gold px-6 py-3 text-center text-sm uppercase tracking-widest hover:bg-gold hover:text-darker transition-all duration-300"
            >
              Termin buchen
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
