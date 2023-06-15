import clsx from "clsx";

import { SvgSearchSmall } from "@/components/icons/SvgSearch";
import { SvgUnknownOne } from "@/components/icons/SvgUnknown";

const SearchButton = ({ isOpen }: any) => (
  <div // eslint-disable-line jsx-a11y/role-supports-aria-props
    className={clsx(
      "JzZyf6OGCGtdscOZGt8Y",
      isOpen ? "t6HIrX67Lp80Nj6tGauz" : null
    )}
    role="search"
    aria-expanded="false"
  >
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
      aria-hidden={isOpen ? "true" : "false"}
      aria-label="Search in Your Library"
    >
      <SvgSearchSmall />
    </button>
  </div>
);

export default SearchButton;
