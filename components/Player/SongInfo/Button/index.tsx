import clsx from "clsx";

import { SvgHeart } from "@/components/icons/pages/SvgHeart";

const PlayerLikeButton = ({ mode }: any) => {
  const controlButton = mode === "control";
  return (
    <button
      type="button"
      role="switch"
      aria-checked="false"
      aria-label="Save to Your Library"
      className={clsx(
        "RbsCNNM9a0WkFCM2UzBA",
        controlButton
          ? "control-button control-button-heart"
          : "tGKwoPuvNBNK3TzCS5OH"
      )}
      data-testid="add-button"
      aria-expanded="false"
    >
      <SvgHeart />
    </button>
  );
};

export default PlayerLikeButton;
