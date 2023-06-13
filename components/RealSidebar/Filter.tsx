const ButtonChip = ({ title, tabIndex }: any) => (
  <button
    role="checkbox"
    aria-checked="false"
    tabIndex={tabIndex}
    data-encore-id="chip"
    className="Chip__ChipComponent-sc-ry3uox-0 fFYXGF"
    style={{ marginBlockEnd: "0px", willChange: "transform, opacity" }}
  >
    <span className="ChipInner__ChipInnerComponent-sc-1ly6j4j-0 geujCj ufICQKJq0XJE5iiIsZfj caTDfb6Oj7a5_8jBLUSo aRyoyQFJkzhoSOnf2ERM vOp2HlcPkxOHebo3If32 VNdHKKznHkpJ0VHoDmai kXEKypZEUzxx9rNJy09C eZnAGhYcXE4Bt0a7958z cuH8l_VHkTiz_NYVslQe ETclQEbcAcQdGdSioHaJ ratGUXdpLCkyXZNaJryg">
      {title}
    </span>
  </button>
);

export const SidebarFilter = () => (
  <div className="wBsWS202aGdsul2kEGUf">
    <div className="bMurPtRDRv5LuN78MTVG MLbFLVC33caOj3FgSQMC">
      <div
        className="KjPUGV8uMbl_0bvk9ePv"
        role="list"
        aria-label="Filter options"
        tabIndex={0}
      >
        <div role="presentation">
          <ButtonChip tabIndex={-1} title="Playlists" />
          <ButtonChip tabIndex={0} title="Artists" />
        </div>
      </div>
    </div>
  </div>
);
