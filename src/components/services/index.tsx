import { motion } from "framer-motion";
import { Wifi, Network, ArrowUpRight } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import type { SelectedPage } from "@/utils/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="relative bg-black py-32 text-white overflow-hidden selection:bg-orange-500 selection:text-white">
      
      {/* Luz ambiente sutil */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[160px]" />

      <div className="mx-auto w-11/12 max-w-[1240px]">
        
        {/* Cabeçalho */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500"
          >
            Soluções Complementares
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl"
          >
            Ecossistema INURA.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg font-normal text-[#86868b] sm:text-2xl leading-relaxed tracking-tight"
          >
            Expandimos a infraestrutura dedicada com soluções sob medida para conectar filiais e garantir sinal Wi-Fi impecável em ambientes de alta densidade.
          </motion.p>
        </div>

        {/* Grid dos Serviços Adicionais */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          
          {/* Card 1: Ponto a Ponto */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-[#1d1d1f] p-8 sm:p-12 transition-all duration-500 hover:border-white/20"
          >
            <div>
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500">
                <Network size={28} />
              </div>

              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[#86868b]">
                Interconexão de Unidades
              </span>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Link Ponto a Ponto.
              </h3>
              
              <p className="mt-4 text-base font-normal leading-relaxed text-[#86868b] sm:text-lg">
                Conecte filiais, datacenters e escritórios em uma rede L2/L3 dedicada em fibra óptica. Transmissão privada com latência quase nula e segurança total de dados sem passar pela internet pública.
              </p>
            </div>

            <div className="mt-10 border-t border-white/5 pt-6">
              <AnchorLink 
                href="#contact"
                onClick={() => setSelectedPage("contact")}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 transition-all duration-300 group-hover:gap-2.5 group-hover:text-orange-400"
              >
                <span>Projectar interconexão dedicada</span>
                <ArrowUpRight size={18} />
              </AnchorLink>
            </div>
          </motion.div>

          {/* Card 2: Wi-Fi Hotspot de Alta Densidade */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-[#1d1d1f] p-8 sm:p-12 transition-all duration-500 hover:border-white/20"
          >
            <div>
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500">
                <Wifi size={28} />
              </div>

              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[#86868b]">
                Infraestrutura de Acesso
              </span>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Wi-Fi Corporativo Pro.
              </h3>
              
              <p className="mt-4 text-base font-normal leading-relaxed text-[#86868b] sm:text-lg">
                Projetado para centenas de acessos simultâneos sem gargalos. Dimensionamento de Access Points profissionais, captive portal personalizado e roaming contínuo em todo o seu espaço corporativo ou evento.
              </p>
            </div>

            <div className="mt-10 border-t border-white/5 pt-6">
              <AnchorLink 
                href="#contact"
                onClick={() => setSelectedPage("contact")}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 transition-all duration-300 group-hover:gap-2.5 group-hover:text-orange-400"
              >
                <span>Solicitar estudo de cobertura</span>
                <ArrowUpRight size={18} />
              </AnchorLink>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;