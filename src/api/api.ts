import axios from 'axios';

const api = axios.create({
  baseURL: 'https://opencollective.com/',
});

export default api;
