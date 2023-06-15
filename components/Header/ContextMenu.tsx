const ContextMenu = () => (
  <div
    data-tippy-root=""
    id="tippy-20"
    style={{
      zIndex: 9999,
      position: "absolute",
      inset: "0px 0px auto auto",
      margin: "0px",
      transform: "translate(-40px, 64px)",
    }}
  >
    <div id="context-menu" data-placement="bottom-end">
      <div data-testid="user-widget-menu" className="ERyo7m5f00o7ToFdGMCD">
        <ul
          tabIndex={0}
          role="menu"
          data-depth="0"
          className="encore-dark-theme SboKmDrCTZng7t4EgNoM"
          data-roving-interactive="1"
        >
          <li role="presentation" className="DuEPSADpSwCcO880xjUG">
            <LiButton />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default ContextMenu;

const LiButton = () => (
  <button className="wC9sIed7pfp47wZbmU6m" role="menuitem" tabIndex={-1}>
    <span
      dir="auto"
      className="Type__TypeElement-sc-goli3j-0 ieTwfQ ellipsis-one-line PDPsYDh4ntfQE3B4duUI"
      data-encore-id="type"
    >
      Account
    </span>
    <svg
      role="img"
      height="16"
      width="16"
      aria-hidden="true"
      aria-label="External link"
      viewBox="0 0 16 16"
      data-encore-id="icon"
      className="Svg-sc-ytk21e-0 haNxPq"
    >
      <path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path>
      <path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path>
    </svg>
  </button>
);
