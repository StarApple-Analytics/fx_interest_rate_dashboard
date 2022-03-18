import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
);

export default axiosInstance;
