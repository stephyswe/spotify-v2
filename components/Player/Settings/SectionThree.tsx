import { useEffect, useRef } from "react";

import SliderVolume from "@/components/Player/Settings/SliderVolume";

export const SectionThreeButton = () => (
  <button
    className="Button-sc-1dqy6lx-0 feKImU KAZD28usA1vPz5GVpm63 ZMXGDTbwxKJhbmEDZlYy Xmv2oAnTB85QE4sqbK00 p-0"
    data-testid="lyrics-button"
    data-active="false"
    aria-label="Lyrics"
    data-encore-id="buttonTertiary"
    aria-expanded="false"
  >
    <span
      aria-hidden="true"
      className="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"
      style={{
        height: "16px",
      }}
    >
      <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        viewBox="0 0 16 16"
        data-encore-id="icon"
        className="Svg-sc-ytk21e-0 haNxPq"
      >
        <path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
      </svg>
    </span>
  </button>
);

export const SectionThreeGlueTarget = () => (
  <div className="GlueDropTarget GlueDropTarget--tracks GlueDropTarget--local-tracks GlueDropTarget--episodes">
    <button
      className="Button-sc-1dqy6lx-0 feKImU KAZD28usA1vPz5GVpm63"
      data-testid="control-button-queue"
      data-active="false"
      aria-label="Queue"
      data-encore-id="buttonTertiary"
      aria-expanded="false"
    >
      <span
        aria-hidden="true"
        className="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"
        style={{
          height: "16px",
        }}
      >
        <svg
          role="img"
          height="16"
          width="16"
          aria-hidden="true"
          viewBox="0 0 16 16"
          data-encore-id="icon"
          className="Svg-sc-ytk21e-0 haNxPq"
        >
          <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
        </svg>
      </span>
    </button>
  </div>
);

export const SectionThreeConnect = () => (
  <div className="bkFQH4uasL3pXqN9eDSi ml-2 mr-[-8px]">
    <div className="PrhIVExjBkmjHt6Ea4XE" aria-expanded="false">
      <div className="WFRr38dFOxh75JyzSTj5"></div>
      <button
        className="control-button INitzTSjokOMEJOc6P2H"
        aria-label="Connect to a device"
        aria-expanded="false"
        id="device-picker-icon-button"
      >
        <svg
          role="presentation"
          height="16"
          width="16"
          aria-hidden="true"
          className="Svg-sc-ytk21e-0 haNxPq"
          viewBox="0 0 16 16"
          data-encore-id="icon"
        >
          <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
          <path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
        </svg>
      </button>
    </div>
  </div>
);

interface SectionThreeVolumeProps {
  VolumeIcon: any;
  volume: any;
  setVolume: any;
  toggleMute: any;
}

export const SectionThreeVolume: React.FC<SectionThreeVolumeProps> = ({
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

const VolumeSliderOld = () => {
  return (
    <>
      <label className="hidden-visually">
        Change volume
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={1}
          onChange={() => {}}
        />
      </label>

      <div className="TywOcKZEqNynWecCiATc" data-testid="progress-bar">
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
    </>
  );
};
