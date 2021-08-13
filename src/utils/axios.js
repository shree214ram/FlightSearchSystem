import axios from 'axios';
import {BASE_URL} from "./environment"
import {getToken} from "./session"

let headers = {}
headers['at']= getToken() || null;
const axiosInstance = axios.create({
  baseURL:BASE_URL,
  withCredentials: true,
  headers,
})

export default axiosInstance;