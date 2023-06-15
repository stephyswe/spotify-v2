import { PagesPlayButton } from "@/app/(site)/components/MadeForItem";

const Os = () => (
  <div className="os-host os-host-foreign os-theme-spotify os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition">
    <div className="os-resize-observer-host observed">
      <div className="os-resize-observer" style={{ left: 0, right: "auto" }} />
    </div>
    <div
      className="os-size-auto-observer observed"
      style={{ height: "calc(100% + 1px)", float: "left" }}
    >
      <div className="os-resize-observer" />
    </div>
    <div
      className="os-content-glue"
      style={{ margin: 0, height: 104, width: 1375 }}
    />
    <div className="os-padding">
      <div className="os-viewport os-viewport-native-scrollbars-invisible">
        <div
          className="os-content"
          style={{ padding: 0, height: "auto", width: "100%" }}
        >
          <div className="E4q8ogfdWtye7YgotBlN contentSpacing">
            <div className="eSg4ntPU2KQLfpLGXAww" data-testid="action-bar-row">
              <div className="PFgcCoJSWC3KjhZxHDYH">
                <PagesPlayButton />
              </div>
              <button type="button" className="idI9vydtCzXVhU1BaKLw">
                Follow
              </button>
              <button
                type="button"
                aria-haspopup="menu"
                aria-label="More options for Skurk3n"
                className="T0anrkk_QA4IAQL29get"
                data-testid="more-button"
                aria-expanded="false"
              >
                <svg
                  role="img"
                  height={32}
                  width={32}
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                  className="Svg-sc-ytk21e-0 haNxPq"
                >
                  <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
      <div className="os-scrollbar-track">
        <div
          className="os-scrollbar-handle"
          style={{ width: "100%", transform: "translate(0px, 0px)" }}
        />
      </div>
    </div>
    <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden">
      <div className="os-scrollbar-track">
        <div
          className="os-scrollbar-handle"
          style={{ height: "100%", transform: "translate(0px, 0px)" }}
        />
      </div>
    </div>
    <div className="os-scrollbar-corner" />
  </div>
);

export default Os;
