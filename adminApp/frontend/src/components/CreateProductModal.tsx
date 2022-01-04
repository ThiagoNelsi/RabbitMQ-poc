import React, { useRef, useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { IProduct } from '../definitions/IProduct';

export default function CreateProductModal({ open, handleClose }: { open: boolean, handleClose: () => void }) {

  const nameRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLTextAreaElement>();
  const priceRef = useRef<HTMLInputElement>();

  const [imageUrl, setImageUrl] = useState('');
  const [urlTypingTimer, setUrlTypingTimer] = useState<NodeJS.Timeout>(setTimeout(() => {}, 0));

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(urlTypingTimer);

    const newTimer = setTimeout(() => {
      setImageUrl(event.target.value);
    }, 1000);

    setUrlTypingTimer(newTimer);
  }

  const handleSubmit = () => {

    if (!nameRef.current) {
      alert('Name is required');
      return;
    }

    if (!descriptionRef.current) {
      alert('Description is required');
      return;
    }

    if (!priceRef.current) {
      alert('Price is required');
      return;
    }

    const product: Omit<IProduct, 'id'> = {
      name: nameRef.current.value.trim(),
      description: descriptionRef.current.value.trim(),
      price: parseFloat(priceRef.current.value),
      image: imageUrl.trim(),
    }

    fetch('http://localhost:8080/products', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    }).then(() => {
      setImageUrl('');
      handleClose();
    });

  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: 'grid', placeItems: 'center' }}
    >
      <Box
        maxWidth={800}
        padding={2}
        sx={{ background: '#fff', '.MuiTextField-root': { mb: 2 } }}
      >
        <Typography variant="h6" component="h2" mb={2}>
          New product
        </Typography>

        <Box flexDirection='column' gap={2}>
          <TextField inputRef={nameRef} fullWidth label='Product name' variant='outlined' />
          <TextField inputRef={descriptionRef} fullWidth multiline label='Product desciption' variant='outlined' />
          <TextField
            fullWidth
            type='url'
            onChange={handleImageUrlChange}
            label='Image URL (optional)'
            variant='outlined'
          />
          <Box>
            {imageUrl && <img width={200} src={imageUrl} alt='product' />}
          </Box>
          <TextField inputRef={priceRef} type='number' label='Price' variant='outlined' />
          <Button variant='contained' color='primary' fullWidth onClick={handleSubmit}>Create</Button>
        </Box>
      </Box>
    </Modal>
  );
}
