import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// Importando a nova logo branca
import Logo from "@/assets/logo-white.png"; 
import Link from "./Link";
import type { SelectedPage } from "@/utils/types";
import useMediaQuery from "@/app-hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/utils/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenutoggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
  // Fundo mais translúcido (70%) e blur mais intenso (lg)
  const navbarBackground = "bg-[#161617]/70 backdrop-blur-lg border-b border-gray-800/50";

  return (
    <nav>
      {/* Removido o py-3 e adicionado h-14 para controle exato da altura */}
      <div className={`${navbarBackground} fixed top-0 z-30 w-full h-14 transition-all duration-300`}>
        <div className="mx-auto flex h-full w-5/6 max-w-[1200px] items-center justify-between">
          
          {/* TÍTULO / LOGO - ESQUERDA */}
          <div className="flex h-full items-center">
            <img alt="Inura Logo" src={Logo} className="h-20 md:h-24 object-contain" />
          </div>

          {/* LINKS & BOTÃO - DIREITA */}
          <div className="flex h-full items-center">
            {isAboveMediumScreens ? (
              <div className="flex h-full items-center gap-6 text-xs">
                <Link
                  page="hero"
                  label="Visão geral"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="server"
                  label="Especificações"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="vps"
                  label="Comparar"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="support"
                  label="Mude do PC para o Mac"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                
                {/* Botão alinhado */}
                <div className="ml-2 flex items-center">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Comprar
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-gray-800 p-2"
                onClick={() => setIsMenuToggled(!isMenutoggled)}
              >
                <Bars3Icon className="h-5 w-5 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {!isAboveMediumScreens && isMenutoggled && (
        <div className="fixed right-0 top-0 z-40 h-full w-[300px] bg-[#1d1d1f] drop-shadow-xl border-l border-gray-800">
          <div className="flex justify-end p-8">
            <button
              className="rounded-full bg-gray-800 p-2"
              onClick={() => setIsMenuToggled(!isMenutoggled)}
            >
              <XMarkIcon className="h-5 w-5 text-white" />
            </button>
          </div>

          <div className="ml-[25%] flex flex-col gap-8 text-lg">
            <Link
              page="hero"
              label="Visão geral"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="server"
              label="Especificações"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="vps"
              label="Comparar"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="support"
              label="Mude do PC para o Mac"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;