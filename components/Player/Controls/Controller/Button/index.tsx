import {
  SvgPlayBack,
  SvgPlayNext,
  SvgPlayRepeat,
  SvgPlayShuffle,
} from "@/components/icons/SvgPlayShuffle";

const ButtonPlayShuffle = () => (
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

const ButtonPlayNext: React.FC<ButtonPlayProps> = ({ onClick }: any) => (
  <button
    className="mnipjT4SLDMgwiDCEnRC"
    aria-label="Next"
    data-testid="control-button-skip-forward"
    onClick={onClick}
  >
    <SvgPlayNext />
  </button>
);

const ButtonPlayPrev: React.FC<ButtonPlayProps> = ({ onClick }) => (
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

const ButtonPlay = ({ onClick, PlayIcon }: any) => (
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

const ButtonPlayRepeat = () => (
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

export {
  ButtonPlay,
  ButtonPlayNext,
  ButtonPlayPrev,
  ButtonPlayRepeat,
  ButtonPlayShuffle,
};
