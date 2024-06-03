import { useStore } from '@/context/checkbox';

export const CategoryCheckbox = ({ id, name }) => {
  const { selectedCategories, toggleCategory } = useStore();

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={`category-${id}`}
        onChange={() => toggleCategory(id)}
        checked={selectedCategories.includes(id)}
      />
      <label htmlFor={`category-${id}`} className="ml-2">
        {name}
      </label>
    </div>
  );
};
  