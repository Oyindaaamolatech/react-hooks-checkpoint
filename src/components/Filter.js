import React from 'react';

const Filter = ({ filterTitle, filterRate, onFilterTitleChange, onFilterRateChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => onFilterTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rate"
        value={filterRate}
        onChange={(e) => onFilterRateChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
