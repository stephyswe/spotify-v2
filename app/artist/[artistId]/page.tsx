import Hero from "@/components/app/artist/[artistId]/Hero/Hero";
import Os from "@/components/app/artist/[artistId]/Os";
import OsHost from "@/components/app/artist/[artistId]/OsHost";

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
