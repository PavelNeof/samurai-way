import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter, WithRouterType} from "../Common/withRouter/withRouter";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {

        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            if(!userId){
                this.props.router.navigate('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <div>
                <Profile
                    status ={this.props.status}
                    updateStatus={this.props.updateStatus}
                    profile={this.props.profile}/>
            </div>
        )
    }
}

export type ProfileMapStateToProps = {
    profile: ProfileType
    status:string
    autorizedUserId: number | null
    isAuth: boolean

   // updateStatus:(status:string)=>void
    //  isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number|null) => void
    updateStatus: (status: string) => void
    getStatus: (userId: number|null) => void

}

export type ProfileContainerPropsType = ProfileMapStateToProps & MapDispatchPropsType & {
    router: {
        params: {
            userId: number | null
        },
        navigate: (path: string) => void
    }
}

export type ProfileMapStateToPropsForRedirect = {
    isAuth: boolean
}

export type ProfileType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}

//вопрос с типизацией ProfileMapStateToProps
let mapStateToProps = (state: AppStateType): ProfileMapStateToProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.usersId,
    isAuth: state.auth.isAuth
})


//let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// @ts-ignore
//export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile,updateStatus,getStatus}),
    withRouter,
   // withAuthRedirect
)(ProfileContainer)