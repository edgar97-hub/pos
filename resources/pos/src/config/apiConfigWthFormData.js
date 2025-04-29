import axios from "axios";
import axiosInterceptor from "./axiosInterceptor";
import { environment } from "./environment";

const server = environment.URL + "/api/";
const axiosApi = axios.create({
    baseURL: server,
});
axiosInterceptor.setupInterceptors(axiosApi, false, true);
export default axiosApi;
