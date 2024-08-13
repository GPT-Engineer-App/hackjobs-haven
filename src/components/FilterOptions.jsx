import React from 'react';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

const FilterOptions = ({ filters, setFilters }) => {
  const handleFilterChange = (filterName) => {
    setFilters(prev => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  return (
    <div className="flex flex-wrap gap-4">
      {Object.entries(filters).map(([key, value]) => (
        <div key={key} className="flex items-center space-x-2">
          <Checkbox
            id={key}
            checked={value}
            onCheckedChange={() => handleFilterChange(key)}
          />
          <Label htmlFor={key} className="capitalize text-sm font-medium cursor-pointer">
            {key}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default FilterOptions;