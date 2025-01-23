// useSliceStore.ts
import { create } from 'zustand';

// Define the store's state and actions type
type SliceStore = {
  slice: number;
  setSlice: (slice: number) => void;
};

export const useSliceStore = create<SliceStore>((set) => ({
  slice: 0,
  setSlice: (slice: number) => set({ slice }), // Action to update the slice value
}));
