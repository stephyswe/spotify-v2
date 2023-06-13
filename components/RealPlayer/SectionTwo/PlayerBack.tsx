import { useEffect, useRef, useState } from "react";

export const PlayBackDuration = ({ value }: any) => (
  <div
    data-testid="playback-duration"
    data-test-position="9199"
    className="Type__TypeElement-sc-goli3j-0 fcYQUS npFSJSO1wsu3mEEGb5bh"
    data-encore-id="type"
  >
    {value}
  </div>
);

export const PlayBackPosition = ({ value }: any) => (
  <div
    data-testid="playback-position"
    className="Type__TypeElement-sc-goli3j-0 fcYQUS playback-bar__progress-time-elapsed"
    data-encore-id="type"
  >
    {value}
  </div>
);

export const SeekControlEasier = ({ state, controls }: any) => {
  const [value, setValue] = useState(state?.time || 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
    controls.seek(newValue);
  };

  useEffect(() => {
    setValue(state?.time);
  }, [state.time]);

  return (
    <div
      className="custom-range-slider"
      style={{ position: "relative", height: "10px", width: "100%" }}
    >
      <input
        type="range"
        min="0"
        max={state?.duration || 1}
        step={0.1}
        value={value}
        onChange={handleChange}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "100%",
          opacity: 0, // Make it invisible
        }}
      />
      <div
        className="proxy-slider"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: `${(value / (state?.duration || 1)) * 100}%`,
          background: "blue", // Style as needed
        }}
      />
    </div>
  );
};

export const SeekControl = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.setProperty(
        "--progress-bar-transform",
        "4.787234042553192%"
      );
    }
  }, []);

  return (
    <div
      ref={divRef}
      className="TywOcKZEqNynWecCiATc"
      data-testid="progress-bar"
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
  );
};
