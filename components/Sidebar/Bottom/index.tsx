"use client";

import ExpandedImage from "@/components/Sidebar/Bottom/ExpandedImage";
import { SidebarFilter } from "@/components/Sidebar/Bottom/Filter";
import SidebarLibrary from "@/components/Sidebar/Bottom/Library";
import SidebarSearch from "@/components/Sidebar/Bottom/Search";
import SidebarBottomBase from "@/components/Sidebar/Bottom/SidebarBottomBase";
import SidebarContent from "@/components/Sidebar/Bottom/SidebarBottomContent";
import SongItemList from "@/components/Sidebar/Bottom/SongItemList";
import useAuthModal from "@/libs/hooks/useAuthModal";
import usePlayer from "@/libs/hooks/usePlayer";
import useSubscribeModal from "@/libs/hooks/useSubscribeModal";
import useUploadModal from "@/libs/hooks/useUploadModal";
import { useUser } from "@/libs/hooks/useUser";

interface SidebarBottomProps {
  songs: any;
  isLibrary: boolean;
  onLibrary: () => void;
}

const SidebarBottom = ({ songs, isLibrary, onLibrary }: SidebarBottomProps) => {
  const { user, subscription } = useUser();
  const uploadModal = useUploadModal();
  const authModal = useAuthModal();
  const subscribeModal = useSubscribeModal();
  const player = usePlayer();
  const { setIsPicture, isPicture } = player;

  const onPicture = () => setIsPicture(!isPicture);

  const onClickPlus = () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (!subscription) {
      return subscribeModal.onOpen();
    }

    return uploadModal.onOpen();
  };

  return (
    <SidebarBottomBase
      Library={
        <SidebarLibrary
          onClickPlus={onClickPlus}
          onLibrary={onLibrary}
          isLibrary={isLibrary}
        />
      }
      Filter={isLibrary ? null : <SidebarFilter />}
      SongList={
        <SidebarContent
          isLibrary={isLibrary}
          Search={isLibrary ? null : <SidebarSearch />}
        >
          <SongItemList songs={songs} isLibrary={isLibrary} />
        </SidebarContent>
      }
      ExpandedImage={isPicture ? <ExpandedImage onPicture={onPicture} /> : null}
      isPicture={isPicture}
      isLibrary={isLibrary}
    />
  );
};

export default SidebarBottom;
