import axiosClient from "./axiosClient";
import { trackPromise } from "react-promise-tracker";

const booksApi = {
    getAll: (params) => {
        const url = "books";
        return trackPromise(axiosClient.get(url, params));
    },
    insert: (params) => {
        const url = "books";
        return trackPromise(axiosClient.post(url, params));
    },
    update: (params) => {
        const url = `books/${params.book_id}`;
        return trackPromise(axiosClient.put(url, params));
    },
    delete: (params) => {
        const url = `books/${params.book_id}`;
        return trackPromise(axiosClient.delete(url, params));
    },
};

export default booksApi;
