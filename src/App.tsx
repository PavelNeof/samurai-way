import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import state, {ActionTypes, DialogPageType, RootStateType, StoreType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppStateType = {
    /*state:RootStateType*/
    // store: StoreType
    /*addPost: (/!*postMessage:string*!/)=> void
    updateNewPostText:(newText:string)=> void*/
    // dispatch: (action: ActionTypes) => void

}

const App = () => {
    // const state = props.store.getState()

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<DialogsContainer/>}/>
                    <Route path='/profile'
                           element={
                               <Profile/>}/>
                </Routes>
            </div>

        </div>
    )
}

export default App;