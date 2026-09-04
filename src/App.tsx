import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import { useEffect, useState } from "react";
import type { SelectedPage } from "@/utils/types";
import Highlights from "./components/highlights";
import DeepDive from "./components/deep-dive";
import Vps from "./components/vps";
import Services from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Shielding from "./components/shielding";
import Proof from "./components/proof";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>("hero");
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("hero");
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-50">
      {/* Mantivemos o fundo principal do app, mas as novas sessões cobrem a tela com o preto estilo Apple */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      
      {/* 1. O Topo Imersivo */}
      <Hero setSelectedPage={setSelectedPage} />
      
      {/* 2. Carrossel de Destaques (Bento Box da Apple) */}
      <Highlights setSelectedPage={setSelectedPage} />
      
      {/* 3. Exploração Profunda (Rotas Inteligentes IX e Manifesto) */}
      <DeepDive />

      {/* 4. A Blindagem: Ensina ao cliente corporativo que essa velocidade é protegida por segurança impenetrável (IP Dedicado, Dupla Abordagem e Monitoramento Proativo) */}
      <Shielding setSelectedPage={setSelectedPage}/>

      {/* 5. A Prova: Apresenta a matriz de decisão comparativa e comprova a resiliência com cases reais sem quedas */}
      <Proof setSelectedPage={setSelectedPage} />
      
      {/* 6. Ecossistema de Serviços: Apresenta as soluções adicionais sob medida (Link Ponto a Ponto e Wi-Fi Corporativo Pro) */}
      <Services setSelectedPage={setSelectedPage} />

      {/* 7. Conversão Comercial: Canal direto de contato com a engenharia para consulta de viabilidade e orçamentos */}
      <Contact setSelectedPage={setSelectedPage} />
      
      {/* Rodapé institucional e links de navegação rápida */}
      <Footer />
    </div>
  );
}

export default App;