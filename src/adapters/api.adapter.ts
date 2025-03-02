import axios from 'axios';

const apiAdapter = axios.create({
  baseURL: process.env.API || 'http://localhost:3000/ws/',
});
export default apiAdapter;
