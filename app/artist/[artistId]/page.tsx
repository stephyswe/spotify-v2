import Hero from "@/app/artist/[artistId]/components/Hero/Hero";
import Os from "@/app/artist/[artistId]/components/Os";
import OsHost from "@/app/artist/[artistId]/components/OsHost";

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
