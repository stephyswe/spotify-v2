"use client";

import MediaItemBase from "@/components/(rest)/MediaItem/MediaItemBase";
import useLoadImage from "@/libs/hooks/useLoadImage";
import usePlayer from "@/libs/hooks/usePlayer";
import { Song } from "@/types";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
  isText?: boolean;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick, isText }) => {
  const player = usePlayer();
  const imageUrl = useLoadImage(data);

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }

    return player.setId(data.id);
  };

  return (
    <MediaItemBase
      data={data}
      onClick={handleClick}
      isText={isText}
      imageUrl={imageUrl}
    />
  );
};

export default MediaItem;
