export const RealButton = ({
  type = "button",
  className,
  children,
  label,
  ...props
}: any) => (
  <button
    type={type}
    className={className}
    aria-label={label}
    data-encore-id="buttonTertiary"
    aria-expanded="false"
    {...props}
  >
    {children}
  </button>
);
