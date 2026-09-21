import { ArrowUpRight, Terminal } from "lucide-react";
import bgHero from "@/assets/bg-hero.jpg"; 
import FibreArc from "../ui/FibreArc"; 

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full overflow-hidden bg-black font-sans antialiased select-none"
    >
      {/* 1. BACKGROUND & OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgHero}
          alt="Infraestrutura Inura"
          className="h-full w-full object-cover object-right opacity-45"
        />
        
        {/* Vinheta lateral e de base com gradiente de alta densidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>

      {/* 2. EFEITO FIBRE ARC */}
      <div className="absolute inset-0 z-10 opacity-75 pointer-events-auto">
        <FibreArc />
      </div>

      {/* 3. CONTEÚDO PRINCIPAL */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 md:px-16 pt-[52vh] pb-16 pointer-events-none">
        <div className="max-w-3xl">
          
          {/* Eyebrow: Badge técnico em mono/capsula industrial */}
          <div className="pointer-events-auto mb-5 inline-flex items-center gap-2.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
              Backbone Corporativo // SLA 99.98%
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-5 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08]">
            Conectividade crítica para operações que não toleram oscilação.
          </h1>

          {/* Subtítulo */}
          <p className="mb-8 max-w-xl text-base font-normal leading-relaxed text-zinc-400 sm:text-lg">
            Rotas diretas de fibra óptica, IP fixo exclusivo e suporte técnico de nível sênior em regime 24/7.
          </p>

          {/* Botões de Ação estilo Industrial/SaaS High-End */}
          <div className="pointer-events-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            
            {/* Botão Primário: Laranja sólido com microborda de luz interna */}
            <a
              href="#support"
              className="group relative inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_1px_2px_rgba(0,0,0,0.4)] transition-all hover:bg-orange-600 active:scale-[0.98]"
            >
              <span>Consultar Viabilidade</span>
              <ArrowUpRight className="h-4 w-4 text-orange-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Botão Secundário: Vidro escurecido com borda fina translúcida */}
            <a
              href="#solucoes"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-6 text-sm font-medium text-zinc-300 backdrop-blur-md transition-all hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white active:scale-[0.98]"
            >
              <span>Topologia da Rede</span>
            </a>

          </div>

          {/* Telemetria / Métricas Técnicas */}
          <div className="mt-10 flex items-center gap-6 border-t border-white/[0.06] pt-6 font-mono text-xs text-zinc-500">
            <div>
              <span className="text-zinc-300">0%</span> perda de pacotes
            </div>
            <div className="h-3 w-px bg-white/[0.08]" />
            <div>
              <span className="text-zinc-300">1:1</span> banda simétrica garantida
            </div>
            <div className="h-3 w-px bg-white/[0.08]" />
            <div>
              <span className="text-zinc-300">&lt; 4h</span> MTTR emergencial
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}