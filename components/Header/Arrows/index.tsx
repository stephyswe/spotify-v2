import SvgHeaderArrowLeft from "@/components/icons/pages/header/SvgHeaderArrowLeft";
import SvgHeaderArrowRight from "@/components/icons/pages/header/SvgHeaderArrowRight";

const HeaderArrows = () => (
  <div className="VgSbatGBB9XwTH2_dsxg">
    <button
      data-testid="top-bar-back-button"
      aria-label="Go back"
      disabled={true}
      className="ql0zZd7giPXSnPg75NR0"
    >
      <SvgHeaderArrowLeft />
    </button>
    <button
      data-testid="top-bar-forward-button"
      aria-label="Go forward"
      disabled={false}
      className="ql0zZd7giPXSnPg75NR0 pfMoD1MbelMuF1m8QeMc"
    >
      <SvgHeaderArrowRight />
    </button>
  </div>
);

export default HeaderArrows;
