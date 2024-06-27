// src/pages/ProductListing/ProductListing.tsx
import React from 'react';
import ProductListingSection from './ProductListingSection';
import { useData } from '../../contexts/DataProvider';
import Filter from './Filter';

const ProductListing: React.FC = () => {
  const { state } = useData();
  const { loading } = state;

  return (
    <div>
      {!loading ? (
        <div>
          <div className="page-container">
            <Filter className="filters" />
            <ProductListingSection className="products-container" />
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProductListing;
