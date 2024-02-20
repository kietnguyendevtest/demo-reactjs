import axios from "axios";
import queryString from "query-string";
import { toast } from "react-toastify";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, PUT, DELETE, GET",
        "Content-Type": "application/json;charset=UTF-8",
    },
    withCredentials: false,
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    }
    // async function (error) {
    //     let res = [];
    //     if (error.response) {
    //         res.data = error.response.data;
    //         res.status = error.response.status;
    //         res.headers = error.response.headers;
    //     } else if (error.request) {
    //         console.log(">>>error.request: ", error.request);
    //     } else {
    //         console.log(
    //             "Error axiosClient.interceptors.response: ",
    //             error.message
    //         );
    //     }

    //     return Promise.reject(res);
    // }
);

export default axiosClient;
