import { useEffect, useRef } from "react";

import {
  SvgPlayBack,
  SvgPlayNext,
  SvgPlayRepeat,
  SvgPlayShuffle,
} from "@/components/icons/SvgPlayShuffle";

export const ButtonPlayShuffle = () => (
  <button
    className="KVKoQ3u4JpKTvSSFtd6J"
    role="switch"
    aria-checked="false"
    aria-label="Enable shuffle"
    data-testid="control-button-shuffle"
    aria-expanded="false"
  >
    <SvgPlayShuffle />
  </button>
);

interface ButtonPlayProps {
  onClick: () => void;
}

export const ButtonPlayNext: React.FC<ButtonPlayProps> = ({ onClick }: any) => (
  <button
    className="mnipjT4SLDMgwiDCEnRC"
    aria-label="Next"
    data-testid="control-button-skip-forward"
    onClick={onClick}
  >
    <SvgPlayNext />
  </button>
);

export const ButtonPlayPrev: React.FC<ButtonPlayProps> = ({ onClick }) => (
  <button
    className="fn72ari9aEmKo4JcwteT"
    aria-label="Previous"
    data-testid="control-button-skip-back"
    aria-expanded="false"
    onClick={onClick}
  >
    <SvgPlayBack />
  </button>
);

export const ButtonPlay = ({ onClick, PlayIcon }: any) => (
  <button
    className="vnCew8qzJq3cVGlYFXRI"
    aria-label="Play"
    data-testid="control-button-playpause"
    aria-expanded="false"
    onClick={onClick}
  >
    <PlayIcon />
  </button>
);

export const ButtonPlayRepeat = () => (
  <button
    className="Vz6yjzttS0YlLcwrkoUR"
    role="checkbox"
    aria-checked="false"
    aria-label="Enable repeat"
    data-testid="control-button-repeat"
  >
    <SvgPlayRepeat />
  </button>
);

interface SectionTwoPlayerControlsProps {
  PlayIcon: any;
  handlePlay: () => void;
  onPlayNext: () => void;
  onPlayPrevious: () => void;
}

export const SectionTwoPlayerControls: React.FC<
  SectionTwoPlayerControlsProps
> = ({ PlayIcon, handlePlay, onPlayNext, onPlayPrevious }: any) => {
  const controlsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (controlsRef.current) {
      const buttons = controlsRef.current.querySelectorAll(
        ".KVKoQ3u4JpKTvSSFtd6J, .fn72ari9aEmKo4JcwteT, .vnCew8qzJq3cVGlYFXRI, .mnipjT4SLDMgwiDCEnRC, .Vz6yjzttS0YlLcwrkoUR"
      );

      buttons.forEach((button: any) => {
        button.style.setProperty("--button-size", "32px");
      });
    }
  }, []);

  return (
    <div
      ref={controlsRef}
      className="player-controls__buttons player-controls__buttons--new-icons mb-[9px]"
    >
      <div className="player-controls__left">
        <ButtonPlayShuffle />
        <ButtonPlayPrev onClick={onPlayPrevious} />
      </div>
      <ButtonPlay onClick={handlePlay} PlayIcon={PlayIcon} />
      <div className="player-controls__right">
        <ButtonPlayNext onClick={onPlayNext} />
        <ButtonPlayRepeat />
      </div>
    </div>
  );
};