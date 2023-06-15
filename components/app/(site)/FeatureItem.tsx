import clsx from "clsx";

import {
  SvgPagesPlay,
  SvgPagesPlayPause,
} from "@/components/icons/pages/SvgPlay";
import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";

const FeatureItem = ({ isPlaying, onClick, data }: any) => {
  const player = usePlayer();
  const imageUrl = useLoadImage(data);
  return (
    <div className="Z35BWOA10YGn5uc9YgAp">
      <div className="g3f_cI5usQX7ZOQyDtA9" draggable="true">
        <div className="jvWzgRWM_y_9FFTYRCcB">
          <div className="zXwER4Lsqq_e7fVVaPkZ">
            <img // eslint-disable-line @next/next/no-img-element
              aria-hidden="false"
              draggable="false"
              loading="lazy"
              src={imageUrl || "/images/placeholder.png"}
              data-testid="shortcut-image"
              alt=""
              className="mMx2LUixlnN_Fu45JpFB WWDxafTPs4AgThdcX5jN Yn2Ei5QZn19gria6LjZj"
            />
          </div>
        </div>
        <div className="Tzzq1pG_inwo_oSOdyjb">
          <div className="TbrIq3NG2VYFoAUMSmp9">
            <div className="JFDEiqT_8B5zeG_CDSdK">
              <a
                draggable="false"
                title="Kenny Chesney"
                href="/artist/3grHWM9bx2E9vwJCdlRv9O"
              >
                <p
                  className="Type__TypeElement-sc-goli3j-0 bkjCej EzRmGRncgnv1zFgF4dqE"
                  data-encore-id="type"
                >
                  {data.author}
                </p>
              </a>
            </div>
          </div>
          <div
            className={clsx(
              "Kcb74zm1aMqGfPxTwO5s",
              isPlaying ? "s9c9x_mJq197U2hBzGtV" : ""
            )}
          >
            <div className="PFgcCoJSWC3KjhZxHDYH">
              <button
                onClick={onClick}
                data-testid="play-button"
                aria-label={isPlaying ? "Play" : "Pause"}
                data-encore-id="buttonPrimary"
                className="Button-sc-qlcn5g-0 mCyvT"
              >
                <span className="ButtonInner-sc-14ud5tc-0 lmjRIQ encore-bright-accent-set">
                  <span
                    aria-hidden="true"
                    className="IconWrapper__Wrapper-sc-1hf1hjl-0 erHrNB"
                  >
                    {isPlaying ? <SvgPagesPlayPause /> : <SvgPagesPlay />}
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="jb9xD5ECTqKFK02qe3HZ"></div>
      </div>
    </div>
  );
};

export default FeatureItem;
