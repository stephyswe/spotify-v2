import clsx from "clsx";

import useSidebar from "@/libs/hooks/useSidebar";

const SidebarContent = ({ Search, children }: any) => {
  const { isLibrary } = useSidebar();
  return (
    <>
      <SidebarObserver />
      <SidebarSizeObserver />
      <ContentGlue />
      <div className="os-padding">
        <div className="os-viewport os-viewport-native-scrollbars-invisible">
          <div
            className="os-content"
            style={{ padding: "0px", height: "100%", width: "100%" }}
          >
            <div
              className={clsx(
                "ifVI2CEdOZGgMWIUN2Cw",
                isLibrary ? "dNphEfQzPRaQufS04jUm" : ""
              )}
            >
              {Search}
              <div>
                <ul role="list" tabIndex={0} aria-label="Your Library">
                  <div
                    className="JUa6JJNj7R_Y3i4P8YUX"
                    role="presentation"
                    style={{ height: "256px", ["--row-height" as any]: "64px" }}
                  >
                    {children}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarContent;

const ContentGlue = () => (
  <div
    className="os-content-glue"
    style={{ margin: "0px", width: "279px", height: "630px" }}
  ></div>
);

const SidebarSizeObserver = () => (
  <div
    className="os-size-auto-observer observed"
    style={{ height: "calc(100% + 1px)", float: "left" }}
  >
    <div className="os-resize-observer"></div>
  </div>
);

const SidebarObserver = () => (
  <div className="os-resize-observer-host observed">
    <div
      className="os-resize-observer"
      style={{ left: "0px", right: "auto" }}
    ></div>
  </div>
);
