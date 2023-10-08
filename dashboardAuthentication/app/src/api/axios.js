import axios from "axios";
const Axios = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
});

export default Axios;
