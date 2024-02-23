import Alert from '@mui/material/Alert';
//import Stack from '@mui/material/Stack';

const BasicAlerts = ({ severity, message }) => {
    // Four severity types: success, info, warning, error.
    return (
        <Alert severity={severity}>{message}</Alert>
    );
}

export default BasicAlerts;