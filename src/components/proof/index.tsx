import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import type { SelectedPage } from "@/utils/types";
import LightCurtain from "@/components/backgrounds/lightCurtain"; // Importação do LightCurtain

// Tipagem das props recebidas pelo componente
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

// Array de dados da Matriz de Decisão.
const proofMetrics = [
  {
    title: "Compartilhamento de Rede",
    inura: "Fibra Exclusiva (1:1)",
    broadband: "Até 256 clientes dividindo a porta",
    semi: "Até 16 clientes por porta",
  },
  {
    title: "Estabilidade & Simetria",
    inura: "100% Simétrico 24/7",
    broadband: "Pode oscilar nos horários de pico",
    semi: "Simetria parcial",
  },
  {
    title: "Início de Reparo",
    inura: "Até 12 horas corridas",
    broadband: "Até 72 horas úteis",
    semi: "Até 24 horas",
  },
  {
    title: "Garantia Contratual (SLA)",
    inura: "99,9% Garantido",
    broadband: "Sem garantia (Best Effort)",
    semi: "97,5% de disponibilidade",
  },
];

const Proof = ({ setSelectedPage }: Props) => {
  return (
    <section 
      id="proof" 
      className="relative bg-black py-20 sm:py-32 text-white overflow-hidden selection:bg-orange-500 selection:text-white"
    >
      
      {/* ------------------------------------------------------------------- */}
      {/* CORTINA DE LUZ (BACKGROUND WEAGL INTERATIVO INURA)                 */}
      {/* ------------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <LightCurtain />
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* GLOW DE FUNDO AUXILIAR                                              */}
      {/* ------------------------------------------------------------------- */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 z-0 -translate-y-1/2 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-orange-500/5 blur-[120px] sm:blur-[160px]" />

      <div className="relative z-10 mx-auto w-11/12 max-w-[1240px]">
        
        {/* ------------------------------------------------------------------- */}
        {/* CABEÇALHO DA SEÇÃO                                                  */}
        {/* ------------------------------------------------------------------- */}
        <div className="mb-12 sm:mb-20 flex flex-col items-center text-center">
          
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-orange-500"
          >
            A Prova & A Engenharia
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Matriz de Decisão.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg md:text-2xl font-normal text-[#86868b] leading-relaxed tracking-tight"
          >
            Entenda por que conexões convencionais colapsam em operações críticas e como nossa arquitetura entrega performance inegociável.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* 1A. VISÃO DESKTOP: TABELA COMPARATIVA WITH BACKDROP BLUR                 */}
        {/* ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block mb-32 overflow-hidden rounded-[32px] border border-white/10 bg-[#1d1d1f]/90 backdrop-blur-md"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02] text-xs font-semibold uppercase tracking-widest text-[#86868b]">
                <th className="p-6 sm:p-8">Métrica de Infraestrutura</th>
                <th className="p-6 sm:p-8 text-center">Banda Larga Comum</th>
                <th className="p-6 sm:p-8 text-center">Semi-Dedicado</th>
                <th className="p-6 sm:p-8 text-center text-orange-500 bg-orange-500/5">Link Dedicado INURA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-base font-normal">
              {proofMetrics.map((item, idx) => (
                <tr key={idx} className="transition-colors hover:bg-white/[0.02]">
                  <td className="p-6 sm:p-8 font-medium text-white">{item.title}</td>
                  <td className="p-6 sm:p-8 text-center text-[#86868b]">{item.broadband}</td>
                  <td className="p-6 sm:p-8 text-center text-[#86868b]">{item.semi}</td>
                  <td className="p-6 sm:p-8 text-center font-bold text-orange-500 bg-orange-500/5">{item.inura}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* ========================================================================= */}
        {/* 1B. VISÃO MOBILE: CARDS EMPILHADOS                                        */}
        {/* ========================================================================= */}
        <div className="block md:hidden mb-20 space-y-4">
          {proofMetrics.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-[#1d1d1f]/90 backdrop-blur-md p-5 space-y-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-white/5 pb-3">
                {item.title}
              </h3>

              <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 p-3.5 flex items-start gap-3">
                <Sparkles size={18} className="text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-orange-400">INURA Dedicado</span>
                  <span className="text-sm font-bold text-white">{item.inura}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div className="rounded-lg bg-white/5 p-2.5">
                  <span className="block text-[10px] text-[#86868b] uppercase">Banda Larga</span>
                  <span className="text-[#86868b] font-medium leading-tight block mt-1">{item.broadband}</span>
                </div>
                <div className="rounded-lg bg-white/5 p-2.5">
                  <span className="block text-[10px] text-[#86868b] uppercase">Semi-Dedicado</span>
                  <span className="text-[#86868b] font-medium leading-tight block mt-1">{item.semi}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* 2. SEÇÃO DE CASES DE SUCESSO (O TESTE DE FOGO)                      */}
        {/* ------------------------------------------------------------------- */}
        <div className="mb-10 sm:mb-16 flex flex-col items-center text-center">
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            O Teste de Fogo.
          </h3>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-[#86868b] max-w-xl">
            Resultados consolidados onde a interrupção da rede não é uma opção.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          
          {/* CASE PRINCIPAL: Paraíso do Atlântico */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#1d1d1f]/90 backdrop-blur-md p-5 sm:p-8 md:p-12 md:col-span-7"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-6">
                <span className="rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-[10px] sm:text-xs font-semibold text-orange-500">
                  Case de Alta Densidade
                </span>
                <span className="text-[10px] sm:text-xs text-[#86868b]">Infraestrutura + Wi-Fi Hotspot</span>
              </div>

              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Paraíso do Atlântico</h4>
              <p className="mt-3 sm:mt-4 text-[#86868b] text-sm sm:text-base leading-relaxed">
                Projeto fim a fim englobando Link Dedicado, Redes Personalizadas e infraestrutura Wi-Fi de alta capacidade para eventos e áreas comuns.
              </p>

              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2.5 sm:gap-4">
                <div className="rounded-xl sm:rounded-2xl bg-white/5 p-3 sm:p-4 border border-white/5">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">400+</span>
                  <span className="text-[10px] sm:text-xs text-[#86868b]">Conexões Simultâneas</span>
                </div>
                <div className="rounded-xl sm:rounded-2xl bg-white/5 p-3 sm:p-4 border border-white/5">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-orange-500">10 Gbps</span>
                  <span className="text-[10px] sm:text-xs text-[#86868b]">Capacidade Backhaul</span>
                </div>
                <div className="rounded-xl sm:rounded-2xl bg-white/5 p-3 sm:p-4 border border-white/5">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">33</span>
                  <span className="text-[10px] sm:text-xs text-[#86868b]">Pontos Wi-Fi Pro</span>
                </div>
                <div className="rounded-xl sm:rounded-2xl bg-white/5 p-3 sm:p-4 border border-white/5">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">100%</span>
                  <span className="text-[10px] sm:text-xs text-[#86868b]">Área Coberta</span>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 flex items-center justify-between border-t border-white/5 pt-4 sm:pt-6">
              <span className="inline-flex items-center text-xs sm:text-sm font-medium text-emerald-400">
                <CheckCircle2 size={16} className="mr-2 shrink-0" /> 27 meses operando sem quedas
              </span>
            </div>
          </motion.div>

          {/* CASES SECUNDÁRIOS: Ilha Dourada e Numar */}
          <div className="flex flex-col gap-6 md:col-span-5">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-between rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#1d1d1f]/90 backdrop-blur-md p-5 sm:p-8 h-full"
            >
              <div>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] sm:text-[11px] font-medium uppercase text-[#86868b]">
                  Hotelaria & Negócios
                </span>
                <h4 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold text-white">Ilha Dourada</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#86868b] leading-relaxed">
                  Link Dedicado corporativo com média diária de 170 conexões simultâneas sem perda de pacotes.
                </p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-4 text-xs font-semibold text-emerald-400 flex items-center">
                <CheckCircle2 size={16} className="mr-2 shrink-0" /> 14 meses de estabilidade contínua
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-between rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#1d1d1f]/90 backdrop-blur-md p-5 sm:p-8 h-full"
            >
              <div>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] sm:text-[11px] font-medium uppercase text-[#86868b]">
                  Rede de Alta Velocidade
                </span>
                <h4 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold text-white">Numar</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#86868b] leading-relaxed">
                  Velocidades de até 1200 Mbps entregues no Wi-Fi corporativo mantendo baixa latência.
                </p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-4 text-xs font-semibold text-emerald-400 flex items-center">
                <CheckCircle2 size={16} className="mr-2 shrink-0" /> 18 meses sem chamados técnicos
              </div>
            </motion.div>

          </div>

        </div>

        {/* ------------------------------------------------------------------- */}
        {/* BOTÃO DE CHAMADA PARA AÇÃO (CTA INTERMEDIÁRIO)                       */}
        {/* ------------------------------------------------------------------- */}
        <div className="mt-12 sm:mt-16 text-center">
          <AnchorLink 
            href="#contact"
            onClick={() => setSelectedPage("contact")}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl sm:rounded-full border border-orange-500/30 bg-orange-500/10 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-medium text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
          >
            <span>Quero essa mesma infraestrutura na minha empresa</span>
            <ArrowUpRight size={18} className="shrink-0" />
          </AnchorLink>
        </div>

      </div>
    </section>
  );
};

export default Proof;