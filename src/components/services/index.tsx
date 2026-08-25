import { motion } from "framer-motion";
import type { SelectedPage } from "@/utils/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="bg-gray-20 px-6 py-24">
      <motion.div
        className="mx-auto w-5/6"
        onViewportEnter={() => setSelectedPage("services")}
      >
        {/* HEADER */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-4xl font-bold text-gray-800">Nossos Serviços</h2>

          <p className="mt-4 text-gray-600">
            Soluções modernas para criar e gerenciar máquinas virtuais com
            flexibilidade, segurança e alta performance.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Provisionamento Sob Demanda",
              description:
                "Crie máquinas virtuais rapidamente para desenvolvimento, testes ou produção com total flexibilidade.",
              number: "01",
            },
            {
              title: "Alta Performance",
              description:
                "Recursos otimizados para garantir desempenho estável e máximo aproveitamento da infraestrutura.",
              number: "02",
            },
            {
              title: "Segurança Avançada",
              description:
                "Ambientes isolados e protegidos para garantir confiabilidade e proteção total dos seus dados.",
              number: "03",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-primary-100 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <span className="text-lg font-bold text-primary-500">
                  {service.number}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
