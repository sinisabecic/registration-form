import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3501/",
});

export default axiosInstance;
