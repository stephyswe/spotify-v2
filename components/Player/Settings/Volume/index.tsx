import { useEffect, useRef } from "react";

import SliderVolume from "@/components/Player/Settings/Volume/SliderVolume";

interface SectionThreeVolumeProps {
  VolumeIcon: any;
  volume: any;
  setVolume: any;
  toggleMute: any;
}

const PlayerVolume: React.FC<SectionThreeVolumeProps> = ({
  VolumeIcon,
  volume,
  setVolume,
  toggleMute,
}) => {
  const volumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (volumeRef.current) {
      volumeRef.current.style.setProperty("--button-size", "32px");
      volumeRef.current.style.setProperty("--slider-width", "100%");

      const progressBar = volumeRef.current.querySelector(
        ".TywOcKZEqNynWecCiATc"
      ) as HTMLElement;

      if (progressBar) {
        progressBar.style.setProperty("--progress-bar-transform", "100%");
      }
    }
  }, []);
  return (
    <div
      ref={volumeRef}
      className="volume-bar ExuDUBJ7bk8vT6INnm9F group"
      data-testid="volume-bar"
      dir="ltr"
    >
      <button
        className="volume-bar__icon-button control-button"
        aria-label="Mute"
        aria-describedby="volume-icon"
        data-testid="volume-bar-toggle-mute-button"
        aria-expanded="false"
        onClick={toggleMute}
      >
        <VolumeIcon />
      </button>

      <div className="volume-bar__slider-container">
        <div className="DFtdzavKSbEhwKYkPTa6">
          <SliderVolume value={volume} onChange={(value) => setVolume(value)} />
        </div>
      </div>
    </div>
  );
};

export default PlayerVolume;
