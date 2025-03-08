import { create } from "zustand";

export const useTransactionStore = create((set) => ({
  value: 0, // Default state
  setValue: (newValue) => set({ value: newValue }), // Function to update state
}));
