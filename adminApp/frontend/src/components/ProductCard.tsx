import React from 'react';
import { Grid, Typography, Card, CardHeader, CardMedia, CardContent, CardActions } from '@mui/material';
import { IProduct } from '../definitions/IProduct';

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 285 }}>
        <CardHeader title={product.name} />
        <CardMedia
          component="img"
          height={200}
          image={product.image}
          alt={product.name + ' image'}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography ml={1} variant="body1" fontWeight="bold" color="success">
            ${product.price}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  )
}
