import { motion } from "framer-motion";
import type { SelectedPage } from "@/utils/types";
import ActionButton from "@/utils/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Vps = ({ setSelectedPage }: Props) => {
  return (
    <section id="vps" className="bg-gray-20 py-20 md:py-28">
      <motion.div
        className="mx-auto flex w-5/6 flex-col items-center justify-between gap-12 md:flex-row"
        onViewportEnter={() => setSelectedPage("vps")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {/* IMAGEM - ESQUERDA */}
        <div className="flex basis-1/2 justify-center md:mt-16">
          <div className="h-[380px] w-[520px] overflow-hidden rounded-2xl bg-gradient-primary shadow-lg">
            <img
              alt="Cliente utilizando internet G3NET"
              src="https://via.placeholder.com/600x400"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* TEXTO - DIREITA */}
        <div className="w-full md:basis-1/2">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat text-4xl font-bold tracking-tight md:text-5xl">
              Máquina virtual Privada com{" "}
              <span className="text-primary-500">Alta Performance.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base">
              Tenha servidores dedicados na nuvem com recursos escaláveis, alta
              disponibilidade e total autonomia para gerenciar seus projetos.
              Ideal para empresas, desenvolvedores e aplicações que exigem
              desempenho e estabilidade. Crie, configure e expanda sua VM
              conforme sua necessidade, com suporte técnico especializado e
              infraestrutura de ponta da INURA.
            </p>

            <div className="mt-8">
              <ActionButton setSelectedPage={setSelectedPage}>
                Faça sua Máquina Virtual.
              </ActionButton>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Vps;
