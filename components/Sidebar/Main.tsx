"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { RealContent } from "@/components/Sidebar/Content";
import { SidebarFilter } from "@/components/Sidebar/Filter";
import { SidebarLibrary } from "@/components/Sidebar/Library";
import { SidebarContent } from "@/components/Sidebar/WrapperContent";
import { SvgHome, SvgHomeFilled } from "@/components/icons/SvgHome";
import { SvgSearch, SvgSearchFilled } from "@/components/icons/SvgSearch";
import useAuthModal from "@/hooks/useAuthModal";
import useOnPlay from "@/hooks/useOnPlay";
import usePlayer from "@/hooks/usePlayer";
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
  const player = usePlayer();
  const { setIsPicture, isPicture } = player;

  const onPicture = () => {
    setIsPicture(!isPicture);
  };

  const onClickPlus = () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (!subscription) {
      return subscribeModal.onOpen();
    }

    return uploadModal.onOpen();
  };

  //TODO: isPicture (need global state)
  return (
    <div className="EZFyDnuQnx5hw78phLqP hjb8tUL3rpUa0ez4ZtAj">
      <div
        className={clsx(
          "PpUTJL2NIYDUnmfzVIbE",
          isPicture ? "kJ_Q4aphh_uCJCZdzPpD" : ""
        )}
        tabIndex={-1}
        aria-expanded="false"
      >
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
      <div className="i4nABk12gLqZuh9Jbdw1">
        {isPicture ? <ExpandedImage onPicture={onPicture} /> : null}
      </div>
    </div>
  );
};

const ExpandedImage = ({ onPicture }: any) => (
  <div
    data-testid="CoverSlotExpanded__container"
    className="jtRqaoDIpIR6fEATUTyY"
  >
    <div draggable="true">
      <a
        draggable="false"
        //referrer="now_playing_bar"
        data-testid="context-link"
        data-context-item-type="track"
        aria-label="Now playing: Folkesnakk 2020 by Skurk3n"
        href="/user/stephaniiehallberg/collection?uid=a42e44cb987b4e1b02ec&amp;uri=spotify%3Atrack%3A7z5pqI6wTTD1wOgtBZy3w5"
        style={{ border: "none" }}
      >
        <div>
          <div
            className="H0HbpIM3UrcupWIAjLWu W0TACB7OY0iXtKVOtEhY"
            aria-hidden="true"
            style={{ width: "264px", height: "264px", transition: "all" }}
          >
            <div className="zmOtW0vqqn1qpZrtQ_w9">
              <svg
                role="img"
                height="24"
                width="24"
                aria-hidden="true"
                data-testid="track"
                viewBox="0 0 24 24"
                data-encore-id="icon"
                className="Svg-sc-ytk21e-0 haNxPq"
              >
                <path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path>
              </svg>
            </div>
            <img // eslint-disable-line @next/next/no-img-element
              aria-hidden="false"
              draggable="false"
              loading="eager"
              src="https://i.scdn.co/image/ab67616d00001e0239998e2f8c1ee01d70e71eed"
              data-testid="cover-art-image"
              alt=""
              className="mMx2LUixlnN_Fu45JpFB FqmFsMhuF4D0s35Z62Js Yn2Ei5QZn19gria6LjZj"
              style={{ width: "264px", height: "264px", transition: "all" }}
            />
          </div>
        </div>
      </a>
    </div>
    <button
      onClick={onPicture}
      className="CoverSlotExpanded__actionButton g6ZgzRfiHjsTLskeyI0J"
      aria-label="Collapse"
    >
      <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className="Svg-sc-ytk21e-0 haNxPq"
      >
        <path d="M.47 4.97a.75.75 0 0 1 1.06 0L8 11.44l6.47-6.47a.75.75 0 1 1 1.06 1.06L8 13.56.47 6.03a.75.75 0 0 1 0-1.06z"></path>
      </svg>
    </button>
  </div>
);

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
