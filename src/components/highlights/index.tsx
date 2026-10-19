import { motion } from "framer-motion";
import { Cpu, Zap, Activity, Gauge } from "lucide-react";
import { useTranslation } from "react-i18next";
import HighlightCard from "./HighlightCard";
import type { SelectedPage } from "@/utils/types";
import DataPixelArc from "@/components/backgrounds/pixelArc";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Highlights = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  return (
    <section 
      id="highlights" 
      className="relative bg-black py-20 sm:py-32 text-white overflow-hidden selection:bg-orange-500 selection:text-white"
    >
      
      {/* ------------------------------------------------------------------- */}
      {/* DATA PIXEL ARC (BACKGROUND WEBGEL INTERATIVO INURA)                 */}
      {/* ------------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <DataPixelArc />
      </div>

      {/* Glow Ambiente Auxiliar */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 z-0 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-orange-500/5 blur-[120px] sm:blur-[180px]" />

      {/* Conteúdo da Seção em Camada Superior */}
      <div className="relative z-10 mx-auto w-11/12 max-w-[1240px]">
        
        {/* Título e Posicionamento de Marca */}
        <div className="mb-12 sm:mb-20 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-orange-500"
          >
            {t("highlights.tag", "A Máquina")}
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {t("highlights.title", "Projetado para o extremo.")}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg md:text-2xl font-normal text-[#86868b] leading-relaxed tracking-tight"
          >
            {t("highlights.subtitle", "Engenharia de fibra óptica sem compartilhamento. Toda a capacidade contratada entregue com latência mínima e simetria absoluta.")}
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
            className="md:col-span-2 backdrop-blur-md"
            icon={Cpu}
            tag={t("highlights.card1.tag", "1.1 A Engenharia")}
            title={t("highlights.card1.title", "Fibra Ponto a Ponto Exclusiva.")}
            description={t("highlights.card1.description", "Conexão direta do nosso backbone central até o seu rack. Sem divisores ópticos (splitterless), sem atenuação e sem dividir banda com vizinhos comerciais.")}
            badge={t("highlights.card1.badge", "Garantia 1:1")}
            titleGradient={true}
          >
            {/* Visual Micro-Element: Status do Backbone */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-mono text-[#86868b]">
                  {t("highlights.card1.route", "ROTA: DATACENTER DIA ➔ CLIENTE")}
                </span>
              </div>
              <span className="text-xs font-mono font-semibold text-emerald-400">
                {t("highlights.card1.status", "ISOLAMENTO TOTAL")}
              </span>
            </div>
          </HighlightCard>

          {/* Card 2: Simetria (Quadrado - 1 Coluna) */}
          <HighlightCard 
            className="md:col-span-1 backdrop-blur-md"
            icon={Gauge}
            tag={t("highlights.card2.tag", "1.2 O Pulso")}
            title={t("highlights.card2.title", "Simetria Real.")}
            description={t("highlights.card2.description", "Até 100 Gbps de velocidade contínua. Upload exatamente igual ao download para suportar backups massivos e chamadas em alta definição.")}
            badge={t("highlights.card2.badge", "300Mbps a 100Gbps")}
          >
            {/* Visual Micro-Element: Indicador Simétrico */}
            <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
              <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                <span className="block text-[#86868b] text-[10px] uppercase">
                  {t("highlights.card2.download", "DOWNLOAD")}
                </span>
                <span className="text-sm font-bold text-white">
                  {t("highlights.card2.delivered", "100% Entregue")}
                </span>
              </div>
              <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                <span className="block text-[#86868b] text-[10px] uppercase">
                  {t("highlights.card2.upload", "UPLOAD")}
                </span>
                <span className="text-sm font-bold text-orange-500">
                  {t("highlights.card2.delivered", "100% Entregue")}
                </span>
              </div>
            </div>
          </HighlightCard>

          {/* Card 3: Roteamento / Backbone (Quadrado - 1 Coluna) */}
          <HighlightCard 
            className="md:col-span-1 backdrop-blur-md"
            icon={Zap}
            tag={t("highlights.card3.tag", "1.3 O Backbone")}
            title={t("highlights.card3.title", "Roteamento Inteligente.")}
            description={t("highlights.card3.description", "Tráfego direcionado aos principais IXs e Data Centers do país pelas rotas físicas mais curtas e sem gargalos intermediários.")}
            badge={t("highlights.card3.badge", "Latência Mínima")}
          >
            {/* Visual Micro-Element: Métricas de Ping */}
            <div className="space-y-1.5 text-xs font-mono">
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#86868b]">
                {t("highlights.card3.rttTitle", "Latência Média de Redes (RTT)")}
              </div>

              {[
                { city: "João Pessoa", ping: "1ms", highlight: false },
                { city: "Recife", ping: "3ms" },
                { city: "Fortaleza", ping: "13ms" },
                { city: "São Paulo", ping: "36ms" },
                { city: "Rio de Janeiro", ping: "40ms" },
                { city: "Miami", ping: "75ms" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 border border-white/5 transition-colors hover:bg-white/10"
                >
                  <span className="text-[#86868b]">{item.city}</span>
                  <span className={`font-bold ${item.highlight ? 'text-orange-500' : 'text-emerald-400'}`}>
                    {item.ping}
                  </span>
                </div>
              ))}
            </div>
          </HighlightCard>

          {/* Card 4: Visibilidade / Telemetria (Largo - 2 Colunas) */}
          <HighlightCard 
            className="md:col-span-2 backdrop-blur-md"
            icon={Activity}
            tag={t("highlights.card4.tag", "1.4 Visibilidade")}
            title={t("highlights.card4.title", "Controle em Tempo Real.")}
            description={t("highlights.card4.description", "Acompanhe o tráfego, pacotes e disponibilidade da sua rede com transparência total através de dashboards dedicados.")}
            badge={t("highlights.card4.badge", "Telemetria Proativa")}
          >
            {/* Visual Micro-Element: Gráfico Simulado */}
            <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm">
              <div className="space-y-1">
                <span className="block text-[11px] font-mono text-[#86868b] uppercase">
                  {t("highlights.card4.availabilityLabel", "Disponibilidade de Link")}
                </span>
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