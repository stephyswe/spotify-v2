import { useCallback, useEffect, useRef, useState } from 'react';

export const useFeaturedItemResize = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [minColWidth, setMinColWidth] = useState("270px");
  const [itemHeight, setItemHeight] = useState("80px");
  const [colGap, setColGap] = useState("24px");
  const [rowGap, setRowGap] = useState("16px");

  const handleResize = useCallback(() => {
    if (ref.current) {
      const width = ref.current.getBoundingClientRect().width;
      if (width <= 890) {
        setMinColWidth("270px");
        setItemHeight("64px");
        setColGap("24px");
        setRowGap("12px");
      } else {
        setMinColWidth("270px");
        setItemHeight("80px");
        setColGap("24px");
        setRowGap("16px");
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return { ref, minColWidth, itemHeight, colGap, rowGap };
};
