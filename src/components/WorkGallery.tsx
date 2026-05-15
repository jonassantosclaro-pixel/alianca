import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const images = [
  "https://i.postimg.cc/jjdrVVkT/Whats-App-Image-2026-05-15-at-08-13-58-(1).jpg",
  "https://i.postimg.cc/43LRs8rN/Whats-App-Image-2026-05-15-at-08-13-55-(1).jpg",
  "https://i.postimg.cc/SKTbkZwS/Whats-App-Image-2026-05-15-at-08-13-55-(2).jpg",
  "https://i.postimg.cc/R0sx4PjC/Whats-App-Image-2026-05-15-at-08-13-55-(3).jpg",
  "https://i.postimg.cc/TP7vfkZT/Whats-App-Image-2026-05-15-at-08-13-56.jpg",
  "https://i.postimg.cc/bvCfp6Kf/Whats-App-Image-2026-05-15-at-08-13-56-(1).jpg",
  "https://i.postimg.cc/cJ9G0DVq/Whats-App-Image-2026-05-15-at-08-13-56-(2).jpg",
  "https://i.postimg.cc/7LsrwBjp/Whats-App-Image-2026-05-15-at-08-13-56-(3).jpg",
  "https://i.postimg.cc/0N2qggH8/Whats-App-Image-2026-05-15-at-08-13-56-(4).jpg",
  "https://i.postimg.cc/hGPqFF3c/Whats-App-Image-2026-05-15-at-08-13-56-(5).jpg",
  "https://i.postimg.cc/7LYyvvQq/Whats-App-Image-2026-05-15-at-08-13-57.jpg",
  "https://i.postimg.cc/43NTCCFZ/Whats-App-Image-2026-05-15-at-08-13-58.jpg",
  "https://i.postimg.cc/SKNp00tb/Whats-App-Image-2026-05-15-at-08-13-58-(2).jpg",
  "https://i.postimg.cc/Jh4WwwdV/Whats-App-Image-2026-05-15-at-08-13-58-(3).jpg",
  "https://i.postimg.cc/DzyKVVp9/Whats-App-Image-2026-05-15-at-08-13-58-(4).jpg",
  "https://i.postimg.cc/MGK8kkrk/Whats-App-Image-2026-05-15-at-08-13-59.jpg"
];

export default function WorkGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = images.length - itemsPerView;

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="gallery" className="py-24 bg-brand-dark border-t border-brand-border h-fit relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 bg-brand-slate text-brand-sky text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Portfólio Real
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tighter"
            >
              GALERIA DE <span className="text-brand-blue">SUCESSO.</span>
            </motion.h2>
            <p className="text-slate-400 text-lg">
              Compromisso com a perfeição em cada serviço. Veja abaixo os registros de nossas manutenções e instalações.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-14 h-14 border border-brand-border flex items-center justify-center text-white hover:bg-brand-blue transition-all active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 border border-brand-border flex items-center justify-center text-white hover:bg-brand-blue transition-all active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative border border-brand-border bg-brand-slate/10 overflow-hidden">
          <motion.div 
            className="flex"
            animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="flex-none p-2 sm:p-4 border-r border-brand-border aspect-[4/5] md:aspect-[4/3]"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="w-full h-full border border-brand-border relative group overflow-hidden bg-brand-dark">
                  <img 
                    src={img} 
                    alt={`Trabalho Realizado ${idx + 1}`} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-blue/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <button 
                      onClick={() => setSelectedImage(img)}
                      className="w-14 h-14 bg-white text-brand-blue flex items-center justify-center pointer-events-auto shadow-2xl"
                    >
                      <Maximize2 size={24} />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 p-2 bg-brand-dark/80 text-white font-black text-[10px] uppercase tracking-widest border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    ALIANÇA TÉCNICA
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="mt-12 flex items-center gap-6">
          <span className="text-brand-blue font-black text-2xl tracking-tighter w-12">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <div className="h-0.5 flex-1 bg-brand-border relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-brand-blue"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentIndex + itemsPerView) / images.length) * 100}%` }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </div>
          <span className="text-slate-600 font-bold text-xs w-12 text-right">
            {String(images.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-brand-dark/98 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-full object-contain shadow-2xl border border-white/10 p-2 bg-brand-slate"
              />
              <button 
                className="absolute top-0 right-0 text-white p-6 text-sm font-black uppercase tracking-[0.5em] hover:text-brand-sky flex items-center gap-2"
                onClick={() => setSelectedImage(null)}
              >
                FECHAR 
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
