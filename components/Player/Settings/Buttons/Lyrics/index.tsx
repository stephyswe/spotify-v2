import SvgLyrics from "@/components/icons/Player/SvgLyrics";

const LyricsButton = () => (
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
      <SvgLyrics />
    </span>
  </button>
);

export default LyricsButton;
