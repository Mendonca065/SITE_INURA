import { motion } from "framer-motion";
import type { SelectedPage } from "@/utils/types";
import WaveArc from "@/components/backgrounds/waveArc";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Shielding = ({ setSelectedPage }: Props) => {
  return (
    <section 
      id="shielding" 
      className="relative bg-black py-20 sm:py-32 text-white overflow-hidden selection:bg-orange-500 selection:text-white"
    >
      {/* Background Animado de Ondas (Laranja INURA) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <WaveArc
          backgroundColor="#000000"
          lineColor="rgb(249, 115, 22)"
          lineWidth={1.2}
          lineCount={60}
          speed={4}
          glow={12}
          interactive={true}
        />
      </div>

      {/* Glow de fundo complementar */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 z-0 -translate-x-1/2 -translate-y-1/2 h-[300px] sm:h-[600px] w-[300px] sm:w-[600px] rounded-full bg-orange-500/10 blur-[120px] sm:blur-[160px]" />

      {/* Conteúdo da Seção (Camada superior z-10) */}
      <div className="relative z-10 mx-auto w-11/12 max-w-[1240px]">
        
        {/* Cabeçalho estilo Apple Pro */}
        <div className="mb-12 sm:mb-20 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-orange-500"
          >
            Segurança & Resiliência
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
          >
            A Blindagem.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg md:text-2xl font-normal text-[#86868b] leading-relaxed tracking-tight"
          >
            Sua operação imune a paralisações. Infraestrutura de ponta projetada para entregar estabilidade absoluta e zero downtime.
          </motion.p>
        </div>

        {/* Bento Grid estilo MacBook Pro */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          
          {/* Card 01: IP Dedicado */}
          <motion.div 
            className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#1d1d1f]/90 backdrop-blur-md p-6 sm:p-10 transition-all duration-500 hover:border-white/20 md:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  01
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-[#86868b]">
                  Exclusividade & Controle
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                IP Dedicado Exclusivo.
              </h3>
              
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-normal leading-relaxed text-[#86868b]">
                Identidade fixa na rede para máxima estabilidade. Garanta conexões remotas ultra seguras via VPN, hospedagem interna confiável e controle total da sua infraestrutura sem variações de IP.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5 text-xs font-mono">
              <span className="text-[#86868b] uppercase tracking-wider text-[10px] sm:text-xs">BLOCO: IPv4 / IPv6 FIXO</span>
              <span className="font-semibold text-orange-500">VPN READY</span>
            </div>
          </motion.div>

          {/* Card 02: Dupla Abordagem (Sinalizado como Módulo Opcional de Redundância) */}
          <motion.div 
            className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#1d1d1f]/90 backdrop-blur-md p-6 sm:p-10 transition-all duration-500 hover:border-white/20 md:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <div className="mb-6 flex items-center justify-between gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  02
                </span>
                {/* Badge destacada como Módulo Opcional */}
                <span className="rounded-full bg-orange-500/10 border border-orange-500/30 px-3 py-1 text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-orange-400">
                  Módulo Opcional · Redundância
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                Dupla Abordagem Física.
              </h3>
              
              <p className="mt-3 sm:mt-4 text-sm sm:text-base font-normal leading-relaxed text-[#86868b]">
                Para operações críticas que exigem tolerância zero a falhas, você pode solicitar a inclusão da dupla abordagem. São duas rotas de fibra 100% independentes: se a física principal sofrer uma interrupção, a secundária assume na hora, elevando o SLA para <strong className="text-white font-medium">99,9%</strong>.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5 text-xs font-mono">
              <span className="text-[#86868b] uppercase tracking-wider text-[10px] sm:text-xs">SOLICITE SOB DEMANDA</span>
              <span className="font-semibold text-emerald-400">SLA ATÉ 99.9%</span>
            </div>
          </motion.div>

          {/* Card 03: INURA Elite */}
          <motion.div 
            className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#1d1d1f]/90 backdrop-blur-md p-6 sm:p-10 transition-all duration-500 hover:border-white/20 md:col-span-12 md:flex-row md:items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  03
                </span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-[#86868b]">
                  Suporte Dedicado 24/7
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                Atendimento INURA Elite & SLA de 12h.
              </h3>
              
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-normal leading-relaxed text-[#86868b]">
                Monitoramento proativo em tempo real para antecipar falhas. Esqueça os atendimentos automatizados: receba suporte direto com engenheiros especializados e tempo de reparo garantido em até 12 horas.
              </p>
            </div>

            <div className="mt-8 md:mt-0 flex gap-3 shrink-0">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm text-center font-mono">
                <span className="block text-[10px] text-[#86868b] uppercase tracking-wider">TEMPO DE REPARO</span>
                <span className="text-xl sm:text-2xl font-extrabold text-orange-500">ATÉ 12H</span>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm text-center font-mono">
                <span className="block text-[10px] text-[#86868b] uppercase tracking-wider">ENGENHARIA</span>
                <span className="text-xl sm:text-2xl font-extrabold text-white">NOC 24/7</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Shielding;