import { MadeforList } from "@/components/app/(site)/MadeForSection";
import ArtistPopular from "@/components/app/artist/[artistId]/ArtistPopular";
import OsButtons from "@/components/app/artist/[artistId]/OsButtonts";
import OsDiv from "@/components/app/artist/[artistId]/OsDiv";
import TitleSection from "@/components/app/artist/[artistId]/TitleSection";

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
