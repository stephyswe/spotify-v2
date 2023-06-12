"use client";

import { useEffect, useRef, useState } from "react";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import useSound from "use-sound";

import Slider from "@/components/Slider";
import SliderTrack from "@/components/SliderTrack";
import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types";

import LikeButton from "./LikeButton";
import MediaItem from "./MediaItem";

interface PlayerContentProps {
  song: Song | undefined;
  songUrl: string;
}

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const player = usePlayer();
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  //
  const [isDragging, setIsDragging] = useState(false);
  const [draggingPosition, setDraggingPosition] = useState(0);

  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

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
      setVolume(1);
    } else {
      setVolume(0);
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

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
      <div className="flex w-full justify-start">
        {song ? (
          <div className="flex items-center gap-x-4">
            <MediaItem data={song} />
            <LikeButton songId={song.id} />
          </div>
        ) : null}
      </div>

      <div
        className="
            flex
            md:hidden
            col-auto
            w-full
            justify-end
            items-center
          "
      >
        <div
          onClick={handlePlay}
          className="
              h-10
              w-10
              flex
              items-center
              justify-center
              rounded-full
              bg-white
              p-1
              cursor-pointer
            "
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>

      <div
        className="
            hidden
            h-full
            md:flex
            flex-col
            justify-center
            items-center
            w-full
            max-w-[722px]
            gap-x-4
            "
      >
        <div
          className="
            h-full
            md:flex
            justify-center
            items-center
            w-full
            max-w-[722px]
            gap-x-6
          "
        >
          <AiFillStepBackward
            onClick={onPlayPrevious}
            size={30}
            className="
            text-neutral-400
              cursor-pointer
            hover:text-white
              transition
            "
          />
          <div
            onClick={handlePlay}
            className="
              flex
              items-center
              justify-center
              h-10
              w-10
              rounded-full
              bg-white
              p-1
              cursor-pointer
            "
          >
            <Icon size={30} className="text-black" />
          </div>
          <AiFillStepForward
            onClick={onPlayNext}
            size={30}
            className="
              text-neutral-400
              cursor-pointer
              hover:text-white
              transition
            "
          />
        </div>
        <div className="w-full md:flex justify-center items-center gap-x-2">
          <span className="text-white text-xs w-6">
            {sound ? formatTime(progress) : "-:--"}
          </span>
          <SliderTrack
            value={progress}
            onChange={(value) => handleSliderChange(value)}
            onSeek={handleSeekChange}
            max={sound ? Math.floor(sound.duration()) : 0}
            setIsDragging={setIsDragging}
          />
          <span className="text-white text-xs w-6">
            {sound ? formatTime(Math.floor(sound.duration())) : "-:--"}
          </span>
        </div>
      </div>

      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon
            onClick={toggleMute}
            className="cursor-pointer"
            size={34}
          />
          <Slider value={volume} onChange={(value) => setVolume(value)} />
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
