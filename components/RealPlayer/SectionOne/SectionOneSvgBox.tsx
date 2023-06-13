import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";

export const SectionOneSvgBox = ({ data }: any) => {
  const player = usePlayer();
  const imageUrl = useLoadImage(data);

  return (
    <div draggable="true">
      <a
        draggable="false"
        data-testid="context-link"
        data-context-item-type="track"
        aria-label="Now playing: Bara lite känslor by Felicia Takman"
        href="/artist/3KdFzFHhUFCRdbllsQ1lZd?uid=toptrack2FXTr4cZaRjkPRgKCYbHLc&amp;uri=spotify%3Atrack%3A2FXTr4cZaRjkPRgKCYbHLc"
        style={{ border: "none" }}
      >
        <div className="BFR9Zt3zpL8BATBMiwQB">
          <div
            className="H0HbpIM3UrcupWIAjLWu"
            aria-hidden="true"
            style={{ width: "56px", height: "56px" }}
          >
            <SectionOneSvg />
            <SectionOneImg imageUrl={imageUrl} />
          </div>
        </div>
      </a>
    </div>
  );
};

const SectionOneImg = ({ imageUrl }: any) => (
  <img // eslint-disable-line @next/next/no-img-element
    aria-hidden="false"
    draggable="false"
    loading="eager"
    src={imageUrl}
    data-testid="cover-art-image"
    alt=""
    className="mMx2LUixlnN_Fu45JpFB FqmFsMhuF4D0s35Z62Js Yn2Ei5QZn19gria6LjZj"
  />
);

const SectionOneSvg = () => (
  <div className="zmOtW0vqqn1qpZrtQ_w9">
    <svg
      role="img"
      height="24"
      width="24"
      aria-hidden="true"
      data-testid="track"
      viewBox="0 0 24 24"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
    >
      <path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z"></path>
    </svg>
  </div>
);
