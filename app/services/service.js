import axios from 'axios';
import settings from '../config/settings';

export class Service {
  constructor() {
    console.log(settings);
    this.endpoint = settings.baseurl;
  }

  setApiUrl(endpoint, id = undefined) {
    let apiUrl = `${this.baseurl}/${endpoint}`;
    if (id) {
      apiUrl += `/${id}`;
    }

    return apiUrl;
  }

  get(endpoint, params = {}) {
    return axios.get(this.setApiUrl(endpoint), { params });
  }

  post(endpoint, data = {}) {
    return axios.post(this.setApiUrl(endpoint), data);
  }

  put(endpoint, data = {}) {
    return axios.put(this.setApiUrl(endpoint), data);
  }

  delete(endpoint, id) {
    return axios.delete(this.setApiUrl(endpoint, id));
  }
}
