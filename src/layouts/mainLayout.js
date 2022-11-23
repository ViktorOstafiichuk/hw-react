import {NavLink, Outlet} from "react-router-dom";

import css from './mainLayout.module.css';

const MainLayout = () => {
    return (
        <div className={css.mainLayout}>
            <div className={css.header}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
            <div className={css.mainLayout}>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};
