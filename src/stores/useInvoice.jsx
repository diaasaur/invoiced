import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Filters } from '../utils/constants';
import invoices from './../utils/invoices.json';
import { generateID } from '../utils/id';

export const useInvoice = create(
  persist(
    (set, get) => ({
      invoices: invoices,
      filters: Object.values(Filters),
      actions: {
        // filter
        toggleFilter: filter =>
          set(({ filters }) => ({
            filters: filters.includes(filter)
              ? filters.filter(x => x !== filter)
              : [...filters, filter],
          })),
        // invoice actions
        addInvoice: data => {
          const { invoices } = get();
          const newInvoice = {
            id: generateID(),
            ...data,
          };
          while (invoices.some(invoice => invoice.id === newInvoice.id)) {
            newInvoice.id = generateID();
          }
          set(state => ({
            invoices: [newInvoice, ...state.invoices],
          }));
        },
        updateInvoice: data => {
          const { invoices } = get();
          const newInvoices = invoices.map(invoice => {
            if (invoice.id === data.id) return { ...invoice, ...data };
            return invoice;
          });
          set({
            invoices: newInvoices,
          });
        },
        deleteInvoice: id => {
          set(({ invoices }) => ({
            invoices: invoices.filter(invoice => invoice.id !== id),
          }));
        },
        markPaid: id => {
          set(({ invoices }) => ({
            invoices: invoices.map(invoice => {
              if (invoice.id === id) invoice.status = Filters.PAID;
              return invoice;
            }),
          }));
        },
      },
    }),
    {
      name: 'invoice-storage',
      partialize: state => ({ invoices: state.invoices }),
    }
  )
);
