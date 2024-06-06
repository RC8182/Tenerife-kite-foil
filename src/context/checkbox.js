import {create} from 'zustand';

export const useStore = create(set => ({
  selectedCategory: null,
  isLoading: false,
  error: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error: error }),
  setDefaultCategory: (category) => set({ selectedCategory: category })
}));