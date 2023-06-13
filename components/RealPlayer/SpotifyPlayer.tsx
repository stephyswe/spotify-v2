"use client";

import { useState } from "react";

import SpotifyPlayerContent from "@/components/RealPlayer/SpotifyPlayerContent";
import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";

const SpotifyPlayer = () => {
  const [volume, setVolume] = useState<number>(
    parseFloat(localStorage.getItem("volume") ?? "0.5")
  );

  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  const onVolume = (volume: number) => {
    setVolume(volume);
    localStorage.setItem("volume", volume.toString());
  };

  return (
    <div className="JG5J9NWJkaUO9fiKECMA">
      <footer
        className="GD2gbRtcs5dOjMGAM_Y4"
        data-testid="now-playing-bar"
        data-testadtype="ad-type-none"
      >
        <SpotifyPlayerContent
          key={songUrl}
          song={song}
          songUrl={songUrl}
          setVolume={onVolume}
          volume={volume}
        />
      </footer>
    </div>
  );
};

export default SpotifyPlayer;
