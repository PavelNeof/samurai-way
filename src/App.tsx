import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import {Navigate, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {withRouter} from "./components/Common/withRouter/withRouter";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import {WithSuspense} from "./hoc/withSuspense";
import {Friends} from "./components/Friends/Friends";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

class App extends React.Component<AllUsersType> {

    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/dialogs'}
                               element={WithSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId'
                               element={WithSuspense(ProfileContainer)}/>
                        <Route path='/profile/'
                               element={WithSuspense(ProfileContainer)}/>
                        <Route path='/'
                               element={<Navigate to={'/profile'}/>}/>
                        <Route path='/samurai-way/'
                               element={<Navigate to={'/profile'}/>}/>
                        <Route path='/friends'
                               element={WithSuspense(Friends)}/>
                        <Route path={'/users'}
                               element={<UsersContainer/>}/>
                        <Route path={'/login'}
                               element={<Login/>}/>
                        <Route path={'/*'}
                               element={<div>404 Not found</div>}/>
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
    initialized: boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedApp}))(App);