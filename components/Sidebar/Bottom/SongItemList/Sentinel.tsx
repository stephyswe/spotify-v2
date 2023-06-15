const SidebarTopSentinel = () => (
  <div
    data-testid="top-sentinel"
    className="lyVkg68L7ycnwyOcO3vj"
    role="presentation"
    style={{ height: "256px" }}
  >
    <li
      role="listitem"
      className="Pns6F5g4OEwEpdmOWTLg"
      style={{ height: "calc(100% - 256px)" }}
    ></li>
    <div role="presentation" style={{ height: "256px" }}></div>
  </div>
);

const SidebarBottomSentinel = () => (
  <div
    data-testid="bottom-sentinel"
    className="qnYVzttodnzg9WdrVQ1p"
    role="presentation"
    style={{ height: "calc(100% - 256px + 256px)" }}
  >
    <div role="presentation" style={{ height: "256px" }}></div>
    <li
      role="listitem"
      className="Pns6F5g4OEwEpdmOWTLg"
      style={{ height: "calc(100% - 256px)" }}
    ></li>
  </div>
);

export { SidebarTopSentinel, SidebarBottomSentinel };
