"use client"
import axios from "axios";
import {BASE_URL} from "../constants.js"

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.headers={
     'Access-Control-Allow-Origin': '*',
    // XMLHttpRequest:true,
    
}


export default axiosInstance;