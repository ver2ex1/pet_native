import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'X-Api-Key': 'j+ReClXUoJKDTJhb7X1DGQ==MLWFOiVcTZFIQER2',
  },
});

export {BASE_URL};

export default instance;
