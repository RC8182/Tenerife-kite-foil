import React from 'react';
import { useStore } from '@/context/checkbox';

export const CategoryCheckbox = ({ id, name, selectedCategory, onChange }) => {
  const { setSelectedCategory } = useStore();

  const handleChange = () => {
    if (selectedCategory === id) {
      setSelectedCategory(null);  // Deselect if the same category is selected
    } else {
      setSelectedCategory(id);  // Select new category
    }
  };

  return (
    <label className="flex items-center my-2 cursor-pointer">
      <input 
        type="checkbox" 
        checked={selectedCategory === id} 
        onChange={handleChange}
        className="peer hidden"
      />
      <span className={`w-4 h-4 border-2 rounded-full ${selectedCategory === id ? 'bg-orange-500 border-orange-500' : 'border-white'} peer-checked:bg-orange-500`}></span>
      <span className="ml-2">{name}</span>
    </label>
  );
};
