import {AxiosRequestConfig} from "axios";

const jwtTokenMiddleware = (axiosRequestConfig: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token) {
        axiosRequestConfig.headers['x-auth-token'] = token;
    }
    return axiosRequestConfig;
};

export default jwtTokenMiddleware;
