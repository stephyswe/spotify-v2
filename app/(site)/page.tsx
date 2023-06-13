import getSongs from "@/actions/getSongs";

import NewPageContent from "./content";
import { OsScrollbar, OsScrollbarVertical, ResizeObserver } from "./content";

// not cached, always server rendered
export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();

  return (
    <div className="main-view-container">
      <div className="os-host os-host-foreign os-theme-spotify os-host-resize-disabled os-host-scrollbar-horizontal-hidden main-view-container__scroll-node os-host-overflow os-host-overflow-y os-host-transition">
        <ResizeObserver />
        <div className="os-padding">
          <div
            className="os-viewport os-viewport-native-scrollbars-invisible"
            style={{ overflowY: "scroll" }}
          >
            <div
              className="os-content"
              style={{ padding: "0px", height: "100%", width: "100%" }}
            >
              <div className="main-view-container__scroll-node-child-spacer"></div>
              <NewPageContent songs={songs} />
            </div>
          </div>
        </div>
        <OsScrollbar />
        <OsScrollbarVertical />
        <div className="os-scrollbar-corner"></div>
      </div>
    </div>
  );
}
