import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {withRouter} from "./components/Common/withRouter/withRouter";
import {connect} from "react-redux";

import {AppStateType} from "./redux/redux-store";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends React.Component<AllUsersType> {

    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs'
                               element={<DialogsContainer/>}/>
                        <Route path='/profile/:userId'
                               element={<ProfileContainer/>}/>
                        <Route path='/profile/'
                               element={<ProfileContainer/>}/>
                        <Route path={'/users'}
                               element={<UsersContainer/>}/>
                        <Route path={'/login'}
                               element={<Login/>}/>
                    </Routes>
                </div>

            </div>
        )
    }
}

export type AllUsersType = mapStateToPropsType & mapDispatchToPropsType

type mapDispatchToPropsType = {
    initializedApp: () => void
}

type mapStateToPropsType = {
    initialized:boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps,{initializedApp})) (App);