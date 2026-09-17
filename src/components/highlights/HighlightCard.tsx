import React from "react";
import type { LucideProps } from "lucide-react";

type Props = {
  className?: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps>;
  badge?: string;
  titleGradient?: boolean;
  children?: React.ReactNode;
};

const HighlightCard = ({ 
  className = "", 
  tag, 
  title, 
  description,
  icon: Icon,
  badge,
  titleGradient = false,
  children
}: Props) => {
  return (
    <div 
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-[#1d1d1f] p-8 md:p-10 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-orange-500/5 ${className}`}
    >
      {/* Luz sutil no canto do card ao passar o mouse */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20" />

      {/* Cabeçalho do Card */}
      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-500">
            <Icon size={24} />
          </div>

          {badge && (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#86868b]">
              {badge}
            </span>
          )}
        </div>

        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
          {tag}
        </span>
        
        <h3 className={`mt-2 text-2xl font-bold tracking-tight md:text-4xl ${
          titleGradient 
            ? "bg-gradient-to-r from-white via-white to-orange-400 bg-clip-text text-transparent" 
            : "text-white"
        }`}>
          {title}
        </h3>
        
        <p className="mt-4 text-base font-normal leading-relaxed text-[#86868b]">
          {description}
        </p>
      </div>

      {/* Área para Elemento Visual Técnico (Gráficos, Indicadores ou Métricas) */}
      {children && (
        <div className="relative z-10 mt-8">
          {children}
        </div>
      )}
    </div>
  );
};

export default HighlightCard;