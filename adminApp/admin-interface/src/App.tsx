import React from 'react';
import Header from './components/Header';

import ProductsList from './components/ProductsList';

export default function App() {
  return (
    <>
      <Header openNewProductModal={() => {}} />
      <ProductsList getProducts={getProducts} />
    </>
  );
}

const getProducts = async () => {
  try {
    const products = await fetch('http://localhost:8080/products');
    const parsed = await products.json();
    return parsed;
  } catch (err) {
    console.log(err);
  }
}
