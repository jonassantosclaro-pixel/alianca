import { motion } from 'motion/react';
import { Star, CheckCheck, Award, ThumbsUp } from 'lucide-react';

const reviews = [
  {
    name: "Ricardo Silva",
    date: "14:20",
    message: "Boa tarde! Passando pra agradecer o excelente trabalho no meu ar condicionado. Gelando muito agora e o técnico foi super educado. Recomendadíssimo!",
    status: "delivered"
  },
  {
    name: "Mariana Costa",
    date: "09:45",
    message: "Obrigada Aliança! Minha geladeira Side by Side voltou a vida. Outras empresas falaram que não tinha conserto, mas vocês resolveram rápido. Nota 10!",
    status: "read"
  },
  {
    name: "Carlos Eduardo",
    date: "11:15",
    message: "Serviço de primeira na instalação da máquina de lavar. Pontualidade britânica, o que é raro hoje em dia. Parabéns pelo profissionalismo.",
    status: "read"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-dark border-t border-brand-border h-fit relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-4">
            <div className="inline-block px-3 py-1 bg-brand-slate text-brand-sky text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              Reputação
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
              A OPINIÃO DE <br/> QUEM <span className="text-brand-blue">CONFIA.</span>
            </h2>
            
            {/* Google Badge */}
            <div className="bg-white p-6 rounded-none border border-brand-border flex items-center gap-4 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-2 h-full bg-brand-blue" />
              <div className="bg-slate-100 p-3 rounded-full">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6 object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < 4.5 ? "currentColor" : "none"} />
                  ))}
                  <span className="text-slate-900 font-black text-sm ml-1">4.9</span>
                </div>
                <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest leading-none">Excelente no Google</p>
              </div>
            </div>

            {/* Specialist Badge */}
            <div className="mt-4 bg-brand-slate/50 p-6 border border-brand-border flex items-center gap-4">
               <div className="w-12 h-12 bg-brand-blue rotate-45 flex items-center justify-center text-white">
                 <Award size={24} className="-rotate-45" />
               </div>
               <div>
                 <p className="text-white font-black text-xs uppercase tracking-widest mb-1">Certificação Técnica</p>
                 <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Selo de Qualidade Aliança</p>
               </div>
            </div>
          </div>

          {/* WhatsApp Style Reviews */}
          <div className="lg:col-span-8 bg-brand-slate/10 border border-brand-border p-6 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 text-brand-blue font-black text-9xl opacity-5 pointer-events-none">CHATS</div>
             
             <div className="grid md:grid-cols-2 gap-6 relative z-10">
               {reviews.map((rev, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className={`max-w-full p-4 rounded-xl shadow-lg relative ${
                     i % 2 === 0 
                      ? 'bg-[#dcf8c6] text-slate-800 self-start mr-8' 
                      : 'bg-white text-slate-800 self-end ml-8'
                   }`}
                 >
                   <div className="flex justify-between items-start mb-2">
                     <span className="font-black text-[10px] uppercase tracking-wider text-brand-blue">{rev.name}</span>
                     <ThumbsUp size={12} className="text-brand-blue opacity-30" />
                   </div>
                   <p className="text-sm leading-relaxed mb-2 font-medium">
                     "{rev.message}"
                   </p>
                   <div className="flex justify-end items-center gap-1">
                     <span className="text-[9px] font-bold text-slate-500">{rev.date}</span>
                     <CheckCheck size={14} className="text-blue-500" />
                   </div>
                   
                   {/* Bubble tail */}
                   <div className={`absolute top-4 w-4 h-4 rotate-45 ${
                     i % 2 === 0 
                      ? '-left-2 bg-[#dcf8c6]' 
                      : '-right-2 bg-white'
                   }`} />
                 </motion.div>
               ))}
               
               {/* Last one is special */}
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="p-8 border-2 border-dashed border-brand-border flex flex-col items-center justify-center text-center group hover:bg-brand-blue/10 transition-all"
               >
                 <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-sky mb-4 group-hover:scale-110 transition-transform">
                   <MessageCircle size={24} />
                 </div>
                 <h4 className="text-white font-black text-xs uppercase tracking-widest mb-2">Seja o próximo</h4>
                 <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest leading-relaxed">Sua satisfação é o que move a Aliança Assistência Técnica em todo o RJ.</p>
               </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MessageCircle } from 'lucide-react';
