import { FC } from "react";

import ConnectButton from "@/components/Player/Settings/Buttons/Connect";
import LyricsButton from "@/components/Player/Settings/Buttons/Lyrics";
import QueueButton from "@/components/Player/Settings/Buttons/Queue";
import PlayerVolume from "@/components/Player/Settings/Volume";

interface PlayerSettingsProps {
  VolumeIcon: React.FC;
  volume: number;
  setVolume: (value: number) => void;
  toggleMute: () => void;
}

const PlayerSettings: FC<PlayerSettingsProps> = ({
  VolumeIcon,
  volume,
  setVolume,
  toggleMute,
}) => (
  <div className="jOKLc29vP0Bz1K0TsDtX">
    <div className="mwpJrmCgLlVkJVtWjlI1">
      <LyricsButton />
      <QueueButton />
      <ConnectButton />
      <PlayerVolume
        VolumeIcon={VolumeIcon}
        volume={volume}
        setVolume={setVolume}
        toggleMute={toggleMute}
      />
    </div>
  </div>
);

export default PlayerSettings;
