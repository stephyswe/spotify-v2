import { useEffect, useRef } from "react";

import {
  ButtonPlay,
  ButtonPlayNext,
  ButtonPlayPrev,
  ButtonPlayRepeat,
  ButtonPlayShuffle,
} from "@/components/Player/Controls/Controller/Button";

interface SectionTwoPlayerControlsProps {
  PlayIcon: any;
  handlePlay: () => void;
  onPlayNext: () => void;
  onPlayPrevious: () => void;
}

const PlayerControlButtons: React.FC<SectionTwoPlayerControlsProps> = ({
  PlayIcon,
  handlePlay,
  onPlayNext,
  onPlayPrevious,
}: any) => {
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

export default PlayerControlButtons;
