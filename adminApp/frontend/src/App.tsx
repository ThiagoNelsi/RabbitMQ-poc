import React from 'react';
import { Button } from '@mui/material';
import CreateProductModal from './components/CreateProductModal';
import Header from './components/Header';

import ProductsList from './components/ProductsList';

export default function App() {

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Header openNewProductModal={() => {}}>
        <Button onClick={() => setOpen(true)} color="inherit">+ New product</Button>
      </Header>
      <ProductsList modalIsOpen={open} />
      <CreateProductModal open={open} handleClose={handleClose} />
    </>
  );
}
