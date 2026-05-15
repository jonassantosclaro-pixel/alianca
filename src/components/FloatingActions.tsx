import { motion } from 'motion/react';
import { MessageCircle, Instagram, Facebook, Bot } from 'lucide-react';
import { useState } from 'react';
import ChatAssistant from './ChatAssistant';

export default function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Left Side: Social Media */}
      <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
        {/* Instagram */}
        <motion.a
          href="https://www.instagram.com/alianca_assistencia/" 
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white flex items-center justify-center rounded-2xl shadow-xl group relative"
        >
          <Instagram size={28} />
          <span className="absolute left-full ml-4 bg-white text-slate-900 px-3 py-1.5 rounded-lg font-black text-[10px] uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Instagram
          </span>
        </motion.a>

        {/* Facebook */}
        <motion.a
          href="https://www.facebook.com/profile.php?id=61561919086367"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#1877F2] text-white flex items-center justify-center rounded-2xl shadow-xl group relative"
        >
          <Facebook size={28} />
          <span className="absolute left-full ml-4 bg-white text-slate-900 px-3 py-1.5 rounded-lg font-black text-[10px] uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Facebook
          </span>
        </motion.a>
      </div>

      {/* Right Side: Contact & AI */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {/* AI Assistant */}
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className={`w-14 h-14 flex items-center justify-center rounded-2xl shadow-xl group relative transition-colors ${
            isChatOpen ? 'bg-brand-blue text-white' : 'bg-brand-dark border border-brand-blue text-brand-blue'
          }`}
        >
          <Bot size={28} />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-brand-dark animate-pulse" />
          <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1.5 rounded-lg font-black text-[10px] uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Assistente IA
          </span>
        </motion.button>

        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/5521992136779"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white flex items-center justify-center rounded-full shadow-xl group relative"
        >
          <MessageCircle size={28} />
          <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1.5 rounded-lg font-black text-[10px] uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp
          </span>
        </motion.a>
      </div>

      {/* Chat Component */}
      <ChatAssistant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
