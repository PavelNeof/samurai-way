import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<AllUsersType> {


    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
                       logout={this.props.logout}
        />
    }
}

export type AllUsersType = mapStateToPropsType & mapDispatchToPropsType

type mapDispatchToPropsType = {
    //getAuthUserData: () => void
    logout: () => void
}

type mapStateToPropsType = {
    isAuth:boolean
    login:string|null
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer);