import axios from 'axios';

const api = axios.create({
    baseURL: 'http://52.14.100.212:11000/api/'
    //baseURL: 'https://7a82cf08eb58.ngrok.io/api/'
});

export default api;