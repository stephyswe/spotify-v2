"use client";

import {
  SvgPagesPlay,
  SvgPagesPlayPause,
} from "@/components/icons/pages/SvgPlay";
import useOnPlay from "@/hooks/useOnPlay";
import usePlayer from "@/hooks/usePlayer";

const Content = ({ songs }: any) => (
  <div
    className="main-view-container__scroll-node-child"
    style={{ minHeight: "calc(((100vh - 64px) - 90px) - 519px)" }}
  >
    <main tabIndex={-1} aria-label="Spotify - Web Player: Music for everyone">
      <div
        className="HsbczDqu9qjcYr7EIdHR"
        style={{ backgroundColor: "rgb(240, 240, 240)" }}
      ></div>

      <section data-testid="home-page">
        <div className="uIJTvxFOg2izOY7aRRiU">
          <div className="I3EivnXTjYMpSbPUiYEg contentSpacing">
            <SectionContent songs={songs} />
          </div>
        </div>
      </section>
    </main>
  </div>
);

const SectionWelcome = () => (
  <div className="OMuRYOdpUbGif12_lRJl">
    <div className="onVWL7MW4PW9FyVajBAc">
      <h2
        className="Type__TypeElement-sc-goli3j-0 fAJsTt MfVrtIzQJ7iZXfRWg6eM"
        tabIndex={-1}
        data-encore-id="type"
      >
        Good afternoon
      </h2>
    </div>
  </div>
);

const SectionFeatureItem = ({ isPlaying, onClick }: any) => {
  return (
    <div className="Z35BWOA10YGn5uc9YgAp">
      <div className="g3f_cI5usQX7ZOQyDtA9" draggable="true">
        <div className="jvWzgRWM_y_9FFTYRCcB">
          <div className="zXwER4Lsqq_e7fVVaPkZ">
            <img // eslint-disable-line @next/next/no-img-element
              aria-hidden="false"
              draggable="false"
              loading="lazy"
              src="https://i.scdn.co/image/ab6761610000e5ebe5289a2a13c374dd34a97247"
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
                  Kenny Chesney
                </p>
              </a>
            </div>
          </div>
          <div className="Kcb74zm1aMqGfPxTwO5s">
            <div className="PFgcCoJSWC3KjhZxHDYH">
              <button
                onClick={onClick}
                data-testid="play-button"
                aria-label="Play"
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

const SectionContent = ({ songs }: any) => {
  const CONST_ID = "1";
  const player = usePlayer();
  const isPlaying = player.isPlaying;
  const onPlay = useOnPlay(songs);

  const sound = player.sound;

  const togglePlay = (id: string) => {
    onPlay(id);
    if (isPlaying) {
      sound?.pause();
    }
    if (player?.activeId && !isPlaying) {
      sound.play();
    }
    player.setIsPlaying(!isPlaying);
  };
  return (
    <>
      <section className="rPV8BmHZXaGIGT2HwvBB" aria-label="Good afternoon">
        <SectionWelcome />

        <div
          className="nlOU1unbFAd7ZHyeSMTH"
          style={{
            ["--min-column-width" as any]: "270px",
            ["--item-height" as any]: "80px",
            ["--column-gap" as any]: "24px",
            ["--row-gap" as any]: "16px",
          }}
        >
          <SectionFeatureItem
            id={CONST_ID}
            onClick={(id: string) => togglePlay(CONST_ID)}
            isPlaying={
              CONST_ID === player.activeId?.toString() && player.isPlaying
            }
          />
        </div>
      </section>
    </>
  );
};

const MainStuff = ({ songs }: any) => (
  <div className="main-view-container">
    <div className="os-host os-host-foreign os-theme-spotify os-host-resize-disabled os-host-scrollbar-horizontal-hidden main-view-container__scroll-node os-host-overflow os-host-overflow-y os-host-transition">
      <ResizeObserver />
      <div className="os-padding">
        <div
          className="os-viewport os-viewport-native-scrollbars-invisible"
          style={{ overflowY: "scroll" }}
        >
          <div
            className="os-content"
            style={{ padding: "0px", height: "100%", width: "100%" }}
          >
            <div className="main-view-container__scroll-node-child-spacer"></div>
            <Content songs={songs} />
          </div>
        </div>
      </div>
      <OsScrollbar />
      <OsScrollbarVertical />
      <div className="os-scrollbar-corner"></div>
    </div>
  </div>
);

export default MainStuff;

const OsScrollbarVertical = () => (
  <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
    <div className="os-scrollbar-track">
      <div
        className="os-scrollbar-handle"
        style={{ height: "11.0963%", transform: "translate(0px, 0px)" }}
      ></div>
    </div>
  </div>
);

const OsScrollbar = () => (
  <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
    <div className="os-scrollbar-track">
      <div
        className="os-scrollbar-handle"
        style={{ width: "100%", transform: "translate(0px, 0px)" }}
      ></div>
    </div>
  </div>
);

const ResizeObserver = () => (
  <div className="os-resize-observer-host observed">
    <div
      className="os-resize-observer"
      style={{ left: "0px", right: "auto" }}
    ></div>
  </div>
);
