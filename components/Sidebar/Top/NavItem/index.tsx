import clsx from "clsx";

interface NavItemProps {
  label: string;
  icon: any;
  iconFilled: any;
  active: boolean;
  href: string;
}

const NavItem = ({
  label,
  icon: Icon,
  iconFilled: IconFilled,
  active,
  href,
}: any) => (
  <li className="LU0q0itTx2613uiATSig InvalidDropTarget">
    <a
      draggable="false"
      aria-label={label}
      className={clsx(
        "link-subtle UYeKN11KAw61rZoyjcgZ",
        active ? "DzWw3g4E_66wu9ktqn36 active" : ""
      )}
      href={href}
      aria-expanded="false"
      aria-current="page"
    >
      {active ? <IconFilled /> : <Icon />}
      <span
        data-encore-id="type"
        className="Type__TypeElement-sc-goli3j-0 bkjCej"
      >
        {label}
      </span>
    </a>
  </li>
);

export default NavItem;
