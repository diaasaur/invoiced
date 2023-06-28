import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Filters } from '../utils/constants';
import invoices from './../utils/invoices.json';

export const useInvoice = create(
  persist(
    set => ({
      invoices: invoices,
      filters: Object.values(Filters),
      actions: {
        toggleFilter: filter =>
          set(({ filters }) => ({
            filters: filters.includes(filter)
              ? filters.filter(x => x !== filter)
              : [...filters, filter],
          })),
      },
    }),
    {
      name: 'invoice-storage',
      partialize: state => ({ invoices: state.invoices }),
    }
  )
);
