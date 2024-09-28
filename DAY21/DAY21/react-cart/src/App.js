import React, { useState } from 'react';
import Product from './Product';
import './App.css';

const productList = [
  { id: 1, name: 'Fancy Product', price: '$40.00 - $80.00', description: 'Fancy product description' },
  { id: 2, name: 'Special Item', price: '$18.00', description: 'Special item description' },
  { id: 3, name: 'Sale Item', price: '$25.00', description: 'Sale item description' },
  { id: 4, name: 'Popular Item', price: '$40.00', description: 'Popular item description' },
  { id: 5, name: 'Product 5', price: '$40.00 - $80.00', description: 'Product description' },
  { id: 6, name: 'Product 6', price: '$18.00', description: 'Product description' },
  { id: 7, name: 'Product 7', price: '$25.00', description: 'Product description' },
  { id: 8, name: 'Product 8', price: '$40.00', description: 'Product description' },
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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">React Cards</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Shop</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="btn btn-dark">
            Cart <span className="badge bg-light text-dark">{cart.length}</span>
          </button>
        </div>
      </nav>


      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
          </div>
        </div>
      </header>
      <br></br>
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