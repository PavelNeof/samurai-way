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
        console.log(this.props)
        let userId =this.props.router.params.userId;
        if(!userId){
            userId=2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} /*{...this.props}/>*/ />
            </div>
        )
    }
}
export type ProfileMapStateToProps = {
    profile: ProfileType
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

let mapStateToProps = (state:AppStateType):ProfileMapStateToProps => ({
    profile: state.profilePage.profile})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{getUserProfile})(WithUrlDataContainerComponent);