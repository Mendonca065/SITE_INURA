import { motion } from "framer-motion";
import { Cpu, Zap, Activity, Gauge } from "lucide-react";
import HighlightCard from "./HighlightCard";
import type { SelectedPage } from "@/utils/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Highlights = ({ setSelectedPage }: Props) => {
  return (
    <section id="highlights" className="relative bg-black py-32 text-white overflow-hidden selection:bg-orange-500 selection:text-white">
      
      {/* Glow Ambiente da Seção */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[180px]" />

      <div className="mx-auto w-11/12 max-w-[1240px]">
        
        {/* Título e Posicionamento de Marca */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500"
          >
            A Máquina
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
          >
            Projetado para o extremo.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-base font-normal text-[#86868b] sm:text-xl leading-relaxed"
          >
            Engenharia de fibra óptica sem compartilhamento. Toda a capacidade contratada entregue com latência mínima e simetria absoluta.
          </motion.p>
        </div>

        {/* Grade Bento Box Técnica */}
        <motion.div 
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          
          {/* Card 1: Fibra Exclusiva (Largo - 2 Colunas) */}
          <HighlightCard 
            className="md:col-span-2"
            icon={Cpu}
            tag="1.1 A Engenharia"
            title="Fibra Ponto a Ponto Exclusiva."
            description="Conexão direta do nosso backbone central até o seu rack. Sem divisores ópticos (splitterless), sem atenuação e sem dividir banda com vizinhos comerciais."
            badge="Garantia 1:1"
            titleGradient={true}
          >
            {/* Visual Micro-Element: Status do Backbone */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-mono text-[#86868b]">ROTA: DATACENTER DIA ➔ CLIENTE</span>
              </div>
              <span className="text-xs font-mono font-semibold text-emerald-400">ISOLAMENTO TOTAL</span>
            </div>
          </HighlightCard>

          {/* Card 2: Simetria (Quadrado - 1 Coluna) */}
          <HighlightCard 
            className="md:col-span-1"
            icon={Gauge}
            tag="1.2 O Pulso"
            title="Simetria Real."
            description="Até 100 Gbps de velocidade contínua. Upload exatamente igual ao download para suportar backups massivos e chamadas em alta definição."
            badge="300Mbps a 100Gbps"
          >
            {/* Visual Micro-Element: Indicador Simétrico */}
            <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
              <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                <span className="block text-[#86868b] text-[10px] uppercase">DOWNLOAD</span>
                <span className="text-sm font-bold text-white">100% Entregue</span>
              </div>
              <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                <span className="block text-[#86868b] text-[10px] uppercase">UPLOAD</span>
                <span className="text-sm font-bold text-orange-500">100% Entregue</span>
              </div>
            </div>
          </HighlightCard>

          {/* Card 3: Roteamento / Backbone (Quadrado - 1 Coluna) */}
          <HighlightCard 
            className="md:col-span-1"
            icon={Zap}
            tag="1.3 O Backbone"
            title="Roteamento Inteligente."
            description="Tráfego direcionado aos principais IXs e Data Centers do país pelas rotas físicas mais curtas e sem gargalos intermediários."
            badge="Latência Mínima"
          >
            {/* Visual Micro-Element: Métricas de Ping */}
            <div className="flex items-center justify-between rounded-xl bg-white/5 p-3 border border-white/5 text-xs font-mono">
              <span className="text-[#86868b]">JITTER MÉDIO</span>
              <span className="font-bold text-emerald-400">&lt; 1ms</span>
            </div>
          </HighlightCard>

          {/* Card 4: Visibilidade / Telemetria (Largo - 2 Colunas) */}
          <HighlightCard 
            className="md:col-span-2"
            icon={Activity}
            tag="1.4 Visibilidade"
            title="Controle em Tempo Real."
            description="Acompanhe o tráfego, pacotes e disponibilidade da sua rede com transparência total através de dashboards dedicados."
            badge="Telemetria Proativa"
          >
            {/* Visual Micro-Element: Gráfico Simulado */}
            <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm">
              <div className="space-y-1">
                <span className="block text-[11px] font-mono text-[#86868b] uppercase">Disponibilidade de Link</span>
                <span className="text-lg font-bold text-white">99.99% Operational</span>
              </div>
              <div className="flex gap-1">
                {[40, 65, 50, 80, 75, 90, 85, 95, 100].map((height, i) => (
                  <div key={i} className="w-1.5 bg-white/10 rounded-full h-8 flex items-end">
                    <div 
                      className="w-full bg-orange-500 rounded-full" 
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </HighlightCard>

        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;