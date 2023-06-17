import clsx from "clsx";

interface SongItemBaseProps {
  onClick: () => void;
  data: any;
  isActive: boolean;
  isPlaying: boolean;
  isPlaylist: boolean;
  imageUrl: string;
  children: React.ReactNode;
  isLibrary: boolean;
}

const SongItemBase = ({
  children,
  onClick,
  data,
  isActive,
  isPlaylist,
  imageUrl,
  isLibrary,
}: SongItemBaseProps) => (
  <li
    onClick={onClick}
    role="listitem"
    draggable="true"
    className="ufICQKJq0XJE5iiIsZfj  qEiVyQ28VnOKb0LeijqL "
    aria-setsize={4}
    aria-posinset={1}
  >
    <ConditionalWrapper isLibrary={isLibrary}>
      <div
        className={clsx(
          "Box__BoxComponent-sc-y4nds-0",
          isActive ? "dYIdBk" : "gLSzhA",
          "Box-sc-8t9c76-0 cLAfSn ojrThQm1wxR2gZ6GntJB",
          isLibrary ? "Ks_qLLEMUQzP7ejeQCwQ" : "",
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
                src={imageUrl || "/images/placeholder.png"}
                data-testid="entity-image"
                alt={data.author}
                className="mMx2LUixlnN_Fu45JpFB iJp40IxKg6emF6KYJ414 yOKoknIYYzAE90pe7_SE Yn2Ei5QZn19gria6LjZj"
              />
            </div>
          </div>
        </div>

        {children}
      </div>
    </ConditionalWrapper>
  </li>
);

const ConditionalWrapper = ({ children, isLibrary }: any) => {
  return isLibrary ? <div>{children}</div> : <>{children}</>;
};

export default SongItemBase;
