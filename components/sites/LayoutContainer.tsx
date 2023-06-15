const LayoutContainer = ({ Header, Sidebar, Template, Player }: any) => (
  <main id="main">
    <div
      id="root"
      className="Root encore-dark-theme nav-ylx"
      style={{ ["--panel-gap" as any]: "8px" }}
    >
      <div className="ZQftYELq0aOsg6tPbVbV">
        {Header}
        {Sidebar}
        <div className="jEMA2gVoLgPQqAFrPhFw lPapCDz3v_LipgXwe8gi">
          {Template}
        </div>
        {Player}
      </div>
    </div>
  </main>
);

export default LayoutContainer;
