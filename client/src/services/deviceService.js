import axios from 'axios';
import { baseUrl } from '../utils';

export const fetchDevices = async () => {
    const response = await axios.get(`${baseUrl}/devices`);
    return response.data.devices;
};