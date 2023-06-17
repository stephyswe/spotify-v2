import { create } from "zustand";

interface SidebarStore {
  isLibrary: boolean;
  onLibrary: () => void;
}

const useSidebar = create<SidebarStore>((set) => ({
  isLibrary: false,
  onLibrary: () => set((state) => ({ isLibrary: !state.isLibrary })),
}));

export default useSidebar;