const OsScrollbarVertical = () => (
  <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
    <div className="os-scrollbar-track">
      <div
        className="os-scrollbar-handle"
        style={{ height: "11.0963%", transform: "translate(0px, 0px)" }}
      ></div>
    </div>
  </div>
);

const OsScrollbar = () => (
  <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
    <div className="os-scrollbar-track">
      <div
        className="os-scrollbar-handle"
        style={{ width: "100%", transform: "translate(0px, 0px)" }}
      ></div>
    </div>
  </div>
);

export { OsScrollbar, OsScrollbarVertical };
