import axios from 'axios';

const api = axios.create({
  responseType: 'json',
  responseEncoding: 'utf8',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },

  // baseURL: "http://base",
});

api.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;
