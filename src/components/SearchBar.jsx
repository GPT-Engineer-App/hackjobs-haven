import React from 'react';
import { Input } from './ui/input';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Input
      type="text"
      placeholder="Search jobs..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full"
    />
  );
};

export default SearchBar;