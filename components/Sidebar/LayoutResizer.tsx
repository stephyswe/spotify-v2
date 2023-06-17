import clsx from "clsx";

import useSidebar from "@/libs/hooks/useSidebar";

const LayoutResizer = () => {
  const { isLibrary } = useSidebar();
  return (
    <div
      data-testid="LayoutResizer__resize-bar"
      className={clsx(
        "LayoutResizer__resize-bar LayoutResizer__inline-end",
        isLibrary ? "LayoutResizer__resize-bar-east" : ""
      )}
      style={{ zIndex: 1 }}
    >
      <label className="hidden-visually">
        Resize main navigation
        <input
          className="LayoutResizer__input"
          type="range"
          min="72"
          max="1480"
          step="10"
          value={280}
          onChange={() => {}}
        />
      </label>
    </div>
  );
};

export default LayoutResizer;
