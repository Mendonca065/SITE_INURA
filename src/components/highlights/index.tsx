import HighlightCard from "./HighlightCard";
import type { SelectedPage } from "@/utils/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Highlights = ({ setSelectedPage }: Props) => {
  return (
    <section id="server" className="bg-black py-24">
      <div className="mx-auto w-5/6 max-w-[1200px]">
        
        {/* Título da Seção */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold tracking-tighter text-white md:text-6xl">
            Projetado para o extremo.
          </h2>
          <p className="mt-4 text-xl font-medium text-[#86868b]">
            A infraestrutura definitiva para operações críticas.
          </p>
        </div>

        {/* Grade Bento Box (Estilo Apple) */}
        <motion.div 
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-[400px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          
          {/* Cartão 1: Largo (Ocupa 2 colunas) */}
          <HighlightCard 
            className="md:col-span-2"
            title="Fibra Exclusiva"
            subtitle="Apenas sua empresa. Sem interferências."
            description="O Link Dedicado oferece uma rota direta de Fibra Óptica exclusiva direto do nosso Data Center até a sua empresa. Você não divide a conexão com mais ninguém."
            titleGradient={true}
          />

          {/* Cartão 2: Quadrado (Ocupa 1 coluna) */}
          <HighlightCard 
            className="md:col-span-1"
            title="Simetria"
            subtitle="Até 100 Gbps."
            description="Velocidade garantida e simétrica. A sua taxa de download é exatamente a mesma que a de upload, disponível 100% do tempo."
          />

          {/* Cartão 3: Quadrado (Ocupa 1 coluna) */}
          <HighlightCard 
            className="md:col-span-1"
            title="SLA 99,9%"
            subtitle="Estabilidade inabalável."
            description="Infraestrutura de alta performance com latência cravada. Projetado para eliminar falhas e manter sistemas em nuvem sempre operacionais."
          />

          {/* Cartão 4: Largo (Ocupa 2 colunas) */}
          <HighlightCard 
            className="md:col-span-2"
            title="Atendimento Premium"
            subtitle="Suporte G3 ELITE."
            description="Rápido, direto e humanizado. Trate diretamente com um gerente exclusivo e tenha um tempo de resposta recorde para qualquer reparo."
          />

        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;