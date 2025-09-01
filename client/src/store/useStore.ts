import { create } from 'zustand';

interface AppState {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const useStore = create<AppState>((set) => ({
  currentPage: 'home',
  setCurrentPage: (page) => set({ currentPage: page }),
}));
