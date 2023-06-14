/* eslint-disable @next/next/no-img-element */
import MadeForSection, {
  MadeforList,
} from "@/app/(site)/components/MadeForSection";
import Hero from "@/app/artist/[artistId]/components/hero";

export default function ArtistPage() {
  return (
    <section
      data-testid="artist-page"
      data-test-uri="spotify:artist:1HUodyPt48DvzRQZksaOQW"
    >
      <div className="NLaDALU71zxOtBUbsrfH">
        <Hero />
        <div className="BL__GuO2JsHMR6RgNfwY">
          <div
            className="CoLO4pdSl8LGWyVZA00t"
            style={{ backgroundColor: "rgb(104, 184, 240)" }}
          ></div>
          <Os />
          <OsHost />
        </div>
      </div>
    </section>
  );
}

const OsDiv = ({ children }: any) => (
  <section
    className="jJ1PYBjdJy5plPbVprT1 QyANtc_r7ff_tqrf5Bvc Shelf"
    data-testid="component-shelf"
    aria-label="Discography"
  >
    {children}
  </section>
);

const OsHost = () => (
  <div className="contentSpacing">
    <ArtistPopular />
    <OsDiv>
      <TitleSection title="Discography" showAll />
      <OsButtons />
      <MadeforList />
    </OsDiv>
    <OsDiv>
      <TitleSection title="Featuring Skurk3n" />
    </OsDiv>
  </div>
);

const OsButtons = () => (
  <div className="hWGxHSAKACFWXowXPDTP">
    <div className="Jr6tcq7gSdKFSqofza3T">
      <button
        role="checkbox"
        aria-checked="true"
        data-encore-id="chip"
        className="Chip__ChipComponent-sc-ry3uox-0 fFYXGF"
      >
        <span className="ChipInner__ChipInnerComponent-sc-1ly6j4j-0 diMang encore-inverted-light-set">
          Popular releases
        </span>
      </button>
      <button
        role="checkbox"
        aria-checked="false"
        data-encore-id="chip"
        className="Chip__ChipComponent-sc-ry3uox-0 fFYXGF"
      >
        <span className="ChipInner__ChipInnerComponent-sc-1ly6j4j-0 geujCj">
          Singles and EPs
        </span>
      </button>
    </div>
  </div>
);

export const ArtistTitle = ({ title }: { title: string }) => (
  <div className="onVWL7MW4PW9FyVajBAc">
    <h2 data-encore-id="type" className="Type__TypeElement-sc-goli3j-0 kqHgh">
      <a
        draggable="false"
        data-testid="see-all-link"
        className="MfVrtIzQJ7iZXfRWg6eM"
        href="/artist/1HUodyPt48DvzRQZksaOQW/discography/all"
      >
        {title}
      </a>
    </h2>
  </div>
);

export const ShowAll = () => (
  <a
    draggable="false"
    className="a7lvtXATo3HALtrsOHtO HOgue4Eg4UdBR58M0633"
    href="/artist/1HUodyPt48DvzRQZksaOQW/discography/all"
  >
    <span
      data-encore-id="type"
      className="Type__TypeElement-sc-goli3j-0 eoWRdH"
    >
      Show all
    </span>
  </a>
);

export const TitleSection = ({ showAll, title }: any) => (
  <div className="q8AZzDc_1BumBHZg0tZb">
    <div className="OMuRYOdpUbGif12_lRJl">
      <ArtistTitle title={title} />
      {showAll ? <ShowAll /> : null}
    </div>
  </div>
);

const ArtistPopular = () => (
  <div>
    <div
      data-testid="grid-container"
      className="iKwGKEfAfW7Rkx2_Ba4E Sl7tzXKh5stpn_y5prU5"
      style={{
        ["--column-width" as any]: "203px",
        ["--column-count" as any]: 7,
        ["--grid-gap" as any]: "24px",
        ["--min-container-width" as any]: "372px",
      }}
    >
      <div
        className="q9GR66ZTM4HH42Z_qroQ yTBLU_z7yk9Xp_oN48Q2"
        style={{ ["--column-count" as any]: 7 }}
      >
        <h2
          className="Type__TypeElement-sc-goli3j-0 kqHgh hLkn_NwPkY5VIAETCqCK"
          data-encore-id="type"
        >
          Popular
        </h2>
        <div
          role="grid"
          aria-rowcount={5}
          aria-colcount={4}
          aria-label="popular tracks"
          className="ShMHCGsT93epRGdxJp2w Ss6hr6HYpN4wjHJ9GHmi"
          tabIndex={0}
          data-testid="track-list"
        >
          <div
            className="JUa6JJNj7R_Y3i4P8YUX"
            role="presentation"
            style={{ height: "280px", ["--row-height" as any]: "56px" }}
          >
            <TopSentinel />
            <div role="presentation" style={{ transform: "translateY(0px)" }}>
              <OsItem />
              <OsItem />
              <OsItem />
              <OsItem />
              <OsItem />
            </div>
            <BottomSentinel />
          </div>
        </div>
        <button aria-expanded="false" className="wi2HeHXOI471ZOh8ncCG">
          <div
            data-encore-id="type"
            className="Type__TypeElement-sc-goli3j-0 eoWRdH"
          >
            See more
          </div>
        </button>
      </div>
    </div>
  </div>
);

