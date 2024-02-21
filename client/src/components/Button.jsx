import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButton ({ text, handleClick }) {
  return (
    <Stack direction='row' spacing={2}>
      <Button onClick={handleClick} variant='contained' color='success'>{text}</Button>
    </Stack>
  );
}