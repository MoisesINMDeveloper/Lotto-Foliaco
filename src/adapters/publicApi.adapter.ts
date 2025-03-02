import axios from 'axios';

const publicApiAdapter = axios.create({
  baseURL: process.env.NEW_PUBLIC_API || 'http://localhost:3000/ws/',
});
export default publicApiAdapter;
