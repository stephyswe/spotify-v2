import OsItem from "@/components/app/artist/[artistId]/OsItem/OsItem";
import {
  BottomSentinel,
  TopSentinel,
} from "@/components/app/artist/[artistId]/Sentinel";

export const ArtistPopular = () => (
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

export default ArtistPopular;
