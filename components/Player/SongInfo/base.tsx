import clsx from "clsx";

import { SvgExpand } from "@/components/icons/SvgExpand";

const SongInfoBase = ({ isPicture, onPicture, Box, Text, Button }: any) => (
  <div className="OgkbKIVYE_mrNpYESylB">
    <div
      data-testid="now-playing-widget"
      className={clsx(
        "deomraqfhIAoSB3SgXpu",
        isPicture ? "bYHWD_eQ1jAh3sAKTHtr" : ""
      )}
      role="contentinfo"
      aria-label="Now playing: Bara lite känslor by Felicia Takman"
    >
      <div
        data-testid="CoverSlotCollapsed__container"
        className="rVxzkDirgkuRPv5V1HYF IcyWfMS5VkeOhaI7OWIx"
        aria-hidden={isPicture ? "true" : "false"}
      >
        {Box}
        <button
          className="qWcH8e2laY9sYOuCsOAx"
          aria-label="Expand"
          onClick={onPicture}
        >
          <SvgExpand />
        </button>
      </div>
      {Text}
      {Button}
    </div>
  </div>
);

export default SongInfoBase;
