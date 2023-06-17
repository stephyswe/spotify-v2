import NavItem from "@/components/Sidebar/Top/NavItem";

interface SidebarTopProps {
  routes: any;
  isLibrary: boolean;
}

const SidebarTop = ({ routes, isLibrary }: SidebarTopProps) => (
  <div className="EZFyDnuQnx5hw78phLqP">
    <ul className="QuHe04rU4bj0Z5U9E2Tk">
      {routes.map((item: any) => (
        <NavItem key={item.label} {...item} isLibrary={isLibrary} />
      ))}
    </ul>
  </div>
);

export default SidebarTop;
