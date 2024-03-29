import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ContainedButton = ({ text, handleClick }) => {
  return (
    <Stack direction='row' spacing={2}>
      <Button onClick={handleClick} variant='contained' color='success'>{text}</Button>
    </Stack>
  );
}

export default ContainedButton;