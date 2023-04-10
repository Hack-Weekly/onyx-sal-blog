import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: '',
  setUser: (userName) => set(() => ({ user: userName })),
}));
