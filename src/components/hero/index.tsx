import AnchorLink from "react-anchor-link-smooth-scroll";
import type { SelectedPage } from "@/utils/types";
import heroImage from "@/assets/hero.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Hero = ({ setSelectedPage }: Props) => {
  return (
    <section 
      id="hero" 
      // Mudamos para justify-end para o conteúdo ficar alinhado na parte inferior
      className="relative flex min-h-screen flex-col justify-end bg-black pb-12 pt-28"
    >
      {/* BACKGROUND COM IMAGEM EM TELA CHEIA E DEGRADÊ */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Inura Infraestrutura" 
          className="h-full w-full object-cover opacity-40" 
        />
        {/* Degradê de baixo (preto sólido) para cima (transparente) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* CONTEÚDO INFERIOR (Textos e Botão) */}
      <div className="relative z-20 mx-auto flex w-5/6 max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        
        {/* TEXTOS - ESQUERDA */}
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold tracking-wide text-white md:text-xl">
            Inura Link Dedicado
          </h2>
          
          <h1 className="bg-gradient-to-r from-white to-orange-500 bg-clip-text font-['Montserrat',_sans-serif] text-4xl font-extrabold tracking-tighter text-transparent md:text-[56px] md:leading-[1.1]">
            A internet no estado da arte.
          </h1>
          
          <p className="mt-2 text-lg font-medium text-[#86868b] md:text-xl">
            Desempenho absoluto. Estabilidade inabalável.
          </p>
        </div>

        {/* BOTÃO TIPO "PÍLULA" - DIREITA */}
        {/* Adicionei 'md:mb-4' aqui para dar esse pequeno ajuste para cima */}
        <div className="flex items-center rounded-full border border-gray-800/60 bg-[#1d1d1f] p-1.5 pl-6 shadow-2xl md:mb-4">
          <span className="mr-4 max-w-[160px] text-xs leading-tight text-[#a1a1a6] md:text-sm">
            Conheça a linha premium de IP Dedicado.
          </span>
          
          <AnchorLink
            className="whitespace-nowrap rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            href="#support"
            onClick={() => setSelectedPage("support")}
          >
            Explorar Soluções
          </AnchorLink>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;