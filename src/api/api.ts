import axios from 'axios';
import {AppConfig} from '../config/appConfig';

const API = axios.create({
  baseURL: AppConfig.baseUrl,
});

API.interceptors.request.use((config: any) => {
  return config;
});

API.interceptors.request.use((response: any) => {
  console.log(response.baseURL);
  return response;
});
export default API;
