interface PlayerControlsBaseProps {
  Buttons: any;
  Position: any;
  Track: any;
  Duration: any;
}

const PlayerControlsBase: React.FC<PlayerControlsBaseProps> = ({
  Buttons,
  Position,
  Track,
  Duration,
}) => (
  <div className="P4eSEARM2h24PZxMHz1T">
    <div
      className="player-controls"
      data-testid="player-controls"
      dir="ltr"
      aria-label="Player controls"
    >
      {Buttons}
      <div className="playback-bar">
        {Position}
        <div
          className="p1ULRzPc4bD8eQ4T_wyp pt-[1px]"
          data-testid="playback-progressbar"
        >
          {Track}
        </div>
        {Duration}
      </div>
    </div>
  </div>
);

export default PlayerControlsBase;
