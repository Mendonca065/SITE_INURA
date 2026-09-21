import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "@/assets/Logo.png";
import type { SelectedPage } from "@/utils/types";

type Props = {
  setSelectedPage?: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden selection:bg-orange-500 selection:text-white">
      
      {/* Glow de fundo discreto no topo do footer */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[250px] w-[500px] bg-orange-500/5 blur-[140px]" />

      <motion.div
        className="mx-auto w-11/12 max-w-[1240px] py-16 sm:py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          
          {/* Coluna 1: Logo, Posicionamento B2B e Badge de SLA */}
          <div className="md:col-span-5 space-y-6">
            <img alt="INURA Telelocom" src={Logo} className="h-10 sm:h-12 w-auto object-contain" />
            
            <p className="max-w-sm text-sm sm:text-base font-normal leading-relaxed text-[#86868b]">
              Conectividade corporativa de alto desempenho. Infraestrutura em fibra óptica 100% dedicada, rotas redundantes e resiliência absoluta para operações críticas.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Operação com SLA de até 99,9%
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida com AnchorLink */}
          <div className="md:col-span-3">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Navegação
            </h3>

            <ul className="space-y-3 text-sm font-medium text-[#86868b]">
              <li>
                <AnchorLink
                  href="#hero"
                  onClick={() => setSelectedPage?.("hero")}
                  className="transition-colors duration-300 hover:text-white"
                >
                  Início
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#highlights"
                  onClick={() => setSelectedPage?.("highlights")}
                  className="transition-colors duration-300 hover:text-white"
                >
                  Destaques
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#shielding"
                  onClick={() => setSelectedPage?.("shielding")}
                  className="transition-colors duration-300 hover:text-white"
                >
                  A Blindagem
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#proof"
                  onClick={() => setSelectedPage?.("proof")}
                  className="transition-colors duration-300 hover:text-white"
                >
                  Matriz de Decisão
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#services"
                  onClick={() => setSelectedPage?.("services")}
                  className="transition-colors duration-300 hover:text-white"
                >
                  Ecossistema INURA
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#contact"
                  onClick={() => setSelectedPage?.("contact")}
                  className="transition-colors duration-300 hover:text-white"
                >
                  Contato Corporativo
                </AnchorLink>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Canais de Atendimento */}
          <div className="md:col-span-4">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Atendimento Especializado
            </h3>

            <ul className="space-y-4 text-sm text-[#86868b]">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-orange-500" />
                <span className="leading-relaxed">
                  Av. Pres. José Linhares, 204 - Sala 203 <br />
                  Bessa, João Pessoa - PB
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-orange-500" />
                <a
                  href="https://wa.me/558331429400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-white"
                >
                  (83) 99945-8555
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-orange-500" />
                <a
                  href="mailto:contato@inura.com.br"
                  className="transition-colors duration-300 hover:text-white"
                >
                  contato@inura.com.br
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Divisória e Copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center sm:flex-row sm:text-left text-xs text-[#86868b]">
          <p>© {new Date().getFullYear()} INURA. Todos os direitos reservados.</p>
          <p>Conectividade B2B de Alta Disponibilidade</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;