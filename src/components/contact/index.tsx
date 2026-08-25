import { motion } from "framer-motion";
import type { SelectedPage } from "@/utils/types";
import ActionButton from "@/utils/ActionButton";

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  WrenchScrewdriverIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section id="support" className="py-20 md:py-28">
      <motion.div
        className="mx-auto w-5/6"
        onViewportEnter={() => setSelectedPage("support")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {/* TÍTULO */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Suporte
          </h1>

          <p className="mt-6 text-gray-600">
            Fale conosco para obter suporte técnico, informações sobre nossos
            serviços ou qualquer dúvida que você possa ter. Nossa equipe está
            pronta para ajudar!
          </p>
        </div>

        {/* GRID */}
        <div className="lg:grid-cols-2 grid grid-cols-1 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-10 shadow-xl"
          >
            <h2 className="mb-10 text-2xl font-bold text-gray-900">
              Informações de contato
            </h2>

            {/* GRID HORIZONTAL */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* TELEFONE */}
              <div className="flex gap-3">
                <PhoneIcon className="h-6 w-6 text-primary-500" />

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Telefone
                  </h3>

                  <a
                    href="https://wa.me/558331429400"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0096FF] transition hover:opacity-80"
                  >
                    (83) 3142-9400
                  </a>

                  <p className="mt-1 text-sm text-gray-500">
                    Seg-Sex: 8h às 18h | Sáb: 8h às 12h
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-3">
                <EnvelopeIcon className="h-6 w-6 text-primary-500" />

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    E-mail
                  </h3>

                  <p className="text-gray-600">contato@g3netfibra.com.br</p>

                  <p className="mt-1 text-sm text-gray-500">
                    Retorno em até 24h úteis.
                  </p>
                </div>
              </div>

              {/* CONTATO TÉCNICO */}
              <div className="flex gap-3">
                <WrenchScrewdriverIcon className="h-6 w-6 text-primary-500" />

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Contato técnico
                  </h3>

                  <p className="text-gray-600">suporte@g3netfibra.com.br</p>

                  <p className="mt-1 text-sm text-gray-500">
                    Suporte técnico especializado.
                  </p>
                </div>
              </div>

              {/* STATUS DA REDE */}
              <div className="flex gap-3">
                <SignalIcon className="h-6 w-6 text-primary-500" />

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Status da rede
                  </h3>

                  <p className="font-medium text-green-600">Operacional</p>

                  <p className="mt-1 text-sm text-gray-500">
                    Nenhuma instabilidade detectada.
                  </p>
                </div>
              </div>

              {/* ENDEREÇO */}
              <div className="flex gap-3 md:col-span-2">
                <MapPinIcon className="h-6 w-6 text-primary-500" />

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Endereço
                  </h3>

                  <p className="text-gray-600">
                    Av. Pres. José Linhares, 204 - Sala 203
                  </p>

                  <p className="text-gray-600">Bessa, João Pessoa - PB</p>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <ActionButton setSelectedPage={setSelectedPage}>
                Fale Conosco
              </ActionButton>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
