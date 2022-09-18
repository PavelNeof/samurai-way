import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {ProfileMapStateToPropsForRedirect
} from "../components/Profile/ProfileContainer";
import {AppStateType} from "../redux/redux-store";


export const withAuthRedirect = (Component:any) =>{

    let mapStateToPropsForRedirect = (state:AppStateType):ProfileMapStateToPropsForRedirect => ({
        isAuth: state.auth.isAuth
    })

    class RedirectComponent extends React.Component<any, any> {
        render () {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>
            return <Component {...this.props}/>
        }
        }

   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
    }
