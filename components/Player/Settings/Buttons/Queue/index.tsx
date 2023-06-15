const QueueButton = () => (
  <div className="GlueDropTarget GlueDropTarget--tracks GlueDropTarget--local-tracks GlueDropTarget--episodes">
    <button
      className="Button-sc-1dqy6lx-0 feKImU KAZD28usA1vPz5GVpm63"
      data-testid="control-button-queue"
      data-active="false"
      aria-label="Queue"
      data-encore-id="buttonTertiary"
      aria-expanded="false"
    >
      <span
        aria-hidden="true"
        className="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"
        style={{
          height: "16px",
        }}
      >
        <svg
          role="img"
          height="16"
          width="16"
          aria-hidden="true"
          viewBox="0 0 16 16"
          data-encore-id="icon"
          className="Svg-sc-ytk21e-0 haNxPq"
        >
          <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
        </svg>
      </span>
    </button>
  </div>
);

export default QueueButton;
