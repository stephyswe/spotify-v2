import Image from "next/image";

import { Song } from "@/types";

interface MediaItemBaseProps {
  data: Song;
  onClick?: any;
  isText?: boolean;
  imageUrl?: string | null;
}

const MediaItemBase = ({
  data,
  onClick,
  isText,
  imageUrl,
}: MediaItemBaseProps) => (
  <div
    onClick={onClick}
    className="
          flex
          items-center
          gap-x-3
          cursor-pointer
          hover:bg-neutral-800/50
          w-full
          p-2
          rounded-md
        "
  >
    <div
      className="
            relative
            rounded-md
            min-h-[48px]
            min-w-[48px]
            overflow-hidden
          "
    >
      <Image
        fill
        src={imageUrl || "/images/liked.png"}
        alt="MediaItem"
        className="object-cover"
      />
    </div>
    {isText ? (
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">By {data.author}</p>
      </div>
    ) : null}
  </div>
);

export default MediaItemBase;
