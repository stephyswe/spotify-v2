import clsx from "clsx";

export const LibraryIcon = ({ className, Icon }: any) => (
  <span
    aria-hidden="true"
    className={clsx("IconWrapper__Wrapper-sc-16usrgb-0 ", className)}
  >
    <Icon />
  </span>
);
