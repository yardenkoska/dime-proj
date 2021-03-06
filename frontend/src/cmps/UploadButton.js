import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
  display: 'none',
});

export default function UploadButton({ ...rest }) {
  return (
    <Stack direction='row' alignItems='center' spacing={2}>
      <label htmlFor='contained-button-file'>
        <Input
          {...rest}
          accept='image/*'
          id='contained-button-file'
          multiple
          type='file'
        />
        <Button variant='contained' component='span'>
          Select Image
        </Button>
      </label>
    </Stack>
  );
}
