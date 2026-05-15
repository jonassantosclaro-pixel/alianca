import { motion } from 'motion/react';
import { CheckCircle2, MapPin, Clock, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-dark border-t border-brand-border overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-blue/5 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square border border-brand-border p-4">
              <div className="w-full h-full border border-brand-blue/30 relative">
                 <img 
                   src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" 
                   alt="Técnico em Manutenção" 
                   className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                 />
                 <div className="absolute top-0 right-0 p-8 text-brand-blue font-black text-6xl leading-none">A</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-brand-blue p-6 sm:p-8 rounded-none max-w-[200px] sm:max-w-xs shadow-2xl">
              <span className="text-2xl sm:text-4xl font-black text-white block mb-2 tracking-tighter">+1.000</span>
              <span className="text-white font-bold text-[10px] uppercase tracking-widest">Clientes atendidos no RJ</span>
            </div>
          </motion.div>

          <div>
            <div className="inline-block px-3 py-1 bg-brand-slate text-brand-sky text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              A Empresa
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-8 uppercase tracking-tighter">
              QUALIDADE EM <span className="text-brand-blue">CADA REPARO.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
              A Aliança Assistência Técnica traz um novo padrão de excelência ao mercado carioca. Operamos com transparência absoluta e rigor técnico em cada intervenção.
            </p>

            <div className="grid gap-8">
              <div className="flex gap-6 pb-8 border-b border-brand-border">
                <span className="text-brand-blue font-black text-xl leading-none">01</span>
                <div>
                  <h4 className="text-white font-black mb-2 text-sm uppercase tracking-widest">Padrão Corporativo</h4>
                  <p className="text-slate-500 text-sm">CNPJ regularizado (37.404.700/0001-51) com emissão de nota fiscal eletrônica e garantia formal de serviço.</p>
                </div>
              </div>

              <div className="flex gap-6 pb-8 border-b border-brand-border">
                <span className="text-brand-blue font-black text-xl leading-none">02</span>
                <div>
                  <h4 className="text-white font-black mb-2 text-sm uppercase tracking-widest">Atendimento Estratégico</h4>
                  <p className="text-slate-500 text-sm">Unidades móveis posicionadas em pontos-chave do Rio de Janeiro para garantir o menor tempo de resposta.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="text-brand-blue font-black text-xl leading-none">03</span>
                <div>
                  <h4 className="text-white font-black mb-2 text-sm uppercase tracking-widest">Equipe Certificada</h4>
                  <p className="text-slate-500 text-sm">Técnicos treinados diretamente pelos fabricantes, assegurando o uso correto de peças e procedimentos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
