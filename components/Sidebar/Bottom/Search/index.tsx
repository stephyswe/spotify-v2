import SearchButton from "@/components/Sidebar/Bottom/Search/SearchButton";
import SearchDropdown from "@/components/Sidebar/Bottom/Search/SearchDropdown";

const SidebarSearch = ({ isOpen }: any) => {
  return (
    <div className="_0FuodatXU4_fToYAuYtY ufICQKJq0XJE5iiIsZfj caTDfb6Oj7a5_8jBLUSo vOp2HlcPkxOHebo3If32 VNdHKKznHkpJ0VHoDmai eZnAGhYcXE4Bt0a7958z ratGUXdpLCkyXZNaJryg ETclQEbcAcQdGdSioHaJ">
      <SearchButton isOpen={isOpen} />
      <SearchDropdown />
    </div>
  );
};

export default SidebarSearch;
