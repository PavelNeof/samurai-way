import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<AllUsersType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(
            response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
        />
    }
}

export type AllUsersType = mapStateToPropsType & mapDispatchToPropsType

type mapDispatchToPropsType = {
    setAuthUserData: (usersId: number, email: string, login: string) => void
}

type mapStateToPropsType = {
    isAuth:boolean
    login:string|null
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);