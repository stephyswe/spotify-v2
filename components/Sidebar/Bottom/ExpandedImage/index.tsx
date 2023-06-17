import { SvgCollapseArrow } from "@/components/icons/pages/SvgCollapseArrow";
import { SvgExpandedImageMiddle } from "@/components/icons/pages/SvgExpandedImageMiddle";
import usePlayer from "@/libs/hooks/usePlayer";

const ExpandedImage = ({ onPicture }: any) => {
  const { isPicture } = usePlayer();
  if (!isPicture) return null;
  return (
    <div
      data-testid="CoverSlotExpanded__container"
      className="jtRqaoDIpIR6fEATUTyY"
    >
      <div draggable="true">
        <a
          draggable="false"
          //referrer="now_playing_bar"
          data-testid="context-link"
          data-context-item-type="track"
          aria-label="Now playing: Folkesnakk 2020 by Skurk3n"
          href="/user/stephaniiehallberg/collection?uid=a42e44cb987b4e1b02ec&amp;uri=spotify%3Atrack%3A7z5pqI6wTTD1wOgtBZy3w5"
          style={{ border: "none" }}
        >
          <div>
            <div
              className="H0HbpIM3UrcupWIAjLWu W0TACB7OY0iXtKVOtEhY"
              aria-hidden="true"
              style={{ width: "264px", height: "264px", transition: "all" }}
            >
              <div className="zmOtW0vqqn1qpZrtQ_w9">
                <SvgExpandedImageMiddle />
              </div>
              <img // eslint-disable-line @next/next/no-img-element
                aria-hidden="false"
                draggable="false"
                loading="eager"
                src="https://i.scdn.co/image/ab67616d00001e0239998e2f8c1ee01d70e71eed"
                data-testid="cover-art-image"
                alt=""
                className="mMx2LUixlnN_Fu45JpFB FqmFsMhuF4D0s35Z62Js Yn2Ei5QZn19gria6LjZj"
                style={{ width: "264px", height: "264px", transition: "all" }}
              />
            </div>
          </div>
        </a>
      </div>
      <button
        onClick={onPicture}
        className="CoverSlotExpanded__actionButton g6ZgzRfiHjsTLskeyI0J"
        aria-label="Collapse"
      >
        <SvgCollapseArrow />
      </button>
    </div>
  );
};

export default ExpandedImage;
