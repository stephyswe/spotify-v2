"use client";

/* eslint-disable @next/next/no-img-element */
import { throttle } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useAudio, useFullscreen, useToggle } from "react-use";

import { SectionOneButton } from "@/components/RealPlayer/SectionOne/SectionOneButton";
import { SectionOneContainerText } from "@/components/RealPlayer/SectionOne/SectionOneContainerText";
import { SectionOneSvgBox } from "@/components/RealPlayer/SectionOne/SectionOneSvgBox";
import { SectionOneSvgButton } from "@/components/RealPlayer/SectionOne/SectionOneSvgButton";
import {
  SectionThreeButton,
  SectionThreeConnect,
  SectionThreeGlueTarget,
  SectionThreeVolume,
} from "@/components/RealPlayer/SectionThree";
import {
  PlayBackDuration,
  PlayBackPosition,
} from "@/components/RealPlayer/SectionTwo/PlayerBack";
import { SectionTwoPlayerControls } from "@/components/RealPlayer/SectionTwo/SectionTwo";
import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";

function secondsToTime(seconds: any) {
  return new Date(1000 * seconds).toISOString().substr(14, 5);
}

const SpotifyPlayer = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);
  const songUrl = useLoadSongUrl(song!);
  const [audio, state, controls, ref] = useAudio({
    src: songUrl,
    autoPlay: false,
  });

  const divRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragTime, setDragTime] = useState<number>(state.time);

  const handleSliderChange = throttle((e: React.MouseEvent) => {
    if (!divRef.current || !isDragging) {
      return;
    }

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = (x / width) * 100;
    setDragTime((state.duration || 1) * (percentage / 100));
  }, 100); // Adjust this number as necessary.

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleSliderChange(e);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      controls.seek(dragTime);
    }
    setIsDragging(false);
  };

  useEffect(() => {
    if (divRef.current && state?.duration) {
      const percentage =
        ((isDragging ? dragTime : state.time) / state.duration) * 100;
      divRef.current.style.setProperty(
        "--progress-bar-transform",
        percentage + "%"
      );
    }
  }, [state.time, state.duration, dragTime, isDragging]);

  return (
    <div className="md:flex w-full">
      <h2 className="mr-40">demo</h2>
      {audio}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <div className="w-[300px]">
        <button
          onClick={controls[state?.playing ? "pause" : "play"]}
          className="w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]"
        >
          {state?.playing ? "pause" : "play"}
        </button>
        <div className="text-[0.688rem] text-white text-opacity-70">
          {secondsToTime(state?.time)}
        </div>
        <div
          className="p1ULRzPc4bD8eQ4T_wyp DFtdzavKSbEhwKYkPTa6"
          data-testid="playback-progressbar"
        >
          <label className="hidden-visually">
            Change progress
            <input
              type="range"
              min="0"
              max={state?.duration || 1}
              step={0.1}
              aria-valuetext="0:09/3:08"
              value={Math.floor(state?.time)}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                console.log("change");
                controls.seek(value);
              }}
            />
          </label>
          <div
            ref={divRef}
            className="TywOcKZEqNynWecCiATc"
            data-testid="progress-bar"
            onMouseDown={handleMouseDown} // new event handler here
            onMouseMove={handleSliderChange} // new event handler here
            onMouseUp={handleMouseUp} // new event handler here
            onMouseLeave={handleMouseUp} // stop dragging when mouse leaves the element
          >
            <div
              className="NoOAOv6U6vtqj_ybS1Cd"
              data-testid="progress-bar-background"
            >
              <div className="w699O0LgQRghXyl3bs9u">
                <div className="epWhU7hHGktzlO_dop6z"></div>
              </div>
              <div className="Vis45PPawTyED7Lt2_LI"></div>
            </div>
            <div style={{ width: "100%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* return (
  <div className="JG5J9NWJkaUO9fiKECMA">
    <footer
      className="GD2gbRtcs5dOjMGAM_Y4"
      data-testid="now-playing-bar"
      data-testadtype="ad-type-none"
    >
      <div className="OCY4jHBlCVZEyGvtSv0J">
        <div className="OgkbKIVYE_mrNpYESylB">
          {song ? <SectionOne song={song} /> : null}
        </div>
        <div className="P4eSEARM2h24PZxMHz1T">
          <SectionTwo state={state} />
        </div>
        <div className="jOKLc29vP0Bz1K0TsDtX">
          <SectionThree />
        </div>
      </div>
    </footer>
  </div>
); */

export default SpotifyPlayer;
