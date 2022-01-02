import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { IProduct } from '../definitions/IProduct';
import ProductCard from './ProductCard';

// COMPONENT
export default function ProductsList({ modalIsOpen }: { modalIsOpen: boolean }) {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  useEffect(() => {
    if (!modalIsOpen) getProducts().then(setProducts).catch(console.error);
  }, [modalIsOpen]);

  const getProducts = async () => {
    try {
      const products = await fetch('http://localhost:8080/products');
      const parsed = await products.json();
      return parsed;
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Grid data-testid="grid" container spacing={2} sx={{ padding: 4 }}>
      {
        products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </Grid>
  )
}
