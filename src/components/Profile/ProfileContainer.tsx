import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "../Common/withRouter/withRouter";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        console.log('asdasdasd')
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
      // if(!this.props.isAuth) return <Redirect to={'/login'}/> убрал в <Profile/>
        return (
            <div>
                <Profile profile={this.props.profile} isAuth={this.props.isAuth} />
            </div>
        )
    }
}

export type ProfileMapStateToProps = {
    profile: ProfileType
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

let mapStateToProps = (state: AppStateType): ProfileMapStateToProps => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);