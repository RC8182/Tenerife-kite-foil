// src/components/CheckBox.js
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
    <label>
      <input 
        type="checkbox" 
        checked={selectedCategory === id} 
        onChange={handleChange}
      />
      {name}
    </label>
  );
};