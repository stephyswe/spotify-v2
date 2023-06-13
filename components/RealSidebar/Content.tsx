import { SidebarSongItem } from "@/components/RealSidebar/RealItem";
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
    <>
      <div
        data-testid="top-sentinel"
        className="lyVkg68L7ycnwyOcO3vj"
        role="presentation"
        style={{ height: "256px" }}
      >
        <li
          role="listitem"
          className="Pns6F5g4OEwEpdmOWTLg"
          style={{ height: "calc(100% - 256px)" }}
        ></li>
        <div role="presentation" style={{ height: "256px" }}></div>
      </div>
      <div role="presentation" style={{ transform: "translateY(0px)" }}>
        {songs.map((song: any) => (
          <SidebarSongItem
            key={song.id}
            onClick={(id: string) => togglePlay(song.id)}
            data={song}
            isActive={song.id === player.activeId}
            isPlaying={song.id === player.activeId && player.isPlaying}
          />
        ))}
        {/* <SidebarSongItem data={secSong} type="playlist" isFake /> */}
      </div>

      <div
        data-testid="bottom-sentinel"
        className="qnYVzttodnzg9WdrVQ1p"
        role="presentation"
        style={{ height: "calc(100% - 256px + 256px)" }}
      >
        <div role="presentation" style={{ height: "256px" }}></div>
        <li
          role="listitem"
          className="Pns6F5g4OEwEpdmOWTLg"
          style={{ height: "calc(100% - 256px)" }}
        ></li>
      </div>
    </>
  );
};
