import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    deviceName,
    manufacturer,
    deviceNumber,
    recipientName,
    department,
) {
    return { deviceName, manufacturer, deviceNumber, recipientName, department };
}

/*
const rows0 = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
*/

export default function CustomizedTables({ devices }) {
    const rows = devices.map(device => createData(
        device.deviceName,
        device.manufacturer,
        device.deviceNumber,
        device.recipientName,
        device.department,
    ));

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Device Name</StyledTableCell>
                        <StyledTableCell align="right">Manufacturer</StyledTableCell>
                        <StyledTableCell align="right">Device Number</StyledTableCell>
                        <StyledTableCell align="right">Recipient Name</StyledTableCell>
                        <StyledTableCell align="right">Department</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.deviceName}>
                            <StyledTableCell component="th" scope="row">
                                {row.deviceName}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.manufacturer}</StyledTableCell>
                            <StyledTableCell align="right">{row.deviceNumber}</StyledTableCell>
                            <StyledTableCell align="right">{row.recipientName}</StyledTableCell>
                            <StyledTableCell align="right">{row.department}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}