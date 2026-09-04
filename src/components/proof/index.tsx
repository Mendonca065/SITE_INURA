import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowUpRight } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import type { SelectedPage } from "@/utils/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Proof = ({ setSelectedPage }: Props) => {
  return (
    <section id="proof" className="relative bg-black py-32 text-white overflow-hidden selection:bg-orange-500 selection:text-white">
      
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[160px]" />

      <div className="mx-auto w-11/12 max-w-[1240px]">
        
        {/* Cabeçalho do Bloco 3 */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500"
          >
            A Prova & A Engenharia
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl"
          >
            Matriz de Decisão.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg font-normal text-[#86868b] sm:text-2xl leading-relaxed tracking-tight"
          >
            Entenda por que conexões convencionais colapsam em operações críticas e como nossa arquitetura entrega performance inegociável.
          </motion.p>
        </div>

        {/* 1. Tabela Comparativa (Matriz de Decisão) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32 overflow-hidden rounded-[32px] border border-white/10 bg-[#1d1d1f]"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] text-xs font-semibold uppercase tracking-widest text-[#86868b]">
                  <th className="p-6 sm:p-8">Métrica de Infraestrutura</th>
                  <th className="p-6 sm:p-8 text-center">Banda Larga Comum</th>
                  <th className="p-6 sm:p-8 text-center">Semi-Dedicado</th>
                  <th className="p-6 sm:p-8 text-center text-orange-500 bg-orange-500/5">Link Dedicado INURA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm sm:text-base font-normal">
                <tr className="transition-colors hover:bg-white/[0.02]">
                  <td className="p-6 sm:p-8 font-medium text-white">Compartilhamento de Rede</td>
                  <td className="p-6 sm:p-8 text-center text-[#86868b]">Até 256 clientes dividindo a porta</td>
                  <td className="p-6 sm:p-8 text-center text-[#86868b]">Até 16 clientes por porta</td>
                  <td className="p-6 sm:p-8 text-center font-bold text-orange-500 bg-orange-500/5">Fibra Exclusiva (1:1)</td>
                </tr>
                <tr className="transition-colors hover:bg-white/[0.02]">
                  <td className="p-6 sm:p-8 font-medium text-white">Estabilidade & Simetria</td>
                  <td className="p-6 sm:p-8 text-center text-[#86868b]">Oscila nos horários de pico</td>
                  <td className="p-6 sm:p-8 text-center text-[#86868b]">Simetria parcial</td>
                  <td className="p-6 sm:p-8 text-center font-bold text-orange-500 bg-orange-500/5">100% Simétrico 24/7</td>
                </tr>
                <tr className="transition-colors hover:bg-white/[0.02]">
                  <td className="p-6 sm:p-8 font-medium text-white">Prazo para Início de Reparo</td>
                  <td className="p-6 sm:p-8 text-center text-[#86868b]">Até 72 horas úteis</td>
                  <td className="p-6 sm:p-8 text-center text-[#86868b]">Até 24 horas</td>
                  <td className="p-6 sm:p-8 text-center font-bold text-orange-500 bg-orange-500/5">Até 12 horas corridas</td>
                </tr>
                <tr className="transition-colors hover:bg-white/[0.02]">
                  <td className="p-6 sm:p-8 font-medium text-white">Garantia em Contrato (SLA)</td>
                  <td className="p-6 sm:p-8 text-center text-[#86868b]">Sem garantia (Best Effort)</td>
                  <td className="p-6 sm:p-8 text-center text-[#86868b]">97,5% de disponibilidade</td>
                  <td className="p-6 sm:p-8 text-center font-bold text-orange-500 bg-orange-500/5">99,9% Garantido</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 2. Cases de Sucesso (O Teste de Fogo) */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            O Teste de Fogo.
          </h3>
          <p className="mt-4 text-base text-[#86868b] sm:text-xl max-w-xl">
            Resultados consolidados onde a interrupção da rede não é uma opção.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          
          {/* Case Destaque: Paraíso do Atlântico */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-[#1d1d1f] p-8 sm:p-12 md:col-span-7"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-500">
                  Case de Alta Densidade
                </span>
                <span className="text-xs text-[#86868b]">Infraestrutura + Wi-Fi Hotspot</span>
              </div>

              <h4 className="text-3xl font-bold text-white sm:text-4xl">Paraíso do Atlântico</h4>
              <p className="mt-4 text-[#86868b] text-base sm:text-lg">
                Projeto fim a fim englobando Link Dedicado, Redes Personalizadas e infraestrutura Wi-Fi de alta capacidade para eventos e áreas comuns.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                  <span className="block text-3xl font-extrabold text-white">400+</span>
                  <span className="text-xs text-[#86868b]">Conexões Simultâneas</span>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                  <span className="block text-3xl font-extrabold text-orange-500">10 Gbps</span>
                  <span className="text-xs text-[#86868b]">Capacidade do Backhaul</span>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                  <span className="block text-3xl font-extrabold text-white">33</span>
                  <span className="text-xs text-[#86868b]">Pontos Wi-Fi Pro</span>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                  <span className="block text-3xl font-extrabold text-white">100%</span>
                  <span className="text-xs text-[#86868b]">Área Coberta</span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6">
              <span className="inline-flex items-center text-sm font-medium text-emerald-400">
                <CheckCircle2 size={18} className="mr-2" /> 27 meses operando sem quedas
              </span>
            </div>
          </motion.div>

          {/* Cases Secundários: Ilha Dourada e Numar */}
          <div className="flex flex-col gap-6 md:col-span-5">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-between rounded-[32px] border border-white/10 bg-[#1d1d1f] p-8 h-full"
            >
              <div>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-medium uppercase text-[#86868b]">
                  Hotelaria & Negócios
                </span>
                <h4 className="mt-4 text-2xl font-bold text-white">Ilha Dourada</h4>
                <p className="mt-2 text-sm text-[#86868b]">
                  Link Dedicado corporativo com média diária de 170 conexões simultâneas sem perda de pacotes.
                </p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-4 text-xs font-semibold text-emerald-400 flex items-center">
                <CheckCircle2 size={16} className="mr-2" /> 14 meses de estabilidade contínua
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-between rounded-[32px] border border-white/10 bg-[#1d1d1f] p-8 h-full"
            >
              <div>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-medium uppercase text-[#86868b]">
                  Rede de Alta Velocidade
                </span>
                <h4 className="mt-4 text-2xl font-bold text-white">Numar</h4>
                <p className="mt-2 text-sm text-[#86868b]">
                  Velocidades de até 1200 Mbps entregues no Wi-Fi corporativo mantendo baixa latência.
                </p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-4 text-xs font-semibold text-emerald-400 flex items-center">
                <CheckCircle2 size={16} className="mr-2" /> 18 meses sem chamados técnicos
              </div>
            </motion.div>

          </div>

        </div>

        {/* Chamada para Ação Intermediária */}
        <div className="mt-16 text-center">
          <AnchorLink 
            href="#contact"
            onClick={() => setSelectedPage("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-8 py-4 text-sm font-medium text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
          >
            <span>Quero essa mesma infraestrutura na minha empresa</span>
            <ArrowUpRight size={18} />
          </AnchorLink>
        </div>

      </div>
    </section>
  );
};

export default Proof;