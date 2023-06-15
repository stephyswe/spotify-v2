import clsx from "clsx";

import SidebarContent from "@/components/Sidebar/Bottom/content";

const SidebarBottomBase = ({
  Library,
  Filter,
  SongList,
  ExpandedImage,
  isPicture,
}: any) => (
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
        {Library}
        {Filter}
      </div>
      <div className="os-host os-host-foreign os-theme-spotify os-host-resize-disabled os-host-scrollbar-horizontal-hidden _K79lE9KrIAkl_bUSSUM os-host-scrollbar-vertical-hidden os-host-transition">
        <SidebarContent>{SongList}</SidebarContent>
      </div>
    </div>
    <div className="i4nABk12gLqZuh9Jbdw1">{ExpandedImage}</div>
  </div>
);

export default SidebarBottomBase;
