import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";
import useSound from "use-sound";

import {
  PlayBackDuration,
  PlayBackPosition,
} from "@/components/Player/Controls/PlayerBack";
import { SectionTwoPlayerControls } from "@/components/Player/Controls/SectionTwoPlayerControls";
import SliderTrack from "@/components/Player/Controls/SliderTrack";
import {
  SectionThreeButton,
  SectionThreeConnect,
  SectionThreeGlueTarget,
  SectionThreeVolume,
} from "@/components/Player/Settings/SectionThree";
import { SectionOneButton } from "@/components/Player/SongInfo/SectionOneButton";
import { SectionOneContainerText } from "@/components/Player/SongInfo/SectionOneContainerText";
import { SectionOneSvgBox } from "@/components/Player/SongInfo/SectionOneSvgBox";
import { SvgExpand } from "@/components/icons/SvgExpand";
import {
  SvgPlayVolumeFull,
  SvgPlayVolumeLow,
  SvgPlayVolumeMute,
  SvgVolumeMedium,
} from "@/components/icons/SvgPlaySettings";
import { SvgPlayButton, SvgPlayPause } from "@/components/icons/SvgPlayShuffle";
import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types";

export function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

interface SpotifyPlayerContentProps {
  song: Song | undefined;
  songUrl: string;
  setVolume: (volume: number) => void;
  volume: number;
}

export const SpotifyPlayerContent: React.FC<SpotifyPlayerContentProps> = ({
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
      <div className="OgkbKIVYE_mrNpYESylB">
        {/* Section Info */}
        {song ? (
          <div
            data-testid="now-playing-widget"
            className={clsx(
              "deomraqfhIAoSB3SgXpu",
              isPicture ? "bYHWD_eQ1jAh3sAKTHtr" : ""
            )}
            role="contentinfo"
            aria-label="Now playing: Bara lite känslor by Felicia Takman"
          >
            <div
              data-testid="CoverSlotCollapsed__container"
              className="rVxzkDirgkuRPv5V1HYF IcyWfMS5VkeOhaI7OWIx"
              aria-hidden={isPicture ? "true" : "false"}
            >
              <SectionOneSvgBox data={song} />
              <button
                className="qWcH8e2laY9sYOuCsOAx"
                aria-label="Expand"
                onClick={onPicture}
              >
                <SvgExpand />
              </button>
            </div>
            <SectionOneContainerText song={song} />
            <SectionOneButton mode="control" />
          </div>
        ) : null}
      </div>

      {/* Section Controls */}
      <div className="P4eSEARM2h24PZxMHz1T">
        <div
          className="player-controls"
          data-testid="player-controls"
          dir="ltr"
          aria-label="Player controls"
        >
          <SectionTwoPlayerControls
            onPlayPrevious={onPlayPrevious}
            onPlayNext={onPlayNext}
            handlePlay={handlePlay}
            PlayIcon={PlayIcon}
          />
          <div className="playback-bar">
            <PlayBackPosition
              value={sound ? formatTime(Math.floor(progress)) : "-:--"}
            />
            <div
              className="p1ULRzPc4bD8eQ4T_wyp pt-[1px]"
              data-testid="playback-progressbar"
            >
              <SliderTrack
                value={progress}
                onChange={(value) => handleSliderChange(value)}
                onSeek={handleSeekChange}
                max={sound ? Math.floor(sound.duration()) : 0}
                setIsDragging={setIsDragging}
              />
            </div>
            <PlayBackDuration
              value={sound ? formatTime(Math.floor(sound.duration())) : "-:--"}
            />
          </div>
        </div>
      </div>
      {/* Section Lyrics, Connect, Volume */}
      <div className="jOKLc29vP0Bz1K0TsDtX">
        <div className="mwpJrmCgLlVkJVtWjlI1">
          <SectionThreeButton />
          <SectionThreeGlueTarget />
          <SectionThreeConnect />
          <SectionThreeVolume
            VolumeIcon={VolumeIcon}
            volume={volume}
            setVolume={setVolume}
            toggleMute={toggleMute}
          />
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlayerContent;

export const InvisibleSeekLabel = () => (
  <label className="hidden-visually">
    Change progress
    <input
      type="range"
      min="0"
      max="188"
      step="5"
      aria-valuetext="0:09/3:08"
      value={9}
      onChange={() => {}}
    />
  </label>
);