import PlayerControlButtons from "@/components/Player/Controls/Controller";
import PlayBackDuration from "@/components/Player/Controls/Seek/Duration";
import PlayBackPosition from "@/components/Player/Controls/Seek/Position";
import SliderTrack from "@/components/Player/Controls/Seek/SliderTrack";
import PlayerControlsBase from "@/components/Player/Controls/base";
import { formatDuration, formatProgress } from "@/libs/helpers";

interface PlayerControlsWrapperProps {
  sound: any;
  progress: number;
  handleSliderChange: (value: number) => void;
  handleSeekChange: () => void;
  setIsDragging: (value: boolean) => void;
  onPlayPrevious: () => void;
  onPlayNext: () => void;
  handlePlay: () => void;
  PlayIcon: any;
}

const PlayerControls: React.FC<PlayerControlsWrapperProps> = ({
  sound,
  progress,
  handleSliderChange,
  handleSeekChange,
  setIsDragging,
  onPlayPrevious,
  onPlayNext,
  handlePlay,
  PlayIcon,
}) => (
  <PlayerControlsBase
    Buttons={
      <PlayerControlButtons
        onPlayPrevious={onPlayPrevious}
        onPlayNext={onPlayNext}
        handlePlay={handlePlay}
        PlayIcon={PlayIcon}
      />
    }
    Position={<PlayBackPosition value={formatProgress(sound, progress)} />}
    Track={
      <SliderTrack
        value={progress}
        onChange={(value) => handleSliderChange(value)}
        onSeek={handleSeekChange}
        max={sound ? Math.floor(sound.duration()) : 0}
        setIsDragging={setIsDragging}
      />
    }
    Duration={<PlayBackDuration value={formatDuration(sound)} />}
  />
);

export default PlayerControls;
