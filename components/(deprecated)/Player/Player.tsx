"use client";

import { useState } from "react";

import PlayerContent from "@/components/(deprecated)/Player/PlayerContent";
import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";

const Player = () => {
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
    <div
      className="
        fixed
        bottom-0
        bg-black
        w-full
        py-2
        h-[80px]
        px-4
      "
    >
      <PlayerContent
        key={songUrl}
        song={song}
        songUrl={songUrl}
        setVolume={onVolume}
        volume={volume}
      />
    </div>
  );
};

export default Player;
