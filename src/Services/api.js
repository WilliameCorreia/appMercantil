import axios from 'axios';

const api = axios.create({
    baseURL: 'http://52.14.100.212:11000/api/'
});

export default api;