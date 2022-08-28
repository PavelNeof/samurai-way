import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";

/*type ProfilePropsType = {
   // ProfilePage: ProfilePageType
    /!*addPost: (/!*postMessage:string*!/)=> void
    updateNewPostText:(newText:string)=> void*!/
   // dispatch: (action: ActionTypes) => void
  //  store: StoreType
}*/

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2}`).then(
            response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}
type mapStateToProps = {
    profile: any
}

let mapStateToProps = (state:AppStateType):mapStateToProps => ({
    profile: state.profilePage.profile})

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);