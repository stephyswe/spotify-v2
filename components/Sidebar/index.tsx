"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import SidebarBottom from "@/components/Sidebar/Bottom";
import LayoutResizer from "@/components/Sidebar/LayoutResizer";
import SidebarTop from "@/components/Sidebar/Top";
import { SvgHome, SvgHomeFilled } from "@/components/icons/SvgHome";
import { SvgSearch, SvgSearchFilled } from "@/components/icons/SvgSearch";
import useSidebar from "@/libs/hooks/useSidebar";
import { Song } from "@/types";

interface SidebarProps {
  songs: Song[];
}

const Sidebar: React.FC<SidebarProps> = ({ songs }) => {
  const pathname = usePathname();
  const { isLibrary } = useSidebar();
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

  return (
    <div
      className="BdcvqBAid96FaHAmPYw_"
      style={{
        width: isLibrary ? "72px" : "280px",
      }}
    >
      <nav className="sqKERfoKl4KwrtHqcKOd" aria-label="Main">
        <SidebarTop routes={routes} />
        <SidebarBottom songs={songs} />
      </nav>
      <LayoutResizer />
    </div>
  );
};

export default Sidebar;
