import { create } from "zustand";

interface PlayerStore {
  ids: string[];
  activeId?: string;
  isPlaying?: boolean;
  sound?: any;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setSound: (sound: any) => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activeId: undefined,
  setId: (id: string) => set({ activeId: id }),
  setIds: (ids: string[]) => set({ ids }),
  reset: () => set({ ids: [], activeId: undefined }),
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  setSound: (sound: any) => set({ sound }),
}));

export default usePlayer;
