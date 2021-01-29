import axios, {AxiosError, AxiosResponse} from "axios";
import unauthorizedMiddleware from "./middleware/unautorized";
import jwtTokenMiddleware from "./middleware/token";

const backendClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {}
});

backendClient.interceptors.request.use(jwtTokenMiddleware);

backendClient.interceptors.response.use(
    unauthorizedMiddleware.fulfilled,
    unauthorizedMiddleware.rejected
);

export default backendClient;
