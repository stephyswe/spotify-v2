import { useCallback, useEffect, useRef, useState } from "react";

export const useGridResize = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [colWidth, setColWidth] = useState(201);
  const [columns, setColumns] = useState(6);
  const [gridGap, setGridGap] = useState(24);

  const handleResize = useCallback(() => {
    if (ref.current) {
      const gridGap = Number(
        getComputedStyle(ref.current)
          .getPropertyValue("--grid-gap")
          .replace("px", "")
      );
      let columns = 6;
      let minColWidth = 201;

      const width = ref.current.getBoundingClientRect().width;
      let colWidth = Math.floor((width - (columns - 1) * gridGap) / columns);

      while (colWidth < 180 && columns > 2) {
        columns--;
        colWidth = Math.floor((width - (columns - 1) * gridGap) / columns);
      }

      if (columns === 3 && colWidth < 157) {
        columns = 2;
        colWidth = Math.floor((width - (columns - 1) * gridGap) / columns);
      }

      while (columns < 9) {
        if (
          (columns === 6 && colWidth > 213) ||
          (columns === 7 && colWidth > 208) ||
          (columns === 8 && colWidth > 204)
        ) {
          columns++;
          colWidth = Math.floor((width - (columns - 1) * gridGap) / columns);
        } else {
          break;
        }
      }

      setColumns(columns);
      setColWidth(colWidth);

      if (columns === 3) {
        setGridGap(18);
      } else if (columns === 2) {
        setGridGap(12);
      } else {
        setGridGap(24);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return { ref, colWidth, columns, gridGap };
};
