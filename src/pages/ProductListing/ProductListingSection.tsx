// src/pages/ProductListing/ProductListingSection.tsx
import React from 'react';
import Tilt from 'react-parallax-tilt';
import './ProductListingSection.css';
import { useData } from '../../contexts/DataProvider';
import { Link } from 'react-router-dom';

interface ProductListingSectionProps {
  className?: string;
}

const ProductListingSection: React.FC<ProductListingSectionProps> = ({ className }) => {
  const { state } = useData();
  const filteredProducts = state.products.filter(
    (product) =>
      state.filters.category === 'All' ||
      product.category === state.filters.category
  );
  return (
    <div className={`product-card-container ${className}`}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => {
          return (
            <Tilt key={product.name} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
              <div className="product-card">
                <Link to={`/product-details/${product.name}`}>
                  <div className="product-card-image">
                    <Tilt
                      transitionSpeed={2000}
                      tiltMaxAngleX={15}
                      tiltMaxAngleY={15}
                      scale={1.18}
                    >
                      <img src={product.image} alt={product.name} />
                    </Tilt>
                  </div>
                </Link>
                <div className="product-card-details">
                  <h3>{product.name}</h3>
                </div>
              </div>
            </Tilt>
          );
        })
      ) : (
        <p className="no-products-found">No products found</p>
      )}
    </div>
  );
};

export default ProductListingSection;
