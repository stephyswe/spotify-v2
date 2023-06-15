import { SectionOneButton } from "@/components/RealPlayer/SongInfo/SectionOneButton";
import OsItemContainer from "@/components/app/artist/[artistId]/OsItem/Container";
import {
  OsItemDuration,
  OsItemPicture,
  OsItemSongListeners,
  OsItemSongTitle,
  OsItemThreeDotsButton,
  PopularPlayButton,
} from "@/components/app/artist/[artistId]/OsItem/Parts";

const OsItem = () => (
  <OsItemContainer
    PlayButton={<PopularPlayButton />}
    Picture={
      <OsItemPicture image="https://i.scdn.co/image/ab67616d00001e0265ba5f53db5b6c3323644ca4" />
    }
    Title={<OsItemSongTitle title="Studenten" />}
    Listeners={<OsItemSongListeners title="123,255" />}
    Like={<SectionOneButton />}
    Duration={<OsItemDuration duration="2:20" />}
    ThreeDotsButton={<OsItemThreeDotsButton />}
  />
);

export default OsItem;
