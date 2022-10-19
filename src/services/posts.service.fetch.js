import {urls} from "../configs/urls";

const postsServiceFetch = {
    getAll: () => postsServiceFetch.get(urls.posts),
    getById: (id)=> postsServiceFetch.get(`${urls.posts}/${id}`)
};

export {postsServiceFetch};
