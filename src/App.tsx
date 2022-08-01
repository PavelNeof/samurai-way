import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import state, {ActionTypes, DialogPageType, RootStateType, StoreType} from "./redux/state";


type AppStateType = {
    /*state:RootStateType*/
    store: StoreType
    /*addPost: (/!*postMessage:string*!/)=> void
    updateNewPostText:(newText:string)=> void*/
    dispatch: (action: ActionTypes) => void

}

const App = (props: AppStateType) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs'
                               element={<Dialogs dialogsPage={state.dialogsPage} store={props.store}/>}/>
                        <Route path='/profile'
                               element={
                                   <Profile ProfilePage={state.profilePage} dispatch={props.dispatch}
                                   />}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>)
}

export default App;