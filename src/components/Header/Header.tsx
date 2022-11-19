import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from './../../assets/images/logo.png'

type HeaderPropsType = {
    isAuth:boolean
    login:string |null
    logout: () => void
}

const Header = (props: HeaderPropsType) => {

    const Logo = {
        backgroundImage: `url( ${logo})`,
    }

    return <header className={s.header}>


        <div className={s.loginBlock}>
            <div className={s.img}></div>
            {props.isAuth
                ? <div className={s.insideBlock}><span className={s.text}>{props.login}</span>
                    <button className={s.button} onClick={props.logout}>Log out</button> </div>
                : <div className={s.insideBlock}><NavLink className={s.login} to={'/login'}>Login</NavLink> </div>}
        </div>
    </header>
}

export default Header;