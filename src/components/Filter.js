// Filter.js
import React from "react";

const Filter = ({ onCategoryChange }) => {
  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="all">All</option>
      <option value="fruits">Fruits</option>
      <option value="vegetables">Vegetables</option>
      <option value="dairy">Dairy</option>
    </select>
  );
};

export default Filter;
