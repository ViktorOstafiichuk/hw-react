import {Outlet} from 'react-router-dom';

import {Posts} from "../../components";
import css from './PostPage.module.css';

const PostPage = () => {
    return (
        <div className={css.postPage}>
            <div><Posts/></div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostPage};
