import axios from 'axios';

const api = axios.create({
    baseURL: 'http://52.14.100.212:11000/api/',
    //baseURL: 'https://192.168.0.4:5000/api/'
});

export default api;