/* eslint-disable @next/next/no-img-element */
"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import {
  SvgPagesPlay,
  SvgPagesPlayPause,
} from "@/components/icons/pages/SvgPlay";
import { useGridResize } from "@/hooks/useGridSize";
import useLoadImage from "@/hooks/useLoadImage";
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

const ContainerWelcome = () => (
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

const SectionFeatureItem = ({ isPlaying, onClick, data }: any) => {
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

const SectionContent = ({ songs }: any) => {
  const onPlay = useOnPlay(songs);

  const player = usePlayer();
  const { isPlaying, activeId, play, pause } = player;

  const togglePlay = (id: string) => {
    if (isPlaying && id === activeId) {
      // pause
      if (pause) {
        pause();
      }
      player.setIsPlaying(!isPlaying);
      return;
    }
    onPlay(id);
    if (play) {
      play();
    }
    player.setIsPlaying(!isPlaying);
  };

  const ref = useRef<HTMLDivElement>(null);
  const [minColWidth, setMinColWidth] = useState("270px");
  const [itemHeight, setItemHeight] = useState("80px");
  const [colGap, setColGap] = useState("24px");
  const [rowGap, setRowGap] = useState("16px");

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const width = ref.current.getBoundingClientRect().width;
        if (width <= 890) {
          setMinColWidth("270px");
          setItemHeight("64px");
          setColGap("24px");
          setRowGap("12px");
        } else {
          setMinColWidth("270px");
          setItemHeight("80px");
          setColGap("24px");
          setRowGap("16px");
        }
      }
    };

    window.addEventListener("resize", handleResize);

    // Call the handleResize function to set the initial state
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="rPV8BmHZXaGIGT2HwvBB" aria-label="Good afternoon">
        <ContainerWelcome />

        <div
          ref={ref}
          className="nlOU1unbFAd7ZHyeSMTH"
          style={{
            ["--min-column-width" as any]: minColWidth,
            ["--item-height" as any]: itemHeight,
            ["--column-gap" as any]: colGap,
            ["--row-gap" as any]: rowGap,
          }}
        >
          {songs.map((song: any) => (
            <>
              <SectionFeatureItem
                key={song.id}
                onClick={(id: string) => togglePlay(song.id)}
                data={song}
                isActive={song.id === player.activeId}
                isPlaying={song.id === player.activeId && player.isPlaying}
              />
              <SectionFeatureItem
                key={song.id}
                onClick={(id: string) => togglePlay(song.id)}
                data={song}
                isActive={song.id === player.activeId}
                isPlaying={song.id === player.activeId && player.isPlaying}
              />
              <SectionFeatureItem
                key={song.id}
                onClick={(id: string) => togglePlay(song.id)}
                data={song}
                isActive={song.id === player.activeId}
                isPlaying={song.id === player.activeId && player.isPlaying}
              />
            </>
          ))}
        </div>
      </section>
      <SectionMadeFor />
    </>
  );
};

const MadeForItem = () => (
  <div className="LunqxlFIupJw_Dkx6mNx">
    <div draggable="true" className="XiVwj5uoqqSFpS4cYOC6">
      <div className="xBV4XgMq0gC5lQICFWY_">
        <div
          className="g4PZpjkqEh5g7xDpCr2K"
          style={{ ["--card-color" as any]: "#5477AF" }}
        >
          <div className="">
            <img
              aria-hidden="false"
              draggable="false"
              loading="lazy"
              src="https://dailymix-images.scdn.co/v2/img/ab67616d0000b2732629d34abc381ed283504d7b/1/en/default"
              data-testid="card-image"
              alt=""
              className="mMx2LUixlnN_Fu45JpFB SKJSok3LfyedjZjujmFt Yn2Ei5QZn19gria6LjZj"
            />
          </div>
        </div>
        <div className="woJQ5t2YiaJhjTv_KE7p">
          <div className="PFgcCoJSWC3KjhZxHDYH">
            <button
              data-testid="play-button"
              aria-label="Play Daily Mix 1"
              data-encore-id="buttonPrimary"
              className="Button-sc-qlcn5g-0 mCyvT"
            >
              <span className="ButtonInner-sc-14ud5tc-0 lmjRIQ encore-bright-accent-set">
                <span
                  aria-hidden="true"
                  className="IconWrapper__Wrapper-sc-1hf1hjl-0 erHrNB"
                >
                  <svg
                    role="img"
                    height="24"
                    width="24"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-encore-id="icon"
                    className="Svg-sc-ytk21e-0 haNxPq"
                  >
                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="E1N1ByPFWo4AJLHovIBQ">
        <a
          draggable="false"
          title="Daily Mix 1"
          className="Nqa6Cw3RkDMV8QnYreTr"
          dir="auto"
          href="/playlist/37i9dQZF1E38CQRep75Jse"
        >
          <div
            className="Type__TypeElement-sc-goli3j-0 gIkgYW nk6UgB4GUYNoAcPtAQaG"
            data-encore-id="type"
          >
            Daily Mix 1
          </div>
        </a>
        <div
          className="Type__TypeElement-sc-goli3j-0 bDHxRN Za_uNH8nTZ0qCuIqbPLZ"
          data-encore-id="type"
        >
          Steel Drum Island, Jamaican Steel Band, The Island Caribbean Steel
          Drum Band and more
        </div>
      </div>
      <div
        className="tsv7E_RBBw6v0XTQlcRo"
        data-testid="card-click-handler"
      ></div>
    </div>
  </div>
);

const SectionMadeFor = () => {
  const { ref, colWidth, columns, gridGap } = useGridResize();

  return (
    <section
      className="QyANtc_r7ff_tqrf5Bvc Shelf"
      data-testid="component-shelf"
      aria-label="Made For stephaniiehallberg"
    >
      <div className="q8AZzDc_1BumBHZg0tZb">
        <div className="OMuRYOdpUbGif12_lRJl">
          <div className="onVWL7MW4PW9FyVajBAc">
            <h2
              data-encore-id="type"
              className="Type__TypeElement-sc-goli3j-0 kqHgh"
            >
              <a
                draggable="false"
                data-testid="see-all-link"
                className="MfVrtIzQJ7iZXfRWg6eM"
                href="/section/0JQ5DAqbMKFwJhEbnbBUE9"
              >
                Made For stephaniiehallberg
              </a>
            </h2>
          </div>
          <a
            draggable="false"
            className="a7lvtXATo3HALtrsOHtO HOgue4Eg4UdBR58M0633"
            href="/section/0JQ5DAqbMKFwJhEbnbBUE9"
          >
            <span
              data-encore-id="type"
              className="Type__TypeElement-sc-goli3j-0 eoWRdH"
            >
              Show all
            </span>
          </a>
        </div>
      </div>
      <div
        ref={ref}
        data-testid="grid-container"
        className="iKwGKEfAfW7Rkx2_Ba4E Z4InHgCs2uhk0MU93y_a"
        style={{
          ["--column-width" as any]: colWidth + "px",
          ["--column-count" as any]: columns,
          ["--grid-gap" as any]: gridGap + "px",
          ["--min-container-width" as any]: "372px",
        }}
      >
        <MadeForItem />
        <MadeForItem />
        <MadeForItem />
        <MadeForItem />
        <MadeForItem />
        <MadeForItem />
        <MadeForItem />
        <MadeForItem />
        <MadeForItem />
        <MadeForItem />
        <MadeForItem />
        <MadeForItem />
      </div>
    </section>
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
