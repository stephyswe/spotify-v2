import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface PlayerStore {
  ids: string[];
  activeId?: string;
  isPlaying?: boolean;
  play?: () => void;
  pause?: () => void;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setPlay: (play: () => void) => void;
  setPause: (pause: () => void) => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activeId: undefined,
  setId: (id: string) => set({ activeId: id }),
  setIds: (ids: string[]) => set({ ids }),
  reset: () => set({ ids: [], activeId: undefined }),
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  setPlay: (play: () => void) => set({ play }),
  setPause: (pause: () => void) => set({ pause }),
}));

export default usePlayer;
