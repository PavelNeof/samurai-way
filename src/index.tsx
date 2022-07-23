import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*/!*import * as serviceWorker from './serviceWorker';*!/*/
import state, {RootStateType, subscribe, updateNewPostText} from './redux/state';
import {addPost} from "./redux/state";
/*import {rerenderEntireTree} from "./render";*/


export const rerenderEntireTree = (state: RootStateType) =>{
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        , document.getElementById('root'));
}


rerenderEntireTree(state)

subscribe(()=>rerenderEntireTree(state))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
/*serviceWorker.unregister();*/
