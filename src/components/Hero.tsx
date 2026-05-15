import { motion } from 'motion/react';
import { ShieldCheck, Snowflake, Droplets, Wrench } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-0 items-stretch border border-brand-border">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 p-6 sm:p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-brand-border"
          >
            <div className="inline-block px-3 py-1 bg-brand-slate text-brand-sky text-[10px] font-bold uppercase tracking-[0.3em] self-start mb-8">
              Soluções em Climatização e Eletrodomésticos
            </div>
            
            <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase">
              Excelência em <br/> Manutenção e <br/> <span className="text-brand-blue">Consertos.</span>
            </h1>
            
            <p className="text-slate-400 text-base sm:text-lg lg:text-xl mb-12 max-w-lg leading-relaxed">
              Assistência técnica especializada em ar-condicionado, refrigeradores e máquinas de lavar. Precisão técnica e garantia formal no Rio de Janeiro.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col border-l-2 border-brand-blue pl-4">
                <span className="text-2xl sm:text-3xl font-bold italic text-white leading-none">10+ Anos</span>
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">De Mercado</span>
              </div>
              <div className="flex flex-col border-l-2 border-brand-blue pl-4">
                <span className="text-2xl sm:text-3xl font-bold italic text-white leading-none">24h</span>
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Suporte Técnico</span>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5521992136779"
                target="_blank"
                className="bg-brand-blue hover:bg-brand-sky transition-all px-10 py-5 text-xs font-black uppercase tracking-widest text-white shadow-2xl shadow-brand-blue/20"
              >
                Solicitar Orçamento
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 grid grid-rows-2"
          >
            <div className="bg-brand-blue/5 p-8 sm:p-12 flex flex-col justify-center border-b border-brand-border relative group overflow-hidden">
               <div className="absolute -top-4 -right-4 p-8 text-brand-blue font-black text-8xl sm:text-9xl opacity-10 pointer-events-none">01</div>
               <div className="relative z-10">
                 <Snowflake className="text-brand-blue mb-4" size={40} />
                 <h3 className="text-xl sm:text-2xl font-black text-white mb-2 uppercase tracking-tighter">Climatização</h3>
                 <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Instalação e higienização de ar-condicionado. Otimização de performance e economia.</p>
               </div>
            </div>
            <div className="bg-brand-slate/30 p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden">
               <div className="absolute -top-4 -right-4 p-8 text-slate-700 font-black text-8xl sm:text-9xl opacity-10 pointer-events-none">02</div>
               <div className="relative z-10">
                 <Wrench className="text-brand-sky mb-4" size={40} />
                 <h3 className="text-xl sm:text-2xl font-black text-white mb-2 uppercase tracking-tighter">Manutenção</h3>
                 <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Conserto de geladeiras e máquinas de lavar. Peças originais e garantia técnica total.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-[-5%] w-[300px] h-[300px] bg-brand-slate/10 rounded-full blur-[80px] pointer-events-none" />
    </section>
  );
}
