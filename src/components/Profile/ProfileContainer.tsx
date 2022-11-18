import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "../Common/withRouter/withRouter";

import {compose} from "redux";


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile(){
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

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.router.params.userId  != prevProps.router.params.userId) {
        this.refreshProfile()
        }
    }

    render() {

        return (
            <div>
                <Profile
                    isOwner={!this.props.router.params.userId}
                    status ={this.props.status}
                    updateStatus={this.props.updateStatus}
                    profile={this.props.profile}
                    savePhoto={this.props.savePhoto}/>
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
    savePhoto: (file:string) => void

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
    connect(mapStateToProps, {getUserProfile,updateStatus,getStatus,savePhoto}),
    withRouter,
   // withAuthRedirect
)(ProfileContainer)