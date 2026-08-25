import React from "react";

type Props = {
  className?: string;
  title: string;
  subtitle: string;
  description: string;
  titleGradient?: boolean;
};

const HighlightCard = ({ 
  className = "", 
  title, 
  subtitle, 
  description,
  titleGradient = false
}: Props) => {
  return (
    <div 
      className={`relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#161617] p-8 md:p-12 transition-transform duration-500 hover:scale-[1.02] ${className}`}
    >
      <div className="relative z-10 flex flex-col gap-2">
        <h3 className="text-lg font-semibold uppercase tracking-widest text-[#a1a1a6]">
          {title}
        </h3>
        
        <h2 className={`text-3xl font-bold tracking-tight md:text-5xl ${
          titleGradient 
            ? "bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent" 
            : "text-white"
        }`}>
          {subtitle}
        </h2>
        
        <p className="mt-4 max-w-md text-lg font-medium text-[#86868b] leading-relaxed">
          {description}
        </p>
      </div>

      {/* 
        Aqui você pode colocar imagens absolutas no futuro, 
        ex: ícones ou renders 3D no canto inferior direito do cartão 
      */}
    </div>
  );
};

export default HighlightCard;