const OsItemContainer = ({
  children,
  PlayButton,
  Picture,
  Title,
  Listeners,
  Like,
  Duration,
  ThreeDotsButton,
}: any) => (
  <div role="row" aria-rowindex={1} aria-selected="false">
    <div
      data-testid="tracklist-row"
      className="h4HgbO_Uu1JYg5UGANeQ wTUruPetkKdWAR1dd6w4"
      draggable="true"
      role="presentation"
    >
      <div
        className="NZAU7CsuZsMeMQB8zYUu"
        role="gridcell"
        aria-colindex={1}
        tabIndex={-1}
      >
        <div className="VpYFchIiPg3tPhBGyynT">
          <span
            className="Type__TypeElement-sc-goli3j-0 bGcjcI VrRwdIZO0sRX1lsWxJBe"
            data-encore-id="type"
          >
            1
          </span>
          {PlayButton}
        </div>
      </div>
      <div
        className="gvLrgQXBFVW6m9MscfFA"
        role="gridcell"
        aria-colindex={2}
        tabIndex={-1}
      >
        {Picture}
        {Title}
      </div>
      {Listeners}
      <div
        className="HcMOFLaukKJdK5LfdHh0"
        role="gridcell"
        aria-colindex={4}
        tabIndex={-1}
      >
        {Like}
        {Duration}
        {ThreeDotsButton}
      </div>
      {children}
    </div>
  </div>
);

export default OsItemContainer;
