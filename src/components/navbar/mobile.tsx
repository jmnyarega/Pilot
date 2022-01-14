import Divider from "../divider";
import Hamburger from "../hamburger";
import Search from "./search";

import SearchUrl from "../../assets/images/search.svg";
import HamburgerUrl from "../../assets/images/hamburger.svg";

import { useGlobalContext } from "../../context";

const MobileNav: React.FC = () => {
  const context = useGlobalContext();

  return (
    <>
      <Search
        imageUrl={SearchUrl}
        imageSize={{ height: 24, width: 24 }}
        styles={{ marginLeft: "auto" }}
      />
      <Divider
        color="gray"
        theme={context.theme}
        lineType="vertical"
        size="4.6875rem"
        thickness="0.005rem"
      />
      <Hamburger
        toggleSideBar={context.toggleOpen}
        imageUrl={HamburgerUrl}
        imageSize={{ height: 24, width: 24 }}
      />
    </>
  );
};

export default MobileNav;
