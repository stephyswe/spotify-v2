import Footer from "@/components/app/(site)/Footer";
import {
  OsScrollbar,
  OsScrollbarVertical,
  ResizeObserver,
} from "@/components/app/(layout)/OsLayout";

interface LayoutTemplateProps {
  children: React.ReactNode;
}

const LayoutTemplate: React.FC<LayoutTemplateProps> = ({ children }) => (
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
            <div
              className="main-view-container__scroll-node-child"
              style={{ minHeight: "calc(((100vh - 64px) - 90px) - 519px)" }}
            >
              <main
                tabIndex={-1}
                aria-label="Spotify - Web Player: Music for everyone"
              >
                {children}
                <Footer />
              </main>
            </div>
          </div>
        </div>
      </div>
      <OsScrollbar />
      <OsScrollbarVertical />
      <div className="os-scrollbar-corner"></div>
    </div>
  </div>
);

export default LayoutTemplate;
