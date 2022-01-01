import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

interface IProps {
    openNewProductModal: () => void;
}

export default function Header({ openNewProductModal }: IProps) {
  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: 'uppercase' }}>
            Products
          </Typography>
          <Button onClick={() => openNewProductModal()} color="inherit">+ New product</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}