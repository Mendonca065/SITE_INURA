import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import type { SelectedPage } from "@/utils/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Shielding = ({ setSelectedPage }: Props) => {
  return (
    <section id="shielding" className="relative bg-black py-32 text-white overflow-hidden selection:bg-orange-500 selection:text-white">
      
      {/* Luz ambiente sutil no estilo Apple Event */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[160px]" />

      <div className="mx-auto w-11/12 max-w-[1240px]">
        
        {/* Cabeçalho estilo Apple Pro */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500"
          >
            Segurança & Resiliência
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl"
          >
            A Blindagem.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg font-normal text-[#86868b] sm:text-2xl leading-relaxed tracking-tight"
          >
            Sua operação imune a paralisações. Infraestrutura de ponta projetada para entregar estabilidade absoluta e zero downtime.
          </motion.p>
        </div>

        {/* Bento Grid estilo MacBook Pro */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          
          {/* Card 2.1: IP Dedicado */}
          <motion.div 
            className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-[#1d1d1f] p-8 sm:p-12 transition-all duration-500 hover:border-white/20 md:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-4xl font-extrabold tracking-tighter bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  01
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-medium tracking-wider uppercase text-[#86868b]">
                  Exclusividade & Controle
                </span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                IP Dedicado Exclusivo.
              </h3>
              
              <p className="mt-4 text-base font-normal leading-relaxed text-[#86868b] sm:text-lg">
                Identidade fixa na rede para máxima estabilidade. Garanta conexões remotas ultra seguras via VPN, hospedagem interna confiável e controle total da sua infraestrutura sem variações de IP.
              </p>
            </div>

            <div className="mt-10 border-t border-white/5 pt-6">
              <AnchorLink 
                href="#contact"
                onClick={() => setSelectedPage("contact")}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 transition-all duration-300 group-hover:gap-2.5 group-hover:text-orange-400"
              >
                <span>Consultar disponibilidade de IP</span>
                <ArrowUpRight size={18} />
              </AnchorLink>
            </div>
          </motion.div>

          {/* Card 2.2: Dupla Abordagem */}
          <motion.div 
            className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-[#1d1d1f] p-8 sm:p-12 transition-all duration-500 hover:border-white/20 md:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-4xl font-extrabold tracking-tighter bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  02
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-medium tracking-wider uppercase text-[#86868b]">
                  Alta Disponibilidade
                </span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Dupla Abordagem Física.
              </h3>
              
              <p className="mt-4 text-base font-normal leading-relaxed text-[#86868b]">
                Duas rotas físicas de fibra óptica 100% independentes. Caso ocorra um rompimento externo, a rota secundária assume de forma transparente com SLA de 99,9% de disponibilidade.
              </p>
            </div>

            <div className="mt-10 border-t border-white/5 pt-6">
              <AnchorLink 
                href="#contact"
                onClick={() => setSelectedPage("contact")}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 transition-all duration-300 group-hover:gap-2.5 group-hover:text-orange-400"
              >
                <span>Falar com a Engenharia</span>
                <ArrowUpRight size={18} />
              </AnchorLink>
            </div>
          </motion.div>

          {/* Card 2.3: INURA Elite */}
          <motion.div 
            className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-[#1d1d1f] p-8 sm:p-12 transition-all duration-500 hover:border-white/20 md:col-span-12 md:flex-row md:items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-4xl font-extrabold tracking-tighter bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  03
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-medium tracking-wider uppercase text-[#86868b]">
                  Suporte Dedicado 24/7
                </span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Atendimento INURA Elite & SLA de 12h.
              </h3>
              
              <p className="mt-4 text-base font-normal leading-relaxed text-[#86868b] sm:text-lg">
                Monitoramento proativo em tempo real para antecipar falhas. Esqueça os atendimentos automatizados: receba suporte direto com engenheiros especializados e tempo de reparo garantido em até 12 horas.
              </p>
            </div>

            <div className="mt-8 md:mt-0">
              <AnchorLink 
                href="#contact"
                onClick={() => setSelectedPage("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-8 py-4 text-sm font-medium text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
              >
                <span>Conhecer Suporte Elite</span>
                <ArrowUpRight size={18} />
              </AnchorLink>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Shielding;