import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Theme } from '../utils/constants';

const { LIGHT, DARK } = Theme;

export const useApp = create(
  persist(
    set => ({
      theme: null,
      isSmallScreen: false,

      actions: {
        updateTheme: value => set({ theme: value }),
        updateIsSmallScreen: value => set({ isSmallScreen: value }),
        toggleTheme: () =>
          set(state => ({
            theme: state.theme === LIGHT ? DARK : LIGHT,
          })),
      },
    }),
    { name: 'app-storage', partialize: state => ({ theme: state.theme }) }
  )
);
