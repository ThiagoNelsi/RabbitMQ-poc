import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { IProduct } from '../definitions/IProduct';
import ProductCard from './ProductCard';

// COMPONENT
export default function ProductsList({ getProducts }: { getProducts: () => Promise<IProduct[]> }) {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const prods = await getProducts();
        console.log(prods);
        setProducts(prods);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, []);


  return (
    <Grid data-testid="grid" container spacing={2} sx={{ padding: 4 }}>
      {
        products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </Grid>
  )
}
