import clsx from "clsx";

import { SvgSongActive } from "@/components/icons/ActiveSong";

interface SongItemContentProps {
  isActive: boolean;
  isPlaying: boolean;
  type: string;
  data: any;
}

const SongItemContent = ({
  isActive,
  isPlaying,
  type,
  data,
}: SongItemContentProps) => (
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

export default SongItemContent;
