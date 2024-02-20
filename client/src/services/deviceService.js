import axios from 'axios';
//import { baseUrl } from '../utils';

export const fetchDevices = async () => {
    const response = await axios.get(`/api/devices`);
    return response.data;
};