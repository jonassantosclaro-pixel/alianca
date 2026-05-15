import { motion } from 'motion/react';
import { Mail, Phone, Calendar, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 border border-brand-border h-fit">
          <div className="p-6 sm:p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-brand-border bg-brand-blue/5">
            <div className="inline-block px-3 py-1 bg-brand-slate text-brand-sky text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Fale Conosco
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
              PRONTO PARA <br/> O <span className="text-brand-blue">AGENDAMENTO?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Não deixe seu eletrodoméstico parado. Entre em contato agora e agende sua visita técnica com quem entende do assunto. Atendimento em todo o RJ.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-blue rotate-45 flex items-center justify-center text-white">
                  <Phone size={20} className="-rotate-45" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">WhatsApp direto</p>
                  <p className="font-black text-xl text-white">(21) 99213-6779</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-slate rotate-45 flex items-center justify-center text-brand-sky">
                  <Calendar size={20} className="-rotate-45" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Disponibilidade</p>
                  <p className="font-black text-xl text-white">Seg - Sáb | 08h - 18h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-16 bg-brand-dark">
            <h3 className="text-sm font-black text-white mb-8 uppercase tracking-widest">Enviar Solicitação Técnica</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" className="w-full bg-brand-slate/30 px-6 py-4 border border-brand-border text-white focus:border-brand-blue outline-none transition-all placeholder:text-slate-600 font-medium" placeholder="NOME COMPLETO" />
              </div>
              <div>
                <input type="tel" className="w-full bg-brand-slate/30 px-6 py-4 border border-brand-border text-white focus:border-brand-blue outline-none transition-all placeholder:text-slate-600 font-medium" placeholder="TELEFONE / WHATSAPP" />
              </div>
              <div>
                <select className="w-full bg-brand-slate/30 px-6 py-4 border border-brand-border text-white focus:border-brand-blue outline-none transition-all appearance-none">
                  <option className="bg-brand-dark">ORÇAMENTO DE MANUTENÇÃO</option>
                  <option className="bg-brand-dark">INSTALAÇÃO DE AR CONDICIONADO</option>
                  <option className="bg-brand-dark">CONSERTO DE GELADEIRA</option>
                  <option className="bg-brand-dark">OUTROS SERVIÇOS</option>
                </select>
              </div>
              <button className="w-full bg-brand-blue hover:bg-brand-sky text-white font-black py-5 text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all shadow-xl shadow-brand-blue/10">
                ENVIAR AGORA
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
