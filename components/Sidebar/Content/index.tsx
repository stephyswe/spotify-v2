import ContentBase from "@/components/Sidebar/Content/ContentBase";
import { SidebarSongItem } from "@/components/Sidebar/RealItem";
import useOnPlay from "@/hooks/useOnPlay";
import usePlayer from "@/hooks/usePlayer";

export const RealContent = ({ songs }: any) => {
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
        />
      ))}
    </ContentBase>
  );
};
