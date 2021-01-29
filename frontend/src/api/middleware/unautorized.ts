import {AxiosError, AxiosResponse} from "axios";

const unauthorizedMiddleware = {
    fulfilled: (axiosResponse: AxiosResponse) => axiosResponse,
    rejected: (axiosError: AxiosError) => {
        const response = axiosError.response as AxiosResponse;

        if (!response || response.status !== 401) {
            return Promise.reject(axiosError);
        }

        // User is unauthorized.
        window.location.assign(process.env.REACT_APP_CLIENT_URL!);
        return Promise.resolve();
    }
};

export default unauthorizedMiddleware;