const OsItem = () => (
  <div role="row" aria-rowindex={1} aria-selected="false">
    <div
      data-testid="tracklist-row"
      className="h4HgbO_Uu1JYg5UGANeQ wTUruPetkKdWAR1dd6w4"
      draggable="true"
      role="presentation"
    >
      <div
        className="NZAU7CsuZsMeMQB8zYUu"
        role="gridcell"
        aria-colindex={1}
        tabIndex={-1}
      >
        <div className="VpYFchIiPg3tPhBGyynT">
          <span
            className="Type__TypeElement-sc-goli3j-0 bGcjcI VrRwdIZO0sRX1lsWxJBe"
            data-encore-id="type"
          >
            1
          </span>
          <button
            className="RfidWIoz8FON2WhFoItU"
            aria-label="Play STUDENTEN by Crille, Skurk3n"
            tabIndex={-1}
          >
            <svg
              role="img"
              height={24}
              width={24}
              aria-hidden="true"
              className="Svg-sc-ytk21e-0 haNxPq UIBT7E6ZYMcSDl1KL62g"
              viewBox="0 0 24 24"
              data-encore-id="icon"
            >
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="gvLrgQXBFVW6m9MscfFA"
        role="gridcell"
        aria-colindex={2}
        tabIndex={-1}
      >
        <img
          aria-hidden="false"
          draggable="false"
          loading="eager"
          src="https://i.scdn.co/image/ab67616d00001e0265ba5f53db5b6c3323644ca4"
          alt=""
          className="mMx2LUixlnN_Fu45JpFB rkw8BWQi3miXqtlJhKg0 Yn2Ei5QZn19gria6LjZj"
          width={40}
          height={40}
        />
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
              STUDENTEN
            </div>
          </a>
        </div>
      </div>
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
          123,254
        </div>
      </div>
      <div
        className="HcMOFLaukKJdK5LfdHh0"
        role="gridcell"
        aria-colindex={4}
        tabIndex={-1}
      >
        <button
          type="button"
          role="switch"
          aria-checked="false"
          aria-label="Save to Your Library"
          className="RbsCNNM9a0WkFCM2UzBA tGKwoPuvNBNK3TzCS5OH"
          data-testid="add-button"
          tabIndex={-1}
        >
          <svg
            role="img"
            height={16}
            width={16}
            aria-hidden="true"
            viewBox="0 0 16 16"
            data-encore-id="icon"
            className="Svg-sc-ytk21e-0 haNxPq"
          >
            <path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z" />
          </svg>
        </button>
        <div
          className="Type__TypeElement-sc-goli3j-0 bDHxRN Btg2qHSuepFGBG6X0yEN"
          data-encore-id="type"
        >
          2:20
        </div>
        <button
          type="button"
          aria-haspopup="menu"
          aria-label="More options for STUDENTEN by Crille, Skurk3n"
          className="T0anrkk_QA4IAQL29get mYN_ST1TsDdC6q1k1_xs"
          data-testid="more-button"
          tabIndex={-1}
        >
          <svg
            role="img"
            height={16}
            width={16}
            aria-hidden="true"
            viewBox="0 0 16 16"
            data-encore-id="icon"
            className="Svg-sc-ytk21e-0 haNxPq"
          >
            <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const BottomSentinel = () => (
  <div
    data-testid="bottom-sentinel"
    className="qnYVzttodnzg9WdrVQ1p"
    role="presentation"
    style={{ height: "calc(100% - 280px + 280px)" }}
  >
    <div role="presentation" style={{ height: 280 }} />
    <div
      className="wTUruPetkKdWAR1dd6w4"
      data-testid="tracklist-row-placeholder"
      style={{ height: "calc(100% - 280px)" }}
    >
      <div className="Iy7vi9cVsy6pS6wF8Dud NZAU7CsuZsMeMQB8zYUu cF8vKdBGYRZs_SpaG0Yz" />
      <div className="Iy7vi9cVsy6pS6wF8Dud gvLrgQXBFVW6m9MscfFA BciIfT5b6BSIPIr6feK4" />
      <div className="Iy7vi9cVsy6pS6wF8Dud bfQ2S9bMXr_kJjqEfcwA noANc1fQSmaQNKYVDEDQ" />
      <div className="Iy7vi9cVsy6pS6wF8Dud bfQ2S9bMXr_kJjqEfcwA noANc1fQSmaQNKYVDEDQ" />
      <div className="Iy7vi9cVsy6pS6wF8Dud bfQ2S9bMXr_kJjqEfcwA noANc1fQSmaQNKYVDEDQ" />
      <div className="Iy7vi9cVsy6pS6wF8Dud bfQ2S9bMXr_kJjqEfcwA noANc1fQSmaQNKYVDEDQ" />
      <div className="Iy7vi9cVsy6pS6wF8Dud HcMOFLaukKJdK5LfdHh0 Dj9_CzXA7IbUFIz4wOsA" />
    </div>
  </div>
);

const TopSentinel = () => (
  <div
    data-testid="top-sentinel"
    className="lyVkg68L7ycnwyOcO3vj"
    role="presentation"
    style={{ height: "280px" }}
  >
    <div
      className="wTUruPetkKdWAR1dd6w4"
      data-testid="tracklist-row-placeholder"
      style={{ height: "calc(100% - 280px)" }}
    >
      <div className="Iy7vi9cVsy6pS6wF8Dud NZAU7CsuZsMeMQB8zYUu cF8vKdBGYRZs_SpaG0Yz" />
      <div className="Iy7vi9cVsy6pS6wF8Dud gvLrgQXBFVW6m9MscfFA BciIfT5b6BSIPIr6feK4" />
      <div className="Iy7vi9cVsy6pS6wF8Dud bfQ2S9bMXr_kJjqEfcwA noANc1fQSmaQNKYVDEDQ" />
      <div className="Iy7vi9cVsy6pS6wF8Dud bfQ2S9bMXr_kJjqEfcwA noANc1fQSmaQNKYVDEDQ" />
      <div className="Iy7vi9cVsy6pS6wF8Dud bfQ2S9bMXr_kJjqEfcwA noANc1fQSmaQNKYVDEDQ" />
      <div className="Iy7vi9cVsy6pS6wF8Dud bfQ2S9bMXr_kJjqEfcwA noANc1fQSmaQNKYVDEDQ" />
      <div className="Iy7vi9cVsy6pS6wF8Dud HcMOFLaukKJdK5LfdHh0 Dj9_CzXA7IbUFIz4wOsA" />
    </div>
    <div role="presentation" style={{ height: 280 }} />
  </div>
);

const Os = () => (
  <div className="os-host os-host-foreign os-theme-spotify os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition">
    <div className="os-resize-observer-host observed">
      <div className="os-resize-observer" style={{ left: 0, right: "auto" }} />
    </div>
    <div
      className="os-size-auto-observer observed"
      style={{ height: "calc(100% + 1px)", float: "left" }}
    >
      <div className="os-resize-observer" />
    </div>
    <div
      className="os-content-glue"
      style={{ margin: 0, height: 104, width: 1375 }}
    />
    <div className="os-padding">
      <div className="os-viewport os-viewport-native-scrollbars-invisible">
        <div
          className="os-content"
          style={{ padding: 0, height: "auto", width: "100%" }}
        >
          <div className="E4q8ogfdWtye7YgotBlN contentSpacing">
            <div className="eSg4ntPU2KQLfpLGXAww" data-testid="action-bar-row">
              <div className="PFgcCoJSWC3KjhZxHDYH">
                <button
                  data-testid="play-button"
                  aria-label="Play"
                  data-encore-id="buttonPrimary"
                  className="Button-sc-qlcn5g-0 DjJKP"
                >
                  <span className="ButtonInner-sc-14ud5tc-0 gGxSiT encore-bright-accent-set">
                    <span
                      aria-hidden="true"
                      className="IconWrapper__Wrapper-sc-1hf1hjl-0 iDxtzn"
                    >
                      <svg
                        role="img"
                        height={28}
                        width={28}
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-encore-id="icon"
                        className="Svg-sc-ytk21e-0 haNxPq"
                      >
                        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" />
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
              <button type="button" className="idI9vydtCzXVhU1BaKLw">
                Follow
              </button>
              <button
                type="button"
                aria-haspopup="menu"
                aria-label="More options for Skurk3n"
                className="T0anrkk_QA4IAQL29get"
                data-testid="more-button"
                aria-expanded="false"
              >
                <svg
                  role="img"
                  height={32}
                  width={32}
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                  className="Svg-sc-ytk21e-0 haNxPq"
                >
                  <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
      <div className="os-scrollbar-track">
        <div
          className="os-scrollbar-handle"
          style={{ width: "100%", transform: "translate(0px, 0px)" }}
        />
      </div>
    </div>
    <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden">
      <div className="os-scrollbar-track">
        <div
          className="os-scrollbar-handle"
          style={{ height: "100%", transform: "translate(0px, 0px)" }}
        />
      </div>
    </div>
    <div className="os-scrollbar-corner" />
  </div>
);
