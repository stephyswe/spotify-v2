interface LikeButtonProps {
  songId: string;
  onClick: () => void;
  isLiked: boolean;
  Icon: any;
}

const LikeButtonBase: React.FC<LikeButtonProps> = ({
  onClick,
  isLiked,
  Icon,
}) => (
  <button
    className="
        cursor-pointer
        hover:opacity-75
        transition
      "
    onClick={onClick}
  >
    <Icon color={isLiked ? "#22c55e" : "white"} size={25} />
  </button>
);

export default LikeButtonBase;
