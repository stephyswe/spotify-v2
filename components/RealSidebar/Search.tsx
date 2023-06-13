/* eslint-disable jsx-a11y/role-supports-aria-props */
import { SvgArrowDownSmall } from "@/components/icons/SvgArrowDown";
import { SvgSearchSmall } from "@/components/icons/SvgSearch";
import { SvgUnknownOne } from "@/components/icons/SvgUnknown";

export const SidebarSearch = () => (
  <div className="_0FuodatXU4_fToYAuYtY ufICQKJq0XJE5iiIsZfj caTDfb6Oj7a5_8jBLUSo vOp2HlcPkxOHebo3If32 VNdHKKznHkpJ0VHoDmai eZnAGhYcXE4Bt0a7958z ratGUXdpLCkyXZNaJryg ETclQEbcAcQdGdSioHaJ">
    <div className="JzZyf6OGCGtdscOZGt8Y" role="search" aria-expanded="false">
      <input
        className="QZhV0hWVKlExlKr266jo"
        role="searchbox"
        maxLength={80}
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        placeholder="Search in Your Library"
        aria-hidden="true"
        tabIndex={-1}
        value=""
        onChange={() => {}}
      />
      <div className="uAJxc_psYWeimY8N9bH9">
        <span className="_bjbHn5TABOW2s5LsEGX">
          <SvgUnknownOne />
        </span>
      </div>

      <button
        className="wCl7pMTEE68v1xuZeZiB KAydWoHSkQRqhQ1vkVwK"
        data-testid="expand-button"
        aria-hidden="false"
        aria-label="Search in Your Library"
      >
        <SvgSearchSmall />
      </button>
    </div>
    <div className="RGofdOZulhL2p9MRA5hg">
      <span className="XZRX_ea9eNn4rOLpNGLp">
        <button
          className="w6j_vX6SF5IxSXrrkYw5"
          type="button"
          aria-label="Sort by"
          role="combobox"
          aria-controls="sortboxlist-fbc74e39-4904-48d9-8e56-5608170c9b99"
          aria-expanded="false"
        >
          <span
            className="Type__TypeElement-sc-goli3j-0 ieTwfQ cvTLPmjt6T7M85EKcB8w"
            data-encore-id="type"
          >
            Recents
          </span>
          <SvgArrowDownSmall />
        </button>
      </span>
    </div>
  </div>
);
