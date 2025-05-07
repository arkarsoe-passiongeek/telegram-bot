const axios = require('axios');

const BASE_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

function getAxiosInstance() {
    return {
        get(method, params) {
            return axios.get(`/${method}`, {
                baseURL: BASE_URL,
                params: params,
            });
        },
        post(method, data) {
            return axios({
                method: `post`,
                baseURL: BASE_URL,
                url: `/${method}`,
                data,
            });
        },
    }
}

const axiosInstance = getAxiosInstance();

module.exports = { axiosInstance, BASE_URL };