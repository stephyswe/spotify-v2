import ContentBase from "@/components/Sidebar/Bottom/SongItemList/SongItemListBase";
import { SidebarSongItem } from "@/components/Sidebar/Bottom/Songitem";
import useOnPlay from "@/libs/hooks/useOnPlay";
import usePlayer from "@/libs/hooks/usePlayer";

const SongItemList = ({ songs, isLibrary }: any) => {
  const player = usePlayer();
  const isPlaying = player.isPlaying;
  const onPlay = useOnPlay(songs);

  const togglePlay = (id: string) => {
    if (isPlaying && player.activeId === id) return;
    onPlay(id);
    player.setIsPlaying(!isPlaying);
  };

  return (
    <ContentBase>
      {songs.map((song: any) => (
        <SidebarSongItem
          key={song.id}
          onClick={(id: string) => togglePlay(song.id)}
          data={song}
          isActive={song.id === player.activeId}
          isPlaying={song.id === player.activeId && player.isPlaying}
          isLibrary={isLibrary}
        />
      ))}
    </ContentBase>
  );
};

export default SongItemList;
