import { MadeforList } from "@/app/(site)/components/MadeForSection";
import ArtistPopular from "@/app/artist/[artistId]/components/ArtistPopular";
import OsButtons from "@/app/artist/[artistId]/components/OsButtonts";
import OsDiv from "@/app/artist/[artistId]/components/OsDiv";
import TitleSection from "@/app/artist/[artistId]/components/TitleSection";

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

export default OsHost;
