import FeatureItem from "@/components/app/(site)/FeatureItem";
import { useFeaturedItemResize } from "@/hooks/useFeaturedItemResize";
import usePlayer from "@/hooks/usePlayer";

interface ItemFeatureProps {
  songs: any;
  togglePlay: (id: string) => void;
}

export const FeatureList: React.FC<ItemFeatureProps> = ({
  songs,
  togglePlay,
}: any) => {
  const player = usePlayer();
  const { ref, minColWidth, itemHeight, colGap, rowGap } =
    useFeaturedItemResize();
  return (
    <div
      ref={ref}
      className="nlOU1unbFAd7ZHyeSMTH"
      style={{
        ["--min-column-width" as any]: minColWidth,
        ["--item-height" as any]: itemHeight,
        ["--column-gap" as any]: colGap,
        ["--row-gap" as any]: rowGap,
      }}
    >
      {songs.map((song: any) => (
        <>
          <FeatureItem
            key={song.id}
            onClick={(id: string) => togglePlay(song.id)}
            data={song}
            isActive={song.id === player.activeId}
            isPlaying={song.id === player.activeId && player.isPlaying}
          />
          <FeatureItem
            key={song.id}
            onClick={(id: string) => togglePlay(song.id)}
            data={song}
            isActive={song.id === player.activeId}
            isPlaying={song.id === player.activeId && player.isPlaying}
          />
          <FeatureItem
            key={song.id}
            onClick={(id: string) => togglePlay(song.id)}
            data={song}
            isActive={song.id === player.activeId}
            isPlaying={song.id === player.activeId && player.isPlaying}
          />
        </>
      ))}
    </div>
  );
};
