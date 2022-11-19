import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth:boolean
    login:string |null
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div className={s.insideBlock}><span className={s.text}>{props.login}</span> <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;