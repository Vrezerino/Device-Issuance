import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts({ severity, message }) {
    /*
    Four severity types: success, info, warning, error.

    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">This is a success Alert.</Alert>
      <Alert severity="info">This is an info Alert.</Alert>
      <Alert severity="warning">This is a warning Alert.</Alert>
      <Alert severity="error">This is an error Alert.</Alert>
    </Stack>
    */
    return (
        <Alert severity={severity}>{message}</Alert>
    );
}