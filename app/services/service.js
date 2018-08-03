import axios from 'axios';
import settings from '../config/settings';

const setRestApiUrl = (endpoint, id = undefined) => {
  let apiUrl = `${settings.SERVICE.baseurl}/${endpoint}${id ? `/${id}` : ``}`;

  return apiUrl;
};

export default {
  get: (endpoint, params = {}) => {
    return axios.get(setRestApiUrl(endpoint), { params });
  },

  post: (endpoint, data = {}) => {
    return axios.post(setRestApiUrl(endpoint), data);
  },

  put: (endpoint, id, data = {}) => {
    return axios.put(setRestApiUrl(endpoint, id), data);
  },

  delete: (endpoint, id) => {
    return axios.delete(setRestApiUrl(endpoint, id));
  }
};
