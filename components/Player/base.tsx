import { useEffect, useMemo, useRef, useState } from "react";
import useSound from "use-sound";

import PlayerControls from "@/components/Player/Controls";
import PlayerSettings from "@/components/Player/Settings";
import SongInfo from "@/components/Player/SongInfo";
import {
  SvgPlayVolumeFull,
  SvgPlayVolumeLow,
  SvgPlayVolumeMute,
  SvgVolumeMedium,
} from "@/components/icons/SvgPlaySettings";
import { SvgPlayButton, SvgPlayPause } from "@/components/icons/SvgPlayShuffle";
import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types";

interface PlayerBaseProps {
  song: Song | undefined;
  songUrl: string;
  setVolume: (volume: number) => void;
  volume: number;
}

const PlayerBase: React.FC<PlayerBaseProps> = ({
  song,
  songUrl,
  setVolume,
  volume,
}) => {
  const player = usePlayer();

  // const values
  const { isPlaying, setIsPlaying, isPicture, setIsPicture } = player;

  const [progress, setProgress] = useState(0);
  //
  const [isDragging, setIsDragging] = useState(false);
  const [draggingPosition, setDraggingPosition] = useState(0);

  const PlayIcon = isPlaying ? SvgPlayPause : SvgPlayButton;
  //const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  const onPlayNext = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];

    if (!nextSong) {
      return player.setId(player.ids[0]);
    }

    player.setId(nextSong);
  };

  const onPlayPrevious = () => {
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const previousSong = player.ids[currentIndex - 1];

    if (!previousSong) {
      return player.setId(player.ids[player.ids.length - 1]);
    }

    player.setId(previousSong);
  };

  const [play, { pause, sound }] = useSound(songUrl, {
    volume: volume,
    onplay: () => setIsPlaying(true),
    onend: () => {
      setIsPlaying(false);
      onPlayNext();
    },
    onpause: () => setIsPlaying(false),
    format: ["mp3"],
  });

  // capture pause & play
  useEffect(() => {
    player.setPlay(play);
    player.setPause(pause);
  }, [play, pause]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    sound?.play();

    return () => {
      sound?.unload();
    };
  }, [sound]);

  // Create a reference for the interval id
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only start the interval if the sound is loaded and is playing
    if (sound && isPlaying) {
      intervalId.current = setInterval(() => {
        if (!isDragging) {
          setProgress(sound.seek() as number);
        }
      }, 1000);
    } else {
      // If the sound is not playing, clear the interval
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    }

    // Clean up function to clear the interval when the component unmounts
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [sound, isPlaying, isDragging]);

  const handlePlay = () => {
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  };

  const toggleMute = () => {
    if (volume === 0) {
      const volumeLocal = parseFloat(localStorage.getItem("volume") || "0.5");
      setVolume(volumeLocal);
    } else {
      setVolume(0);
      localStorage.setItem("volume", volume.toString());
    }
  };

  const handleSeekChange = () => {
    if (!sound) {
      return;
    }

    setIsDragging(false);
    sound.seek(draggingPosition);
  };

  // Update handleSliderChange function
  const handleSliderChange = (value: any) => {
    if (!sound) {
      return;
    }
    setDraggingPosition(value);
    setIsDragging(true);
    setProgress(value);
  };

  const VolumeIcon = useMemo(() => {
    if (volume === 0) return SvgPlayVolumeMute;
    if (volume > 0 && volume < 0.33) return SvgPlayVolumeLow;
    if (volume >= 0.33 && volume < 0.66) return SvgVolumeMedium;
    return SvgPlayVolumeFull;
  }, [volume]);

  const onPicture = () => {
    setIsPicture(!isPicture);
  };

  return (
    <div className="OCY4jHBlCVZEyGvtSv0J">
      {/* Image, Text, Expand */}
      <div className="OgkbKIVYE_mrNpYESylB">
        {song ? (
          <SongInfo
            song={song}
            isPicture={isPicture || false}
            onPicture={onPicture}
          />
        ) : null}
      </div>
      {/* Section Controls */}
      <PlayerControls
        sound={sound}
        progress={progress}
        handlePlay={handlePlay}
        onPlayNext={onPlayNext}
        onPlayPrevious={onPlayPrevious}
        handleSliderChange={handleSliderChange}
        handleSeekChange={handleSeekChange}
        PlayIcon={PlayIcon}
        setIsDragging={setIsDragging}
      />
      {/* Section Lyrics, Connect, Volume */}
      <PlayerSettings
        VolumeIcon={VolumeIcon}
        volume={volume}
        setVolume={setVolume}
        toggleMute={toggleMute}
      />
    </div>
  );
};

export default PlayerBase;
