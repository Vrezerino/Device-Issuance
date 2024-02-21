import * as React from 'react';
import Alert from '@mui/material/Alert';
//import Stack from '@mui/material/Stack';

export default function BasicAlerts({ severity, message }) {
    // Four severity types: success, info, warning, error.
    return (
        <Alert severity={severity}>{message}</Alert>
    );
}