import React from 'react';

function Product({ product, isAdded, addToCart, removeFromCart }) {
  return (
    <div className="card h-100">
      <img src="https://via.placeholder.com/450x300" className="card-img-top" alt={product.name} />
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}</p>
        {!isAdded ? (
          <button className="btn btn-outline-primary" onClick={addToCart}>
            Add to Cart
          </button>
        ) : (
          <button className="btn btn-outline-danger" onClick={removeFromCart}>
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
