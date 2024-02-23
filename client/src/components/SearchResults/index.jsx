import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

// "SearchResult" as a name could get confused with "SearchResults".
const ResultCard = ({ device }) => {
    return (
        <Link key={device.deviceNumber} to={`/devices/${device.deviceNumber}`}>
            <div className='resultCardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            height='140'
                            image={device.image}
                            alt={device.deviceName}
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                {device.deviceName}
                            </Typography>
                            <Typography component={'span'} variant='body2' color='text.secondary'>
                                <ul>
                                    <li>Manufacturer: {device.deviceManufacturer}</li>
                                    <li>Device Number: {device.deviceNumber}</li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </Link>
    );
}

const SearchResults = ({ results }) => {
    return (
        <>
            <h3>Search Results</h3>
            <div className='searchResultContainer'>
                {results.map((d, i) => (<ResultCard device={d} key={i} />))}
            </div>
        </>
    );
}

export default SearchResults;