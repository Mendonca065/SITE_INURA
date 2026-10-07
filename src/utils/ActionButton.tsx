import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import type { SelectedPage } from "@/utils/types";

type Props = {
  children: React.ReactNode;
  setSelectedPage?: (value: SelectedPage) => void;
  href?: string;
  className?: string;
  onClick?: () => void;
};

const ActionButton = ({
  children,
  setSelectedPage,
  href = "#contact",
  className = "",
  onClick,
}: Props) => {
  // Estilo padrão INURA (Laranja da marca ou tom da Apple se preferir)
  const defaultStyles =
    "rounded-full bg-orange-500 px-4 py-1.5 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/20 inline-flex items-center justify-center";

  const combinedClasses = className ? `${defaultStyles} ${className}` : defaultStyles;

  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  const handleClick = () => {
    if (onClick) onClick();

    // Atualiza o estado da página selecionada se for link de âncora interno
    if (!isExternal && setSelectedPage && href.startsWith("#")) {
      const pageName = href.replace("#", "") as SelectedPage;
      setSelectedPage(pageName);
    }
  };

  // Se for link externo (ex: WhatsApp), usa tag <a> padrão com target="_blank"
  if (isExternal) {
    return (
      <a
        className={combinedClasses}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  // Se for link interno, usa o AnchorLink para scroll suave
  return (
    <AnchorLink
      className={combinedClasses}
      href={href}
      onClick={handleClick}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;