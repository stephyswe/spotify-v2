"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

import Box from "@/components/Box";
import Library from "@/components/Library";
import SidebarItem from "@/components/SidebarItem";
import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types";

interface SidebarProps {
  children: React.ReactNode;
  songs: Song[];
}

const Sidebar = ({ children, songs }: SidebarProps) => {
  const [drawer, setDrawer] = useState<boolean>(true);
  const pathname = usePathname();
  const player = usePlayer();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        href: "/search",
        active: pathname === "/search",
      },
    ],
    [pathname]
  );

  const onDrawer = () => setDrawer(!drawer);

  return (
    <div
      className={twMerge(
        `
          flex
          h-full
        `,
        player.activeId && "h-[calc(100%-80px)]"
      )}
    >
      <div
        className={twMerge(
          "hidden md:flex flex-col gap-y-2 bg-black h-full p-2",
          drawer ? "w-[300px]" : "w-[90px]"
        )}
      >
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} drawer={drawer} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library songs={songs} onDrawer={onDrawer} drawer={drawer} />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
