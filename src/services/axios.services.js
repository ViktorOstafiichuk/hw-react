import axios from "axios";
import {createBrowserHistory} from "history";

import {baseURL} from "../configs";
import {authService} from "./auth.service";

const history = createBrowserHistory();

const axiosServices = axios.create({baseURL})
let isRefreshing = false

axiosServices.interceptors.request.use((config) => {
    const access = authService.getAccessToken();

    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})

axiosServices.interceptors.response.use((config) => {
        return config
    },
    async (error) => {
        const refresh = authService.getRefreshToken();

        if (error.response?.status === 401 && refresh && !isRefreshing) {
            isRefreshing = true
            try {
                const {data} = await authService.refresh(refresh);
                authService.setTokens(data)
            } catch (e) {
                authService.deleteToken()
                history.replace('/login?expSession=true')
            }
            isRefreshing = false
            return axiosServices(error.config)
        }
        return Promise.reject(error)
    }
)

export {axiosServices, history}
