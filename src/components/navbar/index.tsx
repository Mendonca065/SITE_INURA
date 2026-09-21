import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import type { SelectedPage } from "@/utils/types";
import useMediaQuery from "@/app-hooks/useMediaQuery";
import ActionButton from "@/utils/ActionButton";

// Função para juntar classes do Tailwind sem conflitos
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Props = {
  isTopOfPage: boolean; // Se não estiver usando, pode remover
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Lógica Resizable: Verifica se passou de 50px de scroll para encolher a navbar
  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      setIsScrolled(current > 50);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        // Animação de redimensionamento em vez de sumir
        initial={{ top: 0, width: "100%", borderRadius: "0px" }}
        animate={{
          top: isScrolled ? 24 : 0, // Desce 24px quando rola (pill), 0 no topo
          width: isScrolled ? (isAboveMediumScreens ? "max-content" : "90%") : "100%", // Encolhe para o tamanho do conteúdo
          borderRadius: isScrolled ? "9999px" : "0px", // Fica arredondada ao rolar
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={cn(
          "fixed inset-x-0 z-50 mx-auto flex items-center justify-between gap-8 bg-[#1d1d1f]/80 px-6 py-3 backdrop-blur-md transition-shadow",
          isScrolled
            ? "border border-white/[0.1] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            : "border-b border-white/[0.1]" // No topo, apenas borda inferior
        )}
      >
        {/* LOGO INURA */}
        <div className="flex items-center">
          <span className="text-lg font-bold tracking-tight text-white">
            INURA
          </span>
        </div>

        {/* LINKS DESKTOP */}
        {isAboveMediumScreens && (
          <div className="flex items-center gap-6">
            <Link
              page="highlights"
              label="A Máquina"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="shielding"
              label="A Blindagem"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="proof"
              label="Casos de Sucesso"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="services"
              label="Ecossistema"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        )}

        {/* BOTÃO E MENU MOBILE */}
        <div className="flex items-center gap-4">
          {isAboveMediumScreens ? (
            <ActionButton setSelectedPage={setSelectedPage}>
              Falar com Engenheiro
            </ActionButton>
          ) : (
            <button
              className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-5 w-5 text-white" />
            </button>
          )}
        </div>
      </motion.nav>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed right-0 top-0 z-[100] h-full w-[300px] border-l border-white/10 bg-[#1d1d1f] drop-shadow-2xl"
        >
          <div className="flex justify-end p-8">
            <button
              className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className="h-5 w-5 text-white" />
            </button>
          </div>
          <div className="ml-[25%] flex flex-col gap-8 text-lg font-medium">
            <Link
              page="highlights"
              label="A Máquina"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="shielding"
              label="A Blindagem"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="proof"
              label="Casos de Sucesso"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="services"
              label="Ecossistema"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <div className="mt-4">
              <ActionButton setSelectedPage={setSelectedPage}>
                Falar com Engenheiro
              </ActionButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;