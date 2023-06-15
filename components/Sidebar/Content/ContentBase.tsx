import {
  BottomSentinel,
  TopSentinel,
} from "@/components/Sidebar/Content/Sentinel";

const ContentBase = ({ children }: any) => (
  <>
    <TopSentinel />
    <div role="presentation" style={{ transform: "translateY(0px)" }}>
      {children}
    </div>

    <BottomSentinel />
  </>
);

export default ContentBase;
