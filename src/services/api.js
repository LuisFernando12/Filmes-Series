import axios from 'axios';

const api = axios.create({
  baseURL: ' https://api-movies-series.herokuapp.com',
});

export default api;
