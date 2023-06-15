import SongItemBase from "@/components/Sidebar/Songitem/SongItemBase";
import SongItemContent from "@/components/Sidebar/Songitem/SongItemContent";
import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";

export const SidebarSongItem = ({
  onClick,
  isActive,
  isPlaying,
  data,
  type = "Artist",
}: any) => {
  const isPlaylist = type === "playlist";
  const imageUrl = useLoadImage(data);
  const player = usePlayer();
  const handleClick = () => {
    if (onClick) return onClick(data.id);
    return player.setId(data.id);
  };

  return (
    <SongItemBase
      onClick={handleClick}
      data={data}
      isActive={isActive}
      isPlaying={isPlaying}
      isPlaylist={isPlaylist}
      imageUrl={imageUrl || ""}
    >
      <SongItemContent
        type="Artist"
        data={data}
        isActive={isActive}
        isPlaying={isPlaying}
      />
    </SongItemBase>
  );
};
