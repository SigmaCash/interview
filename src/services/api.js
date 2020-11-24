import axios from 'axios';

const api = axios.create({
  baseURL: 'https://c37612585d5c9984c7757c2b1446fe84.m.pipedream.net',
});

export default api;
