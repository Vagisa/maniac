import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const BACKEND_URL = 'http://localhost:3001';
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => (
      {...response, data: camelcaseKeys(response.data, {deep: true})}
    ),
  );

  return api;
};
