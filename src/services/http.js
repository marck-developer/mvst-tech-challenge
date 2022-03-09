// I used AXIOS for HTTP requests

import axios from "axios";

export const headers = {
  Authorization: process.env.REACT_APP_GITHUB_AUTH_TOKEN, // Githup Personal Access Token which gives you 15000 petitions per hour on github API
};


axios.interceptors.response.use(null, (error) => {
    const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

    if (!expectedError) {
    alert("An unexpected error occurrred");
    }

    return Promise.reject(error);
});

const httpService = {
    get: axios.get,
};

export default httpService;