// src/pages/ProductListing/Filter.tsx
import React, { useState } from 'react';
import './Filter.css';
import { useData } from '../../contexts/DataProvider';

interface FilterProps {
  className?: string;
}

const Filter: React.FC<FilterProps> = ({ className }) => {
  const { dispatch, state } = useData();
  const [isFilterMenuOn, setIsFilterMenuOn] = useState(false);

  const handleCategoryChange = (category: string) => {
    dispatch({
      type: 'SET_CATEGORY',
      payload: category,
    });
  };

  return (
    <div className={`filter-container ${className}`}>
      <div className="filter-inner">
        <h2>Categories</h2>
        <div className="filter-buttons">
          {['All', 'Men', 'Women'].map((category) => (
            <button
              key={category}
              className={`filter-button ${
                state.filters.category === category ? 'active' : ''
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
