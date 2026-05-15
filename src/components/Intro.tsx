import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-brand-dark flex items-center justify-center overflow-hidden"
        >
          {/* Geometric Background effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 0.1, rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-blue/30 rounded-full"
            />
            <motion.div 
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 0.05, rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-brand-sky/20 rounded-full"
            />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Logo scaling and appearing */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ 
                duration: 2, 
                ease: [0.16, 1, 0.3, 1], // custom easeOutExpo
                delay: 0.5 
              }}
              className="relative w-48 h-48 md:w-64 md:h-64"
            >
              <div className="absolute inset-0 bg-brand-blue/20 blur-[40px] rounded-full animate-pulse" />
              <img 
                src="https://i.postimg.cc/d0tKMMNW/Whats-App-Image-2026-05-15-at-08-13-59-(1).jpg" 
                alt="Aliança Logo" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(37,99,235,0.5)]"
              />
            </motion.div>

            {/* Text reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="mt-8 text-center"
            >
              <h2 className="font-display font-black text-3xl md:text-5xl text-white tracking-widest uppercase">
                ALIANÇA
              </h2>
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-brand-blue to-transparent my-2" />
              <p className="text-brand-sky font-bold text-xs md:text-sm tracking-[0.5em] uppercase">
                Assistência Técnica
              </p>
            </motion.div>

            {/* Loading indicator line */}
            <div className="mt-12 w-48 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-brand-blue"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
