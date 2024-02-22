import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

import { fetchOne } from '../services/deviceService';

export default function DevicePage({ devices, setNotif }) {
    const [device, setDevice] = useState(null);
    const { deviceNumber: deviceNumberParam } = useParams();

    // Find device from array prop, with a device number that matches the dynamic parameter from current URL, or fetch it.
    useEffect(() => {
        if (devices) {
            setDevice(devices?.find(d => d.deviceNumber === deviceNumberParam));
        } else {
            const fetch = async () => {
                try {
                    const data = await fetchOne();
                    setDevice(data);
                } catch (e) {
                    setNotif({ severity: 'error', message: e.message });
                }
            };
            fetch();
        }
    }, [deviceNumberParam, devices, setNotif]);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={device?.deviceName}
                height='300'
                image={device?.image}
            />
            <CardContent>
                <Typography gutterBottom variant='h2' component='div'>
                    {device?.deviceName}
                </Typography>
                
                <Typography variant='body1' color='text.secondary'>
                    Manufacturer: {device?.deviceManufacturer}<br />
                    Device Number: {device?.deviceNumber}<br /><br />

                    {device?.deviceDescription}
                </Typography>
                
                <Typography variant='body2' color='text.secondary' marginTop={'1em'}>
                    Issued to:<br />
                    <ul>
                        {device?.issues?.map(issue => <li>{`${issue.recipientName} at ${issue.recipientDepartment} on ${issue.issueDate}`}</li>)}
                    </ul>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>
                    <a href={`https://www.google.com/search?q=${device?.deviceName} ${device?.deviceManufacturer}`} target='_blank' rel='noreferrer'>Learn More</a>
                </Button>
            </CardActions>
        </Card>
    );
}