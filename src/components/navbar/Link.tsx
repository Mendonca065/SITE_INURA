import AnchorLink from "react-anchor-link-smooth-scroll";
import type { SelectedPage } from "@/utils/types";

type Props = {
  page: SelectedPage;
  label: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, label, selectedPage, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className={`${
        selectedPage === page 
          ? "text-white border-white" 
          : "text-gray-300 border-transparent"
      } text-xs transition duration-300 hover:text-white flex h-full items-center border-b`}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    >
      {label}
    </AnchorLink>
  );
};

export default Link;