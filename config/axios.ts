import axios from 'axios';
import {REACT_APP_BASE_URL} from '@env';

const BASE_URL = REACT_APP_BASE_URL;
const instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'X-Api-Key': 'j+ReClXUoJKDTJhb7X1DGQ==MLWFOiVcTZFIQER2',
  },
});
console.log(BASE_URL);
export {BASE_URL};

export default instance;
