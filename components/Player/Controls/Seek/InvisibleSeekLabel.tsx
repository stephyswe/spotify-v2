const InvisibleSeekLabel = () => (
  <label className="hidden-visually">
    Change progress
    <input
      type="range"
      min="0"
      max="188"
      step="5"
      aria-valuetext="0:09/3:08"
      value={9}
      onChange={() => {}}
    />
  </label>
);

export default InvisibleSeekLabel;
