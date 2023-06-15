"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import SidebarBottom from "@/components/Sidebar/Bottom";
import MainBase from "@/components/Sidebar/base";
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

  return (
    <MainBase>
      <SidebarTop routes={routes} />
      <SidebarBottom songs={songs} />
    </MainBase>
  );
};

export default Sidebar;
