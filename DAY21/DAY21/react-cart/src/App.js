import React, { useState } from 'react';
import Product from './Product';
import './App.css';

const productList = [
  { id: 1, name: 'Fancy Product', price: '$40.00 - $80.00', description: 'Fancy product description' },
  { id: 2, name: 'Special Item', price: '$18.00', description: 'Special item description' },
  { id: 3, name: 'Sale Item', price: '$25.00', description: 'Sale item description' },
  { id: 4, name: 'Popular Item', price: '$40.00', description: 'Popular item description' },
];

function App() {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div className="container">
      <header className="d-flex justify-content-between align-items-center py-3">
        
        <button className="btn btn-dark">
          Cart <span className="badge bg-light text-dark">{cart.length}</span>
        </button>
      </header>
      <h1>Shop in style</h1>
      <div className="row">
        {productList.map(product => (
          <div key={product.id} className="col-md-3 mb-4">
            <Product
              product={product}
              isAdded={cart.some(item => item.id === product.id)}
              addToCart={() => addCart(product)}
              removeFromCart={() => removeCart(product)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
