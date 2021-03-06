import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

interface IProps {
  openNewProductModal: () => void;
  children: React.ReactNode;
}

export default function Header({ openNewProductModal, children }: IProps) {
  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: 'uppercase' }}>
            Products
          </Typography>
          <Box>
            {children}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
