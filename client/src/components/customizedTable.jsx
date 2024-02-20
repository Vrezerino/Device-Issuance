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
    deviceManufacturer,
    deviceNumber,
    recipientName,
    recipientDepartment,
    issueDate,
    returnDate
) {
    return { 
        deviceName,
        deviceManufacturer,
        deviceNumber,
        recipientName,
        recipientDepartment,
        issueDate,
        returnDate
    };
}

export default function CustomizedTable({ devices }) {
    const rows = devices?.map(device => createData(
        device.deviceName,
        device.deviceManufacturer,
        device.deviceNumber,
        device.recipientName,
        device.recipientDepartment,
        device.issueDate,
        device.returnDate
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
                        <StyledTableCell align="right">Issue Date</StyledTableCell>
                        <StyledTableCell align="right">Return Date</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row) => (
                        <StyledTableRow key={row.deviceName}>
                            <StyledTableCell component="th" scope="row">
                                {row.deviceName}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.deviceManufacturer}</StyledTableCell>
                            <StyledTableCell align="right">{row.deviceNumber}</StyledTableCell>
                            <StyledTableCell align="right">{row.recipientName}</StyledTableCell>
                            <StyledTableCell align="right">{row.recipientDepartment}</StyledTableCell>
                            <StyledTableCell align="right">{row.issueDate}</StyledTableCell>
                            <StyledTableCell align="right">{row.returnDate}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}