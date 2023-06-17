import clsx from "clsx";

import usePlayer from "@/libs/hooks/usePlayer";
import useSidebar from "@/libs/hooks/useSidebar";

interface SidebarBottomBaseProps {
  Library: any;
  Filter: any;
  SongList: any;
  ExpandedImage: any;
}

const SidebarBottomBase = ({
  Library,
  Filter,
  SongList,
  ExpandedImage,
}: SidebarBottomBaseProps) => {
  const { isPicture } = usePlayer();
  const { isLibrary } = useSidebar();
  return (
    <div className="EZFyDnuQnx5hw78phLqP hjb8tUL3rpUa0ez4ZtAj">
      <div
        className={clsx(
          "PpUTJL2NIYDUnmfzVIbE",
          isPicture ? "kJ_Q4aphh_uCJCZdzPpD" : "",
          isLibrary ? "dNphEfQzPRaQufS04jUm" : ""
        )}
        tabIndex={-1}
        aria-expanded="false"
      >
        <div>
          {Library}
          {Filter}
        </div>
        <div className="os-host os-host-foreign os-theme-spotify os-host-resize-disabled os-host-scrollbar-horizontal-hidden _K79lE9KrIAkl_bUSSUM os-host-scrollbar-vertical-hidden os-host-transition">
          {SongList}
        </div>
      </div>
      <div className="i4nABk12gLqZuh9Jbdw1">{ExpandedImage}</div>
    </div>
  );
};

export default SidebarBottomBase;
