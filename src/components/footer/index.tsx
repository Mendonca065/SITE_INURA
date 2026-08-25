import { motion } from "framer-motion";
import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-500 text-gray-20">
      <motion.div
        className="mx-auto w-5/6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Logo e descrição */}
          <div>
            <img alt="logo" src={Logo} className="h-12 md:h-16" />
            <p className="leading-relaxed text-primary-100">
              Conectando você ao que realmente importa. Internet rápida, estável
              e com suporte especializado para sua casa ou empresa.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-6 font-montserrat text-xl font-semibold">
              Contato
            </h3>

            <ul className="space-y-4 text-primary-100">
              <li>
                Av. Pres. José Linhares, 204 - Sala 203 <br />
                Bessa, João Pessoa - PB
              </li>

              <li>
                <a
                  href="https://wa.me/558331429400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-gray-20 hover:underline"
                >
                  (83) 3142-9400
                </a>
              </li>

              <li>
                <a
                  href="mailto:contato@g3netfibra.com.br"
                  className="transition hover:text-gray-20 hover:underline"
                >
                  contato@g3netfibra.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="mb-6 font-montserrat text-xl font-semibold">
              Navegação
            </h3>

            <ul className="space-y-3 text-primary-100">
              <li className="cursor-pointer transition hover:text-gray-20 hover:underline">
                Início
              </li>
              <li className="cursor-pointer transition hover:text-gray-20 hover:underline">
                Planos
              </li>
              <li className="cursor-pointer transition hover:text-gray-20 hover:underline">
                Suporte
              </li>
              <li className="cursor-pointer transition hover:text-gray-20 hover:underline">
                Contato
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="mt-14 border-t border-primary-300 pt-8 text-center text-sm text-primary-100">
          © {new Date().getFullYear()} INURA. Todos os direitos reservados.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
