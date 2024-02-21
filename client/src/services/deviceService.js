import axios from 'axios';
//import { baseUrl } from '../utils';

export const fetchDevices = async () => {
    const response = await axios.get(`/api/devices`);
    return response.data;
};

export const postDevice = async (device) => {
    const response = await axios.post(`/api/devices/${device.deviceNumber}`, device);
    return response.data;
}