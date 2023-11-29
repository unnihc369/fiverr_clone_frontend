import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-clone-backend-ktak.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
