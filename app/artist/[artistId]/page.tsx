/* eslint-disable @next/next/no-img-element */
import { PagesPlayButton } from "@/app/(site)/components/MadeForItem";
import MadeForSection, {
  MadeforList,
} from "@/app/(site)/components/MadeForSection";
import Hero from "@/app/artist/[artistId]/components/Hero/Hero";
import OsButtons from "@/app/artist/[artistId]/components/OsButtonts";
import OsDiv from "@/app/artist/[artistId]/components/OsDiv";
import OsItem from "@/app/artist/[artistId]/components/OsItem/OsItem";
import {
  BottomSentinel,
  TopSentinel,
} from "@/app/artist/[artistId]/components/Sentinel";
import { SvgPagesPlay } from "@/components/icons/pages/SvgPlay";

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
                <PagesPlayButton />
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
