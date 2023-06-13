import MadeForItem from "@/app/(site)/components/MadeForItem";
import { useGridResize } from "@/hooks/useGridSize";

const MadeForSection = ({ data: { title } }: any) => {
  const { ref, colWidth, columns, gridGap } = useGridResize();

  return (
    <section
      className="QyANtc_r7ff_tqrf5Bvc Shelf"
      data-testid="component-shelf"
      aria-label="Made For stephaniiehallberg"
    >
      <div className="q8AZzDc_1BumBHZg0tZb">
        <div className="OMuRYOdpUbGif12_lRJl">
          <div className="onVWL7MW4PW9FyVajBAc">
            <h2
              data-encore-id="type"
              className="Type__TypeElement-sc-goli3j-0 kqHgh"
            >
              <a
                draggable="false"
                data-testid="see-all-link"
                className="MfVrtIzQJ7iZXfRWg6eM"
                href="/section/0JQ5DAqbMKFwJhEbnbBUE9"
              >
                {title}
              </a>
            </h2>
          </div>
          <a
            draggable="false"
            className="a7lvtXATo3HALtrsOHtO HOgue4Eg4UdBR58M0633"
            href="/section/0JQ5DAqbMKFwJhEbnbBUE9"
          >
            <span
              data-encore-id="type"
              className="Type__TypeElement-sc-goli3j-0 eoWRdH"
            >
              Show all
            </span>
          </a>
        </div>
      </div>
      <div
        ref={ref}
        data-testid="grid-container"
        className="iKwGKEfAfW7Rkx2_Ba4E Z4InHgCs2uhk0MU93y_a"
        style={{
          ["--column-width" as any]: colWidth + "px",
          ["--column-count" as any]: columns,
          ["--grid-gap" as any]: gridGap + "px",
          ["--min-container-width" as any]: "372px",
        }}
      >
        {[...Array(columns)].map((_, i) => (
          <MadeForItem key={i} />
        ))}
      </div>
    </section>
  );
};

export default MadeForSection;