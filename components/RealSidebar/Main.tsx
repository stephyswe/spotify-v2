"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { RealContent } from "@/components/RealSidebar/Content";
import { SidebarFilter } from "@/components/RealSidebar/Filter";
import { SidebarLibrary } from "@/components/RealSidebar/Library";
import { SidebarContent } from "@/components/RealSidebar/WrapperContent";
import { SvgHome, SvgHomeFilled } from "@/components/icons/SvgHome";
import { SvgSearch, SvgSearchFilled } from "@/components/icons/SvgSearch";
import useAuthModal from "@/hooks/useAuthModal";
import useOnPlay from "@/hooks/useOnPlay";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";

interface SidebarProps {
  songs: Song[];
}

const NewSidebar: React.FC<SidebarProps> = ({ songs }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: SvgHome,
        iconFilled: SvgHomeFilled,
        label: "Home",
        active: pathname !== "/search",
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
        minWidth: "280px",
      }}
    >
      <nav className="sqKERfoKl4KwrtHqcKOd" aria-label="Main">
        <SidebarTop routes={routes} />
        <SidebarBottom songs={songs} />
      </nav>
      <div
        data-testid="LayoutResizer__resize-bar"
        className="LayoutResizer__resize-bar LayoutResizer__inline-end"
        style={{ zIndex: 1 }}
      >
        <label className="hidden-visually">
          Resize main navigation
          <input
            className="LayoutResizer__input"
            type="range"
            min="72"
            max="1480"
            step="10"
            value={280}
            onChange={() => {}}
          />
        </label>
      </div>
    </div>
  );
};

export default NewSidebar;

const SidebarBottom = ({ songs }: any) => {
  const { user, subscription } = useUser();
  const uploadModal = useUploadModal();
  const authModal = useAuthModal();
  const subscribeModal = useSubscribeModal();

  const onClickPlus = () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (!subscription) {
      return subscribeModal.onOpen();
    }

    return uploadModal.onOpen();
  };

  return (
    <div className="EZFyDnuQnx5hw78phLqP hjb8tUL3rpUa0ez4ZtAj">
      <div className="PpUTJL2NIYDUnmfzVIbE" tabIndex={-1} aria-expanded="false">
        <div>
          <SidebarLibrary onClickPlus={onClickPlus} />
          <SidebarFilter />
        </div>
        <div className="os-host os-host-foreign os-theme-spotify os-host-resize-disabled os-host-scrollbar-horizontal-hidden _K79lE9KrIAkl_bUSSUM os-host-scrollbar-vertical-hidden os-host-transition">
          <SidebarContent>
            <RealContent songs={songs} />
          </SidebarContent>
        </div>
      </div>
      <div className="UalNRoO1omHtEEniypS5"></div>
    </div>
  );
};

const RealSidebarItem = ({
  label,
  icon: Icon,
  iconFilled: IconFilled,
  active,
  href,
}: any) => (
  <li className="LU0q0itTx2613uiATSig InvalidDropTarget">
    <a
      draggable="false"
      aria-label={label}
      className={clsx(
        "link-subtle UYeKN11KAw61rZoyjcgZ",
        active ? "DzWw3g4E_66wu9ktqn36 active" : ""
      )}
      href={href}
      aria-expanded="false"
      aria-current="page"
    >
      {active ? <IconFilled /> : <Icon />}
      <span
        data-encore-id="type"
        className="Type__TypeElement-sc-goli3j-0 bkjCej"
      >
        {label}
      </span>
    </a>
  </li>
);

const SidebarTop = ({ routes }: any) => (
  <div className="EZFyDnuQnx5hw78phLqP">
    <ul className="QuHe04rU4bj0Z5U9E2Tk">
      {routes.map((item: any) => (
        <RealSidebarItem key={item.label} {...item} />
      ))}
    </ul>
  </div>
);
