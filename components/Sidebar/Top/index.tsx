import NavItem from "@/components/Sidebar/Top/NavItem";

interface SidebarTopProps {
  routes: any;
}

const SidebarTop = ({ routes }: SidebarTopProps) => (
  <div className="EZFyDnuQnx5hw78phLqP">
    <ul className="QuHe04rU4bj0Z5U9E2Tk">
      {routes.map((item: any) => (
        <NavItem key={item.label} {...item} />
      ))}
    </ul>
  </div>
);

export default SidebarTop;
