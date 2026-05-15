import { Snowflake, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-brand-border h-fit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden bg-white p-1 rounded-sm">
                <img 
                  src="https://i.postimg.cc/d0tKMMNW/Whats-App-Image-2026-05-15-at-08-13-59-(1).jpg" 
                  alt="Aliança Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-tighter leading-none">ALIANÇA</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-blue leading-none mt-1">Assistência Técnica</span>
              </div>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
              Manutenção, instalação e conserto especializado no Rio de Janeiro. Sua tranquilidade é nossa prioridade.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/aliancatecnicapj" target="_blank" className="w-10 h-10 border border-brand-border flex items-center justify-center text-slate-400 hover:border-brand-blue hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-brand-border flex items-center justify-center text-slate-400 hover:border-brand-blue hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] text-slate-500 uppercase font-black tracking-[0.3em] mb-8">Navegação</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <li><a href="#services" className="hover:text-brand-sky transition-colors">Serviços</a></li>
              <li><a href="#about" className="hover:text-brand-sky transition-colors">A Empresa</a></li>
            <li><a href="#contact" className="hover:text-brand-sky transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] text-slate-500 uppercase font-black tracking-[0.3em] mb-8">Contato Direto</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-brand-blue" />
                (21) 99213-6779
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-brand-blue" />
                contato@aliancatecnica.com.br
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={14} className="text-brand-blue" />
                Rio de Janeiro - RJ
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] text-slate-500 uppercase font-black tracking-[0.3em] mb-8">Informações</h4>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              CNPJ: 37.404.700/0001-51
            </p>
            <p className="text-[10px] text-slate-600 font-bold italic uppercase tracking-widest">
              "Respire tranquilidade. Nós mantemos seu ar em perfeito equilíbrio."
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border text-center text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} Aliança Técnica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
