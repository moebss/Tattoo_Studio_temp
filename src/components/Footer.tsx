import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-darker pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-8">
              <span className="font-serif text-3xl tracking-wider text-light">
                IRON<span className="text-gold">INK</span>
              </span>
            </a>
            <p className="text-light/50 text-sm leading-relaxed mb-8">
              Dein Studio für erstklassige Tattoos & Piercings in Berlin-Mitte. Kunst, die bleibt.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-light/50 hover:text-gold hover:border-gold transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-light/50 hover:text-gold hover:border-gold transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs mb-8">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-light/70 text-sm">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>Mühlenstraße 42<br />10243 Berlin<br />Deutschland</span>
              </li>
              <li className="flex items-center gap-3 text-light/70 text-sm">
                <Phone size={18} className="text-gold shrink-0" />
                <a href="tel:+493012345678" className="hover:text-gold transition-colors">+49 30 12345678</a>
              </li>
              <li className="flex items-center gap-3 text-light/70 text-sm">
                <Mail size={18} className="text-gold shrink-0" />
                <a href="mailto:hello@ironink.de" className="hover:text-gold transition-colors">hello@ironink.de</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs mb-8">Öffnungszeiten</h4>
            <ul className="space-y-4 text-light/70 text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Montag - Freitag</span>
                <span>11:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Samstag</span>
                <span>12:00 - 16:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2 text-light/40">
                <span>Sonntag</span>
                <span>Geschlossen</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs mb-8">Rechtliches</h4>
            <ul className="space-y-4 text-light/70 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Pflegehinweise</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-light/40 text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Iron Ink Tattoo & Piercing. All rights reserved.
          </p>
          <p className="text-light/40 text-xs uppercase tracking-widest">
            Handcrafted with <span className="text-gold">♥</span> in Berlin
          </p>
        </div>
      </div>
    </footer>
  );
}
