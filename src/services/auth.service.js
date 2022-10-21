import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const _accessTokenKey = 'access';
const _refreshTokenKey = 'refresh';
const authService = {
    register: (user) => axiosServices.post(urls.users, user),
    login: (user) => axiosServices.post(urls.auth.login, user),
    refresh: (refresh) => axiosServices.post(urls.auth.refresh, {refresh}),

    setTokens: ({access, refresh}) => {
        localStorage.setItem(_accessTokenKey, access);
        localStorage.setItem(_refreshTokenKey, refresh);
    },

    deleteToken: () => {
        localStorage.removeItem(_accessTokenKey);
        localStorage.removeItem(_refreshTokenKey);
    },

    getAccessToken: () => localStorage.getItem(_accessTokenKey),
    getRefreshToken: () => localStorage.getItem(_refreshTokenKey),


}

export {authService};
