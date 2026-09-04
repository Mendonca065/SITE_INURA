import { motion } from "framer-motion";
import { MessageSquare, Mail, Phone, ShieldCheck } from "lucide-react";
import type { SelectedPage } from "@/utils/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section id="contact" className="relative bg-black py-32 text-white overflow-hidden selection:bg-orange-500 selection:text-white border-t border-white/10">
      
      {/* Luz ambiente centralizada */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="mx-auto w-11/12 max-w-[1240px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Lado Esquerdo: Chamada Comercial */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              Atendimento Especializado
            </span>
            <h2 className="bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
              Elimine gargalos na sua operação.
            </h2>
            <p className="mt-6 text-base text-[#86868b] sm:text-xl leading-relaxed">
              Fale diretamente com nossa equipe de engenharia para avaliar a viabilidade técnica e dimensionar um projeto de conectividade sob medida.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-sm text-[#86868b]">
                <ShieldCheck size={20} className="text-orange-500" />
                <span>Análise de viabilidade técnica sem compromisso</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#86868b]">
                <ShieldCheck size={20} className="text-orange-500" />
                <span>Atendimento humano direto por especialistas</span>
              </div>
            </div>
          </motion.div>

          {/* Lado Direito: Card de Ação */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="rounded-[32px] border border-white/10 bg-[#1d1d1f] p-8 sm:p-12 shadow-2xl">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">Falar com um Consultor</h3>
              <p className="mt-2 text-sm text-[#86868b]">
                Escolha o canal de preferência para dar início ao seu atendimento corporativo.
              </p>

              <div className="mt-8 space-y-4">
                {/* Botão WhatsApp */}
                <a 
                  href="https://wa.me/5583900000000?text=Olá,%20gostaria%20de%20consultar%20a%20viabilidade%20do%20Link%20Dedicado%20INURA." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full rounded-full bg-orange-500 py-4 px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 shadow-lg shadow-orange-500/20"
                >
                  <MessageSquare size={18} />
                  <span>Conversar via WhatsApp</span>
                </a>

                {/* Opção Telefone / E-mail */}
                <div className="pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 border border-white/5">
                    <Phone size={18} className="text-orange-500" />
                    <div>
                      <span className="block text-[11px] text-[#86868b] uppercase">Atendimento</span>
                      <span className="text-xs font-semibold text-white">0800 000 0000</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 border border-white/5">
                    <Mail size={18} className="text-orange-500" />
                    <div>
                      <span className="block text-[11px] text-[#86868b] uppercase">Comercial</span>
                      <span className="text-xs font-semibold text-white">contato@inura.com.br</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;