"use client";

import * as RadixSlider from "@radix-ui/react-slider";

interface SlideProps {
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
  setIsDragging: (value: boolean) => void;
  onSeek: () => void;
}

const SliderTrack: React.FC<SlideProps> = ({
  value = 1,
  onChange,
  max = 1,
  onSeek,
}) => {
  return (
    <RadixSlider.Root
      className="
        relative
        flex
        items-center
        select-none
        touch-none
        w-full
        h-2
        group
      "
      defaultValue={[1]}
      value={[value]}
      onValueChange={(value) => onChange?.(value[0])}
      onPointerUp={onSeek}
      max={max}
      step={0.0001}
      aria-label="Volume"
    >
      <RadixSlider.Track
        className="
          bg-neutral-600
          relative
          grow
          rounded-full
          h-[3px]
        "
      >
        <RadixSlider.Range
          className="
            absolute
            bg-white
            group-hover:bg-green-500
            rounded-full
            h-full
            left-0
            transition-width
          "
        />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="
            block
            w-3
            h-3
            bg-transparent
            group-hover:bg-white
            rounded-full
            cursor-pointer
            focus:outline-none
          "
      />
    </RadixSlider.Root>
  );
};

export default SliderTrack;
