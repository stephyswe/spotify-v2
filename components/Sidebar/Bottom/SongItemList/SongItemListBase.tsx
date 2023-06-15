import {
  SidebarBottomSentinel,
  SidebarTopSentinel,
} from "@/components/Sidebar/Bottom/SongItemList/Sentinel";

const ContentBase = ({ children }: any) => (
  <>
    <SidebarTopSentinel />
    <div role="presentation" style={{ transform: "translateY(0px)" }}>
      {children}
    </div>
    <SidebarBottomSentinel />
  </>
);

export default ContentBase;
