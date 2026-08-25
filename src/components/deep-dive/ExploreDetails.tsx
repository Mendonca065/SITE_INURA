import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
// Use uma imagem sua que já esteja na pasta assets
import heroImage from "@/assets/hero.png"; 

// 8 Pontos completos baseados na arquitetura da G3NET
const detailsData = [
  {
    id: 1,
    title: "Arquitetura Exclusiva",
    content: "Diferente da banda larga que divide o sinal, nosso Link Dedicado oferece uma rota direta de Fibra Óptica exclusiva entre a G3NET e a sua empresa[cite: 1]. Sem interferências e sem compartilhamento[cite: 1].",
    image: heroImage, 
  },
  {
    id: 2,
    title: "Desempenho Simétrico",
    content: "A velocidade de download é exatamente a mesma que a de upload[cite: 1]. A banda contratada estará 100% disponível todos os dias, blindando sua operação contra lentidão em horários de pico[cite: 1].",
    image: heroImage, 
  },
  {
    id: 3,
    title: "Ecossistema G3",
    content: "Projetamos redes com cobertura otimizada e livre de pontos cegos[cite: 1]. Você conta com suporte G3 Elite humanizado, Acordo de Nível de Serviço de 99,9% e prazo máximo de 12h para início de reparos[cite: 1].",
    image: heroImage,
  },
  {
    id: 4,
    title: "Segurança e IP Dedicado",
    content: "Sua empresa obtém um endereço de internet exclusivo com controle total[cite: 1]. Nosso sistema de HotSpot cria redes isoladas para convidados, protegendo seus dados e servidores corporativos integralmente[cite: 1].",
    image: heroImage,
  },
  {
    id: 5,
    title: "Inteligência de Tráfego",
    content: "Nossa rede pensa e prioriza o tráfego da sua empresa[cite: 1]. Possuímos conexões com os principais pontos de troca do Brasil para garantir a melhor rota, sempre.",
    image: heroImage,
  },
  {
    id: 6,
    title: "O Mundo Real",
    content: "No Paraíso do Atlântico, alcançamos ampla cobertura sustentando mais de 400 dispositivos simultâneos[cite: 1]. No restaurante Numar, operamos há 24 meses sem reclamações, entregando até 1200 Mbps no Wi-Fi[cite: 1].",
    image: heroImage,
  },
  {
    id: 7,
    title: "Garantia Risco Zero",
    content: "Temos tanta confiança na nossa infraestrutura que oferecemos visita gratuita para orçamento e a garantia de satisfação ou seu dinheiro de volta[cite: 1]. O investimento certo para o seu negócio[cite: 1].",
    image: heroImage,
  },
  {
    id: 8,
    title: "O Nosso Propósito",
    content: "A G3NET nasceu da nossa própria má experiência com grandes operadoras[cite: 1]. Cansados de procurar uma internet de qualidade e um suporte eficaz, criamos a nossa própria solução[cite: 1].",
    image: heroImage,
  },
];

const ExploreDetails = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Título da Seção */}
        <h2 className="mb-8 text-4xl font-semibold tracking-tight text-white md:text-[56px]">
          Explore os detalhes.
        </h2>

        {/* Container Principal */}
        <div className="relative flex min-h-[700px] w-full flex-col overflow-hidden rounded-[32px] bg-[#161617] p-8 md:flex-row md:p-12">
          
          {/* Botão Fechar Global (Canto Superior Direito) */}
          <AnimatePresence>
            {activeTab !== null && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setActiveTab(null)}
                className="absolute right-6 top-6 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-[#333336] text-[#86868b] transition-colors hover:bg-gray-600 hover:text-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Coluna Esquerda: Pílulas Interativas */}
          <div className="z-10 flex w-full flex-col gap-4 md:w-5/12 md:pr-8">
            <LayoutGroup>
              {detailsData.map((item) => {
                const isActive = activeTab === item.id;

                return (
                  <motion.div
                    layout
                    key={item.id}
                    onClick={() => setActiveTab(isActive ? null : item.id)}
                    // Aqui mantemos "self-start" sempre, deixando o Framer Motion animar a largura do conteúdo interno suavemente
                    className={`cursor-pointer overflow-hidden self-start ${
                      isActive 
                        ? "bg-[#2c2c2e] rounded-[24px] p-6 shadow-2xl" 
                        : "bg-[#2c2c2e] hover:bg-[#3a3a3c] rounded-full px-5 py-3"
                    }`}
                  >
                    {/* Cabeçalho (Ícone + Título) */}
                    <motion.div layout className="flex items-center gap-3">
                      <div 
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                          isActive ? 'bg-[#555557]' : 'border border-[#86868b]'
                        }`}
                      >
                        {isActive ? (
                          <XMarkIcon className="h-3.5 w-3.5 text-white" />
                        ) : (
                          <PlusIcon className="h-3.5 w-3.5 text-[#86868b]" />
                        )}
                      </div>
                      <motion.span layout className="font-semibold text-white">
                        {item.title}
                      </motion.span>
                    </motion.div>

                    {/* Conteúdo que abre sanfonado */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ opacity: { duration: 0.2 }, height: { duration: 0.3 } }}
                          className="overflow-hidden"
                        >
                          {/* 
                            O segredo da correção está aqui: o width flexível com limite (vw) 
                            impede que o texto vire "uma linha enorme" ao fechar.
                          */}
                          <div className="mt-4 border-t border-gray-600 pt-4 text-sm leading-relaxed text-[#a1a1a6] w-[80vw] sm:w-[320px] md:w-[28vw] max-w-[450px] whitespace-normal">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </LayoutGroup>
          </div>

          {/* Coluna Direita: Imagem Dinâmica */}
          <div className="relative mt-12 flex w-full items-center justify-center md:mt-0 md:w-7/12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab !== null ? activeTab : "default"}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src={
                    activeTab !== null
                      ? detailsData.find((d) => d.id === activeTab)?.image
                      : heroImage
                  }
                  alt="Detalhes Inura"
                  className="max-h-[500px] w-full object-contain opacity-90 transition-all duration-700"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExploreDetails;