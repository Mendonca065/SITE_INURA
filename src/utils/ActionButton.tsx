import AnchorLink from "react-anchor-link-smooth-scroll";
import type { SelectedPage } from "@/utils/types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      // A cor #0071e3 é o tom exato de azul que a Apple usa nesses botões
      className="bg-[#0071e3] rounded-full px-3 py-1 text-[11px] text-white font-normal hover:bg-blue-600 transition tracking-wide"
      href="#server"
      onClick={() => setSelectedPage("server")}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;