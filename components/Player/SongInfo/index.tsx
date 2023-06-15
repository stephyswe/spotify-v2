import PlayerLikeButton from "@/components/Player/SongInfo/Button";
import PlayerSongContent from "@/components/Player/SongInfo/Content";
import PlayerImage from "@/components/Player/SongInfo/Image";
import SongInfoBase from "@/components/Player/SongInfo/base";

interface SongInfoProps {
  song: any;
  isPicture: boolean;
  onPicture: () => void;
}

const SongInfo: React.FC<SongInfoProps> = ({ song, isPicture, onPicture }) => (
  <SongInfoBase
    isPicture={isPicture}
    onPicture={onPicture}
    Box={<PlayerImage data={song} />}
    Text={<PlayerSongContent data={song} />}
    Button={<PlayerLikeButton data={song} />}
  />
);

export default SongInfo;
