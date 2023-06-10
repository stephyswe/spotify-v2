"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

import useAuthModal from "@/hooks/useAuthModal";
import useOnPlay from "@/hooks/useOnPlay";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";

import MediaItem from "./MediaItem";

interface LibraryProps {
  songs: Song[];
  onDrawer?: () => void;
  drawer?: boolean;
}

const Library: React.FC<LibraryProps> = ({
  songs,
  onDrawer,
  drawer,
}) => {
  const { user, subscription } = useUser();
  const uploadModal = useUploadModal();
  const authModal = useAuthModal();
  const subscribeModal = useSubscribeModal();

  const onPlay = useOnPlay(songs);

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (!subscription) {
      return subscribeModal.onOpen();
    }

    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div
          onClick={onDrawer}
          className="inline-flex items-center gap-x-2 cursor-pointer group"
        >
          <TbPlaylist
            className="text-neutral-400 group-hover:text-white transition"
            size={26}
          />
          <p className="text-neutral-400 font-medium text-md group-hover:text-white transition">
            {drawer ? 'Your Library' : null}
          </p>
        </div>
        {drawer ? (
          <AiOutlinePlus
            onClick={onClick}
            size={20}
            className="
            text-neutral-400
            cursor-pointer
            hover:text-white
            transition
          "
          />
        ) : null}
      </div>
      <div
        className={twMerge(
          "flex flex-col gap-y-2 mt-4",
          drawer ? "px-3" : "px-1"
        )}
      >
        {songs.map((item) => (
          <MediaItem
            onClick={(id: string) => onPlay(id)}
            key={item.id}
            data={item}
            isText={drawer}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
