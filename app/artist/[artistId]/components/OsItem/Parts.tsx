import { SvgPagesPlay } from "@/components/icons/pages/SvgPlay";
import { SvgThreeDots } from "@/components/icons/pages/SvgThreeDots";

const PopularPlayButton = () => (
  <button
    className="RfidWIoz8FON2WhFoItU"
    aria-label="Play STUDENTEN by Crille, Skurk3n"
    tabIndex={-1}
  >
    <SvgPagesPlay />
  </button>
);

const OsItemPicture = ({ image }: any) => (
  <img // eslint-disable-line @next/next/no-img-element
    aria-hidden="false"
    draggable="false"
    loading="eager"
    src={image}
    alt=""
    className="mMx2LUixlnN_Fu45JpFB rkw8BWQi3miXqtlJhKg0 Yn2Ei5QZn19gria6LjZj"
    width={40}
    height={40}
  />
);

const OsItemSongTitle = ({ title }: { title: string }) => (
  <div className="iCQtmPqY0QvkumAOuCjr">
    <a
      draggable="false"
      className="t_yrXoUO3qGsJS4Y6iXX"
      data-testid="internal-track-link"
      href="/track/0Fxl5tOk1d2VGPo1Om9RPd"
      tabIndex={-1}
    >
      <div
        dir="auto"
        className="Type__TypeElement-sc-goli3j-0 fZDcWX t_yrXoUO3qGsJS4Y6iXX standalone-ellipsis-one-line"
        data-encore-id="type"
        aria-expanded="false"
      >
        {title}
      </div>
    </a>
  </div>
);

const OsItemSongListeners = ({ title }: any) => (
  <div
    className="bfQ2S9bMXr_kJjqEfcwA"
    role="gridcell"
    aria-colindex={3}
    tabIndex={-1}
  >
    <div
      className="Type__TypeElement-sc-goli3j-0 ieTwfQ nYg_xsOVmrVE_8qk1GCW"
      data-encore-id="type"
    >
      {title}
    </div>
  </div>
);

const OsItemThreeDotsButton = () => (
  <button
    type="button"
    aria-haspopup="menu"
    aria-label="More options for STUDENTEN by Crille, Skurk3n"
    className="T0anrkk_QA4IAQL29get mYN_ST1TsDdC6q1k1_xs"
    data-testid="more-button"
    tabIndex={-1}
  >
    <SvgThreeDots />
  </button>
);

const OsItemDuration = ({ duration }: any) => (
  <div
    className="Type__TypeElement-sc-goli3j-0 bDHxRN Btg2qHSuepFGBG6X0yEN"
    data-encore-id="type"
  >
    {duration}
  </div>
);

export {
  PopularPlayButton,
  OsItemPicture,
  OsItemSongTitle,
  OsItemSongListeners,
  OsItemThreeDotsButton,
  OsItemDuration,
};
