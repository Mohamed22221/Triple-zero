import axios from 'axios';
const BASE_URL = 'http://tracking.000itkw.com/api/';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'Authorization': `Bearer ${token}`
    // }
    // headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
    // withCredentials: true
});