import { motion } from 'motion/react';
import { Snowflake, Thermometer, Zap, Wrench, Settings, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "Ar Condicionado",
    description: "Instalação, higienização, recarga de gás e manutenção preventiva e corretiva em todos os modelos.",
    icon: Snowflake,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Geladeiras e Freezers",
    description: "Reparo especializado em refrigeradores Side by Side, French Door e convencionais de todas as marcas.",
    icon: Thermometer,
    color: "bg-sky-500/10 text-sky-500"
  },
  {
    title: "Máquinas de Lavar",
    description: "Assistência para lava e seca, máquinas de lavar roupa e louça com peças originais e garantia.",
    icon: Settings,
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    title: "Fogões e Fornos",
    description: "Reparo em fogões, cocktops e fornos elétricos ou a gás. Conversão e manutenção técnica segura.",
    icon: Zap,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "Manutenção Preventiva",
    description: "Planos de manutenção para empresas e residências, garantindo vida útil longa aos seus equipamentos.",
    icon: Wrench,
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "Garantia Garantida",
    description: "Todos os nossos serviços possuem garantia técnica acompanhada de nota fiscal e suporte.",
    icon: ShieldCheck,
    color: "bg-violet-500/10 text-violet-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tighter"
            >
              Soluções <span className="text-brand-blue">Técnicas.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg"
            >
              Suporte técnico de alta precisão para os equipamentos que mantêm o funcionamento impecável do seu lar ou negócio.
            </motion.p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-brand-border mx-8 mb-4"></div>
          <div className="text-brand-blue font-black text-7xl opacity-20">SERVICES</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-brand-border h-fit">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 sm:p-12 border-r border-b border-brand-border hover:bg-brand-blue transition-all group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-12 h-12 rounded-none flex items-center justify-center bg-brand-slate text-brand-sky group-hover:bg-white group-hover:text-brand-blue transition-colors`}>
                  <service.icon size={24} />
                </div>
                <span className="text-slate-700 font-black text-3xl group-hover:text-white/20 transition-colors">0{index + 1}</span>
              </div>
              <h3 className="font-display text-xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-white">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
