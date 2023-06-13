import clsx from "clsx";

import { SvgSongActive } from "@/components/icons/ActiveSong";
import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";

export const SidebarSongItem = ({
  onClick,
  isActive,
  isPlaying,
  data,
  isFake,
  type = "Artist",
}: any) => {
  let imageUrl;
  if (!isFake) {
    imageUrl = useLoadImage(data);
  }
  const player = usePlayer();

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }

    return player.setId(data.id);
  };

  const isPlaylist = type === "playlist";

  return (
    <li
      onClick={handleClick}
      role="listitem"
      draggable="true"
      className="ufICQKJq0XJE5iiIsZfj  qEiVyQ28VnOKb0LeijqL "
      aria-setsize={4}
      aria-posinset={1}
    >
      <div
        className={clsx(
          "Box__BoxComponent-sc-y4nds-0",
          isActive ? "dYIdBk" : "gLSzhA",
          "Box-sc-8t9c76-0 cLAfSn ojrThQm1wxR2gZ6GntJB",
          "active:bg-[#101010] active:rounded-md"
        )}
        role="group"
        aria-labelledby="listrow-title-spotify:artist:3KdFzFHhUFCRdbllsQ1lZd"
        data-encore-id="listRow"
      >
        <div
          role="button"
          aria-disabled="false"
          aria-labelledby="listrow-title-spotify:artist:3KdFzFHhUFCRdbllsQ1lZd listrow-subtitle-spotify:artist:3KdFzFHhUFCRdbllsQ1lZd"
          aria-describedby="onClickHintspotify:artist:3KdFzFHhUFCRdbllsQ1lZd"
          tabIndex={-1}
          className="RowButton-sc-xxkq4e-0 hIehTT"
        ></div>
        <div
          id="onClickHintspotify:artist:3KdFzFHhUFCRdbllsQ1lZd"
          style={{ display: "none" }}
        ></div>
        <div className="Areas__HeaderSideArea-sc-8gfrea-1 ljvfQS">
          <div className="Areas__HeaderSideAreaFlexContainer-sc-8gfrea-2 hvZiQp">
            <div
              className={clsx(
                "vreceNX3ABcxyddeS83B nZSNG58XEPTX69mkNi9n",
                isPlaylist ? "" : "OadpZJiOaGfX6Qp4j6n5",
                "g3kBhX1E4EYEC2NFhhxG"
              )}
              style={{ width: "48px", height: "48px" }}
            >
              <img // eslint-disable-line @next/next/no-img-element
                aria-hidden="true"
                draggable="false"
                loading="eager"
                src={isFake ? data.imagePath : imageUrl}
                data-testid="entity-image"
                alt={data.author}
                className="mMx2LUixlnN_Fu45JpFB iJp40IxKg6emF6KYJ414 yOKoknIYYzAE90pe7_SE Yn2Ei5QZn19gria6LjZj"
              />
            </div>
          </div>
        </div>

        <SongText
          type="Artist"
          data={data}
          isActive={isActive}
          isPlaying={isPlaying}
        />
      </div>
    </li>
  );
};

export const SongText = ({ isActive, isPlaying, type, data }: any) => (
  <div className="Areas__HeaderArea-sc-8gfrea-3 eSohzY">
    <div className="Areas__InteractiveArea-sc-8gfrea-0 Areas__Column-sc-8gfrea-5 bJSfgC bVGmox">
      <p
        id="listrow-title-spotify:artist:3KdFzFHhUFCRdbllsQ1lZd"
        data-encore-id="type"
        className={clsx(
          "Type__TypeElement-sc-goli3j-0",
          isActive ? "iTEtJB" : "fZDcWX",
          "ListRowTitle__ListRowType-sc-1xe2if1-1 fkzPZI d33vqKRxohS9RxzCic1D gj1L_SVM_H8GteWMdEF_"
        )}
      >
        <span className="ListRowTitle__LineClamp-sc-1xe2if1-0 jjpOuK">
          {data.author}
        </span>
      </p>
      <div className="LSrBzBljgLeDhcm3Soye">
        <p
          data-encore-id="type"
          id="listrow-subtitle-spotify:artist:3KdFzFHhUFCRdbllsQ1lZd"
          className="Type__TypeElement-sc-goli3j-0 bDHxRN d33vqKRxohS9RxzCic1D"
        >
          <span className="ListRowDetails__LineClamp-sc-sozu4l-0 hoTVKD">
            <span className="HdTF8gsRm5MgWvEYlokG"></span>
            {type}
          </span>
        </p>
      </div>
    </div>
    {isPlaying ? (
      <div className="Areas__InteractiveArea-sc-8gfrea-0 Areas__TrailingSlot-sc-8gfrea-7 bJSfgC jpzxju">
        <span className="vR1zUcAr6PBeHIvA_K13">
          <SvgSongActive />
        </span>
      </div>
    ) : null}
  </div>
);
