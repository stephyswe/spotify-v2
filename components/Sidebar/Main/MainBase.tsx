const MainBase = ({ children }: any) => (
  <div
    className="BdcvqBAid96FaHAmPYw_"
    style={{
      minWidth: "280px",
    }}
  >
    <nav className="sqKERfoKl4KwrtHqcKOd" aria-label="Main">
      {children}
    </nav>
    <div
      data-testid="LayoutResizer__resize-bar"
      className="LayoutResizer__resize-bar LayoutResizer__inline-end"
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
  </div>
);

export default MainBase;
