import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.init";

const BaseURL = axios.create({
  // baseURL: "http://localhost:5000/",
  baseURL: "https://knowledge-dot-server-ii.vercel.app/",
});

// request interceptor
BaseURL.interceptors.request.use(
  function (config) {
    if (!config.headers.authorization) {
      config.headers.authorization = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// response interceptor
BaseURL.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 403 || error.response.status === 401) {
      signOut(auth);
      localStorage.removeItem("accessToken");
    }
    return Promise.reject(error);
  }
);

export default BaseURL;
