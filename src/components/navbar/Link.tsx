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
        selectedPage === page ? "text-white" : "text-neutral-400"
      } relative text-sm font-medium transition-colors duration-300 hover:text-white`}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    >
      {label}
    </AnchorLink>
  );
};

export default Link;