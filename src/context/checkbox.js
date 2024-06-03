
import {create} from 'zustand';

export const useStore = create((set) => ({
  selectedCategories: [],
  productsList: [],
  isLoading: false,
  error: null,
  setSelectedCategories: (selectedCategories) => set({ selectedCategories }),
  setProductsList: (productsList) => set({ productsList }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  toggleCategory: (categoryId) => set((state) => {
    const newSelectedCategories = state.selectedCategories.includes(categoryId)
      ? state.selectedCategories.filter((id) => id !== categoryId)
      : [...state.selectedCategories, categoryId];

    return { selectedCategories: newSelectedCategories };
  }),
}));
