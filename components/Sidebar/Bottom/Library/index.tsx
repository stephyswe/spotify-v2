import { LibraryButton } from "@/components/Sidebar/Bottom/Library/Button/LibraryButton";
import { LibraryIcon } from "@/components/Sidebar/Bottom/Library/Icon";
import { SvgArrowRight } from "@/components/icons/SvgArrowRight";
import { SvgLibrary } from "@/components/icons/SvgLibrary";
import { SvgPlus } from "@/components/icons/SvgPlus";

const SidebarLibrary = ({ onClickPlus }: any) => {
  return (
    <header className="UvXqRORKQr_N3jlgGTcS">
      <div className="j8iKBDzqTDtnDv4XbmrK">
        <div className="prGqQr33U0mG14TJ5V8a">
          <LibraryButton
            className="Button-sc-1dqy6lx-0 CZhyv RAWO6AczuDMOTI0qAc0a OMCDc2F7g_AufJAtaKfL ufICQKJq0XJE5iiIsZfj caTDfb6Oj7a5_8jBLUSo vOp2HlcPkxOHebo3If32 VNdHKKznHkpJ0VHoDmai eZnAGhYcXE4Bt0a7958z ratGUXdpLCkyXZNaJryg ETclQEbcAcQdGdSioHaJ"
            label="Collapse Your Library"
          >
            <LibraryIcon className="jEDcnm" Icon={SvgLibrary} />
            Your Library
          </LibraryButton>
        </div>
        <LibraryButton
          className="Button-sc-1dqy6lx-0 feKImU ksmcxhImUuj3_s1lcIm0 OMCDc2F7g_AufJAtaKfL TxO7Ee8iwqBpkgznKHsd ufICQKJq0XJE5iiIsZfj caTDfb6Oj7a5_8jBLUSo vOp2HlcPkxOHebo3If32 eZnAGhYcXE4Bt0a7958z"
          label="Create playlist or folder"
          onClick={onClickPlus}
        >
          <LibraryIcon className="hYdsxw" Icon={SvgPlus} />
        </LibraryButton>

        <LibraryButton
          className="Button-sc-1dqy6lx-0 feKImU OMCDc2F7g_AufJAtaKfL TxO7Ee8iwqBpkgznKHsd ufICQKJq0XJE5iiIsZfj caTDfb6Oj7a5_8jBLUSo vOp2HlcPkxOHebo3If32 VNdHKKznHkpJ0VHoDmai eZnAGhYcXE4Bt0a7958z ratGUXdpLCkyXZNaJryg ETclQEbcAcQdGdSioHaJ"
          label="Enlarge Your Library"
        >
          <LibraryIcon className="hYdsxw" Icon={SvgArrowRight} />
        </LibraryButton>
      </div>
    </header>
  );
};

export default SidebarLibrary;
