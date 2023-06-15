"use client";

import { useEffect, useState } from "react";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";

import PlayerBase from "./base";

const SpotifyPlayer = () => {
  const [volume, setVolume] = useState<number>(0.5); // default volume
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);
  const songUrl = useLoadSongUrl(song!);

  useEffect(() => {
    const initialVolume = localStorage.getItem("volume");
    if (initialVolume) {
      setVolume(parseFloat(initialVolume));
    }
  }, []);

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
        <PlayerBase
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
