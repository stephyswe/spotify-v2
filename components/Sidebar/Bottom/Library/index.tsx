import clsx from "clsx";

import { LibraryButton } from "@/components/Sidebar/Bottom/Library/Button/LibraryButton";
import { LibraryIcon } from "@/components/Sidebar/Bottom/Library/Icon";
import { SvgArrowRight } from "@/components/icons/SvgArrowRight";
import { SvgLibrary, SvgLibraryClosed } from "@/components/icons/SvgLibrary";
import { SvgPlus } from "@/components/icons/SvgPlus";

interface SidebarLibraryProps {
  onClickPlus: () => void;
  onLibrary: () => void;
  isLibrary: boolean;
}

const SidebarLibrary = ({
  onClickPlus,
  onLibrary,
  isLibrary,
}: SidebarLibraryProps) => (
  <header
    className={clsx(
      "UvXqRORKQr_N3jlgGTcS",
      isLibrary ? "O2Vp_sNHMLHUcgMPVnOA" : ""
    )}
  >
    <div
      className={clsx(
        "j8iKBDzqTDtnDv4XbmrK",
        isLibrary ? "BhKGkKPprp2wm9bvfRKG" : ""
      )}
    >
      <div
        className={clsx(
          "prGqQr33U0mG14TJ5V8a",
          isLibrary ? "BhKGkKPprp2wm9bvfRKG" : ""
        )}
      >
        <LibraryButton
          onClick={onLibrary}
          className={clsx(
            "Button-sc-1dqy6lx-0",
            isLibrary ? "ikQYJQ" : "CZhyv",
            "RAWO6AczuDMOTI0qAc0a OMCDc2F7g_AufJAtaKfL ufICQKJq0XJE5iiIsZfj caTDfb6Oj7a5_8jBLUSo vOp2HlcPkxOHebo3If32 VNdHKKznHkpJ0VHoDmai eZnAGhYcXE4Bt0a7958z ratGUXdpLCkyXZNaJryg ETclQEbcAcQdGdSioHaJ"
          )}
          label={`${isLibrary ? "Collapse" : "Expand"} Your Library`}
        >
          <LibraryIcon
            onClick={() => {}}
            className={isLibrary ? "hYdsxw" : "jEDcnm"}
            Icon={isLibrary ? SvgLibraryClosed : SvgLibrary}
          />
          {isLibrary ? "" : "Your Library"}
        </LibraryButton>
      </div>
      {isLibrary ? null : (
        <LibraryButton
          className="Button-sc-1dqy6lx-0 feKImU ksmcxhImUuj3_s1lcIm0 OMCDc2F7g_AufJAtaKfL TxO7Ee8iwqBpkgznKHsd ufICQKJq0XJE5iiIsZfj caTDfb6Oj7a5_8jBLUSo vOp2HlcPkxOHebo3If32 eZnAGhYcXE4Bt0a7958z"
          label="Create playlist or folder"
          onClick={onClickPlus}
        >
          <LibraryIcon className="hYdsxw" Icon={SvgPlus} />
        </LibraryButton>
      )}

      <LibraryButton
        className="Button-sc-1dqy6lx-0 feKImU OMCDc2F7g_AufJAtaKfL TxO7Ee8iwqBpkgznKHsd ufICQKJq0XJE5iiIsZfj caTDfb6Oj7a5_8jBLUSo vOp2HlcPkxOHebo3If32 VNdHKKznHkpJ0VHoDmai eZnAGhYcXE4Bt0a7958z ratGUXdpLCkyXZNaJryg ETclQEbcAcQdGdSioHaJ"
        label="Enlarge Your Library"
      >
        <LibraryIcon className="hYdsxw" Icon={SvgArrowRight} />
      </LibraryButton>
    </div>
  </header>
);

export default SidebarLibrary;
