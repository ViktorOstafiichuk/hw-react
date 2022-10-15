import {axiosService} from "./axios.service";

import {urls} from "../configs";

const postService = {
    getPost: (userId) => axiosService.get(`${urls.posts}/?userId=${userId}`),
    createPost:(post) => axiosService.post(urls.posts, post)
};

export {
    postService
};
