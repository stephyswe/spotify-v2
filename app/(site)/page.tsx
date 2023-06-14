import getSongs from "@/actions/getSongs";

import NewPageContent from "./content";

// not cached, always server rendered
export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();

  return (
    <>
      <div
        className="HsbczDqu9qjcYr7EIdHR"
        style={{ backgroundColor: "rgb(240, 240, 240)" }}
      ></div>
      <section data-testid="home-page">
        <div className="uIJTvxFOg2izOY7aRRiU">
          <div className="I3EivnXTjYMpSbPUiYEg contentSpacing">
            <NewPageContent songs={songs} />
          </div>
        </div>
      </section>
    </>
  );
}
