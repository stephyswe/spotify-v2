"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import SidebarBottom from "@/components/Sidebar/Bottom";
import LayoutResizer from "@/components/Sidebar/LayoutResizer";
import SidebarTop from "@/components/Sidebar/Top";
import { SvgHome, SvgHomeFilled } from "@/components/icons/SvgHome";
import { SvgSearch, SvgSearchFilled } from "@/components/icons/SvgSearch";
import { Song } from "@/types";

interface SidebarProps {
  songs: Song[];
}

const Sidebar: React.FC<SidebarProps> = ({ songs }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: SvgHome,
        iconFilled: SvgHomeFilled,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: SvgSearch,
        iconFilled: SvgSearchFilled,
        label: "Search",
        href: "/search",
        active: pathname === "/search",
      },
    ],
    [pathname]
  );

  const [isLibrary, setLibrary] = useState<boolean>(true);
  const onLibrary = () => setLibrary(!isLibrary);

  return (
    <div
      className="BdcvqBAid96FaHAmPYw_"
      style={{
        width: isLibrary ? "72px" : "280px",
      }}
    >
      <nav className="sqKERfoKl4KwrtHqcKOd" aria-label="Main">
        <SidebarTop routes={routes} isLibrary={isLibrary} />
        <SidebarBottom
          onLibrary={onLibrary}
          isLibrary={isLibrary}
          songs={songs}
        />
      </nav>
      <LayoutResizer isLibrary={isLibrary} />
    </div>
  );
};

export default Sidebar;
