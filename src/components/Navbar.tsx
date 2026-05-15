import { motion } from 'motion/react';
import { Phone, Snowflake, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-dark/50 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
              <img 
                src="https://i.postimg.cc/d0tKMMNW/Whats-App-Image-2026-05-15-at-08-13-59-(1).jpg" 
                alt="Aliança Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tighter leading-none text-white">ALIANÇA</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-blue leading-none mt-1">Assistência Técnica</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-blue transition-colors">Serviços</a>
            <a href="#about" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-blue transition-colors">Sobre</a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-blue transition-colors">Contato</a>
            <a 
              href="https://wa.me/5521992136779" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-blue text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-brand-sky transition-all transition-all shadow-lg shadow-brand-blue/20 flex items-center gap-2"
            >
              <Phone size={14} />
              (21) 99213-6779
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-dark border-b border-brand-border px-4 py-6"
        >
          <div className="flex flex-col gap-4">
            <a href="#services" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-widest text-slate-400">Serviços</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-widest text-slate-400">Sobre</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-widest text-slate-400">Contato</a>
            <a 
              href="https://wa.me/5521992136779" 
              className="bg-brand-blue text-white px-6 py-4 text-xs font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              (21) 99213-6779
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
